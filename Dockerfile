FROM node:latest

LABEL version=0.1.0
LABEL maintainer="Robin Martijn"

ENV NAME=STIR

COPY . /app

WORKDIR /app

RUN npm install

CMD node app.js