import re
import MeCab
import numpy as np
import pandas as pd
from scipy.io import mmread
from sklearn.metrics.pairwise import cosine_similarity

import load_pickle
from analyzer import analyzer

# 単語に分割してストップワードをフィルタリングする関数の作成
# def analyzer(text):
#     stop_words_str = "。 は 、 の （ ） に で を た し が と て ある れ さ する いる から も ・ として 「 」 い こと – な なっ や れる など ため この まで また あっ ない あり なる その られ 後 『 』 へ 日本 という よう ( 現在 もの より だ おり 的 中 により ) 2 による 第 なり によって 1 これ その後 ず , か 時 なく られる だっ において 者 なかっ 行わ 多く しかし 3 せ 他 名 出身 それ について 間 当時 上 ば 存在 受け . 呼ば 同 なお できる 目 行っ 内 う 数 のみ 前 以下 き ： 元 化 4 等 および 使用 でき 同年 主 場合 際 一 約 における さらに 一部 所属 人 以降 ら 活動 5 中心 作品 いう 知ら 同じ 初 だけ 多い 時代 以上 生まれ 発表 2010年 にて 見 務め 持つ とともに 大 参加 頃 位置 2007年 2009年 2008年 開始 うち 行う ほか 特に 全 ながら 当初 発売 せる 2011年 家 かつて 下 卒業 一つ 2006年 6 でも 年 2012年 形 用い に対して 最初 / 本 考え なら 以外 関係 一方 それぞれ 各 同様 4月 経 2013年 と共に 2005年 そして 3月 地域 必要 これら 及び 一般 用 2014年 結果 可能 現 開催 事 ものの 利用 にかけて 部 影響 設立 記録 得 アメリカ 通り とも 彼 2015年 自身 登場 始め または 担当 変更 意 味 たり 側 とき 開発 設置 代表 ほど ので 構成 ただし 二 2004年 郡 初めて たち 部分 2016年 最も 放送 7 旧 地 最後 アメリカ合衆国 10月 世界 研究 大学 8 系 大きな 活躍 獲得 続け 以前 全て 問題 性 与え 9月 父 含む といった ほとんど 7月 ところ 2017年 2003年 向け 持っ 2000年 加え 使わ 型 6月 に関する 出場 12月 目的 高い 名称 に対する 1月 万 実際 5月 -1 名前 様々 再び 10"
#     stop_words = stop_words_str.split()
#     tagger = MeCab.Tagger("-Owakati")
#     wakati = tagger.parse(text)
#     filtered_wakati = filter(lambda x: x not in stop_words, wakati.split())
#     return filtered_wakati

# 読み込み
vectorizer = load_pickle.load()
data = mmread("x.mtx")

# 対象テキスト
new_text = '''
憲法第２８条の労働基本権の保障は公務員に対しても及ぶが、国家公務員の従事する職務には公共性がある一方、法律によりその主要な勤務条件が定められ、身分が保障されているほか、適切な代償措置が講じられていることなどからすれば、法律により国家公務員の争議行為を禁止することは、勤労者をも含めた国民全体の共同利益の見地からするとやむを得ない制約というべきであって、憲法第２８条に違反しない。


'''

# 対象テキストのベクトル化
new_text_vector = vectorizer.transform([new_text])

# コサイン類似度の算出
cs_array = cosine_similarity(new_text_vector, data)

# コサイン類似度の結果とそのインデックス（列番号）をそれぞれシリーズ化
series_result = pd.Series(cs_array[0])
series_rownumber = pd.Series(range(0, len(cs_array[0])))

# 上記のシリーズを連結してデータフレームにして、類似度の上位10件を取得
df_result = pd.concat([series_rownumber, series_result], axis=1)
df_result.rename(columns={0: '行番号', 1: '類似度'}, inplace=True)
df10 = df_result.sort_values(by='類似度', ascending=False).head(10)

# 判例元データの読み込み
df = pd.read_csv('hanrei.csv')

# 類似度の上位10件と判例元データをマージ
df2 = df10.merge(df, on='行番号')
print(df2)


print(df2.to_json())




print('done')