import React from "react";
import plus from "../../assets/plus.svg";
import "./Documents.css";

const Documents = () => {
  return (
    <div className="documents">
      <button className="btn--add | flex">
        <img src={plus} alt="plus sign" />
        <span>New Document</span>
      </button>
      <div className="all-documents"></div>
    </div>
  );
};

export default Documents;
