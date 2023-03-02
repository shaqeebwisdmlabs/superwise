import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import EmptyState from "../emptyState/EmptyState";
import NewTask from "../newTask/NewTask";
import Task from "../task/Task";
import "./ProjectProgress.css";

const ProjectProgress = ({ tasks, projectId }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <NewTask setShowPopup={setShowPopup} projectId={projectId} />
      )}
      <div className="project-progress">
        <button
          className="btn--add | flex"
          onClick={(e) => setShowPopup((prev) => !prev)}
        >
          <img src={plus} alt="plus sign" />
          <span>New Task</span>
        </button>
        {tasks && tasks.length > 0 ? (
          <div className="all-tasks">
            {tasks.map((task) => {
              return <Task task={task} key={task.id} projectId={projectId} />;
            })}
          </div>
        ) : (
          <EmptyState
            title={"No Tasks in your project progress"}
            button={"New Task"}
            message={"to add a new task."}
          />
        )}
      </div>
    </>
  );
};

export default ProjectProgress;
