FROM public.ecr.aws/lambda/python:3.12

# requirements.txtと判例データ一覧をコピー
COPY requirements.txt ${LAMBDA_TASK_ROOT}
COPY hanrei.csv ${LAMBDA_TASK_ROOT}

# Pythonパッケージのインストール
RUN pip install -r requirements.txt --extra-index-url https://download.pytorch.org/whl/cpu

# Hugging Faceからモデルをダウンロード
RUN hf download intfloat/multilingual-e5-small --revision fd1525a9fd15316a2d503bf26ab031a61d056e98 --local-dir ${LAMBDA_TASK_ROOT}/multilingual-e5-small

# S3から自作判例ベクトルデータベースをコピー
RUN curl -fL -o ${LAMBDA_TASK_ROOT}/hanrei_vector_db.zip https://hanrei-embedding-vector-db.s3.ap-northeast-1.amazonaws.com/20260811hanrei_vector_db.zip && python3 -c "import zipfile; zipfile.ZipFile('$LAMBDA_TASK_ROOT/hanrei_vector_db.zip').extractall('$LAMBDA_TASK_ROOT')" && rm ${LAMBDA_TASK_ROOT}/hanrei_vector_db.zip

# 関数をコピー
COPY lambda_function.py ${LAMBDA_TASK_ROOT}

# CMDの設定
CMD [ "lambda_function.handler" ]