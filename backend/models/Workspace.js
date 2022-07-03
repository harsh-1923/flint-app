const mongoose = require("mongoose");

var WorkSpaceSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  uID: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("WorkSpace", WorkSpaceSchema);
