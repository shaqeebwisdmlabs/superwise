import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import NewTask from "../newTask/NewTask";
import Task from "../task/Task";
import "./ProjectProgress.css";

const ProjectProgress = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <NewTask setShowPopup={setShowPopup} />}
      <div className="project-progress">
        <button
          className="btn--add | flex"
          onClick={(e) => setShowPopup((prev) => !prev)}
        >
          <img src={plus} alt="plus sign" />
          <span>New Task</span>
        </button>
        <div className="all-tasks">
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
};

export default ProjectProgress;
