# Use official Node.js v22.13.0 as base image
FROM node:22-alpine AS base

# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose the port used by Next.js
EXPOSE 3000

# Set the entry point to run Next.js in development mode
CMD ["npm", "run", "dev"]
