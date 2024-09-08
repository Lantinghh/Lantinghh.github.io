import React, { useState } from 'react';
import './Projects.css'; // 我们将使用CSS来改善项目卡片的视觉效果

const projectData = [
  {
    id: 1,
    title: "Santorini Board Game",
    description: "A full-stack board game system developed using React and Java.",
    details: "This project involves developing a full-stack solution for a board game, deployed on Google Cloud with Docker."
  },
  {
    id: 2,
    title: "Finger Vein Recognition System",
    description: "Developed a system for vein recognition using advanced image processing techniques.",
    details: "This project includes neural networks for improved accuracy in vein recognition, with a focus on image pre-processing."
  },
  {
    id: 3,
    title: "Simulation of Chiplet-based Heterogeneous System",
    description: "Developed a communication protocol for inter-chip communication in a simulated system.",
    details: "This project dealt with communication protocols between chips, addressing timing and synchronization challenges."
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderProjectList = () => {
    return (
      <div className="project-list">
        {projectData.map((project) => (
          <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderProjectDetails = (project) => {
    return (
      <div className="project-details">
        <button className="back-button" onClick={() => setSelectedProject(null)}>Back to Projects</button>
        <h2>{project.title}</h2>
        <p>{project.details}</p>
      </div>
    );
  };

  return (
    <div className="projects-container">
      {selectedProject ? renderProjectDetails(selectedProject) : renderProjectList()}
    </div>
  );
}

export default Projects;
