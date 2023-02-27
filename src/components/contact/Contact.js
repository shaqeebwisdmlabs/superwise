import React from "react";
import "./Contact.css";

const Contact = ({ contact }) => {
  return (
    <div className="contact">
      <div className="contact__details">
        <p className="fw-medium fs-body-sm" style={{ lineHeight: "1.3" }}>
          {contact.name}
        </p>
        <p className="fs-body-sm text-neutral-700">{contact.email}</p>
      </div>
      <div className="flex" style={{ alignItems: "center", gap: "0.5rem" }}>
        <button className="btn--invite">
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
              d="M4.5 9 2.452 2.344A44.825 44.825 0 0 1 16.114 9a44.826 44.826 0 0 1-13.662 6.657L4.5 9Zm0 0h5.625"
            />
          </svg>
          <span>Invite</span>
        </button>
        <button className="contact__menu">
          <span className="visually-hidden">Contact Menu</span>
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
    </div>
  );
};

export default Contact;
