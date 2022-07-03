const express = require("express");
const WorkSpaceRouter = express.Router();

const {
  getWSNotes,
  create,
  getAllWorkSpaces,
  getWSTodos,
  getWSLinks,
  getWSCollaborators,
  addCollaborator,
  sendMessage,
  getAllMessages,
  getAllNotesOfUser,
  getAllTodosOfUser,
  getAllLinksOfUser,
  getAllWSFromUID,
  deleteWS,
  getWSFrom_ID,
} = require("../controllers/WorkSpaceControllers.js");

WorkSpaceRouter.post("/getWSNotes", getWSNotes);
WorkSpaceRouter.post("/getWSTodos", getWSTodos);
WorkSpaceRouter.post("/getWSLinks", getWSLinks);
WorkSpaceRouter.post("/getAllNotesOfUser", getAllNotesOfUser);
WorkSpaceRouter.post("/getAllTodosOfUser", getAllTodosOfUser);
WorkSpaceRouter.post("/getAllLinksOfUser", getAllLinksOfUser);
WorkSpaceRouter.post("/getAllWSFromUID", getAllWSFromUID);
WorkSpaceRouter.post("/getAllMessages", getAllMessages);
WorkSpaceRouter.post("/getWSCollaborators", getWSCollaborators);
WorkSpaceRouter.post("/create", create);
WorkSpaceRouter.post("/sendMessage", sendMessage);
WorkSpaceRouter.post("/addCollaborator", addCollaborator);
WorkSpaceRouter.post("/getAllWorkSpaces", getAllWorkSpaces);
WorkSpaceRouter.post("/deleteWS", deleteWS);
WorkSpaceRouter.post("/getWSFrom_ID", getWSFrom_ID);

module.exports = WorkSpaceRouter;
