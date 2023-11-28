import re
import time
import requests
from bs4 import BeautifulSoup
import pandas as pd

# 昭和１年１月１日〜令和５年１１月１７日の最高裁判所判例を裁判年月日昇順で表示するURL
base_url = 'https://www.courts.go.jp/app/hanrei_jp/list2?filter%5Btext1%5D=&filter%5Btext2%5D=&filter%5Btext3%5D=&filter%5Btext4%5D=&filter%5Btext5%5D=&filter%5Btext6%5D=&filter%5Btext7%5D=&filter%5Btext8%5D=&filter%5Btext9%5D=&filter%5BjudgeDateMode%5D=2&filter%5BjudgeGengoFrom%5D=%E6%98%AD%E5%92%8C&filter%5BjudgeYearFrom%5D=1&filter%5BjudgeMonthFrom%5D=1&filter%5BjudgeDayFrom%5D=1&filter%5BjudgeGengoTo%5D=%E4%BB%A4%E5%92%8C&filter%5BjudgeYearTo%5D=5&filter%5BjudgeMonthTo%5D=11&filter%5BjudgeDayTo%5D=17&filter%5BjikenGengo%5D=&filter%5BjikenYear%5D=&filter%5BjikenCode%5D=&filter%5BjikenNumber%5D=&filter%5BreportV1%5D=&filter%5BreportI1%5D=&filter%5BreportP1%5D=&filter%5BreportI2%5D=&filter%5BreportP2%5D=&filter%5BjikenName%5D=&filter%5BgenshinCourtName%5D=&filter%5BgenshinCourtType%5D=&filter%5BgenshinBranchName%5D=&filter%5BgenshinJudgeGengoFrom%5D=&filter%5BgenshinJudgeYearFrom%5D=&filter%5BgenshinJudgeMonthFrom%5D=&filter%5BgenshinJudgeDayFrom%5D=&filter%5BgenshinJudgeGengoTo%5D=&filter%5BgenshinJudgeYearTo%5D=&filter%5BgenshinJudgeMonthTo%5D=&filter%5BgenshinJudgeDayTo%5D=&filter%5Breference%5D=&filter%5Bnote_1_1%5D=&filter%5Bnote_1_2%5D=&filter%5Bnote_1_3%5D=&filter%5Bnote_1_4%5D=&filter%5Bnote_1_5%5D=&filter%5Bnote_1_6%5D=&filter%5Bnote_1_7%5D=&filter%5Bnote_1_8%5D=&filter%5Bnote_1_9%5D=&filter%5Bpoint1%5D=&filter%5Bpoint2%5D=&filter%5Bpoint3%5D=&filter%5Bpoint4%5D=&filter%5Bpoint5%5D=&filter%5Bpoint6%5D=&filter%5Bpoint7%5D=&filter%5Bpoint8%5D=&filter%5Bpoint9%5D=&action_search=%E6%A4%9C%E7%B4%A2&sort=2'

# ベースURLのHTMLパース開始
html = requests.get(base_url)
soup = BeautifulSoup(html.content, 'html.parser')

# 件数を取得
cases_count_text = soup.select_one('.module-search-page-paging-parts2').text
pattern = re.compile(r'(\d+)件')
cases_count = pattern.search(cases_count_text).group(1)

# 開始ページと終了ページの設定
start_page = 2931
last_page = int(int(cases_count) / 10) + 1 # 検索でヒットした件数から最終ページを算出する場合
#last_page = 2930


# 結果を格納する配列の作成
results = []
columns = ['ID', '事件番号', '事件名', '裁判年月日', '法廷名', '裁判種別', '結果', '判例集等巻・号・頁', '原審裁判所名', '原審事件番号', '原審裁判年月日', '判示事項', '裁判要旨', '参照法条']

# 1ページから最終ページまでループ
for page_num in range(start_page, last_page + 1):
    # どのページを取得しているかを表示
    print(f'{page_num}/{last_page}ページを取得しています。')

    # サーバーに負荷をかけすぎないように2秒待機
    time.sleep(2)

    # 結果一覧ページの取得
    list_html = requests.get(f'{base_url}&page={page_num}')
    list_soup = BeautifulSoup(list_html.content, 'html.parser')

    # 詳細リンクを取得
    hanreis = list_soup.select('th')

    # 個別の詳細ページをループ
    for hanrei in hanreis:
        # 詳細ページへのリンクとIDを取得
        detail_href = hanrei.select_one('a').get('href')
        id = detail_href.split('=')[1]

        # どの判例を取得するかIDを表示
        print(f'ID{id}の判例を取得しています。')
        
        # サーバーに負荷をかけすぎないように2秒待機
        time.sleep(2)

        # 個別詳細ページの取得
        detail_html = requests.get(f'https://www.courts.go.jp{detail_href}')
        detail_soup = BeautifulSoup(detail_html.content, 'html.parser')

        # 1つの判例についての情報を格納する配列を作成
        result = []
        result.append(id)

        # 全文PDFを取得
        digit3 = str(id)[-3:]
        digit6 = str('000000' + str(id))[-6:]
        pdf = requests.get(f'https://www.courts.go.jp/app/files/hanrei_jp/{digit3}/{digit6}_hanrei.pdf')
        with open(f'hanrei_pdf/{id}.pdf', 'wb') as f:
            f.write(pdf.content)

        # 表から各種情報を取得
        for i, dd in enumerate(detail_soup.select('dd')):
            if i > 12:
                break
            result.append(dd.text.strip())
        
        # 1つの判例についての情報を追加
        results.append(result)




df = pd.DataFrame(results, columns=columns)
df.to_csv('test_hanrei.csv', index=False, mode='a')

print('done')