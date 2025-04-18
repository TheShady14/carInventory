const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: String,
  make: String,
  color: String,
  registrationNumber: String,
  owner: String,
  address: String,
  year: Number,
});

module.exports = mongoose.model("Car", carSchema);
