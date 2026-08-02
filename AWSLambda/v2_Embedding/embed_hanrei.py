import os
import re
import chromadb
from pdfminer.high_level import extract_text
from sentence_transformers import SentenceTransformer
from langchain_text_splitters import RecursiveCharacterTextSplitter

# 定数の設定
pdf_dir = '../../python_for_collecting_data/hanrei/hanrei_pdf'
MAX_FILES = 1000

# 埋め込みモデルの設定
model = SentenceTransformer('intfloat/multilingual-e5-small')

# チャンク化の設定
splitter = RecursiveCharacterTextSplitter(
    separators=["。", "、", "，"],
    chunk_size=400,
    chunk_overlap=100,
)

# Chroma DBに接続して既存のチャンクデータを取得（一度に取得する件数が多くなるとエラーになるので分割取得）
client = chromadb.PersistentClient(path="./hanrei_vector_db")
collection = client.get_or_create_collection(name="hanrei")
limit = 2000
offset = 0
existing_chunk_ids = []
while True:
    res = collection.get(limit=limit, offset=offset)['ids']
    if not res:
        break       
    print(f"Chroma DBの {offset} 件目から {offset + len(res)} 件目までを取得しました")
    existing_chunk_ids.extend(res)
    offset += limit

# 取得したチャンクデータから判例idを取り出す
existing_hanrei_ids = set([s.split("_")[0] for s in existing_chunk_ids])
print(f"現在Chroma DBに登録済みのファイル数は {len(existing_hanrei_ids)} 個です。")

counter = 0
for file_name in os.listdir(pdf_dir):
    # ファイル名からidを取り出す
    m = re.match(r"(\d+).pdf", file_name)
    hanrei_id = m.group(1)

    # すでにDBに登録済みならスキップ
    if hanrei_id in existing_hanrei_ids:
        print(f'{file_name}は登録済みなのでスキップします。')
        continue

    # 上限ファイルに達したら終了
    if counter >= MAX_FILES:
        print("ファイル数の上限に達したため終了します。")
        break
        
    # PDFファイルからテキストを取得して整形
    print(f'{file_name}の処理を開始します。')
    file_path = os.path.join(pdf_dir, file_name)
    s = extract_text(file_path)
    s = re.sub(r'-(\s*)(\d+)(\s*)-', '', s)
    s = re.sub(r'\s', '', s)
    s = re.sub(r'\n', '', s)
    raw_text = s

    # テキストをチャンク化
    chunks = splitter.split_text(raw_text)

    # e5モデルの指示に沿って "passage: " を先頭に付与
    formatted_chunks = [f"passage: {c}" for c in chunks]

    # 1ファイル分の全チャンクを一括でベクトル化
    embeddings = model.encode(formatted_chunks, batch_size=64, show_progress_bar=False)

    # ChromaDBに登録するためのデータ準備
    chunk_ids = [f"{hanrei_id}_{i}" for i in range(len(chunks))]

    # データベースに保存（この時点でローカルストレージに随時書き込まれます）
    collection.add(
        ids=chunk_ids,
        embeddings=embeddings.tolist(),
        documents=chunks,
    )

    counter += 1

print(f"新たに {counter} 個のファイルをDBに追加しました。")
