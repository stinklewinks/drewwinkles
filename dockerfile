# Use Ubuntu image
FROM ubuntu:latest

## Set WORKDIR
WORKDIR /usr/src/app

## Update image
RUN apt update -y && apt upgrade -y
RUN apt install -y git curl gnupg

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs

# INSTALL YARN
RUN npm install -g yarn concurrently
## Install drewwinkles
RUN git clone https://github.com/stinklewinks/drewwinkles

# Install frontend dependencies
WORKDIR /usr/src/app/front
RUN yarn install

# Install backend dependencies
WORKDIR /usr/src/app/back
RUN yarn install

#EXPOSE
EXPOSE 80 5000
WORKDIR /usr/src/app
CMD ["concurrently", "yarn --cwd front start", "yarn --cwd back start"]


