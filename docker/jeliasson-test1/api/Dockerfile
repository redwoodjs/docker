###########################################################################################
# Runner: node
###########################################################################################

FROM node:14-alpine as runner

# Node
ARG NODE_ENV
ARG RUNTIME_ENV
ENV NODE_ENV=$NODE_ENV
ENV RUNTIME_ENV=$RUNTIME_ENV

# Set workdir
WORKDIR /app

COPY api api
COPY .nvmrc .
COPY babel.config.js .
COPY graphql.config.js .
COPY package.json .
COPY redwood.toml .
COPY yarn.lock .

# Install dependencies
RUN yarn install --frozen-lockfile

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

### START General copy pasta for all implementations
LABEL org.opencontainers.image.source=https://github.com/jeliasson/redwoodjs-docker
### END of general copy pasta for all implementations
