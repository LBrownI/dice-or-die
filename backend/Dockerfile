# Stage 1: Use an official Node.js runtime as the base image
# Using a specific version is better for consistency
FROM node:24-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Stage 2: Install all dependencies, including devDependencies for potential build steps
FROM base AS dependencies
RUN npm install

# Stage 3: Copy source code and only install production dependencies
FROM base AS production
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
# If you have a separate production install command, use it here
# RUN npm ci --only=production

# Expose the port your Express app runs on
EXPOSE 3000

# The command to start your server
CMD [ "node", "server.js" ]