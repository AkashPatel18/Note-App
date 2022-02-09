const express = require('express');
const app = express();
const notes = require('./data/notes');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5500;
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');

connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

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
