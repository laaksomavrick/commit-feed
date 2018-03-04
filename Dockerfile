FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# For Prod
# RUN npm install --only=production

# Bundle app source
COPY . .

# app binds to 3001 as per EXPRESS_PORT in .env
EXPOSE 3001

# Build app
#TODO front end
CMD ["npm", "run-script", "build"]

# Run app
CMD ["npm", "run-script", "serve"]
