const mongoose = require("mongoose");

const CollaboratosSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: false },
  workspaceID: { type: String, required: true },
  timestamp: { type: String, default: Date.now() },
});

module.exports = mongoose.model("Collaborator", CollaboratosSchema);