# ==
# Base
FROM node:18-alpine as base

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

COPY redwood.toml redwood.toml
COPY graphql.config.js graphql.config.js

COPY api/package.json api/package.json
COPY web/package.json web/package.json

RUN yarn install --frozen-lockfile

# ==
# Build
FROM base as build

COPY api api
COPY web web

RUN yarn rw build api web

# ==
# Serve
FROM node:18-alpine as serve

WORKDIR /app

COPY --from=build /app/node_modules/.prisma /app/api/node_modules/.prisma
COPY --from=build /app/api/dist /app/api/dist
COPY --from=build /app/api/package.json /app/api/package.json
COPY --from=build /app/yarn.lock /app/api/yarn.lock

COPY --from=build /app/web/dist /app/web/dist

COPY --from=build /app/redwood.toml /app/redwood.toml

RUN yarn --cwd "api" --production --frozen-lockfile install && \
  yarn global add @redwoodjs/cli react react-dom

EXPOSE 8910

ENTRYPOINT [ "rw", "serve" ]
CMD []

### Connect image to repository
LABEL org.opencontainers.image.source=https://github.com/redwoodjs/docker
