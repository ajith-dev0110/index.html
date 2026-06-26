import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container fade-in">
      <section className="hero">
        <h1>Welcome to DevConnect Hub</h1>
        <p>
          Discover elite talent, view live profiles, and test dynamic programmatic 
          routing modules inside React Router 7.
        </p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/users')} className="cta-btn primary">
            Explore Users Directory
          </button>
          <button onClick={() => navigate('/about')} className="cta-btn secondary">
            Learn More About Us
          </button>
        </div>
      </section>
      
      <section className="featured-section">
        <h2>Engineered Core Capabilities</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Dynamic Parameters</h3>
            <p>Renders unique layout configurations based contextually on custom user IDs via route strings.</p>
          </div>
          <div className="feature-item">
            <h3>Nav State Styling</h3>
            <p>Active path detection changes real-time link aesthetics cleanly across global elements.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;