import React from "react";
import "./Document.css";

const Document = () => {
  return (
    <div className="document | bg-neutral-100 box-shadow">
      <div className="document__image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="none"
        >
          <path
            fill="#6B7280"
            d="M11.25 3A3.75 3.75 0 0 0 7.5 6.75v34.5A3.75 3.75 0 0 0 11.25 45h25.5a3.75 3.75 0 0 0 3.75-3.75V25.5A7.5 7.5 0 0 0 33 18h-3.75a3.75 3.75 0 0 1-3.75-3.75V10.5A7.5 7.5 0 0 0 18 3h-6.75Z"
          />
          <path
            fill="#6B7280"
            d="M25.942 3.632A10.46 10.46 0 0 1 28.5 10.5v3.75c0 .414.336.75.75.75H33c2.626 0 5.027.964 6.868 2.558A19.535 19.535 0 0 0 25.942 3.632Z"
          />
        </svg>
      </div>
      <div
        className="flex"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.5em",
        }}
      >
        <p className="fw-semi-bold fs-body-sm">Document Name</p>
        <button className="document__menu">
          <span className="visually-hidden">Document Menu</span>
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

export default Document;
