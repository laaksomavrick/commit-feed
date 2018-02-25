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

# app binds to 8080 as per express
EXPOSE 8080

# Run app
CMD ["npm", "serve"]
