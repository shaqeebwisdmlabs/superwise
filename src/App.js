import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Clients from "./pages/clients/Clients";
import ProjectPage from "./pages/project/ProjectPage";
import Inbox from "./pages/inbox/Inbox";
import Teams from "./pages/teams/Teams";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/clients" exact element={<Clients />} />
          <Route path="/projects/:id" exact element={<ProjectPage />} />
          <Route path="/inbox" exact element={<Inbox />} />
          <Route path="/teams" exact element={<Teams />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
