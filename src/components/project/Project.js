import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = () => {
  const id = 35;

  return (
    <div className="project-view grid-view box-shadow">
      <Link to={`/projects/${id}`} className="project-page__link"></Link>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "0.25rem",
        }}
      >
        <div className="gap-sm" style={{ marginBottom: "1.5em" }}>
          <div className="project-view__status">In Progress</div>
          <h3 className="fw-bold" style={{ lineHeight: "1.1" }}>
            Website Development
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
            <span className="fs-body-sm">Demo Client</span>
          </div>
        </div>
        <button className="project-view__menu">
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
        <span className="fs-body-sm">15 Feb 2023</span>
      </div>
    </div>
  );
};

export default Project;
