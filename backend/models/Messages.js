const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  workspaceID: { type: String, required: true },
  msg: { type: String, required: true },
  url: { type: String, required: false },
  timestamp: { type: String, default: Date.now() },
});

module.exports = mongoose.model("Message", MessageSchema);