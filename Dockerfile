FROM node:12-alpine

ENV REDOC_CLI_VERSION 0.10.0
RUN npm install redoc-cli@REDOC_CLI_VERSION -g

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]