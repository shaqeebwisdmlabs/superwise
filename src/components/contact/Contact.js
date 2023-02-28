import React, { useEffect, useState } from "react";
import EditContact from "../popups/newContact/EditContact";
import NewContact from "../popups/newContact/NewContact";
import "./Contact.css";

const Contact = ({ contact }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [clients, setClients] = useState([]);

  const getClientId = (clients) => {
    for (let i = 0; i < clients.length; i++) {
      for (let j = 0; j < clients[i].contacts.length; j++) {
        if (clients[i].contacts[j].id === contact.id) {
          return clients[i].id;
        }
      }
    }
  };

  let clientId;
  const handleEdit = () => {
    clientId = getClientId(clients);
    setShowEditPopup((prev) => !prev);
  };

  const handleDelete = () => {
    let organizations = JSON.parse(localStorage.getItem("organizations"));

    for (let i = 0; i < organizations.length; i++) {
      for (let j = 0; j < organizations[i].contacts.length; j++) {
        if (organizations[i].contacts[j].id === contact.id) {
          organizations[i].contacts.splice(j, 1);
        }
      }
    }

    localStorage.setItem("organizations", JSON.stringify(organizations));
  };

  useEffect(() => {
    setClients(JSON.parse(localStorage.getItem("organizations")));
  }, [localStorage.getItem("organizations")]);

  return (
    <>
      {showPopup && (
        <NewContact setShowPopup={setShowPopup} clientId={clientId} />
      )}
      {showEditPopup && (
        <EditContact
          setShowEditPopup={setShowEditPopup}
          clientContact={contact}
        />
      )}
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
          <div className="dropdown">
            <button
              className="contact__menu"
              onClick={(e) => setShowMenu((prev) => !prev)}
            >
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
      </div>
    </>
  );
};

export default Contact;
