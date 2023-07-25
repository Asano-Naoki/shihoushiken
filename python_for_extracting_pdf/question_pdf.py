from pdfminer.high_level import extract_text
import re
import csv

# ファイル名（科目と年度）の設定
FILENAME = "kou2010q"

# PDFファイルからテキストの抽出
s = extract_text(f"{FILENAME}.pdf")

# まず改行をすべて削除
s = s.replace( '\n' , '' )

# 不要な開始部分を削除
s = s.replace('短答式試験問題集［刑法］- 1 -［刑法］', '')
s = s.replace('短答式試験問題集［民法］', '')
s = s.replace('短答式試験問題集［憲法］', '')

# 改行が必要な部分に改行の追加
s = s.replace('ア．', '\nア．')
s = s.replace('イ．', '\nイ．')
s = s.replace('ウ．', '\nウ．')
s = s.replace('エ．', '\nエ．')
s = s.replace('オ．', '\nオ．')
s = s.replace('カ．', '\nカ．')
s = s.replace('キ．', '\nキ．')
s = s.replace('ク．', '\nク．')
s = s.replace('ケ．', '\nケ．')
s = s.replace('コ．', '\nコ．')
s = s.replace('ア.', '\nア.')
s = s.replace('イ.', '\nイ.')
s = s.replace('ウ.', '\nウ.')
s = s.replace('エ.', '\nエ.')
s = s.replace('オ.', '\nオ.')
s = s.replace('カ.', '\nカ.')
s = s.replace('キ.', '\nキ.')
s = s.replace('ク.', '\nク.')
s = s.replace('ケ.', '\nケ.')
s = s.replace('コ.', '\nコ.')
s = s.replace('学生Ａ', '\n学生Ａ')
s = s.replace('学生Ｂ', '\n学生Ｂ')
s = s.replace('学生Ｃ', '\n学生Ｃ')
s = s.replace('教授Ｘ', '\n教授Ｘ')
s = s.replace('学生Ｙ', '\n学生Ｙ')
s = s.replace('【事 例】', '\n【事 例】')
s = s.replace('【会 話】', '\n【会 話】')
s = s.replace('【見 解】', '\n【見 解】')
s = s.replace('【記 述】', '\n【記 述】')
s = s.replace('【事例群】', '\n【事例群】')
s = s.replace('【語句群】', '\n【語句群】')
s = s.replace('Ⅰ．', '\nⅠ．')
s = s.replace('Ⅱ．', '\nⅡ．')
s = s.replace('Ⅲ．', '\nⅢ．')
s = s.replace('Ⅳ．', '\nⅣ．')
s = s.replace('Ａ．', '\nＡ．')
s = s.replace('Ｂ．', '\nＢ．')
s = s.replace('Ｃ．', '\nＣ．')
s = s.replace('Ｄ．', '\nＤ．')
s = s.replace('ｂ．', '\nｂ．')

# あとで選択肢を分割できるように一時的に@を付加
s = s.replace('１．', '@１．')
s = s.replace('２．', '@２．')
s = s.replace('３．', '@３．')
s = s.replace('４．', '@４．')
s = s.replace('５．', '@５．')
s = s.replace('６．', '@６．')
s = s.replace('７．', '@７．')
s = s.replace('８．', '@８．')
s = s.replace('１.', '@１.')
s = s.replace('２.', '@２.')
s = s.replace('３.', '@３.')
s = s.replace('４.', '@４.')
s = s.replace('５.', '@５.')
s = s.replace('６.', '@６.')
s = s.replace('７.', '@７.')
s = s.replace('８.', '@８.')

# あとで問題ごとに分割できるように一時的に#を付加
s = s.replace('〔第', '#〔第')

# ページ数表示を削除
s = re.sub('-(.*?)#', '#', s)

# 問題ごとに分割
questions = s.split('#')

# 結果を格納する配列の作成
result = []

# 問題ごとの調整
for question in questions:
    # 選択肢を分割
    row_list = question.split('@')
    # 不要な部分を削除
    row_list[0] = re.sub('（解答欄は(.|\s)*?）', '', row_list[0])
    row_list[0] = re.sub('〔第(.*?)）', '', row_list[0])
    row_list[0] = re.sub('［No(.*?)］', '', row_list[0])
    row_list[0] = re.sub('［№(.*?)］', '', row_list[0])
    row_list[0] = re.sub('\[No(.*?)\]', '', row_list[0])
    row_list[0] = re.sub('\[№(.*?)\]', '', row_list[0])
    # 問題と選択肢の行を結果に追加
    result.append(row_list)

# CSVファイルへの結果の書き込み
with open(f'./{FILENAME}.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerows(result)