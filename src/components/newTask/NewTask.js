import React, { useState } from "react";

const NewTask = ({ setShowPopup }) => {
  const [taskStatuses, setTaskStatuses] = useState([
    "Not Started",
    "In Progress",
    "Completed",
  ]);
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskNote, setTaskNote] = useState("");

  return (
    <div className="popup-backdrop">
      <div className="new-task popup gap">
        <h2 className="fw-bold fs-body-lg">Task Details</h2>
        <div className="input-field">
          <label htmlFor="task-name" className="fs-body-sm text-neutral-700">
            Task Name
          </label>
          <input
            type="text"
            id="task-name"
            placeholder="Create a landing page"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="task-status" className="fs-body-sm text-neutral-700">
            Task Status
          </label>
          <select
            name="task-status"
            id="task-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="default" selected disabled>
              Select Status
            </option>
            {taskStatuses.map((status) => (
              <option value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="due-date" className="fs-body-sm text-neutral-700">
            Due Date
          </label>
          <input
            type="date"
            name="due-date"
            id="due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="task-note" className="fs-body-sm text-neutral-700">
            Task Note
          </label>
          <textarea
            name="task-note"
            id="task-note"
            cols="20"
            rows="5"
            placeholder="Add details..."
            value={taskNote}
            onChange={(e) => setTaskNote(e.target.value)}
          ></textarea>
        </div>

        <div
          className="flex"
          style={{ gap: "0.5rem", justifyContent: "end", marginTop: "1.5em" }}
        >
          <button
            className="btn--cancel"
            onClick={(e) => setShowPopup((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="btn--add">Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
