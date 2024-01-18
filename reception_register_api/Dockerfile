FROM node:20-bookworm-slim

WORKDIR /app

COPY . .

RUN npm i --location=project

RUN npm run build

CMD ["npm", "start", "bootstrap"]
