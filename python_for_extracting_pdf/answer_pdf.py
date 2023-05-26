#標準的なモジュールのインポート
from io import StringIO
import re
import csv

import pandas as pd
import tabula

# lattice=Trueでテーブルの軸線でセルを判定
dfs = tabula.read_pdf("kei2021ans.pdf", lattice=True, pages = '1')

for df in dfs:
   # display(df.replace("\r", '', regex=True))
   df.replace("\r", '', regex=True).to_csv("kei2021ans.csv", index=None)