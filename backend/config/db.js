const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //    useCreateIndex: true,
    });
    console.log(connection.connection.host, 'monog connected');
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
