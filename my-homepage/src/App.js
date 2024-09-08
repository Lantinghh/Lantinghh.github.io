import React, { useState } from 'react';
import './App.css';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';  // Import the Home component

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':    // Add 'home' case
        return <Home />;
      case 'about':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;  // Set Home as the default
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('about')}>About Me</li>
          <li onClick={() => setCurrentPage('projects')}>Projects</li>
          <li onClick={() => setCurrentPage('blog')}>Blog</li>
          <li onClick={() => setCurrentPage('contact')}>Contact</li>
        </ul>
      </nav>
      <div className="content">
        {renderPage()}  {/* This will dynamically render the correct page */}
      </div>
      <Contact /> {/* Keep the Contact component at the bottom */}
    </div>
  );
}

export default App;
