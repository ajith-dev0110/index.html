import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="not-found-container fade-in">
      <div className="error-graphics">404</div>
      <h2>Route Index Not Found</h2>
      <p>
        The address mapping destination you requested is untracked or has been moved out of the configuration tree.
      </p>
      <Link to="/" className="home-redirect-btn">
        Return Safe to Home Page
      </Link>
    </div>
  );
};

export default NotFound;