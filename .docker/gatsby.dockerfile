FROM node:stretch-slim
WORKDIR /src

# install git
RUN apt-get update && \
	apt-get install -y git sudo gzip

# install gatsby
RUN npm install -g gatsby-cli --unsafe-perm
RUN npm cache clean --force

# expose port(s)
EXPOSE 8000