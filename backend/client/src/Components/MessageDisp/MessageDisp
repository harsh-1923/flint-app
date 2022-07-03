import React from "react";
import "./messagedisp.css";
import Avatar from "../Avatar/Avatar.jsx";

const MessageDisp = ({ message, color, useremail }) => {
  const side = message.email == useremail ? "rowReverse" : "row";

  return (
    <div style={{ side }} className="message-disp-wrapper">
      <div className="message-left">
        <Avatar img={message.url} />
      </div>
      <div className="message-right" style={{ flexDirection: side }}>
        <div className="message-name">{message.name}</div>
        <small className="message-text">{message.msg}</small>
      </div>
    </div>
  );
};

export default MessageDisp;
