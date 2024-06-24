# Stage 1: Build the Angular app
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
COPY pnpm*.json ./

RUN npm i -g pnpm
RUN pnpm install --prod

COPY . .
RUN pnpm run build:client --output-path=dist/apps/client
# /home/sofiane/workspaces/nx-vods/apps/client/dist/browser

# Stage 2: Serve the Angular app with NGINX
FROM nginx:alpine

COPY --from=build /app/dist/apps/client/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
