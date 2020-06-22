FROM node:12.0-alpine

RUN apk update  -q && \
    apk upgrade -q && \
    apk add     -q --no-cache bash git curl

WORKDIR /usr/src/app

COPY package.json bower.json .bowerrc .npmrc ./

RUN yarn install

COPY . ./

ENV PORT 8000

EXPOSE 8000

ARG COMMIT
ENV COMMIT $COMMIT

CMD [ "node", "server" ]
