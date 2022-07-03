import React from "react";
import "./NoteDisp.css";

const NoteDisp = ({ note }) => {
  // console.log(note);
  return (
    <div className="notedisp-wrapper">
      <div className="note-banner-1">
        <p className="note-disp-title">{note.title}</p>
        <div className="note-disp-menu">
          <svg
            className="icon pointer"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"></path>
            </g>
          </svg>
        </div>
      </div>

      <div className="note-banner-2">
        <p className="note-disp-creator">
          created by <strong className="highlight pointer">Harsh Sharma</strong>
        </p>
      </div>

      <div className="note-banner-3">
        <p className="note-disp-content">{note.content}</p>
      </div>
    </div>
  );
};

export default NoteDisp;

// {note ? (
//   <div>
//     <div className="note-banner-1">
//       <h3 className="note-disp-title">{note.title}</h3>
//       <svg
//         className="note-disp-icon pointer"
//         stroke="currentColor"
//         fill="none"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         height="1em"
//         width="1em"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
//         <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
//       </svg>
//     </div>

//     <p className="note-disp-content">{note.content}</p>
//   </div>
// ) : null}
