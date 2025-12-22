# Development and Production Dockerfile for Strapi
FROM node:22-alpine

# Install dependencies
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git python3

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
# postinstall script will run patch-package automatically
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

# Set PATH
ENV PATH=/opt/node_modules/.bin:$PATH

# Create app directory with proper permissions
WORKDIR /opt/app

# Copy application files
COPY . .

# Set permissions for node user
RUN chown -R node:node /opt/app && \
    chown -R node:node /opt/node_modules && \
    chmod -R 755 /opt/app && \
    chmod -R 755 /opt/node_modules

# Switch to node user
USER node

EXPOSE 1337 5173
CMD ["npm", "run", "develop"]
