import React, { useState } from "react";
import "./NewProject.css";

import clientData from "../../../utils/data/clientData";
import { Link } from "react-router-dom";

const NewProject = ({ setShowPopup }) => {
  const [projectStatuses, setProjectStatuses] = useState([
    "Not Started",
    "In Progress",
    "Completed",
  ]);

  const [projectName, setProjectName] = useState("");
  const [clientOrg, setClientOrg] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

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
            <option value="default" selected disabled>
              Select a Client
            </option>
            {clientData.map((client) => (
              <option value={client.organization}>{client.organization}</option>
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
            <option value="default" selected disabled>
              Select Status
            </option>
            {projectStatuses.map((status) => (
              <option value={status}>{status}</option>
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
            onClick={(e) => setShowPopup((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="btn--add">Add Project</button>
        </div>
      </div>
    </div>
  );
};

export default NewProject;