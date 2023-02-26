import React from "react";
import plus from "../../assets/plus.svg";
import Task from "../task/Task";
import "./ProjectProgress.css";

const ProjectProgress = () => {
  return (
    <div className="project-progress">
      <button className="btn--add | flex">
        <img src={plus} alt="plus sign" />
        <span>New Task</span>
      </button>
      <div className="all-tasks">
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default ProjectProgress;
