# syntax=docker/dockerfile:1

# Pull base node image
FROM node:17-alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY  . ./

# Start the app
CMD ["npm", "start"]