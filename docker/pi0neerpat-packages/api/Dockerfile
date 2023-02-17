# ==
# Base
FROM node:19 as base

WORKDIR /app

ARG ENVIRONMENT
ENV ENVIRONMENT=$ENVIRONMENT

COPY package.json .
COPY api/package.json api/package.json
COPY web/package.json web/package.json
COPY lerna.json .
COPY yarn.lock .

COPY packages packages
COPY redwood.toml .
COPY graphql.config.js .

# Fix error 'Error: Unable to establish a connection to query-engine-node-api library.''
# @see: https://github.com/prisma/prisma/issues/16553#issuecomment-1353302617
#       https://github.com/prisma/prisma/issues/14073#issuecomment-1348534199
RUN apk add --update --no-cache openssl1.1-compat

# React is needed for building the api package for some reason
RUN yarn install --frozen-lockfile
# RUN yarn add -W react react-dom

# ==
# Build
FROM base as build

COPY api api
COPY packages packages

RUN yarn build-packages && yarn rw build api

# ==
# Serve
FROM node:19 as serve

WORKDIR /app

COPY --from=build /app/lerna.json .
COPY --from=build /app/package.json .
COPY --from=build /app/api/package.json /app/api/package.json
COPY --from=build /app/yarn.lock /app/yarn.lock
COPY --from=build /app/packages /app/packages

# Only install necessary dependencies.
# Uses Lerna for linking local packages, and Prisma for migrations
RUN yarn global add @redwoodjs/api-server@1.3.1 @redwoodjs/internal@1.3.1 lerna prisma && \
      yarn install --production --frozen-lockfile && \
      yarn cache clean && \
# Helpful utilities for exploring your container
      apt-get update && apt install -y nano ncdu

COPY --from=build /app/api/dist /app/api/dist
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma

COPY api/db /app/api/db
COPY redwood.toml .
COPY serve-api.sh .

# Expose RedwoodJS api port
EXPOSE 8911

# Entrypoint to @redwoodjs/api-server binary
ENTRYPOINT ["./serve-api.sh"]

LABEL org.opencontainers.image.source=https://github.com/redwoodjs/docker
