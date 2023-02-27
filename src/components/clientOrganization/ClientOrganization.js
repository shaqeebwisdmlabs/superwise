import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import Contact from "../contact/Contact";
import NewContact from "../popups/newContact/NewContact";
import "./ClientOrganization.css";

const ClientOrganization = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <NewContact setShowPopup={setShowPopup} />}
      <div className="client-organization | bg-neutral-100 box-shadow">
        <div className="organization">
          <div
            className="organization__info | flex"
            style={{ alignItems: "center", gap: "0.5rem" }}
          >
            <div className="organization__logo">
              <img
                src="https://source.unsplash.com/random/?abstract"
                alt="org logo"
              />
            </div>
            <h3 className="fw-bold fs-body-lg" style={{ lineHeight: "1.1" }}>
              Organization Name
            </h3>
          </div>
          <div className="flex" style={{ alignItems: "center", gap: "0.5rem" }}>
            <button
              className="btn--add org-btn | flex"
              onClick={(e) => setShowPopup((prev) => !prev)}
            >
              <img src={plus} alt="plus sign" />
              <span>Add Contact</span>
            </button>
            <button className="organization__menu">
              <span className="visually-hidden">Organization Menu</span>
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
        <div className="contacts">
          <Contact />
          <Contact />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ClientOrganization;
