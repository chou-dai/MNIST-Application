FROM public.ecr.aws/lambda/python:3.9

COPY requirements.txt ./
RUN python3.9 -m pip install -r requirements.txt -t .

COPY app.py ./
# TODO: 以下削除
COPY image.jpeg ./
COPY model /opt/ml/model

CMD ["app.lambda_handler"]
