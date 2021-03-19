FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 8000 8080

CMD npm run serve && npm run start


