import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import asana from "../../assets/asana_logo.svg";
import drive from "../../assets/drive.svg";
import dropbox from "../../assets/dropbox.svg";
import gmail from "../../assets/gmail.svg";
import slack from "../../assets/slack.svg";
import trello from "../../assets/trello.svg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header className="header | container">
        <div className="home-logo">
          <Link to="/">
            <img src={logo} alt="logo" draggable="false" />
          </Link>
        </div>
        <Link to="/projects" className="btn--get-started">
          Get Started
        </Link>
      </header>
      <div className="hero container">
        <div className="hero__body gap">
          <h1 className="fw-black fs-title-lg">
            Manage all client projects in one place and{" "}
            <span className="fancy-text">streamline your workflow</span>
          </h1>
          <p className="text-neutral-700">
            Service providers can streamline their workflow and organize all
            client projects with SuperWise while giving clients a more
            personalized and professional experience.
          </p>
          <Link to="/projects" className="btn--cta">
            Build your client portal
          </Link>
        </div>
      </div>
      <div className="tools container">
        <p className="fw-bold fs-body-lg text-neutral-900">
          Tools that it can replace.
        </p>
        <div className="tools__icons">
          <img src={asana} alt="asana" />
          <img src={gmail} alt="gmail" className="width-sm" />
          <img src={slack} alt="slack" />
          <img src={trello} alt="trello" />
          <img src={drive} alt="drive" className="width-sm" />
          <img src={dropbox} alt="dropbox" />
        </div>
      </div>
    </>
  );
};

export default Home;
