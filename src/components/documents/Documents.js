import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import Document from "../document/Document";
import NewDocument from "../newDocument/NewDocument";
import "./Documents.css";

const Documents = ({ documents, projectId }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <NewDocument setShowPopup={setShowPopup} projectId={projectId} />
      )}
      <div className="documents">
        <button
          className="btn--add | flex"
          onClick={(e) => setShowPopup((prev) => !prev)}
        >
          <img src={plus} alt="plus sign" />
          <span>New Document</span>
        </button>
        {documents && documents.length > 0 && (
          <div className="all-documents">
            {documents.map((document) => {
              return (
                <Document
                  document={document}
                  key={document.id}
                  projectId={projectId}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Documents;
