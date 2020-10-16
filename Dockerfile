FROM node:12.18.4-alpine3.12

RUN mkdir /opt/repub_server

COPY . /opt/repub_server
WORKDIR /opt/repub_server

RUN npm install yarn

COPY . /opt/repub_server

RUN yarn
RUN yarn build

CMD ["node", "/opt/repub_server/dist/app.js"]