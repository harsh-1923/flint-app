const NoteSchema = require("../models/Note.js");
const UserSchema = require("../models/User.js");
const WorkSpaceSchema = require("../models/WorkSpace.js");
const ToDoSchema = require("../models/ToDo.js");
const LinkSchema = require("../models/Links.js");

exports.createLink = (req, res) => {
  const { uID, url, title } = req.body;

  WorkSpaceSchema.findOne({ uID }, (err, workSpace) => {
    if (err)
      return res
        .status(500)
        .json({ err: true, message: "Internal Server Error - here", err });
    else {
      const { email } = workSpace;
      const newLink = new LinkSchema({ email, workspaceID: uID, url, title });

      newLink.save((err) => {
        if (err)
          return res
            .status(500)
            .json({ err: true, message: "Internal Server Error", err });
        else
          return res
            .status(200)
            .json({ error: false, message: "Link created", newLink });
      });
    }
  });
};



