const NoteSchema = require("../models/Note.js");
const UserSchema = require("../models/User.js");
const WorkSpaceSchema = require("../models/WorkSpace.js");

exports.createNote = (req, res) => {
  const { uID, title } = req.body;
  const noteUID = uID + "-note-" + Date.now();

  WorkSpaceSchema.findOne({ uID }, (err, workSpace) => {
    if (err)
      return res
        .status(500)
        .json({ err: true, message: "Internal Server Error - here", err });
    else {
      const { email } = workSpace;
      
      const newNote = new NoteSchema({
        email,
        noteUID,
        workspaceID: uID,
        title,
      });

      newNote.save((err) => {
        if (err)
          return res
            .status(500)
            .json({ err: true, message: "Internal Server Error", err });
        else
          return res
            .status(200)
            .json({ error: false, message: "Note created", newNote });
      });
    }
  });
};

// exports.getWSNotes = (req, res) => {
//   const { workspaceID } = req.body;

//   NoteSchema.find({ workspaceID }, (err, data) => {
//     if (err)
//       return res.status(400).json({ error: true, message: "Server Error" });

//     return res.status(200).json({ error: false, message: "Notes found", data });
//   });
// };
