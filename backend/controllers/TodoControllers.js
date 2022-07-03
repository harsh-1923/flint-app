const NoteSchema = require("../models/Note.js");
const UserSchema = require("../models/User.js");
const WorkSpaceSchema = require("../models/WorkSpace.js");
const ToDoSchema = require("../models/ToDo.js");

exports.createToDo = (req, res) => {
  const { uID, task } = req.body;

  WorkSpaceSchema.findOne({ uID }, (err, workSpace) => {
    if (err)
      return res
        .status(500)
        .json({ err: true, message: "Internal Server Error - here", err });
    else {
      const { email } = workSpace;
      const newToDo = new ToDoSchema({ email, workspaceID: uID, task });

      newToDo.save((err) => {
        if (err)
          return res
            .status(500)
            .json({ err: true, message: "Internal Server Error", err });
        else
          return res
            .status(200)
            .json({ error: false, message: "ToDo created", newToDo });
      });
    }
  });
};
