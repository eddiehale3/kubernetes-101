ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-slim

WORKDIR /app

COPY package*.json src/index.js ./

RUN npm i --production

CMD [ "npm", "start" ]
