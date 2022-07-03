const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  noteUID: {
    type: String,
    required: true,
  },
  workspaceID: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "Enter your Note here",
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Note", NoteSchema);
