###########################################################################################
# Base
###########################################################################################

FROM node:14-alpine as base
WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
ENV RUNTIME_ENV=$RUNTIME_ENV
ARG RUNTIME_ENV
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Copy
COPY api/package.json api/package.json
COPY web/package.json web/package.json
COPY package.json .
COPY yarn.lock .
COPY redwood.toml .
COPY graphql.config.js .
COPY .env.defaults .
COPY .yarn .yarn
COPY .yarnrc.yml .

# Fix error 'Error: Unable to establish a connection to query-engine-node-api library.''
# @see: https://github.com/prisma/prisma/issues/16553#issuecomment-1353302617
#       https://github.com/prisma/prisma/issues/14073#issuecomment-1348534199
RUN apk add --update --no-cache openssl1.1-compat

# Install dependencies
RUN yarn install

###########################################################################################
# Build
###########################################################################################

FROM base as build

# Copy
COPY api api
COPY scripts scripts

# Build
RUN yarn rw build api

# Set database baseline
# We only need to do this once per database
# RUN yarn rw prisma migrate resolve --applied 20210311161829_baseline0

# Migrate database
# !! Disabled in this repo
#RUN yarn rw prisma migrate deploy

# Seed database
# !! Disabled in this repo
#RUN yarn rw prisma db seed

###########################################################################################
# Runner
###########################################################################################

FROM node:14-alpine
WORKDIR /app

# Copy
COPY --from=build /app/api/dist /app/api/dist
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma
COPY api/package.json .
COPY graphql.config.js .
COPY redwood.toml .
COPY .env.defaults .
#COPY .yarn .yarn     # @todo: Fix issue with @prisma/client missing when using yarn 3.x
#COPY .yarnrc.yml .   # @todo: Fix issue with @prisma/client missing when using yarn 3.x

# Fix error 'Error: Unable to establish a connection to query-engine-node-api library.''
# @see: https://github.com/prisma/prisma/issues/16553#issuecomment-1353302617
#       https://github.com/prisma/prisma/issues/14073#issuecomment-1348534199
RUN apk add --update --no-cache openssl1.1-compat

# Install dependencies
RUN yarn install

# Install additional dependencies
RUN yarn add @redwoodjs/api-server @redwoodjs/internal

EXPOSE 8911
CMD []
ENTRYPOINT [ "yarn", "rw-server", "--port", "8911" ]
