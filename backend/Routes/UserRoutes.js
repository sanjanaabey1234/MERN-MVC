const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserControllers");

// Route to get all users
router.get("/", UserController.getAllUsers);

// Route to add a new user
router.post("/", UserController.addUsers);

//Route to get user by id
router.get("/:id", UserController.getById);

//Route to update user
router.put("/:id", UserController.updateUser);

//Route to delete user
router.delete("/:id", UserController.deleteUser);

module.exports = router;
