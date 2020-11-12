FROM node:14.9.0-stretch-slim AS node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/e-shop /usr/share/nginx/html