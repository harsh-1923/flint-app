import React, { useState, useEffect, useContext } from "react";
import "./userhome.css";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import Avatar from "../../Components/Avatar/Avatar.jsx";

import { AuthContext } from "../../Context/AuthContext";
import WorkspaceServices from "../../Services/WorkspaceServices";

import WorkspaceCards from "../../Components/Workspace Components/WorkspaceCard/WorkspaceCard.jsx";
import NoteDisp from "../../Components/NoteDisp/NoteDisp.jsx";
import TaskView from "../../Components/TaskView/TaskView.jsx";
import LinkView from "../../Components/LinkView/LinkView.jsx";

const UserHome = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));
  const [section, setSection] = useState(0);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [workspaces, setWorkspaces] = useState(null);
  const [title, setTitle] = useState("");

  const [notes, setNotes] = useState();
  const [links, setLinks] = useState();
  const [todo, setTodo] = useState();

  console.log(authContext.user);

  useEffect(() => {
    getAllWS();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const getAllWS = () => {
    const currUser = JSON.parse(localStorage.getItem("user"));
    console.log(currUser.email);
    const data = { email: currUser.email.toString() };
    WorkspaceServices.getAllWorkSpaces(data).then((res) => {
      setWorkspaces(res.data);
      console.log(workspaces);
    });
  };

  const getAllLinks = () => {
    const data = { email: authContext.user.email };
    WorkspaceServices.getAllLinksOfUser(data).then((l) => {
      setLinks(l.data);
    });
  };

  const getAllNotes = () => {
    const data = { email: authContext.user.email };
    WorkspaceServices.getAllNotesOfUser(data).then((n) => {
      setNotes(n.data);
    });
  };

  const getAllTodo = () => {
    const data = { email: authContext.user.email };
    WorkspaceServices.getAllTodosOfUser(data).then((t) => {
      setTodo(t.data);
    });
  };

  const createWS = () => {
    console.log("clicked");
    const data = { email: authContext.user.email, title };
    WorkspaceServices.createWS(data).then((res) => {
      console.log(res);
      getAllWS();
    });
    console.log(data);
  };

  const logout = () => {
    authContext.setIsAuthenticated(false);
    authContext.setUser(null);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="userhome-wrapper">
      <div className="container">
        <div className="container-left">
          <Slide direction={"left"} cascade={true}>
            <div className="ws-logo">
              <p
                className="ws-logo-bold pointer"
                onClick={() => {
                  setSection(0);
                }}
              >
                Flint
              </p>
              <p className="ws-logo-tag">Workspaces</p>
            </div>

            <div className="ws-options-wrapper">
              <div>
                <div
                  className="ws-options hover pointer"
                  onClick={() => setSection(0)}
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
                  className="ws-options hover pointer"
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
                  className="ws-options hover pointer"
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
                  className="ws-options hover pointer"
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
              </div>
              <div>
                <div
                  style={{ marginTop: "350px" }}
                  className="ws-options hover pointer"
                  onClick={() => logout()}
                >
                  <div className="ws-options-icon">
                    <svg
                      className="icon"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="ws-options-text">Logout</div>
                </div>
                <div
                  className="ws-options hover pointer"
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
                <div
                  className="ws-options hover pointer"
                  onClick={() => setSection(3)}
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
                </div>
              </div>
            </div>
          </Slide>
        </div>

        
        <div className="container-right">
          <div className="banner-1">
            <h1 className="banner-title">Flint workspaces!</h1>
            <div
              className="user-avatar pointer"
              onClick={() => navigate("/profilepage")}
            >
              {/* {authContext.user.username ? (
                <p className="user-name">{authContext.user.username}</p>
              ) : null} */}

              <Avatar className="user-avatar-img" />
            </div>
          </div>
          <div className="mobile-options-banner">
            <div className="ws-options pointer" onClick={() => setSection(0)}>
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
              <div className="ws-options-text mobile-text">Dashboard</div>
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
              <div className="ws-options-text mobile-text">All Notes</div>
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
              <div className="ws-options-text mobile-text">All Tasks</div>
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
              <div className="ws-options-text mobile-text">All Links</div>
            </div>
            <div
              // style={{ marginLeft: "30px" }}
              className="ws-options pointer"
              onClick={() => logout()}
            >
              <div className="ws-options-icon">
                <svg
                  className="icon"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="ws-options-text mobile-text">Logout</div>
            </div>
            <div
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
              <div className="ws-options-text mobile-text">Help</div>
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
              <div className="ws-options-text mobile-text">Report an issue</div>
            </div>
          </div>
          {section === 0 ? (
            <>
              <div className="banner-2">
                <div className="user-avatar-list pointer">
                  <Avatar />
                </div>

                <div className="ws-create">
                  <input
                    style={{ width: "200px" }}
                    className="input create-ws-input"
                    type="text"
                    name="title"
                    placeholder="Enter workspace title"
                    onChange={handleChange}
                    value={title}
                  />
                  <button className="create-ws-btn pointer" onClick={createWS}>
                    Create
                  </button>
                </div>
              </div>

              <div className="ws-display-wrapper">
                <div className="ws-c-1">
                  <div>
                    <p className="ws-title">All workspaces</p>
                  </div>
                  <button className="create-ws-btn pointer" onClick={getAllWS}>
                    Refresh dashboard
                  </button>
                </div>
                <div className="ws-test">
                  {workspaces
                    ? workspaces
                        .map((ws, key) => {
                          // console.log(ws, key);
                          return (
                            <div
                              onClick={() => {
                                navigate(`/${ws.uID}`);
                              }}
                              key={key.toString()}
                            >
                              <WorkspaceCards workspace={ws} />
                            </div>
                          );
                        })
                        .reverse()
                    : null}
                </div>
              </div>
            </>
          ) : section === 1 ? (
            <div className="link-wrapper">
              <p className="link-wrapper-title">Notes</p>
              <div className="userhome-note-display-wrapper">
                {notes
                  ? notes.map((t, key) => {
                      return (
                        <div key={key.toString()}>
                          <NoteDisp note={t} />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          ) : section === 2 ? (
            <div className="task-wrapper">
              <p className="link-wrapper-title">All Tasks</p>
              {todo
                ? todo.map((t, key) => {
                    return (
                      <div key={key.toString()}>
                        <TaskView task={t} />
                      </div>
                    );
                  })
                : null}
            </div>
          ) : (
            <div className="link-wrapper">
              <p className="link-wrapper-title">All Links</p>
              {links
                ? links.map((t, key) => {
                    return (
                      <div key={key.toString()}>
                        <LinkView link={t} />
                      </div>
                    );
                  })
                : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
