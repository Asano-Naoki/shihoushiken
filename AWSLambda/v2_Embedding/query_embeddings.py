from sentence_transformers import SentenceTransformer
import chromadb
import pandas as pd

def query_unique_documents(search_query):
    """
    重複のない上位100件の判例を取得する関数
    """

    # モデルの設定とクエリのベクトル化
    model = SentenceTransformer("./multilingual-e5-small")
    query_embedding = model.encode(f"query: {search_query}").tolist()

    # Chroma DBに接続
    client = chromadb.PersistentClient(path="./hanrei_vector_db")
    collection = client.get_collection(name="hanrei")
    
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
        chunk_text = results['documents'][0][i]
        dist = results['distances'][0][i]
        
        # まだ登場していないファイル名であれば採用
        if id not in seen_ids:
            seen_ids.add(id)
            unique_documents.append({
                "ID": int(id),
                "BEST_CHUNK": chunk_text,
                "DISTANCE": dist,
            })
            
            # 目的の判例数に達したら終了
            if len(unique_documents) == 100:
                print(f'{i}個目のデータで目的の判例数に達しました。')
                break
                
    return unique_documents



# 検索テスト
search_query = "被保佐人になると警備員になれないのですか？"

results = query_unique_documents(search_query)

for res in results[:5]:
    print(f"📄 判例ID: {res['ID']}")
    print(f"   スコア: {1 - res['DISTANCE']}")
    print(f"   最もマッチした部分: {res['BEST_CHUNK']}...\n")
