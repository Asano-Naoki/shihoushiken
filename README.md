# 司法試験過去問題集

司法試験の過去問題を集めています。現在、2006年から2023年の短答の過去問題を収録しております。

## デモページ

https://asano-naoki.github.io/shihoushiken/

## 特徴
- 司法試験の過去問題を機械的に取得し、科目別・年度別で過去問演習ができるようにしました。
- 上記のデモページを利用しているユーザーのデータは取得していません。従いまして、回答記録などの機能はございません。
- [tantou.csv](./src/data/tantou.csv)で短答の問題と解答をCSVファイルで表形式にまとめておりますので、ご自由に活用してください。
- https://asano-naoki.github.io/shihoushiken/search から過去問題を横断的に検索することもできます。
- https://asano-naoki.github.io/shihoushiken/random からランダム問題演習ができます。
- 簡単な解説も載せることができればと思っておりますが、いつできるかわかりません。

## 不具合等の報告

できればGitHubのIssueを使ってください。画面上部のIssuesというところをクリックすると、Issueの一覧が表示されます。

[不具合報告 #1 ](https://github.com/Asano-Naoki/shihoushiken/issues/1)のIssueは作ってありますので、そちらでお願いします。

Issueに書き込むためには、GitHubにログインする必要があります。GitHubにログインできない／したくないという方は、[お問い合わせ – 浅野直樹の学習日記](https://asanonaoki.com/blog/%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b/)からご連絡ください。

## 技術的な説明

### PDFファイルから問題と解答の取得

Pythonを使って自動化できる部分は自動化しました。

1. 法務省のサイトで公開されている短答式試験の試験問題PDFファイルをダウンロードし、kei2023q.pdfなど適当なファイル名にして、python_for_extracting_pdfディレクトリ内に入れます。
1. question_pdf.py内で1で付けたファイル名を設定し、question_pdf.pyを実行します。
1. 法務省のサイトで公開されている短答式試験の正答及び配点PDFファイルをダウンロードし、kei2023a.pdfなど適当なファイル名にして、python_for_extracting_pdfディレクトリ内に入れます。
1. answer_pdf.py内で3で付けたファイル名を設定し、answer_pdf.pyを実行します。
1. 4によりkei2023a.csvといった名前のCSVファイルが出力されるので（例：[kei2023a_before.csv](./python_for_extracting_pdf/kei2023a_before.csv)）、そのファイルを開き、目視による手作業で、左から問・No・解答の順に数字が入るように調整し、上書き保存します（例：[kei2023a_after.csv](./python_for_extracting_pdf/kei2023a_after.csv)）。複数解答の問の部分は空白になります。
1. transform_answer.py内で5で調整して保存したファイル名を設定し、transform_answer.pyを実行します。
1. 2で出力されたkei2023q.csvといった名前のファイルに問題が、6で出力されたkei2023a_output.csvといった名前のファイルに解答があるので、それぞれコピーして貼り付けて[tantou.csv](./src/data/tantou.csv)のようにまとめました。

上記の手順ではカッコや句読点などがうまく取得できないことがたびたびあったので、目で見て手作業で修正しました。

詳細につきましては、[python_for_extracting_pdf](./python_for_extracting_pdf/)ディレクトリ内の各ファイルをご覧ください。

### デプロイと技術選定

手間と費用を最小にするために、GitHub Pagesでデプロイしています。

https://asano-naoki.github.io/shihoushiken/

そのため、サービス本体では、PHPやPythonなどのサーバーサイド言語を使うことができず、JavaScriptだけで実装しています（上述のように、PDFファイルから問題と解答を取得するためには、Pythonを使っています）。

JavaScriptの中では、Vue.js（Vue 3）をフレームワークとして使っています。vue-routerでSPAにして、vuetifyでUIを整えています。

詳細につきましては、本リポジトリ内のファイルをご参照ください。

## 作者

浅野直樹（Asano Naoki）

[浅野直樹の学習日記](https://asanonaoki.com/blog/)

## License

[MIT License](./LICENSE)

作者は、本リポジトリに起因するいかなる責任も負いません。

（司法試験委員会に電話で問い合わせて、過去問題は自由に使ってよいという返答を得ました）

