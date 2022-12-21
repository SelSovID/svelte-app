FROM node:18 AS build
WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN mkdir -p /app/static

RUN npm run build

FROM node:18-alpine
WORKDIR /app

COPY --from=build /app/build .
COPY --from=build /app/package.json .

EXPOSE 80

ENV PORT=80

CMD ["node", "index.js"]
