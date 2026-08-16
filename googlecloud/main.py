from fastapi import FastAPI, Query, Response
from fastapi.middleware.cors import CORSMiddleware
from sentence_transformers import SentenceTransformer
import chromadb
import pandas as pd
import os
import shutil

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ベクトルデータベースの設定
SRC_DIR = "./hanrei_vector_db"
DST_DIR = "/tmp/hanrei_vector_db"

if not os.path.exists(DST_DIR):
    shutil.copytree(SRC_DIR, DST_DIR)

client = chromadb.PersistentClient(path=DST_DIR)
collection = client.get_collection(name="hanrei")

# モデルの設定
model = SentenceTransformer("./multilingual-e5-small")


def query_unique_documents(search_query):
    """
    重複のない上位100件の判例を取得する関数
    """

    query_embedding = model.encode(
        f"query: {search_query}"
    ).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=1000
    )

    unique_documents = []
    seen_ids = set()

    for i in range(len(results["ids"][0])):
        id = results["ids"][0][i].split("_")[0]
        dist = results["distances"][0][i]

        if id not in seen_ids:
            seen_ids.add(id)

            unique_documents.append({
                "ID": int(id),
                "類似度": 1 - dist,
            })

            if len(unique_documents) == 100:
                break

    return unique_documents


@app.get("/search")
def search(text: str = Query(...)):

    # 類似度の上位100件
    results = query_unique_documents(text)

    df_result = pd.DataFrame.from_dict(results)

    # 判例元データ
    df_original_hanrei = pd.read_csv("hanrei.csv")

    # マージ
    df = df_result.merge(
        df_original_hanrei,
        on="ID"
    )

    print(df)
    print("done")

    return Response(content=df.to_json(), media_type="application/json")