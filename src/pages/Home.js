import React from 'react';
import './Home.css'; // Styling will be in this file

function Home() {
  return (
    <div className="home-container">
      <div className="home-photo">
        <img src="lara.jpeg" alt="Lara Hou" />
      </div>
      <div className="home-content">
        <h2>Hi, I'm Lara Hou</h2>
        <p>
          I’m a Master’s student in Information Technology-Information Security at Carnegie Mellon University, graduating in <strong>December 2024</strong>. With a Bachelor’s in Software Engineering from Jilin University, I have solid experience in both frontend and backend development, making me a skilled Full Stack Developer. I am an effective problem solver who excels at breaking down complex issues and communicating solutions clearly within teams. I’m currently seeking an entry-level <strong>Software Development Engineer (SDE)</strong> position where I can apply my skills to real-world challenges.
        </p>
      </div>
    </div>
  );
}

export default Home;
