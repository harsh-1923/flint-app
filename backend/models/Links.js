const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  email: { type: "string", required: true },
  workspaceID: { type: "string", required: true },
  LinkListID: { type: "string", required: false },
  LinkListTitle: { type: "string", required: false },
  url: { type: "string", required: true },
  title: { type: "string", required: true },
});

module.exports = mongoose.model("Link", LinkSchema);
