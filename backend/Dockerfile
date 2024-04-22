# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the backend will run (adjust if necessary)
EXPOSE 3000

# Command to start the backend server
CMD ["npm", "start"]
