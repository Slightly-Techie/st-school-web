FROM node:alpine as builder

WORKDIR /frontend

COPY ./package.json /frontend

RUN yarn install

COPY . .

RUN yarn build

# Handle Nginx
FROM nginx
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
