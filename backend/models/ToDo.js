const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  email: { type: String, required: true },
  workspaceID: { type: String, required: true },
  ToDoGroupID: { type: String, required: false },
  ToDoGroupTitle: { type: String, default: "To Do's" },
  task: { type: String, required: true },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("ToDo", ToDoSchema);
