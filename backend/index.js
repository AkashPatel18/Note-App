const express = require('express');
const app = express();
const notes = require('./data/notes');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('api is called');
});

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.get('/notes/:id', (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(note);
  res.json(note);
});

app.listen(PORT, () => {
  console.log(`hello ${PORT}`);
});
