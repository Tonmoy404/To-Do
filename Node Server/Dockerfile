# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run your Node.js application
CMD ["node", "server.js"]
