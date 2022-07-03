import React, { useEffect, useState } from "react";
import "./workspaceCard.css";

import Avatar from "../../../Components/Avatar/Avatar.jsx";
import A_ONE from "../../../assets/A_ONE.png";

import WorkServices from "../../../Services/WorkspaceServices.js";

const WorkspaceCard = (ws) => {
  const { workspace } = ws;
  const [disp, setDisp] = useState();
  const [coll, setColl] = useState();

  // useEffect(() => {
  //   dispDate();
  //   getAllCollaborators();
  // }, [workspace]);

  // const getAllCollaborators = () => {
  //   const data = { workspaceID: workspace.uID };
  //   WorkServices.getAllCollaborators(data).then((data) => {
  //     setColl(data.data);
  //   });
  // };

  // const deleteWS = () => {
  //   console.log("clicked");
  //   const data = { _id: workspace._id };
  //   WorkServices.deleteWS(data).then((res) => console.log(res));
  // };

  const dispDate = () => {
    const newDate = new Date(workspace.timestamp);
    setDisp(
      newDate.getDate().toString() +
        " " +
        newDate.getMonth().toString() +
        " " +
        newDate.getFullYear()
    );
  };

  return (
    <div className="workspaceCard-wrapper">
      <div>
        <div className="wsc-level-1">
          <p className="ws-cards-title">{ws.workspace.title}</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16,2H8C4.691,2,2,4.691,2,8v12c0,0.552,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M20,15 c0,2.206-1.794,4-4,4H4V8c0-2.206,1.794-4,4-4h8c2.206,0,4,1.794,4,4V15z"></path>
            <circle cx="9.5" cy="11.5" r="1.5"></circle>
            <circle cx="14.5" cy="11.5" r="1.5"></circle>
          </svg>
        </div>
        <div className="wsc-level-2">
          {/* <p>{coll ? coll.length : "Fetching"} collaborators</p> */}
          <div>
            {" "}
            {/* {workspace.collaborators.length > 0
              ? workspace.collaborators.map((coll, key) => {
                  return (
                    <div key={key.toString()}>
                      {" "}
                      <Avatar img={A_ONE} />
                    </div>
                  );
                })
              : null} */}
          </div>
        </div>
      </div>

      <div className="wsc-level-3">
        <p>{disp ? disp : "fetching"}</p>
        <svg
          // onClick={deleteWS}
          className="icon pointer"
          stroke="white"
          fill="white"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path>
        </svg>
      </div>
    </div>
  );
};

export default WorkspaceCard;
