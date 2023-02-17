###########################################################################################
# Base
###########################################################################################

FROM node:19-alpine as base
WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
ARG RUNTIME_ENV
ENV RUNTIME_ENV=$RUNTIME_ENV

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

# Install dependencies
RUN yarn install

###########################################################################################
# Build
###########################################################################################

FROM base as build

# Copy
COPY api api
COPY web web

# Build
RUN yarn rw build web

###########################################################################################
# Runner
###########################################################################################

FROM nginx

# Copy dist
COPY --from=build /app/web/dist /app/web/dist
COPY docker/jeliasson-nginx/web/config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8910

# Manually adding CMD instruction (from upstream) to bring in for analyzing
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
