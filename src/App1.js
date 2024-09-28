import React, { useState } from "react";
import './App.css';

const projects = [
  { id: 1, title: "Santorini Board Game", description: "Full Stack Development" },
  { id: 2, title: "Chiplet-based Heterogeneous System", description: "Inter-chip Communication Simulation" },
  { id: 3, title: "Academic Journal Website", description: "Full Stack Development" },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentProject, setCurrentProject] = useState(null);

  // 渲染项目详情页面
  const renderProjectDetails = (project) => {
    return (
      <div>
        <header className="App-header">
          <h1>{project.title}</h1>
        </header>
        <section className="project-details">
          <p>{project.description}</p>
          <button onClick={() => setCurrentPage("home")}>Back to Projects</button>
        </section>
      </div>
    );
  };

  // 渲染主页
  const renderHomePage = () => {
    return (
      <div>
        <header className="App-header">
          <h1>Lanting Hou</h1>
          <p>Master of Science - Information Technology Information Security</p>
        </header>

        <section className="projects-section">
          <h2>Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button onClick={() => { setCurrentPage("project"); setCurrentProject(project); }}>
                  Learn More
                </button>
              </li>
            ))}
          </ul>
        </section>

        <footer>
          <p>Contact: lantingh@andrew.cmu.edu | +1(412)-482-7163</p>
        </footer>
      </div>
    );
  };

  return (
    <div className="App">
      {currentPage === "home" ? renderHomePage() : renderProjectDetails(currentProject)}
    </div>
  );
}

export default App;
