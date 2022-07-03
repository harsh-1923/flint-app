const express = require("express");
const userRouter = express.Router();
const UserSchema = require("../models/User");

userRouter.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({
      error: true,
      message: "Missing username, email or password",
      isAuthenticated: false,
    });
  } else {
    UserSchema.findOne({ email }, (err, user) => {
      if (err) {
        return res.status(500).json({
          error: true,
          message: "Internal Server Error",
          isAuthenticated: false,
        });
      } else if (user) {
        return res.status(400).json({
          error: false,
          message: "User already exists",
          isAuthenticated: false,
        });
      }
      const workspaceID = email.split("@")[0] + "-ws-" + Date.now();
      const newUser = new UserSchema({
        username,
        email,
        password,
        workspaceID,
      });
      newUser.save((err) => {
        if (err)
          return res.status(400).json({
            error: true,
            message: "Couldnt create user",
            isAuthenticated: false,
          });
        else
          return res.status(200).json({
            error: false,
            message: "Welcome to Flint, user created",
            isAuthenticated: true,
            newUser,
          });
      });
    });
  }
});

userRouter.post("/signin", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  UserSchema.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({
        error: true,
        message: "Internal Server Error",
        isAuthenticated: false,
      });
    } else {
      if (!user) {
        return res.status(400).json({
          error: true,
          message: "User Does Not Exist",
          isAuthenticated: false,
        });
      } else {
        if (user.password == password) {
          return res.status(200).json({
            error: false,
            message: "User Authenticated",
            isAuthenticated: true,
            user
          });
        } else {
          return res.status(400).json({
            error: false,
            message: "Invalid Credentials",
            isAuthenticated: false,
          });
        }
      }
    }
  });
});

module.exports = userRouter;
