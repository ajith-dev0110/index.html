import React from 'react';

const About = () => {
  return (
    <div className="about-container fade-in">
      <h2>About This Application</h2>
      <p>
        This Single Page Application (SPA) showcases core engineering concepts within the modern React ecosystem. 
        It models state workflows by parsing URL strings and handling fallback routes smoothly.
      </p>
      <p>
        Built around modular architectures, this project contains structured components, dedicated layout routes, 
        and programmatic transitions via React Hooks hooks to optimize front-end architecture.
      </p>
      <p>
        Contact our system integration desk or browse social code layers if you wish to fork 
        production paradigms or expand dynamic path structures.
      </p>
      
      <div className="contact-links">
        <h3>Contact Desk & Socials</h3>
        <a href="#github" className="social-link">GitHub Repository</a>
        <a href="#linkedIn" className="social-link">LinkedIn Network</a>
        <a href="mailto:support@example.com" className="social-link">Email support</a>
      </div>
    </div>
  );
};

export default About;