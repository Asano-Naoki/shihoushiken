# 自由な文章から判例を検索できるようにするためのデータ作成プログラム（実行に時間がかかるので注意）

import glob
import re
import pandas as pd
import MeCab
import pickle
from pdfminer.high_level import extract_text
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.io import mmwrite


# 変数の初期化と設定
directory = '../python_for_collecting_data/hanrei/hanrei_pdf'
ids = []
contents = []
df = pd.DataFrame(columns=["filepath", "content"])

# PDFディレクトリ内のすべてのファイルを取得
files = sorted(glob.glob(directory + '/*'))

# PDFファイルごとにテキストを整形してidと内容をリスト変数に追加
for file_path in files:
    s = extract_text(file_path)
    s = re.sub('-(.*?)', '', s)
    s = s.replace( '\n' , '' )
    s = s.replace( '　' , '' )
    s = s.replace( ' ' , '' )
    ids.append(file_path)
    contents.append(s)

# 取得したPDFのファイルパスと中身をデータフレームに
df['filepath'] = ids
df['content'] = contents

# ストップワードの設定
stop_words_str = "。 は 、 の （ ） に で を た し が と て ある れ さ する いる から も ・ として 「 」 い こと – な なっ や れる など ため この まで また あっ ない あり なる その られ 後 『 』 へ 日本 という よう ( 現在 もの より だ おり 的 中 により ) 2 による 第 なり によって 1 これ その後 ず , か 時 なく られる だっ において 者 なかっ 行わ 多く しかし 3 せ 他 名 出身 それ について 間 当時 上 ば 存在 受け . 呼ば 同 なお できる 目 行っ 内 う 数 のみ 前 以下 き ： 元 化 4 等 および 使用 でき 同年 主 場合 際 一 約 における さらに 一部 所属 人 以降 ら 活動 5 中心 作品 いう 知ら 同じ 初 だけ 多い 時代 以上 生まれ 発表 2010年 にて 見 務め 持つ とともに 大 参加 頃 位置 2007年 2009年 2008年 開始 うち 行う ほか 特に 全 ながら 当初 発売 せる 2011年 家 かつて 下 卒業 一つ 2006年 6 でも 年 2012年 形 用い に対して 最初 / 本 考え なら 以外 関係 一方 それぞれ 各 同様 4月 経 2013年 と共に 2005年 そして 3月 地域 必要 これら 及び 一般 用 2014年 結果 可能 現 開催 事 ものの 利用 にかけて 部 影響 設立 記録 得 アメリカ 通り とも 彼 2015年 自身 登場 始め または 担当 変更 意 味 たり 側 とき 開発 設置 代表 ほど ので 構成 ただし 二 2004年 郡 初めて たち 部分 2016年 最も 放送 7 旧 地 最後 アメリカ合衆国 10月 世界 研究 大学 8 系 大きな 活躍 獲得 続け 以前 全て 問題 性 与え 9月 父 含む といった ほとんど 7月 ところ 2017年 2003年 向け 持っ 2000年 加え 使わ 型 6月 に関する 出場 12月 目的 高い 名称 に対する 1月 万 実際 5月 -1 名前 様々 再び 10"
stop_words = stop_words_str.split()

# 単語に分割してストップワードをフィルタリングする関数の作成
def analyzer(text):
    tagger = MeCab.Tagger("-Owakati")
    wakati = tagger.parse(text)
    filtered_wakati = filter(lambda x: x not in stop_words, wakati.split())
    return filtered_wakati

# テキストのベクトル化
documents = df["content"]
vectorizer = TfidfVectorizer(analyzer=analyzer)
X = vectorizer.fit_transform(documents)

# 学習済みのvectorizerとデータをファイルに保存
with open('hanrei_vectorizer', 'wb') as f:
    pickle.dump(vectorizer, f)
mmwrite('hanrei_vector.mtx', X)

# 行番号と判例データを対応させたCSVファイルを出力
df_original = pd.read_csv('../python_for_collecting_data/hanrei/test_hanrei.csv')
df = df.reset_index(names="行番号")
df["ID"] = (df["filepath"].str.extract(r"(\d+)\.pdf$")[0].astype("Int64"))
df_hanrei_for_similarity = pd.merge(df, df_original, on='ID')
df_hanrei_for_similarity = df_hanrei_for_similarity.drop(columns=["filepath", "content"])
df_hanrei_for_similarity.to_csv("hanrei_for_similarity.csv", index=False)

