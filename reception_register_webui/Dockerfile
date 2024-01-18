FROM node:20-bookworm-slim

WORKDIR /app

COPY . .

RUN npm i --location=project

CMD ["npm", "run", "build"]
