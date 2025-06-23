# Stage 1: Build the Vue.js application
# Stage 1: Build the Vue.js application
FROM node:24-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the rest of the source code
COPY . .

# Build the application for production
# This creates a /app/dist folder with your static files
RUN npm run build

# Stage 2: Serve the built application with Nginx
# Nginx is a very lightweight and high-performance web server
FROM nginx:stable-alpine

# Copy the built files from the build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# When the container starts, Nginx will serve the files in this directory
EXPOSE 80

# The default Nginx command will start the server
CMD ["nginx", "-g", "daemon off;"]