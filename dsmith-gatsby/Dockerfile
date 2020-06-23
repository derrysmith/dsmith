# build gatsby site
FROM derrysmith/gatsby-base:latest AS build

COPY ./package*.json ./
RUN npm install

COPY . .
RUN npm run build

# serve gatsby site
FROM nginx:latest AS serve

COPY --from=build ./src/public ./usr/share/nginx/html