import tabula

# ファイル名（科目と年度）の設定
FILENAME = "kei2022a"

# lattice=Trueでテーブルの軸線でセルを判定
dfs = tabula.read_pdf(f"{FILENAME}.pdf", lattice=True, pages = '1')

for df in dfs:
   df.replace("\r", '', regex=True).to_csv(f"{FILENAME}.csv", index=None)