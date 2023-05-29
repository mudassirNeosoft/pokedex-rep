FROM node:16 as base
WORKDIR /app
COPY ./package.json ./
COPY ./lerna.json ./
COPY . /app
RUN yarn bootstrap
RUN yarn build

EXPOSE 3000
CMD ["yarn", "prod"]