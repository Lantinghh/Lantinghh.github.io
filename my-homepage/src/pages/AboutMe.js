import React from 'react';
import './AboutMe.css'; // The CSS styling will be in this file

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>Hello! I am Lanting Hou, a passionate software engineer currently pursuing a Master's degree at Carnegie Mellon University, expecting to graduate in December 2024.</p>

        <h3>Education & Background</h3>
        <p>I hold a Bachelor's degree in Software Engineering from Jilin University and have extensive experience in software development. My background covers full-stack development, cloud infrastructure, cybersecurity, and machine learning.</p>

        <h3>Professional Experience</h3>
        <p>During my internship at Santachi Video Technology, I introduced an AI-based visual matching algorithm that improved efficiency by 22%. I’ve also worked as a research assistant, contributing to biometric recognition systems, and am currently working on refactoring a legacy system into microservices for the SWIFT project at CMU.</p>

        <h3>Technical Skills</h3>
        <p>I am proficient in a range of technologies including Docker, Kubernetes, GCP, AWS, and Jenkins. I have hands-on experience with front-end tools like React and Vue, and back-end technologies like Node.js and Spring Boot.</p>

        <h3>Personal Interests</h3>
        <p>Outside of work, I enjoy playing logic-based games and recently started swimming, which helps me maintain a healthy work-life balance.</p>
      </div>
      <div className="about-photo">
        <img src="lara.jpeg" alt="Lanting Hou" />
      </div>
    </div>
  );
}

export default AboutMe;
