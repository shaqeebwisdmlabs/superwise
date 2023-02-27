import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import Document from "../document/Document";
import NewDocument from "../newDocument/NewDocument";
import "./Documents.css";

const Documents = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <NewDocument setShowPopup={setShowPopup} />}
      <div className="documents">
        <button
          className="btn--add | flex"
          onClick={(e) => setShowPopup((prev) => !prev)}
        >
          <img src={plus} alt="plus sign" />
          <span>New Document</span>
        </button>
        <div className="all-documents">
          <Document />
          <Document />
          <Document />
        </div>
      </div>
    </>
  );
};

export default Documents;
