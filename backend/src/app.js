const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');

const app = express();

// Konfiguration der CORS-Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Ersetze dies durch die URL deines Frontends
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Erlaube spezifische HTTP-Methoden
  credentials: true // Erlaube das Senden von Cookies oder HTTP-Auth-Informationen
}));

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
