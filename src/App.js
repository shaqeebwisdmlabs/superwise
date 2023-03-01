import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Clients from "./pages/clients/Clients";
import Navbar from "./components/navbar/Navbar";
import ProjectPage from "./pages/project/ProjectPage";
import "./App.css";
import clientData from "./utils/data/clientData";
import projectsData from "./utils/data/projectsData";

const App = () => {
  useEffect(() => {
    localStorage.setItem("organizations", clientData);
    localStorage.setItem("projects", projectsData);
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/clients" exact element={<Clients />} />
          <Route path="/projects/:id" exact element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
