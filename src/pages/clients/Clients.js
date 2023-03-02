import React, { useEffect, useState } from "react";
import plus from "../../assets/plus.svg";
import ClientOrganization from "../../components/clientOrganization/ClientOrganization";
import EmptyState from "../../components/emptyState/EmptyState";
import Navbar from "../../components/navbar/Navbar";
import NewClientOrganization from "../../components/popups/newClientOrganization/NewClientOrganization";
import "./Clients.css";

const Client = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("organizations"));
    if (JSON.stringify(data) !== JSON.stringify(clients)) {
      setClients(data);
    }
  }, [clients]);

  return (
    <>
      <Navbar />
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
        {clients && clients.length > 0 ? (
          <div className="all-clients">
            {clients &&
              clients.map((client) => {
                return <ClientOrganization key={client.id} client={client} />;
              })}
          </div>
        ) : (
          <EmptyState
            title={"No Clients in your clients list"}
            button={"New Client Organization"}
            message={"to add a new client."}
          />
        )}
      </main>
    </>
  );
};

export default Client;
