const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

app.use(cors());
// Middleware
app.use(express.json()); // Helps with parsing JSON bodies in requests
app.use("/users", router); // Route for handling user-related requests
// localhost link ekata 5000/users ee link eka hdala denwa

mongoose
  .connect(
    "mongodb+srv://sanjanaabeysirigunawardana111:k8q9Clx3233cQxgH@cluster0.vmaod.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => console.log("Server is running on port 5000"));
  })
  .catch((err) => console.log(err));
