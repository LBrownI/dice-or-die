# Stage 1: Build the Vue.js application using pnpm
FROM node:20-alpine AS build-stage

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the dependency manifests
COPY package.json pnpm-lock.yaml ./

# Install ALL dependencies (including devDependencies needed for the build)
# We do NOT use the --prod flag here because Vite itself is a dev dependency.
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the application for production
RUN pnpm build

# Stage 2: Serve the built application with Nginx
FROM nginx:stable-alpine

# Copy the built static files from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 (standard HTTP port)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]