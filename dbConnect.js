const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo DB Connection Successfull');
  } catch (error) {
    console.error('Mongo DB Connection Error:', error);
  }
};

module.exports = connectToDatabase;
