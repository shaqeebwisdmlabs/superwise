import React, { useRef, useState } from "react";
import getId from "../../utils/generateId";
import "./NewDocument.css";

const NewDocument = ({ setShowPopup, projectId }) => {
  const [documentName, setDocumentName] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const fileInput = useRef(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(file);
      setUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!documentName || !file) {
      alert("All field is required");
      return;
    }

    let docObj = {
      id: getId(),
      docName: documentName,
      docUrl: url,
    };

    console.log(docObj);

    let projects = JSON.parse(localStorage.getItem("projects"));

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        projects[i].documents.push(docObj);
      }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    setShowPopup((prev) => !prev);
    window.location.reload();
  };

  return (
    <div className="popup-backdrop">
      <div className="new-document popup gap">
        <h2 className="fw-bold fs-body-lg">Upload Document</h2>
        <div className="input-field">
          <label
            htmlFor="document-name"
            className="fs-body-sm text-neutral-700"
          >
            Document Name
          </label>
          <input
            type="text"
            id="document-name"
            placeholder="Project Brief"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
          />
        </div>
        <div className="document__upload gap" style={{ marginTop: "1em" }}>
          <button className="btn--upload" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.25 12.375v1.688c0 .931.756 1.687 1.688 1.687h10.124c.933 0 1.688-.755 1.688-1.688v-1.687M5.625 5.625 9 2.25m0 0 3.375 3.375M9 2.25v10.125"
              />
            </svg>
            <span>Upload Document</span>
          </button>
          <input
            type="file"
            name="document"
            id="document"
            onChange={(e) => {
              handleFileChange(e);
            }}
            ref={fileInput}
            style={{ display: "none" }}
          />
          {file && (
            <div className="uploaded-document">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
              >
                <path
                  stroke="#6368E5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M14.625 10.688v-1.97a2.531 2.531 0 0 0-2.531-2.53h-1.125a.844.844 0 0 1-.844-.844V4.219a2.531 2.531 0 0 0-2.531-2.532H6.187m0 9.563h5.625M6.189 13.5H9M7.875 1.687H4.219a.844.844 0 0 0-.844.844V15.47c0 .466.378.844.844.844h9.562a.844.844 0 0 0 .844-.844V8.438a6.75 6.75 0 0 0-6.75-6.75Z"
                />
              </svg>
              <span className="fw-medium fs-body-sm text-primary-400">
                {file.name}
              </span>
            </div>
          )}
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
          <button className="btn--add" onClick={handleSubmit}>
            Add Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDocument;
