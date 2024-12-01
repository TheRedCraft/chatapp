FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Stelle sicher, dass die .env-Datei kopiert wird
COPY .env .env

EXPOSE 4000
CMD ["npm", "start"]