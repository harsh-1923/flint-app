const express = require("express");
const LinkRouter = express.Router();

const { createLink } = require("../controllers/LinkControllers.js");

LinkRouter.post("/create", createLink);

module.exports = LinkRouter;
