## build image
FROM node:lts-alpine AS setup
WORKDIR /dsmith-web-source

# add dependencies
COPY ./package*.json ./
RUN npm install

# build website
FROM node:lts-alpine AS build
WORKDIR /dsmith-web-source
COPY . .
COPY --from=setup /dsmith-web-source/node_modules ./node_modules
RUN npm run build

## serve image
FROM node:lts-alpine AS serve
WORKDIR /dsmith-web-source

ENV NODE_ENV production

# serve website
COPY --from=build /dsmith-web-source/.next ./.next
COPY --from=build /dsmith-web-source/node_modules ./node_modules
COPY --from=build /dsmith-web-source/package.json ./package.json

EXPOSE $PORT

CMD ["npm", "run", "start"]