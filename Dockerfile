FROM node:14.16.1-alpine as node
FROM python:3.7.3-alpine

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

RUN apk add --update build-base git libxslt-dev linux-headers make zeromq zeromq-dev
RUN npm i -g npm@9.4.2

ENV USER tranql
ENV HOME /home/$USER

RUN addgroup -S $USER && adduser -S $USER -G $USER -s /bin/bash -h $HOME

USER $USER
WORKDIR $HOME

ENV PATH=$HOME/.local/bin:$PATH
ENV PUBLIC_URL={{web_prefix}}
ENV BACKPLANE=http://tranql-backplane.renci.org

COPY --chown=$USER . tranql/

WORKDIR $HOME/tranql/src/tranql/web
RUN npm install --legacy-peer-deps
RUN GENERATE_SOURCEMAP=false npm run build

WORKDIR $HOME/tranql
RUN pip install --user --upgrade pip
RUN pip install --user -r requirements.txt
ENV PYTHONPATH=$HOME/tranql/src/
