FROM node:20-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
COPY .env ./.env
COPY prisma ./prisma/ 

RUN npm install
RUN npm run generate
COPY . .

EXPOSE 8080

CMD npm run dev