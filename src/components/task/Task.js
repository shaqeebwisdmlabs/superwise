import React, { useState } from "react";
import EditTask from "../newTask/EditTask";
import Status from "../statuses/Status";
import "./Task.css";

const Task = ({ task, projectId }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEdit = () => {
    setShowEditPopup((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    let projects = JSON.parse(localStorage.getItem("projects"));

    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].tasks.length; j++) {
        if (projects[i].tasks[j].id === task.id) {
          projects[i].tasks.splice(j, 1);
        }
      }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    setShowMenu((prev) => !prev);
    window.location.reload();
  };

  return (
    <>
      {showEditPopup && (
        <EditTask
          setShowEditPopup={setShowEditPopup}
          projectId={projectId}
          task={task}
        />
      )}
      <div className="task | bg-neutral-100 box-shadow">
        <h3 className="fw-bold" style={{ gridArea: "task-name" }}>
          {task.taskName}
        </h3>
        <div className="task-status" style={{ gridArea: "task-status" }}>
          <Status status={task.taskStatus} />
        </div>
        <div
          className="task__due-date fs-body-sm"
          style={{ gridArea: "due-date" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
          >
            <path
              stroke="#6B7280"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5.063 2.25v1.688m7.875-1.688v1.688M2.25 14.062V5.626c0-.932.756-1.688 1.688-1.688h10.124c.933 0 1.688.756 1.688 1.688v8.438m-13.5 0c0 .931.756 1.687 1.688 1.687h10.124c.933 0 1.688-.755 1.688-1.688m-13.5 0V8.439c0-.932.756-1.688 1.688-1.688h10.124c.933 0 1.688.756 1.688 1.688v5.624M9 9.563h.006v.006H9v-.005Zm0 1.688h.006v.006H9v-.006Zm0 1.688h.006v.005H9v-.005ZM7.312 11.25h.006v.006h-.005v-.006Zm0 1.688h.006v.005h-.005v-.005ZM5.625 11.25h.006v.006h-.006v-.006Zm0 1.688h.006v.005h-.006v-.005Zm5.063-3.376h.005v.006h-.005v-.005Zm0 1.688h.005v.006h-.005v-.006Zm0 1.688h.005v.005h-.005v-.005Zm1.687-3.376h.006v.006h-.006v-.005Zm0 1.688h.006v.006h-.006v-.006Z"
            />
          </svg>
          <span>{task.dueDate}</span>
        </div>
        <div className="dropdown">
          <button
            className="task__menu"
            style={{ gridArea: "task-menu" }}
            onClick={(e) => setShowMenu((prev) => !prev)}
          >
            <span className="visually-hidden">Task Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#1D1A26"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
          {showMenu && (
            <ul className="dropdown-menu box-shadow" role="menu">
              <li className="menu-item" onClick={handleEdit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                >
                  <path
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m12.646 3.365 1.266-1.266A1.406 1.406 0 1 1 15.9 4.09l-7.964 7.963a3.375 3.375 0 0 1-1.423.848l-2.014.6.6-2.014c.16-.537.451-1.026.848-1.423l6.698-6.698Zm0 0 1.979 1.979M13.5 10.5v3.563c0 .931-.755 1.687-1.688 1.687H3.939a1.687 1.687 0 0 1-1.688-1.688V6.188c0-.931.756-1.687 1.688-1.687H7.5"
                  />
                </svg>
                <span>Edit</span>
              </li>
              <li className="menu-item" onClick={handleDelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                >
                  <path
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m11.055 6.75-.26 6.75m-3.59 0-.26-6.75m7.476-2.407c.256.039.512.08.767.124m-.767-.124-.801 10.411c-.068.88-.8 1.559-1.683 1.559H6.063a1.688 1.688 0 0 1-1.683-1.559l-.8-10.411m10.84 0c-.86-.13-1.729-.23-2.607-.297m-9 .421c.254-.044.51-.085.766-.124m0 0c.86-.13 1.73-.23 2.608-.297m5.625 0v-.687c0-.885-.682-1.623-1.567-1.652a38.942 38.942 0 0 0-2.49 0c-.885.029-1.567.767-1.567 1.652v.687m5.625 0a36.504 36.504 0 0 0-5.626 0"
                  />
                </svg>
                <span>Delete</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Task;
