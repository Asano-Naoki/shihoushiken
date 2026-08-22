"""
Cloud Run 用レート制限プロキシ
------------------------------------------------
静的ページ(JS)からのリクエストをこのサービスで受け、
Firestore でIPごとのリクエスト数をカウントしてから
バックエンドのAI用Cloud Runサービスへ転送する。

環境変数:
  BACKEND_URL        : 転送先のCloud RunサービスURL (必須)
  RATE_LIMIT          : ウィンドウあたりの許容リクエスト数 (デフォルト: 10)
  WINDOW_SECONDS      : ウィンドウの長さ・秒 (デフォルト: 60)
  FIRESTORE_COLLECTION: カウンタを保存するコレクション名 (デフォルト: rate_limits)
  ALLOWED_ORIGINS     : CORSで許可するオリジン。カンマ区切り (例: https://example.com)
  BACKEND_AUDIENCE    : バックエンドがCloud Run認証必須の場合、そのURL(通常BACKEND_URLと同じ)
"""

import os
import time
import logging
import datetime

import httpx
from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from starlette.background import BackgroundTask
from google.cloud import firestore
from google.cloud.firestore_v1 import Increment

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("rate-limit-proxy")

# ---- 設定読み込み ----
BACKEND_URL = os.environ["BACKEND_URL"].rstrip("/")
RATE_LIMIT = int(os.environ.get("RATE_LIMIT", "10"))
WINDOW_SECONDS = int(os.environ.get("WINDOW_SECONDS", "60"))
COLLECTION = os.environ.get("FIRESTORE_COLLECTION", "rate_limits")
ALLOWED_ORIGINS = [
    o.strip() for o in os.environ.get("ALLOWED_ORIGINS", "*").split(",") if o.strip()
]
BACKEND_AUDIENCE = os.environ.get("BACKEND_AUDIENCE")  # 未使用なら None

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Firestoreクライアントはプロセス起動時に1回だけ生成(使い回す)
db = firestore.Client()

# バックエンドがCloud Run認証(IAM)必須の場合、IDトークンを取得するための準備
_auth_req = None
if BACKEND_AUDIENCE:
    import google.auth.transport.requests
    import google.oauth2.id_token

    _auth_req = google.auth.transport.requests.Request()


def get_backend_id_token() -> str:
    """バックエンドがprivateなCloud Runの場合、呼び出し用IDトークンを取得する"""
    import google.oauth2.id_token

    return google.oauth2.id_token.fetch_id_token(_auth_req, BACKEND_AUDIENCE)


def get_client_ip(request: Request) -> str:
    """Cloud Run経由の場合 X-Forwarded-For の先頭がクライアントの実IP"""
    xff = request.headers.get("x-forwarded-for")
    if xff:
        return xff.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def check_rate_limit(client_key: str) -> tuple[bool, int]:
    """
    Firestoreのトランザクションでアトミックにカウントを増やし、
    制限を超えていないか判定する。
    戻り値: (許可されたか, 現在のカウント)
    """
    window = int(time.time() // WINDOW_SECONDS)
    doc_id = f"{client_key}_{window}"
    doc_ref = db.collection(COLLECTION).document(doc_id)

    transaction = db.transaction()

    @firestore.transactional
    def _txn(transaction):
        snapshot = doc_ref.get(transaction=transaction)
        current = snapshot.get("count") if snapshot.exists else 0

        if current >= RATE_LIMIT:
            return False, current

        if snapshot.exists:
            transaction.update(doc_ref, {"count": Increment(1)})
        else:
            # expire_at はTTLポリシー用。ウィンドウ終了時刻+バッファで設定しておき、
            # Firestore側のTTLポリシーが自動的に古いドキュメントを削除してくれる。
            expire_at = time.time() + WINDOW_SECONDS * 2
            transaction.set(
                doc_ref,
                {
                    "count": 1,
                    "window": window,
                    "expire_at": datetime.datetime.fromtimestamp(
                        expire_at, tz=datetime.timezone.utc
                    ),
                },
            )
        return True, current + 1

    return _txn(transaction)


@app.get("/healthz")
async def healthz():
    """ヘルスチェック用。レート制限もバックエンド転送もしない"""
    return {"status": "ok"}


@app.api_route(
    "/{full_path:path}",
    methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
)
async def proxy(full_path: str, request: Request):
    if request.method == "OPTIONS":
        # CORSプリフライトはCORSMiddlewareが処理するのでここには通常来ないが念のため
        return Response(status_code=204)

    client_ip = get_client_ip(request)

    try:
        allowed, current_count = check_rate_limit(client_ip)
    except Exception:
        # Firestore障害時はフェイルオープン(=通す)にするか、フェイルクローズにするかは要件次第。
        # ここでは可用性を優先してログのみ残し、通過させる例。
        logger.exception("rate limit check failed, allowing request through")
        allowed, current_count = True, -1

    if not allowed:
        raise HTTPException(
            status_code=429,
            detail="Too Many Requests. しばらく待ってから再試行してください。",
            headers={"Retry-After": str(WINDOW_SECONDS)},
        )

    # ---- バックエンドへ転送 ----
    target_url = f"{BACKEND_URL}/{full_path}"
    body = await request.body()

    forward_headers = dict(request.headers)
    forward_headers.pop("host", None)
    forward_headers.pop("content-length", None)

    if BACKEND_AUDIENCE:
        forward_headers["Authorization"] = f"Bearer {get_backend_id_token()}"

    # クライアントはストリーミング終了までクローズしないよう、
    # BackgroundTaskでレスポンス送信完了後に閉じる。
    client = httpx.AsyncClient(timeout=None)
    req = client.build_request(
        request.method,
        target_url,
        params=request.query_params,
        content=body,
        headers=forward_headers,
    )
    backend_resp = await client.send(req, stream=True)

    response_headers = {
        k: v
        for k, v in backend_resp.headers.items()
        if k.lower() not in ("content-length", "transfer-encoding", "connection")
    }
    response_headers["X-RateLimit-Limit"] = str(RATE_LIMIT)
    if current_count >= 0:
        response_headers["X-RateLimit-Remaining"] = str(
            max(0, RATE_LIMIT - current_count)
        )

    async def close_client():
        await backend_resp.aclose()
        await client.aclose()

    return StreamingResponse(
        backend_resp.aiter_bytes(),
        status_code=backend_resp.status_code,
        headers=response_headers,
        background=BackgroundTask(close_client),
    )
