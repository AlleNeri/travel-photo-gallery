#using the node image
FROM node:latest

#Working directory
WORKDIR /app

#Copy package.json to the working directory
COPY package.json .

#Install the dependencies
RUN npm install

#Copy the rest of the files
COPY . .

#Expose the port
EXPOSE 3000

#Run the app
CMD ["npm", "build"]
