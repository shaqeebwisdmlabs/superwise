import React from "react";
import plus from "../../assets/plus.svg";
import "./Clients.css";

const Client = () => {
  return (
    <main className="clients">
      <header className="clients__header">
        <h1 className="fw-bold fs-title">Client Organizations</h1>
        <button className="btn--add | flex">
          <img src={plus} alt="plus sign" />
          <span>New Client Organization</span>
        </button>
      </header>
      <div className="all-clients">
        <div className="client-organization"></div>
      </div>
    </main>
  );
};

export default Client;
