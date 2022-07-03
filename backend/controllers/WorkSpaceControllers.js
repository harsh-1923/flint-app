const NoteSchema = require("../models/Note.js");
const UserSchema = require("../models/User.js");
const WorkSpaceSchema = require("../models/WorkSpace.js");
const ToDoSchema = require("../models/ToDo.js");
const LinkSchema = require("../models/Links.js");
const CollaboratosSchema = require("../models/Collaborators.js");
const MessageSchema = require("../models/Messages.js");

exports.create = (req, res) => {
  const { email, title } = req.body;
  console.log("first")
  UserSchema.findOne({ email }, (err, user) => {
    if (err)
      return res
        .status(400)
        .json({ error: true, message: "Internal Server Error" });

    if (user) {
      const { workspaceID } = user;
      const uID = workspaceID + Date.now();

      const newWorkspace = new WorkSpaceSchema({ email, uID, title });
      newWorkspace.save((err) => {
        if (err)
          return res
            .status(500)
            .json({ error: true, message: "Internal Server Error" });
        else
          return res
            .status(200)
            .json({ error: false, message: "WorkSpace created", newWorkspace });
      });
    }
  });
};

exports.getWSNotes = (req, res) => {
  const { workspaceID } = req.body;

  NoteSchema.find({ workspaceID }, (err, data) => {
    if (err)
      return res.status(400).json({ error: true, message: "Server Error" });

    return res.status(200).json({ error: false, message: "Notes found", data });
  });
};

exports.getWSLinks = (req, res) => {
  const { workspaceID } = req.body;

  LinkSchema.find({ workspaceID }, (err, data) => {
    if (err)
      return res.status(400).json({ error: true, message: "Server Error" });

    return res.status(200).json({ error: false, message: "Links found", data });
  });
};

exports.getWSTodos = (req, res) => {
  const { workspaceID } = req.body;

  ToDoSchema.find({ workspaceID }, (err, data) => {
    if (err)
      return res.status(400).json({ error: true, message: "Server Error" });

    return res.status(200).json({ error: false, message: "Todos found", data });
  });
};

exports.getWSCollaborators = (req, res) => {
  const { workspaceID } = req.body;
  // console.log(req.body, "here");

  CollaboratosSchema.find({ workspaceID }, (err, data) => {
    if (err)
      return res.status(400).json({ error: true, message: "Server Error" });

    return res
      .status(200)
      .json({ error: false, message: "Collaborators found", data });
  });
};

exports.addCollaborator = (req, res) => {
  const { workspaceID, email, url, name } = req.body;

  const newCollaborator = new CollaboratosSchema({
    email,
    name,
    url,
    workspaceID,
  });
  newCollaborator.save((err) => {
    if (err) {
      return res
        .status(400)
        .json({ error: true, message: "Server Error", err });
    } else {
      return res
        .status(200)
        .json({ error: false, message: "Collaborator added successfully" });
    }
  });
};

exports.sendMessage = (req, res) => {
  const { email, msg, workspaceID, name, url } = req.body;

  const newMessage = new MessageSchema({ email, name, workspaceID, msg, url });

  newMessage.save((err) => {
    if (err) {
      return res.status(500).json({ error: true, message: "Server Error" });
    } else {
      return res
        .status(200)
        .json({ error: false, messanage: "Message Sent", newMessage });
    }
  });
};

exports.getAllMessages = (req, res) => {
  const { workspaceID } = req.body;

  MessageSchema.find({ workspaceID }, (err, data) => {
    if (err) {
      return res.status(500).json({ error: true, message: "Server Error" });
    } else {
      return res
        .status(200)
        .json({ error: false, message: "Messages found", data });
    }
  });
};

exports.getAllWorkSpaces = (req, res) => {
  // console.log("here");
  // console.log(req.body);
  const { email } = req.body;

  WorkSpaceSchema.find({ email }, (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ error: true, message: "Internal Server Error", err });
    else {
      return res
        .status(200)
        .json({ error: false, message: "Workspaces found", data });
    }
  });
};

exports.getAllNotesOfUser = (req, res) => {
  const { email } = req.body;

  NoteSchema.find({ email }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: true, message: "Internal Server Error" });
    } else {
      return res
        .status(200)
        .json({ error: false, message: "Notes found", data });
    }
  });
};

exports.getAllTodosOfUser = (req, res) => {
  const { email } = req.body;

  ToDoSchema.find({ email }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: true, message: "Internal Server Error" });
    } else {
      return res
        .status(200)
        .json({ error: false, message: "Todo found", data });
    }
  });
};

exports.getAllLinksOfUser = (req, res) => {
  const { email } = req.body;

  LinkSchema.find({ email }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: true, message: "Internal Server Error" });
    } else {
      return res
        .status(200)
        .json({ error: false, message: "Links found", data });
    }
  });
};

exports.getAllWSFromUID = (req, res) => {
  const { uID } = req.body;

  WorkSpaceSchema.find({ uID }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: true, message: "Internal Server Error" });
    } else {
      return res
        .status(200)
        .json({ error: false, message: "Workspace found", data });
    }
  });
};

exports.deleteWS = (req, res) => {
  const { _id } = req.body;

  WorkSpaceSchema.findByIdAndDelete({ _id }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .josn({ error: true, message: "Internal Server Error, err" });
    } else {
      return res.status(200).json({ error: false, message: "Deleted", data });
    }
  });
};

exports.getWSFrom_ID = (req, res) => {
  const { _id } = req.body;

  Workspace.findById({ _id }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .josn({ error: true, message: "Internal Server Error, err" });
    } else {
      return res
        .status(200)
        .json({ error: false, message: "Workspacefound", data });
    }
  });
};
