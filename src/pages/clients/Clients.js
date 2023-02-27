import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import ClientOrganization from "../../components/clientOrganization/ClientOrganization";
import NewClientOrganization from "../../components/popups/newClientOrganization/NewClientOrganization";
import "./Clients.css";
import clientData from "../../utils/data/clientData";

const Client = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <NewClientOrganization setShowPopup={setShowPopup} />}
      <main className="clients">
        <header className="clients__header">
          <h1 className="fw-bold fs-title">Client Organizations</h1>
          <button
            className="btn--add | flex"
            onClick={(e) => setShowPopup((prev) => !prev)}
          >
            <img src={plus} alt="plus sign" />
            <span>New Client Organization</span>
          </button>
        </header>
        <div className="all-clients">
          {clientData.map((client) => {
            return <ClientOrganization key={client.id} client={client} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Client;
