const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  gmail: {
    type: String,
    required: [true, "Gmail is required"],
    unique: true, // Ensures Gmail is unique
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
