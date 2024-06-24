FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
COPY pnpm*.json ./

RUN npm i -g pnpm
RUN pnpm install --prod

COPY . .
RUN pnpm run build:server
ENV PORT=3000
EXPOSE 3000
CMD ["pnpm", "run", "server:prod"]

