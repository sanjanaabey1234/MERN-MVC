const User = require("../Model/UserModel");

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }
    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

// Add a new user
const addUsers = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;

  if (!name || !gmail || !age || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = new User({
      name,
      gmail,
      age,
      address,
    });
    await newUser.save();
    return res.status(201).json({ user: newUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to add user" });
  }
};

//
const getById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

//Update User details
const updateUser = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name,
      gmail,
      age,
      address,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

//Delete User
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllUsers,
  addUsers,
  getById,
  updateUser,
  deleteUser,
};
