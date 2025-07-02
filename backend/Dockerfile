# Use a specific Node.js version for consistency
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Install pnpm globally within the image
RUN npm install -g pnpm

# Copy the dependency manifests
# Copy pnpm-lock.yaml first to leverage Docker's cache
COPY package.json pnpm-lock.yaml ./

# Install only the production dependencies inside the container
# --frozen-lockfile ensures it uses the exact versions from the lockfile
# --prod is crucial here because a running server doesn't need devDependencies
RUN pnpm install --prod --frozen-lockfile

# Copy the rest of your application source code
COPY . .

# Expose the port your Express app runs on
EXPOSE 3000

# The command to start your server, assuming a 'start' script in package.json
CMD [ "pnpm", "start" ]