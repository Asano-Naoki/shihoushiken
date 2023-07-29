import csv

# ファイル名（科目と年度）の設定
FILENAME = "kou2006a"

# 解答を記録したファイルの読み込み
answerFile = open(f"{FILENAME}.csv")
answerReader = csv.reader(answerFile)

# 結果を格納する変数の作成
result = []

# ループで解答を整形して結果を格納
for row in answerReader:
    if row[0].isdigit(): # 問題番号がある場合
        result.append([row[0], row[2]])
    else: # 問題番号がない場合（複数解答の途中の場合）
        result[-1][1] = result[-1][1] + row[2]

# 出力ファイル
with open(f"{FILENAME}_output.csv", 'w', newline='') as outputFile:
    outputWriter = csv.writer(outputFile)
    # 出力ファイルへ結果の書き込み
    for r in result:
        outputWriter.writerow(r)
