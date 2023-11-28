FROM public.ecr.aws/lambda/python:3.11

# Copy requirements.txt etc.
COPY requirements.txt ${LAMBDA_TASK_ROOT}
COPY vectorizer.binaryfile ${LAMBDA_TASK_ROOT}
COPY x.mtx ${LAMBDA_TASK_ROOT}
COPY hanrei.csv ${LAMBDA_TASK_ROOT}

# Install the specified packages
RUN pip install -r requirements.txt

# Copy function code
COPY lambda_function.py ${LAMBDA_TASK_ROOT}
COPY load_pickle.py ${LAMBDA_TASK_ROOT}
COPY analyzer.py ${LAMBDA_TASK_ROOT}
COPY analyzer.py '/var/runtime/'

# echo
RUN sed -i -e "s/import json/from analyzer import analyzer\nimport json/" /var/runtime/bootstrap.py

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "lambda_function.handler" ]