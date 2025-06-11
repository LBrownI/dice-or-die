# Stage 1: Build the Vue.js application
FROM node:24-alpine AS build-stage

# Install pnpm globally in this stage
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json AND pnpm-lock.yaml
COPY package.json ./
COPY pnpm-lock.yaml ./


RUN pnpm install --frozen-lockfile

COPY . .

# Build the application
RUN pnpm run build

# Serve the application using Nginx
FROM nginx:stable-alpine AS production-stage

# Update Alpine packages to the latest versions
RUN apk update && \
    apk upgrade --available && \
    rm -rf /var/cache/apk/*

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]