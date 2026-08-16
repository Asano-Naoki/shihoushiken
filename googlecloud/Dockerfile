FROM python:3.12-slim

WORKDIR /app

# curlとビルドに必要なもの
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*

# requirements.txtと判例データ一覧をコピー
COPY requirements.txt .
COPY hanrei.csv .

# Pythonパッケージのインストール
RUN pip install --no-cache-dir \
    -r requirements.txt \
    --extra-index-url https://download.pytorch.org/whl/cpu

# Hugging Faceからモデルをダウンロード
RUN hf download \
    intfloat/multilingual-e5-small \
    --revision fd1525a9fd15316a2d503bf26ab031a61d056e98 \
    --local-dir /app/multilingual-e5-small

# S3から自作判例ベクトルデータベースをコピー
RUN curl -fL \
    -o /tmp/hanrei_vector_db.zip \
    https://hanrei-embedding-vector-db.s3.ap-northeast-1.amazonaws.com/20260811hanrei_vector_db.zip \
    && python3 -c "import zipfile; zipfile.ZipFile('/tmp/hanrei_vector_db.zip').extractall('/app')" \
    && rm /tmp/hanrei_vector_db.zip

# アプリケーション
COPY main.py .

# Cloud RunのPORTを使用
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8080}"]