###########################################################################################
# Builder: node
###########################################################################################

FROM node:19 as builder

# Node
ARG ENVIRONMENT
ARG VERSION
ARG REDWOOD_API_URL
ARG APP_DOMAIN

ENV ENVIRONMENT=$ENVIRONMENT
ENV VERSION=$VERSION
ENV REDWOOD_API_URL=$REDWOOD_API_URL
ENV APP_DOMAIN=$APP_DOMAIN


# Set workdir
WORKDIR /app

COPY web web
COPY packages packages
COPY .nvmrc .
COPY graphql.config.js .
COPY package.json .
COPY redwood.toml .
COPY yarn.lock .
COPY lerna.json .

# Install dependencies
RUN yarn install --frozen-lockfile

# Build packages
RUN yarn build-packages

# Build
RUN yarn rw build web

# Clean up
RUN rm -rf ./web/src

###########################################################################################
# Runner: Nginx
###########################################################################################

FROM nginx as runner

# Copy dist
COPY --from=builder /app/web/dist /usr/share/nginx/html

# Copy nginx configuration
COPY web/config/nginx/default.conf /etc/nginx/conf.d/default.conf

# List files
RUN ls -lA /usr/share/nginx/html

# Expose RedwoodJS web port
EXPOSE 8910

LABEL org.opencontainers.image.source=https://github.com/redwoodjs/docker
