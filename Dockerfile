# ------------------------------------------------------------------
#
# 						   Microservice Auth
#
# ------------------------------------------------------------------
# Set Node version
FROM node:12 
# ------------------------------------------------------------------
# Create app directory
WORKDIR /usr/src/app
# ------------------------------------------------------------------
# Install app dependencies
COPY package.json /usr/src/app
# ------------------------------------------------------------------
# Install required packages
RUN npm install
# ------------------------------------------------------------------
# Bundle app source
COPY . /usr/src/app
# ------------------------------------------------------------------
# Setup port
EXPOSE 5008
# ------------------------------------------------------------------
# Running command
CMD [ "node", "server.js" ]
# ------------------------------------------------------------------
#
 
