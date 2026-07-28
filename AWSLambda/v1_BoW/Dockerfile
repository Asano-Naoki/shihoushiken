FROM public.ecr.aws/lambda/python:3.11

# requirements.txtと必要なデータをコピー
COPY requirements.txt ${LAMBDA_TASK_ROOT}
COPY hanrei_vectorizer ${LAMBDA_TASK_ROOT}
COPY hanrei_vector.mtx ${LAMBDA_TASK_ROOT}
COPY hanrei_for_similarity.csv ${LAMBDA_TASK_ROOT}

# Pythonパッケージのインストール
RUN pip install -r requirements.txt

# 関数をコピー
COPY lambda_function.py ${LAMBDA_TASK_ROOT}
COPY analyzer.py ${LAMBDA_TASK_ROOT}
COPY analyzer.py '/var/runtime/'

# エラーを回避するためにbootstrapを置換
RUN sed -i -e "s/import json/from analyzer import analyzer\nimport json/" /var/runtime/bootstrap.py

# CMDの設定
CMD [ "lambda_function.handler" ]