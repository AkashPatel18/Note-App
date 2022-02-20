const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5500;
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

// app.use(notFound);
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`hello ${PORT}`);
});
