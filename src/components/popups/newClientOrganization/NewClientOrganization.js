import React, { useState } from "react";
import getId from "../../../utils/generateId";
import "./NewClientOrganization.css";

const NewClientOrganization = ({ setShowPopup }) => {
  const [organizationName, setOrganizationName] = useState("");

  const handleSubmit = () => {
    if (!organizationName) alert("Organization Name is required");

    let organizations = JSON.parse(localStorage.getItem("organizations"));
    if (!organizations) organizations = [];

    let orgObj = {
      id: getId(),
      organization: organizationName,
      contacts: [],
    };

    organizations.push(orgObj);
    localStorage.setItem("organizations", JSON.stringify(organizations));
    setShowPopup((prev) => !prev);
  };

  return (
    <div className="popup-backdrop">
      <div className="new-client-org popup gap">
        <h2 className="fw-bold fs-body-lg">Add New Client</h2>
        <div className="input-field">
          <label htmlFor="new-client" className="fs-body-sm text-neutral-700">
            Client Organization Name
          </label>
          <input
            type="text"
            id="new-client"
            placeholder="Wisdmlabs"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />
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
            Add Organization
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewClientOrganization;
