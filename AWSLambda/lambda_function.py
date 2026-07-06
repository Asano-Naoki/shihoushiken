import pickle
import pandas as pd
from scipy.io import mmread
from sklearn.metrics.pairwise import cosine_similarity
from analyzer import analyzer # この行がないとpickle.loadでエラーになるので注意

# Lambda本体
def handler(event, context):
    # 対象テキスト
    new_text = str(event['queryStringParameters']['text'])

    # 学習済みのvectorizerとデータをファイルから読み込み
    with open("hanrei_vectorizer", "rb") as f:
        vectorizer = pickle.load(f)
    hanrei_vector = mmread("hanrei_vector.mtx")

    # 対象テキストのベクトル化
    new_text_vector = vectorizer.transform([new_text])

    # コサイン類似度の算出
    cs_array = cosine_similarity(new_text_vector, hanrei_vector)

    # コサイン類似度の結果とそのインデックス（行番号）をそれぞれシリーズ化
    series_result = pd.Series(cs_array[0])
    series_rownumber = pd.Series(range(0, len(cs_array[0])))

    # 上記のシリーズを連結してデータフレームにして、類似度の上位100件を取得
    df_result = pd.concat([series_rownumber, series_result], axis=1)
    df_result.rename(columns={0: '行番号', 1: '類似度'}, inplace=True)
    df_top100 = df_result.sort_values(by='類似度', ascending=False).head(100)

    # 判例元データの読み込み
    df_original_hanrei = pd.read_csv('hanrei_for_similarity.csv')

    # 類似度の上位10件と判例元データをマージ
    df = df_top100.merge(df_original_hanrei, on='行番号')
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

