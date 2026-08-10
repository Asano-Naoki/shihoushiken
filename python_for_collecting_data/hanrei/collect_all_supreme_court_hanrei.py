import re
import time
import requests
from bs4 import BeautifulSoup
import pandas as pd

# 昭和１年１月１日〜令和８年８月１日の最高裁判所判例を裁判年月日昇順で表示するURL
base_url = 'https://www.courts.go.jp/hanrei/search2/index.html?courtCaseType=1&query1=&query2=&filter%5BjudgeDateMode%5D=2&filter%5BjudgeGengoFrom%5D=%E6%98%AD%E5%92%8C&filter%5BjudgeYearFrom%5D=1&filter%5BjudgeMonthFrom%5D=1&filter%5BjudgeDayFrom%5D=1&filter%5BjudgeGengoTo%5D=%E4%BB%A4%E5%92%8C&filter%5BjudgeYearTo%5D=8&filter%5BjudgeMonthTo%5D=8&filter%5BjudgeDayTo%5D=1&filter%5BjikenGengo%5D=&filter%5BjikenYear%5D=&filter%5BjikenCode%5D=&filter%5BjikenNumber%5D=&filter%5BreportV1%5D=&filter%5BreportI1%5D=&filter%5BreportP1%5D=&filter%5BjikenName%5D=&filter%5BgenshinCourtType%5D=&filter%5BgenshinCourtSection%5D=&filter%5BgenshinCourtName%5D=&filter%5BgenshinBranchName%5D=&filter%5BgenshinJudgeGengoFrom%5D=&filter%5BgenshinJudgeYearFrom%5D=&filter%5BgenshinJudgeMonthFrom%5D=&filter%5BgenshinJudgeDayFrom%5D=&filter%5BgenshinJudgeGengoTo%5D=&filter%5BgenshinJudgeYearTo%5D=&filter%5BgenshinJudgeMonthTo%5D=&filter%5BgenshinJudgeDayTo%5D=&filter%5Breference%5D=&filter%5Bnote_1_1%5D=&filter%5Bnote_1_2%5D=&filter%5Bpoint1%5D=&filter%5Bpoint2%5D=&sort=2'

# ベースURLのHTMLパース開始
html = requests.get(base_url)
soup = BeautifulSoup(html.content, 'html.parser')

# 件数を取得
cases_count_text = soup.select_one('.paging-parts2').text
pattern = re.compile(r'(\d+)件中')
cases_count = pattern.search(cases_count_text).group(1)

# 開始件数と終了件数の設定
start_count = 29300
end_count = 29446

# 結果を格納する配列の作成
results = []
columns = ['ID', '事件番号', '事件名', '裁判年月日', '法廷名', '裁判種別', '結果', '判例集等巻・号・頁', '原審裁判所名', '原審事件番号', '原審裁判年月日', '判示事項', '裁判要旨', '参照法条']

# 開始件数から終了件数までループ
while True:
    # 開始件数が終了件数を超えたら終了
    if start_count > end_count:
        break

    # どの件数を取得しているかを表示
    print(f'{start_count}件/{end_count}件を取得しています。')

    # サーバーに負荷をかけすぎないように2秒待機
    time.sleep(2)

    # 結果一覧ページの取得
    list_html = requests.get(f'{base_url}&offset={start_count}')
    list_soup = BeautifulSoup(list_html.content, 'html.parser')

    # 詳細リンクを取得
    hanreis = list_soup.select('table.search-result-table > tbody > tr > th')

    # 個別の詳細ページをループ
    for hanrei in hanreis:
        # 詳細ページへのリンクとIDを取得
        detail_href = hanrei.select_one('a').get('href')
        id = detail_href.split('/')[2]

        # どの判例を取得するかIDを表示
        print(f'ID{id}の判例を取得しています。')
        
        # サーバーに負荷をかけすぎないように2秒待機
        time.sleep(2)

        # 個別詳細ページの取得
        detail_html = requests.get(f'https://www.courts.go.jp/hanrei/{id}/detail2/index.html')
        detail_soup = BeautifulSoup(detail_html.content, 'html.parser')

        # 1つの判例についての情報を格納する配列を作成
        result = []
        result.append(id)

        # 全文PDFを取得
        pdf = requests.get(f'https://www.courts.go.jp/assets/hanrei/hanrei-pdf-{id}.pdf')
        with open(f'hanrei_pdf/{id}.pdf', 'wb') as f:
            f.write(pdf.content)

        # 表から各種情報を取得
        for i, dd in enumerate(detail_soup.select('dd')):
            if i > 12:
                break
            result.append(dd.text.strip())
        
        # 1つの判例についての情報を追加
        results.append(result)

    start_count += 30

df = pd.DataFrame(results, columns=columns)
df.to_csv('test_hanrei.csv', index=False, mode='a')

print('done')