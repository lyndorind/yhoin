const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the REST API!' });
});

app.get('/items', (req, res) => {
  res.json([{ id: 1, name: 'Item 1' }]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK' });
app.post('/items', (req, res) => {
  res.status(201).json({ created: true });
});