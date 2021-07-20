FROM python:3.7.3-alpine

RUN apk add build-base git libxslt-dev linux-headers make nodejs npm zeromq zeromq-dev

ENV USER tranql
ENV HOME /home/$USER

RUN addgroup -S $USER && adduser -S $USER -G $USER -s /bin/bash -h $HOME

USER $USER
WORKDIR $HOME

ENV PATH=$HOME/.local/bin:$PATH

COPY --chown=$USER . tranql/

RUN pip install --user --upgrade pip
RUN pip install --user -r tranql/requirements.txt

WORKDIR $HOME/tranql
COPY --chown=$USER . tranql
RUN pip install --user .
#
#WORKDIR $HOME/tranql/web
#RUN npm install
#ENV PUBLIC_URL={{web_prefix}}
#RUN node --max-old-space-size=4000 ./node_modules/react-scripts/scripts/build.js
#RUN ln -s $HOME/tranql/web/build/static/ $HOME/tranql/src/tranql/static
#
#WORKDIR $HOME/tranql
#
#ENV BACKPLANE=http://tranql-backplane.renci.org
