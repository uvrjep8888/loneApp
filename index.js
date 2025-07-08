const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🐺 Hello Chief! Your API is live and Dockerized!');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong-pong 🏓' });
});

app.get('/lion', (req, res) => {
  res.json({ message: '🦁 rooooowwwwrrrrr 🦁!!!!' });
});


app.get('/wolf', (req, res) => {
  res.json({ message: '🐺 Auuuuuu! 🐺!!!!' });
});

app.get('/wolves', (req, res) => {
  res.json({ message: '🐺 Auuuuuu! 🐺!!!!' });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
