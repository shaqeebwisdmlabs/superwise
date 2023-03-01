import React from "react";

const Status = ({ status }) => {
  {
    return status.toLowerCase() === "in progress" ? (
      <div className="status in-progress">
        <span>In Progress</span>
      </div>
    ) : status.toLowerCase() === "not started" ? (
      <div className="status not-started">
        <span>Not Started</span>
      </div>
    ) : (
      <div className="status completed">
        <span>Completed</span>
      </div>
    );
  }
};

export default Status;
