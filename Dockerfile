FROM python:3.7.3-alpine
WORKDIR /
RUN apk add git build-base linux-headers zeromq zeromq-dev libxslt-dev nodejs npm git
RUN pip install --upgrade pip
COPY . tranql
RUN pip install -r tranql/tranql/requirements.txt
WORKDIR /tranql/whl
RUN pip install *.whl
WORKDIR /tranql/web
RUN npm install

# This lets us build index.html as a jinja template so static file references
# such as css and js can be served properly when tranql is served behind proxy
ENV PUBLIC_URL={{web_prefix}}
RUN npm run build

RUN ln -s /tranql/web/build/static/ /tranql/tranql/static

WORKDIR /
ENV PYTHONPATH /tranql
ENV WORKERS=2
ENV APP_MODULE=tranql.backplane.server:app
ENV APP_NAME=backplane
ENV PORT=8099
ENTRYPOINT /usr/local/bin/gunicorn --workers=$WORKERS --bind=0.0.0.0:$PORT --name=$APP_NAME --timeout=600 --log-level=debug $APP_MODULE

