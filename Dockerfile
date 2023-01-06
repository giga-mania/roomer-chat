FROM node:18

WORKDIR /app
COPY .  /app

RUN npm install
EXPOSE 8900

CMD ["node", "index.js"]