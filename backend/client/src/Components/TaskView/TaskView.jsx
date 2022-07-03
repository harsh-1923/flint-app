import React from "react";
import "./TaskView.css";
import { useNavigate } from "react-router-dom";

const TaskView = ({ task }) => {
  // console.log(task);
  const navigate = useNavigate();

  return (
    <div className="tv-wrapper">
      <label class="form-control">
        <input className="check" type="checkbox" name="checkbox" />
      </label>
      <div className="yu">
        <p className="task-title">
          {task ? task.task : "No tasks to complete"}
        </p>
      </div>
      <svg
        onClick={() => navigate(`/${task.workspaceID}`)}
        className="icon"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#000"
          strokeWidth="2"
          d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"
        ></path>
      </svg>
    </div>
  );
};

export default TaskView;

// onClick={() => navigate(`/${task.workspaceID}`)}

{
  /* <svg
        className="icon tv-icon"
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
      </svg> */
}
