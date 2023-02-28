import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditProject from "../popups/newProject/EditProject";
import "./Project.css";

const Project = ({ project }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEdit = () => {
    setShowEditPopup((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    let projects = JSON.parse(localStorage.getItem("projects"));

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === project.id) {
        projects.splice(i, 1);
      }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {showEditPopup && (
        <EditProject
          setShowEditPopup={setShowEditPopup}
          projectId={project.id}
          project={project}
        />
      )}
      <div className="project-view grid-view box-shadow">
        <Link
          to={`/projects/${project.id}`}
          className="project-page__link"
        ></Link>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "0.25rem",
          }}
        >
          <div className="gap-sm" style={{ marginBottom: "1.5em" }}>
            <div className="project-view__status">{project.projectStatus}</div>
            <h3 className="fw-bold" style={{ lineHeight: "1.1" }}>
              {project.projectName}
            </h3>
            <div className="project-view__client">
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
                  d="M1.688 15.75h14.624m-13.5-13.5v13.5m7.876-13.5v13.5m4.5-10.125V15.75M5.062 5.062h.563m-.563 2.25h.563m-.563 2.25h.563m2.25-4.5h.563m-.563 2.25h.563m-.563 2.25h.563M5.062 15.75v-2.531c0-.466.378-.844.844-.844h1.688c.466 0 .843.378.843.844v2.531M2.25 2.25h9m-.563 3.375h5.063m-2.813 2.813h.006v.005h-.005v-.005Zm0 2.25h.006v.005h-.005v-.005Zm0 2.25h.006v.005h-.005v-.005Z"
                />
              </svg>
              <span className="fs-body-sm">{project.clientName}</span>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="project-view__menu"
              onClick={(e) => setShowMenu((prev) => !prev)}
            >
              <span className="visually-hidden">Project View Menu</span>
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
        <div className="project-view__due-date">
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
          <span className="fs-body-sm">{project.endDate}</span>
        </div>
      </div>
    </>
  );
};

export default Project;
