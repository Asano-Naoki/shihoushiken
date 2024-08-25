import re

def convert_kansuuji_to_arabic_number(kansuuji):
    # 結果として返すアラビア数字の文字列を初期化
    arabic_number = ''
    # 一〜九の変換表
    convert_table = str.maketrans("一二三四五六七八九", "123456789")
    # 単位の処理
    unit_under_thousand = {"十": 1, "百": 2, "千": 3}
    unit_over_thousand = {"万": 4, "億": 8, "兆": 12, "京": 16}
    # 基準となる単位の初期化
    base_unit = 0
    # 一の位から処理していくために逆順にする
    reversed_kansuuji = list(reversed(kansuuji))
    for i, character in enumerate(reversed_kansuuji):
        # 十、百、千の場合
        if character in unit_under_thousand.keys():
            # unit_under_thousandの値に基準となる単位を加えた桁数でゼロパディング
            arabic_number = arabic_number.zfill(unit_under_thousand[character] + base_unit)
            # ループの最後（先頭の文字）か、次のループ（一つ前の文字）が単位を表す文字ならば、1を前に付け加える
            if i == len(reversed_kansuuji) - 1 or reversed_kansuuji[i+1] in unit_under_thousand or reversed_kansuuji[i+1] in unit_over_thousand:
                arabic_number = '1' + arabic_number
        # 万、億、兆、京の場合
        elif character in unit_over_thousand.keys():
            # unit_over_thousandの値の桁数でゼロパディング
            arabic_number = arabic_number.zfill(unit_over_thousand[character])
            # 基準となる単位を更新
            base_unit = unit_over_thousand[character] 
        # 一〜九の場合
        else:
            # 一〜九の変換表を用いて変換した数字を前に付け加える
            arabic_number = character.translate(convert_table) + arabic_number

    return arabic_number


# 第○○条の部分にマッチさせ、○○という漢数字をキャプチャ
pattern = re.compile(r'<span style="font-weight: bold;">第(.*)条</span>')

with open('./140AC0000000045_20230713_505AC0000000066.html') as reader:
    output_line_list = []
    for i, line in enumerate(reader):
        output_line_list.append(line)
        result = pattern.search(line)
        # 第○○条の部分にマッチした場合
        if result:
            # ○○という漢数字をアラビア数字に変換
            arabic_joubun_number = convert_kansuuji_to_arabic_number(result.group(1))
            output_line_list[i-1] = output_line_list[i-1].replace('id=""', f'id="Mp-At_{arabic_joubun_number}"')


# 書き出し
with open('kei.html', 'w') as writer:
    for output_line in output_line_list:
        writer.write(output_line)

print('done')
