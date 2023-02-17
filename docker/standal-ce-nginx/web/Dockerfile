# ==
# Base
FROM node:19-alpine as base

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

COPY redwood.toml redwood.toml
COPY graphql.config.js graphql.config.js

COPY api/package.json api/package.json
COPY web/package.json web/package.json

RUN yarn install --frozen-lockfile

#==
# Build
FROM base as web_build

# ENV key=value

COPY web web

RUN yarn rw build web

#==
# Serve
FROM nginx:1.23.3-alpine

RUN chown nginx /etc/nginx/nginx.conf && \
  chown -R nginx /usr/share/nginx/html && \
  chown -R nginx /var/cache/nginx && \
  chown -R nginx:nginx /var/log/nginx && \
  touch /var/run/nginx.pid && \
  chown nginx /var/run/nginx.pid

COPY docker/standal-ce-nginx/web/config/nginx.conf /etc/nginx/nginx.conf

COPY --from=web_build /app/web/dist /usr/share/nginx/html

EXPOSE 8910

USER nginx

### Connect image to repository
LABEL org.opencontainers.image.source=https://github.com/redwoodjs/docker
