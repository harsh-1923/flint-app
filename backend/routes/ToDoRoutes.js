const express = require("express");
const ToDoRouter = express.Router();

const { createToDo } = require("../controllers/TodoControllers.js");

ToDoRouter.post("/create", createToDo);

module.exports = ToDoRouter;
