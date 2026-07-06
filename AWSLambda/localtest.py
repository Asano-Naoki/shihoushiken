import pickle
import pandas as pd
from scipy.io import mmread
from sklearn.metrics.pairwise import cosine_similarity
from analyzer import analyzer # この行がないとpickle.loadでエラーになるので注意

# 学習済みのvectorizerとデータをファイルから読み込み
with open("hanrei_vectorizer", "rb") as f:
    vectorizer = pickle.load(f)
data = mmread("hanrei_vector.mtx")

# 対象テキスト
new_text = '''
憲法第２８条の労働基本権の保障は公務員に対しても及ぶが、国家公務員の従事する職務には公共性がある一方、法律によりその主要な勤務条件が定められ、身分が保障されているほか、適切な代償措置が講じられていることなどからすれば、法律により国家公務員の争議行為を禁止することは、勤労者をも含めた国民全体の共同利益の見地からするとやむを得ない制約というべきであって、憲法第２８条に違反しない。
'''

# 対象テキストのベクトル化
new_text_vector = vectorizer.transform([new_text])

# コサイン類似度の算出
cs_array = cosine_similarity(new_text_vector, data)

# コサイン類似度の結果とそのインデックス（行番号）をそれぞれシリーズ化
series_result = pd.Series(cs_array[0])
series_rownumber = pd.Series(range(0, len(cs_array[0])))

# 上記のシリーズを連結してデータフレームにして、類似度の上位10件を取得
df_result = pd.concat([series_rownumber, series_result], axis=1)
df_result.rename(columns={0: '行番号', 1: '類似度'}, inplace=True)
df10 = df_result.sort_values(by='類似度', ascending=False).head(10)

# 判例元データの読み込み
df = pd.read_csv('hanrei_for_similarity.csv')

# 類似度の上位10件と判例元データをマージ
df2 = df10.merge(df, on='行番号')
print(df2)

print('done')