FROM node:14

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["sh", "-c", "yarn start"]
