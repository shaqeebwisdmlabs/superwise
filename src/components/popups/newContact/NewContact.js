import React, { useState } from "react";

const NewContact = ({ setShowPopup }) => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  return (
    <div className="popup-backdrop">
      <div className="new-contact popup gap">
        <h2 className="fw-bold fs-body-lg">New Client Contact</h2>
        <div className="input-field">
          <label htmlFor="client-name" className="fs-body-sm text-neutral-700">
            Client Name
          </label>
          <input
            type="text"
            id="client-name"
            placeholder="Full Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="client-email" className="fs-body-sm text-neutral-700">
            Email Address
          </label>
          <input
            type="email"
            id="client-email"
            placeholder="example@domain.com"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
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
          <button className="btn--add">Add</button>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
