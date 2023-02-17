###########################################################################################
# Runner: node
###########################################################################################

FROM node:19-alpine as runner

# Node
ARG NODE_ENV
ARG RUNTIME_ENV
ENV NODE_ENV=$NODE_ENV
ENV RUNTIME_ENV=$RUNTIME_ENV

# Set workdir
WORKDIR /app

COPY api api
COPY .nvmrc .
COPY graphql.config.js .
COPY package.json .
COPY redwood.toml .
COPY yarn.lock .

# Install dependencies
RUN yarn install --frozen-lockfile

# Install additional dependencies (tracking realStandal)
RUN yarn add react react-dom @redwoodjs/api-server @redwoodjs/internal --ignore-workspace-root-check

# Build
RUN yarn rw build api

# Clean up
RUN rm -rf ./api/src

# Set api as workdirectory
WORKDIR /app/api

# Expose RedwoodJS api port
EXPOSE 8911

# Entrypoint to @redwoodjs/api-server binary
ENTRYPOINT [ "yarn", "rw", "serve", "api", "--port", "8911", "--rootPath", "/api" ]

### Connect image to repository
LABEL org.opencontainers.image.source=https://github.com/redwoodjs/docker
