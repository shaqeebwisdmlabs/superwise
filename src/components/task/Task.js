import React from "react";
import "./Task.css";

const Task = () => {
  return (
    <div className="task | bg-neutral-100 box-shadow">
      <h3 className="fw-bold" style={{ gridArea: "task-name" }}>
        Kickoff Meeting
      </h3>
      <div
        className="task__status"
        style={{ gridArea: "task-status", justifyContent: "end" }}
      >
        <span>In Progress</span>
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
        <span>10 Mar 2023</span>
      </div>
      <button className="task__menu" style={{ gridArea: "task-menu" }}>
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
    </div>
  );
};

export default Task;
