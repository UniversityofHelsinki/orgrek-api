FROM node:18-alpine
RUN apk update && \
    apk add --no-cache tzdata
RUN adduser node root
COPY . /home/node/app
RUN chmod -R 755 /home/node/app
RUN chown -R node:node /home/node/app
ENV npm_config_cache /tmp/npm

WORKDIR /home/node/app

RUN node -v

# EXPOSE PORT 8080
EXPOSE 8080

# START APPLICATION
CMD [ "npm", "start" ]
