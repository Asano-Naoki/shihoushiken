from sentence_transformers import SentenceTransformer
import chromadb
import pandas as pd
import os
import shutil

# ベクトルデータベースの設定（どうしても書き込みが発生するので/tmpにコピーしてから使う）
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

    # クエリのベクトル化
    query_embedding = model.encode(f"query: {search_query}").tolist()
    
    # 欲しい件数より多めに候補を取得する
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=1000
    )

    # 必要な変数の初期化
    unique_documents = []
    seen_ids = set()
    
    # 取得した結果を上から順に確認
    for i in range(len(results['ids'][0])):
        id = results['ids'][0][i].split("_")[0]
        dist = results['distances'][0][i]
        
        # まだ登場していないファイル名であれば採用
        if id not in seen_ids:
            seen_ids.add(id)
            unique_documents.append({
                "ID": int(id),
                "類似度": 1 - dist,
            })
            
            # 目的の判例数に達したら終了
            if len(unique_documents) == 100:
                break
                
    return unique_documents

# Lambda本体
def handler(event, context):
    # 対象テキスト
    search_query = str(event['queryStringParameters']['text'])

    # 類似度の上位100件を取得
    results = query_unique_documents(search_query)
    df_result = pd.DataFrame.from_dict(results)

    # 判例元データの読み込み
    df_original_hanrei = pd.read_csv('hanrei.csv')

    # 類似度の上位10件と判例元データをマージ
    df = df_result.merge(df_original_hanrei, on='ID')
    print(df)
    print('done')

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': "'Content-Type': 'application/json'",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': df.to_json(),
    }

