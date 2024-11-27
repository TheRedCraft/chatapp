# Node.js als Basis-Image verwenden
FROM node:18

# Arbeitsverzeichnis setzen
WORKDIR /usr/src/app

# Package-Dateien kopieren und Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Quellcode kopieren
COPY . .

# Port freigeben und Startbefehl setzen
EXPOSE 4000
CMD ["npm", "start"]