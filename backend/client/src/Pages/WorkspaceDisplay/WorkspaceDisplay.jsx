import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import "./WorkspaceDisplay.css";

import WorkspaceServices from "../../Services/WorkspaceServices";
import MessageDisp from "../../Components/MessageDisp/MessageDisp";

import Avatar from "../../Components/Avatar/Avatar.jsx";
import A_ONE from "../../assets/A_ONE.png";
import IMG_1 from "../../assets/IMG_1.png";

import { AuthContext } from "../../Context/AuthContext.js";
import NoteDisp from "../../Components//NoteDisp/NoteDisp.jsx";
import LinkView from "../../Components/LinkView/LinkView";
import TaskView from "../../Components/TaskView/TaskView.jsx";

const WorkspaceDisplay = () => {
  let { uID } = useParams();
  const navigate = useNavigate();
  const loaded = true;

  const authContext = useContext(AuthContext);
  // console.log(authContext.user.link);

  const [workspace, setWorkspaces] = useState();
  const [notes, setNotes] = useState();
  const [links, setLinks] = useState();
  const [todo, setTodo] = useState();
  const [collaborators, setCollaborators] = useState();
  const [messages, setMessages] = useState();
  const [newMessages, setNewMessages] = useState(null);
  const [collVis, setCollVis] = useState(false);

  const [section, setSection] = useState(1);
  const [msgSec, setMsgSec] = useState(true);

  useEffect(() => {
    getAllNotes();
    getAllLinks();
    getAllTodo();
    getAllCollaborators();
    getAllMessages();
    getAllWorkspaces();
  }, [loaded]);

  const getAllWorkspaces = () => {
    const data = { uID };

    WorkspaceServices.getAllWSFromUID(data).then((t) => {
      setWorkspaces(t.data[0]);
      // console.log(data);
      // console.log(t.data[0], "Workspace");
      // console.log(workspace);
    });
  };

  const getAllMessages = () => {
    const data = { workspaceID: uID };
    WorkspaceServices.getAllMessages(data).then((data) => {
      setMessages(data.data);
    });
  };

  const getAllCollaborators = () => {
    const data = { workspaceID: uID };
    WorkspaceServices.getAllCollaborators(data).then((colls) => {
      setCollaborators(colls.data);
    });
  };

  const getAllNotes = () => {
    const data = { workspaceID: uID };
    WorkspaceServices.getAllNotes(data).then((notes) => {
      setNotes(notes.data);
    });
  };

  const getAllLinks = () => {
    const data = { workspaceID: uID };
    WorkspaceServices.getAllLinks(data).then((links) => {
      setLinks(links.data);
      console.log(links);
    });
  };

  const getAllTodo = () => {
    const data = { workspaceID: uID };
    WorkspaceServices.getAllTodo(data).then((todo) => {
      setTodo(todo.data);
    });
  };

  const addCollaborator = () => {
    // console.log(authContext.user, "user");
    const data = {
      workspaceID: uID,
      email: authContext.user.email,
      url: authContext.user.link,
      name: authContext.user.name,
    };

    // console.log(data, "data");
  };

  // console.log(authContext.user, "authcontext");
  // console.log(collaborators, "collabprators");

  return (
    <div className="wsd-wrapper">
      <div className="wsd-containers">
        <div className="wsd-container-left">
          <Slide left>
            <div className="wsd-ws-title-wrapper">
              <p className="ws-logo-bold pointer">
                {workspace ? workspace.title : "Flint"}
              </p>
              <p className="ws-logo-tag">Workspace</p>
            </div>
          </Slide>

          <Slide cascade={false} duration={2000}>
            <div className="tqt">
              <div
                className="ws-options pointer"
                onClick={() => navigate("/userhome")}
              >
                <div className="ws-options-icon">
                  <svg
                    stroke="#1b72e8"
                    fill="#1b72e8"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"></path>
                    </g>
                  </svg>
                </div>
                <div className="ws-options-text">Dashboard</div>
              </div>

              <div
                className="ws-options pointer"
                onClick={() => {
                  setSection(1);
                  getAllNotes();
                }}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="ws-options-text">All Notes</div>
              </div>

              <div
                className="ws-options pointer"
                onClick={() => {
                  setSection(2);
                  getAllTodo();
                }}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="#1b72e8"
                    fill="#1b72e8"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M2 3h20v2H2V3zm2 4h16v2H4V7zm4 4h14v2H8v-2zm2 4h8v2h-8v-2zm-2 4h6v2H8v-2z"></path>
                    </g>
                  </svg>
                </div>
                <div className="ws-options-text">All Tasks</div>
              </div>

              <div
                className="ws-options pointer"
                onClick={() => {
                  setSection(3);
                  getAllLinks();
                }}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="ws-options-text">All Links</div>
              </div>
              <div
                style={{ marginTop: "300px" }}
                className="ws-options pointer"
                onClick={() => navigate("/contact")}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M8 12h2v2H4v-2h2a6 6 0 1 1 6 6v-2a4 4 0 1 0-4-4zm-2 8h9v2H6v-2zm-4-4h8v2H2v-2zm9-15h2v3h-2V1zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3z"></path>
                    </g>
                  </svg>
                </div>
                <div className="ws-options-text">Help</div>
              </div>

              <div className="ws-options pointer" onClick={() => setSection(3)}>
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M20,16 c0,2.206-1.794,4-4,4H4V8c0-2.206,1.794-4,4-4h8c2.206,0,4,1.794,4,4V16z"></path>
                    <path d="M11 6H13V14H11zM11 16H13V18H11z"></path>
                  </svg>
                </div>
                <div className="ws-options-text">Report an issue</div>
              </div>
              <div
                className="ws-options pointer"
                onClick={() => setCollVis(!collVis)}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="ws-options-text">Toggle Collaborator</div>
              </div>
            </div>
          </Slide>
        </div>

        {/* MID SECTION  */}
        <div className="wsd-container-mid">
          <Slide direction={"down"} duration={1000} triggerOnce>
            <div className="wsd-mobile-options">
              <div
                className="ws-options pointer"
                onClick={() => navigate("/userhome")}
              >
                <div className="ws-options-icon">
                  <svg
                    stroke="#1b72e8"
                    fill="#1b72e8"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"></path>
                    </g>
                  </svg>
                </div>
                <div className="ws-options-text mobile-option">Dashboard</div>
              </div>

              <div
                className="ws-options pointer"
                onClick={() => {
                  setSection(1);
                  getAllNotes();
                }}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="ws-options-text mobile-option">All Notes</div>
              </div>

              <div
                className="ws-options pointer"
                onClick={() => {
                  setSection(2);
                  getAllTodo();
                }}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="#1b72e8"
                    fill="#1b72e8"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M2 3h20v2H2V3zm2 4h16v2H4V7zm4 4h14v2H8v-2zm2 4h8v2h-8v-2zm-2 4h6v2H8v-2z"></path>
                    </g>
                  </svg>
                </div>
                <div className="ws-options-text mobile-option">All Tasks</div>
              </div>

              <div
                className="ws-options pointer"
                onClick={() => {
                  setSection(3);
                  getAllLinks();
                }}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="ws-options-text mobile-option">All Links</div>
              </div>
              {/* <div
                // style={{ marginLeft: "30px" }}
                className="ws-options pointer"
                onClick={() => navigate("/contact")}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M8 12h2v2H4v-2h2a6 6 0 1 1 6 6v-2a4 4 0 1 0-4-4zm-2 8h9v2H6v-2zm-4-4h8v2H2v-2zm9-15h2v3h-2V1zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3z"></path>
                    </g>
                  </svg>
                </div>
                <div className="ws-options-text">Help</div>
              </div> */}
              {/* <div
                className="ws-options pointer"
                onClick={() => {
                  setSection(3);
                  getAllLinks();
                }}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M20,16 c0,2.206-1.794,4-4,4H4V8c0-2.206,1.794-4,4-4h8c2.206,0,4,1.794,4,4V16z"></path>
                    <path d="M11 6H13V14H11zM11 16H13V18H11z"></path>
                  </svg>
                </div>
                <div className="ws-options-text">Report an issue</div>
              </div> */}
              <div
                className="ws-options pointer"
                onClick={() => setCollVis(!collVis)}
              >
                <div className="ws-options-icon">
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                {/* <div className="ws-options-text">Report an issue</div> */}
              </div>

              <div className="ws-options chat-view-option pointer">
                <div className="ws-options-icon">
                  <svg
                    onClick={() => {
                      // setMsgSec(!msgSec);
                      setSection(4);
                    }}
                    className="icon"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16,2H8C4.691,2,2,4.691,2,8v12c0,0.552,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M20,15 c0,2.206-1.794,4-4,4H4V8c0-2.206,1.794-4,4-4h8c2.206,0,4,1.794,4,4V15z"></path>
                    <circle cx="9.5" cy="11.5" r="1.5"></circle>
                    <circle cx="14.5" cy="11.5" r="1.5"></circle>
                  </svg>
                </div>
                {/* <div className="ws-options-text">Report an issue</div> */}
              </div>
            </div>
          </Slide>
          {section == 1 ? (
            <div>
              <Fade duration={1000} triggerOnce>
                {collVis ? (
                  <>
                    <div className="wsd-collaborator-label">
                      <div className="wsd-collaborator-list">
                        {collaborators
                          ? collaborators.map((c, key) => {
                              console.log(c.url, "AVATAR");
                              return (
                                <div>
                                  <Avatar img={c.url} />
                                </div>
                              );
                            })
                          : null}
                      </div>
                      <div className="wsd-collaborator-create">
                        <input
                          className="input ipt"
                          type="text"
                          name="title"
                          placeholder="Enter email"
                          // onChange={handleChange}
                        />
                        <button className="create-ws-btn pointer">
                          Add Collaborator
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
              </Fade>

              <div className="wsd-dash-top">
                <Fade duration={2000}>
                  <div className="wsd-dash-sec-title-wrapper">
                    <p className="wsd-dash-sec-title"> All notes</p>
                    <div className="wsd-dash-addnote-wrapper">
                      <input
                        className="input"
                        type="text"
                        name="title"
                        placeholder="Enter new note title"
                        // onChange={handleChange}
                      />
                      <button className="create-ws-btn pointer">
                        <span>Create Note</span>
                      </button>
                    </div>
                  </div>

                  <div className="wsd-dash-banner-2">
                    {notes ? (
                      <small className="wsd-note-count">
                        {notes.length} notes
                      </small>
                    ) : (
                      "Fetching notes.."
                    )}
                  </div>
                  <div className="wsd-note-disp-wrapper-2">
                    {notes
                      ? notes.map((n, key) => {
                          return (
                            <div key={key.toString()}>
                              <NoteDisp note={n} />
                            </div>
                          );
                        })
                      : null}
                  </div>
                </Fade>
              </div>
            </div>
          ) : section == 2 ? (
            <div>
              {todo ? (
                <>
                  <h1>All tasks</h1>
                  {todo.map((t, key) => {
                    return (
                      <div key={key.toString()}>
                        <TaskView link={t} />
                      </div>
                    );
                  })}
                </>
              ) : (
                "Fetching links"
              )}
            </div>
          ) : section == 3 ? (
            <div>
              {links ? (
                <>
                  <h1>All Links</h1>
                  {links.map((l, key) => {
                    return (
                      <div key={key.toString()}>
                        <LinkView link={l} />
                      </div>
                    );
                  })}
                </>
              ) : (
                "Fetching links"
              )}
            </div>
          ) : section == 4 ? (
            <div className="mid">
              {authContext.user && authContext.user.p != true ? (
                <div
                  style={{ maxWidth: "95%" }}
                  className="wsd-container-right-2-p2"
                >
                  <div className="wsd-container-right-2-sec-1-p2">
                    <h1 className="wsd-continer-right-2-title">
                      Flint Messages
                    </h1>
                    <p>Chat with collaborators on the fly!!</p>
                  </div>
                  <img className="wsd-container-right-2-img" src={IMG_1} />
                  <div className="wsd-container-right-2-sec-3">
                    <h1 className="wsd-container-right-2-sec-3-title">
                      Increase your productivity with Flint Essential Features
                    </h1>
                    <div>
                      <strong className="wsd-container-right-2-tag">
                        Flint Essential Includes
                      </strong>
                      <p>Premium Collaborative Features</p>
                      <p>Flint Messages</p>
                    </div>

                    <button
                      className="wsd-container-right-2-btn"
                      onClick={() => navigate("/subscriptionpage")}
                    >
                      Get Flint Premium
                    </button>
                  </div>
                </div>
              ) : (
                <div className="wsd-container-right-p2">
                  <div className="wsd-container-chat-banner-wrapper">
                    <div className="wsd-container-chat-banner-1">
                      <div className="wsd-container-chat-banner-1-sec-1">
                        <svg
                          onClick={() => {
                            setSection(1);
                          }}
                          className="icon chat-back-icon pointer"
                          stroke="white"
                          fill="white"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
                        </svg>
                        <div className="wsd-container-chat-title">
                          <h1 className="wsd-chat-title">Flint Messages</h1>
                          {/* <small>Chat with collaborators on the fly!</small> */}
                        </div>
                      </div>

                      {authContext.user ? (
                        <Avatar img={authContext.user.link} />
                      ) : (
                        <Avatar />
                      )}
                    </div>
                  </div>
                  <div className="wsd-container-chat-banner-2">
                    <div className="chat-wrapper-new">
                      {messages
                        ? messages.map((message, key) => {
                            return (
                              <div key={key.toString()}>
                                <MessageDisp
                                  message={message}
                                  user={authContext.user.email}
                                />
                              </div>
                            );
                          })
                        : null}
                    </div>
                  </div>
                  <div className="wsd-container-chat-banner-3">
                    <input
                      type="text"
                      className="chat-message-input"
                      placeholder="Type a message"
                      // value
                    />
                    <svg
                      className="icon chat-send-icon pointer"
                      stroke="white"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1.3em"
                      width="1.3em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>

        <Slide direction={"right"} duration={2000}>
          {msgSec ? (
            <div>
              {authContext.user.p != false ? (
                <div className="wsd-container-right-2">
                  <div className="wsd-container-right-2-sec-1">
                    <h1 className="wsd-continer-right-2-title">
                      Flint Messages
                    </h1>
                    <p>Chat with collaborators on the fly!!</p>
                  </div>
                  <img className="wsd-container-right-2-img" src={IMG_1} />
                  <div className="wsd-container-right-2-sec-3">
                    <h1 className="wsd-container-right-2-sec-3-title">
                      Increase your productivity with Flint Essential Features
                    </h1>
                    <div>
                      <strong className="wsd-container-right-2-tag">
                        Flint Essential Includes
                      </strong>
                      <p>Premium Collaborative Features</p>
                      <p>Flint Messages</p>
                    </div>

                    <button
                      className="wsd-container-right-2-btn"
                      onClick={() => navigate("/subscriptionpage")}
                    >
                      Get Flint Premium
                    </button>
                  </div>
                </div>
              ) : (
                <div className="wsd-container-right">
                  <div className="wsd-container-chat-banner-wrapper">
                    <div className="wsd-container-chat-banner-1">
                      <div className="wsd-container-chat-banner-1-sec-1">
                        <svg
                          onClick={() => {
                            setMsgSec(!msgSec);
                          }}
                          className="icon chat-back-icon pointer"
                          stroke="white"
                          fill="white"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
                        </svg>
                        <div className="wsd-container-chat-title">
                          <h1 className="wsd-chat-title">Flint Messages</h1>
                          {/* <small>Chat with collaborators on the fly!</small> */}
                        </div>
                      </div>

                      {authContext.user ? (
                        <Avatar img={authContext.user.link} />
                      ) : (
                        <Avatar />
                      )}
                    </div>
                  </div>
                  <div className="wsd-container-chat-banner-2">
                    <div className="chat-wrapper-new">
                      {messages
                        ? messages.map((message, key) => {
                            return (
                              <div key={key.toString()}>
                                <MessageDisp
                                  message={message}
                                  user={authContext.user.email}
                                />
                              </div>
                            );
                          })
                        : null}
                    </div>
                  </div>

                  <div className="wsd-container-chat-banner-3">
                    <input
                      type="text"
                      className="chat-message-input"
                      placeholder="Type a message"
                      // value
                    />
                    <svg
                      className="icon chat-send-icon pointer"
                      stroke="white"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1.3em"
                      width="1.3em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </Slide>
      </div>
    </div>
  );
};

export default WorkspaceDisplay;
