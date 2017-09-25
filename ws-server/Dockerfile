FROM ubuntu:14.04

MAINTAINER Khalid

RUN apt-get update; apt-get install -y

RUN apt-get install curl git unzip -y

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get install nodejs -y

RUN node --version

COPY package.json package.json
RUN npm install

COPY . .
EXPOSE 8080:8080

CMD ["npm","start"]