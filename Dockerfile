FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 4800
CMD ["npm", "start"]
