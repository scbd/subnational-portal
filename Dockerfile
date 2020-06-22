FROM node:6.9

WORKDIR /usr/src/app

COPY package.json bower.json .bowerrc .npmrc ./

RUN apk add git curl yarn && \
    yarn install -q

COPY . ./

ENV PORT 8000

EXPOSE 8000

ARG COMMIT
ENV COMMIT $COMMIT

CMD [ "node", "server" ]
