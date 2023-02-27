import React, { useState } from "react";
import Discussion from "../../components/discussion/Discussion";
import Documents from "../../components/documents/Documents";
import ProjectProgress from "../../components/projectProgress/ProjectProgress";
import "./ProjectPage.css";

const ProjectPage = () => {
  const [currTab, setCurrTab] = useState("project-progress");

  return (
    <main className="project-page">
      <div className="project__overview | bg-neutral-900 text-neutral-100">
        <div className="gap-sm">
          <div className="flex" style={{ alignItems: "center", gap: "0.5rem" }}>
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
            <p className="fw-bold">Demo Client</p>
          </div>
          <div className="project__name | flex">
            <h1 className="fw-bold fs-title">Website Development</h1>
            <div className="project__status">In Progress</div>
          </div>
          <div className="project__description">
            <p
              className="fs-body-sm"
              style={{
                color: "hsl(var(--clr-neutral-100),0.7)",
                maxWidth: "75ch",
              }}
            >
              Blandit nunc tortor aenean ligula pellentesque integer iaculis
              sed. Egestas turpis mauris tortor id iaculis enim porta. Arcu id
              pharetra dui justo ac sagittis.
            </p>
          </div>
          <div className="project__timeline">
            <p className="fw-semi-bold fs-body-sm">20 Jan 2023 - 15 Feb 2023</p>
          </div>
        </div>
        <button className="project__menu">
          <span className="visually-hidden">Project View Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button>
      </div>
      <div className="project__details">
        <div className="project__tabs">
          <div
            className={
              currTab === "project-progress"
                ? "project-progress-tab tab current"
                : "project-progress-tab tab"
            }
            onClick={() => setCurrTab("project-progress")}
          >
            <span>Project Progress</span>
          </div>
          <div
            className={
              currTab === "documents"
                ? "documents-tab tab current"
                : "documents-tab tab"
            }
            onClick={() => setCurrTab("documents")}
          >
            <span>Documents</span>
          </div>
          <div
            className={
              currTab === "discussion"
                ? "discussion-tab tab current"
                : "discussion-tab tab"
            }
            onClick={() => setCurrTab("discussion")}
          >
            <span>Discussion</span>
          </div>
        </div>
        {currTab === "project-progress" ? (
          <ProjectProgress />
        ) : currTab === "documents" ? (
          <Documents />
        ) : (
          <Discussion />
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
