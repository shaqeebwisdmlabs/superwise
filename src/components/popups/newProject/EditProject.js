import React, { useCallback, useEffect, useState } from "react";
import "./NewProject.css";
import { Link } from "react-router-dom";

const EditProject = ({ setShowEditPopup, project }) => {
  const projectStatuses = ["Not Started", "In Progress", "Completed"];
  const [projectName, setProjectName] = useState(project.projectName);
  const [clientOrg, setClientOrg] = useState(project.clientName);
  const [status, setStatus] = useState(project.projectStatus);
  const [startDate, setStartDate] = useState(project.startDate);
  const [endDate, setEndDate] = useState(project.endDate);
  const [projectDesc, setProjectDesc] = useState(project.projectDescription);

  const [clients, setClients] = useState([]);

  const getData = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("organizations"));
    setClients(data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    if (
      !projectName ||
      !clientOrg ||
      !status ||
      !startDate ||
      !endDate ||
      !projectDesc
    )
      alert("All field is required");

    let projects = JSON.parse(localStorage.getItem("projects"));
    if (!projects) projects = [];

    let projectObj = {
      id: project.id,
      projectName: projectName,
      projectStatus: status,
      clientName: clientOrg,
      startDate: startDate,
      endDate: endDate,
      projectDescription: projectDesc,
      tasks: [],
      documents: [],
    };

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === project.id) {
        projects[i] = projectObj;
      }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    setShowEditPopup((prev) => !prev);
  };

  return (
    <div className="popup-backdrop">
      <div className="new-project popup gap">
        <h2 className="fw-bold fs-body-lg">Project Details</h2>
        <div className="input-field">
          <label htmlFor="project-name" className="fs-body-sm text-neutral-700">
            Project Name
          </label>
          <input
            type="text"
            id="project-name"
            placeholder="Website Development"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="client-org" className="fs-body-sm text-neutral-700">
            Client Organization
          </label>
          <select
            name="client-org"
            id="client-org"
            value={clientOrg}
            onChange={(e) => setClientOrg(e.target.value)}
          >
            <option value="default" disabled>
              Select a Client
            </option>
            {clients.map((client, index) => (
              <option value={client.organization} key={index}>
                {client.organization}
              </option>
            ))}
          </select>
          <Link to="/clients" className="fs-body-x-sm text-primary-400">
            Create a new client organization
          </Link>
        </div>
        <div className="input-field">
          <label
            htmlFor="project-status"
            className="fs-body-sm text-neutral-700"
          >
            Project Status
          </label>
          <select
            name="project-status"
            id="project-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="default" disabled>
              Select Status
            </option>
            {projectStatuses.map((status, index) => (
              <option value={status} key={index}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div
          className="project-timeline flex"
          style={{ alignItems: "center", gap: "1rem" }}
        >
          <div className="input-field">
            <label htmlFor="start-date" className="fs-body-sm text-neutral-700">
              Start Date
            </label>
            <input
              type="date"
              name="start-date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="end-date" className="fs-body-sm text-neutral-700">
              End Date
            </label>
            <input
              type="date"
              name="end-date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="project-desc" className="fs-body-sm text-neutral-700">
            Project Description
          </label>
          <textarea
            name="project-desc"
            id="project-desc"
            cols="20"
            rows="5"
            placeholder="Add a short description..."
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
          ></textarea>
        </div>

        <div
          className="flex"
          style={{ gap: "0.5rem", justifyContent: "end", marginTop: "1.5em" }}
        >
          <button
            className="btn--cancel"
            onClick={(e) => setShowEditPopup((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="btn--add" onClick={handleSubmit}>
            Update Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
