FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Replace connection string
RUN sed -i -e 's/localhost/astronautjs-mongo/g' /usr/src/app/utils/connection.js

# Expose express port
EXPOSE 3000

CMD [ "npm", "start" ]