const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🦁 Hello Chief! Your API is live and Dockerized!');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong-pong 🏓' });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
