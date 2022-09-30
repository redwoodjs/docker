FROM node:16.16.0-alpine AS builder

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN apk --no-cache --virtual build-dependencies add \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    make \
    g++ \
    && npm_config_build_from_source=true yarn

WORKDIR /app

COPY graphql.config.js .
COPY .nvmrc .

RUN mkdir api web
COPY api/package.json api/.
COPY web/package.json web/.
COPY package.json .
COPY yarn.lock .

RUN yarn install --network-timeout=100000
RUN yarn add react@^17 react-dom@^17 @redwoodjs/api-server @redwoodjs/internal --ignore-workspace-root-check

COPY scripts scripts
COPY docker.toml redwood.toml

RUN mv api api-stash
RUN mv web web-stash

COPY api api
COPY web web

RUN rm -rf api/node_modules web/node_modules
RUN mv api-stash/node_modules api/.
RUN mv web-stash/node_modules web/.
RUN rm -rf api-stash web-stash

RUN yarn rw build web -v

EXPOSE 8910

# ENTRYPOINT [ "yarn", "rw", "serve", "web", "--port", "8910" ] # this or below

FROM nginx AS runner

COPY --from=builder /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf

RUN ls -lA /usr/share/nginx/html
