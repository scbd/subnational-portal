FROM node:26-alpine

RUN apk update  -q && \
    apk upgrade -q && \
    apk add     -q --no-cache bash git curl

# node:26 images no longer ship yarn/corepack
RUN npm install -g --ignore-scripts yarn@1.22.22

WORKDIR /usr/src/app

COPY package.json bower.json .bowerrc ./

RUN yarn install

COPY . ./

ENV PORT=8000

EXPOSE 8000

ARG COMMIT
ENV COMMIT=$COMMIT

CMD [ "node", "server" ]
