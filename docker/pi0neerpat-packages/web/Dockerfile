###########################################################################################
# Builder: node
###########################################################################################

FROM node:14 as builder

# Node
ARG ENVIRONMENT
ARG VERSION
ARG REDWOOD_API_URL
ARG APP_DOMAIN

ENV ENVIRONMENT=$ENVIRONMENT
ENV VERSION=$VERSION
ENV REDWOOD_API_URL=$REDWOOD_API_URL
ENV APP_DOMAIN=$APP_DOMAIN

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
