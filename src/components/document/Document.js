import React, { useState } from "react";
import EditDocument from "../newDocument/EditDocument";
import "./Document.css";

const Document = ({ document, projectId }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEdit = () => {
    setShowEditPopup((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    let projects = JSON.parse(localStorage.getItem("projects"));
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].documents.length; j++) {
        if (projects[i].documents[j].id === document.id) {
          projects[i].documents.splice(j, 1);
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
        <EditDocument
          setShowEditPopup={setShowEditPopup}
          projectId={projectId}
          document={document}
        />
      )}
      <div className="document | bg-neutral-100 box-shadow">
        <a href={document.docUrl} download className="document__download">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1.25 11.375v1.688c0 .931.756 1.687 1.688 1.687h10.124c.933 0 1.688-.755 1.688-1.688v-1.687M11.375 8 8 11.375m0 0L4.625 8M8 11.375V1.25"
            />
          </svg>
        </a>
        <div className="document__image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
          >
            <path
              fill="#ABABAB"
              d="M11.25 3A3.75 3.75 0 0 0 7.5 6.75v34.5A3.75 3.75 0 0 0 11.25 45h25.5a3.75 3.75 0 0 0 3.75-3.75V25.5A7.5 7.5 0 0 0 33 18h-3.75a3.75 3.75 0 0 1-3.75-3.75V10.5A7.5 7.5 0 0 0 18 3h-6.75Z"
            />
            <path
              fill="#ABABAB"
              d="M25.942 3.632A10.46 10.46 0 0 1 28.5 10.5v3.75c0 .414.336.75.75.75H33c2.626 0 5.027.964 6.868 2.558A19.535 19.535 0 0 0 25.942 3.632Z"
            />
          </svg>
        </div>
        <div
          className="flex"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.5em",
          }}
        >
          <p className="fw-semi-bold fs-body-sm">{document.docName}</p>
          <div className="dropdown">
            <button
              className="document__menu"
              onClick={(e) => setShowMenu((prev) => !prev)}
            >
              <span className="visually-hidden">Document Menu</span>
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
      </div>
    </>
  );
};

export default Document;
