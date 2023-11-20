require("dotenv").config();
const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
};

module.exports = main;
