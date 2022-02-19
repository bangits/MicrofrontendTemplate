# Using node lts version with alpine
FROM node:lts-alpine

# Set working directory to /app
WORKDIR /app

# First copy package.json and run yarn for caching
COPY .npmrc .
COPY package.json .
COPY yarn.* .
RUN yarn

# Copy all files to working directory
COPY . .

# Expose 9007 port
EXPOSE 9007

# Start application
CMD ["yarn", "start"]
