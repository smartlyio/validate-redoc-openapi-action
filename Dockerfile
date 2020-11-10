FROM node:12.19.0-stretch-slim as package

COPY package.json yarn.lock entrypoint.sh /

RUN yarn install --pure-lockfile && yarn cache clean

ENTRYPOINT ["/entrypoint.sh"]