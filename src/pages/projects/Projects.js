import React, { useState } from "react";
import "./Projects.css";
import plus from "../../assets/plus.svg";
import Project from "../../components/project/Project";
import NewProject from "../../components/popups/newProject/NewProject";

const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <NewProject setShowPopup={setShowPopup} />}
      <main className="projects">
        <header className="projects__header">
          <h1 className="fw-bold fs-title">Projects</h1>
          <button
            className="btn--add | flex"
            onClick={(e) => setShowPopup((prev) => !prev)}
          >
            <img src={plus} alt="plus sign" />
            <span>New Project</span>
          </button>
        </header>
        <div className="all-projects grid-view">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </main>
    </>
  );
};

export default Projects;
