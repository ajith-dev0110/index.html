import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { users } from '../data/users';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the user object by numeric ID parsed from URL
  const user = users.find(u => u.id === parseInt(id));

  // Handle invalid user IDs gracefully
  if (!user) {
    return (
      <div className="error-container fade-in">
        <h3>Profile Error</h3>
        <p>The developer account ID standard <strong>#{id}</strong> does not map to active credentials.</p>
        <button onClick={() => navigate('/users')} className="back-btn">
          Return to Directory
        </button>
      </div>
    );
  }

  return (
    <div className="profile-detail-container fade-in">
      <button onClick={() => navigate('/users')} className="back-link-btn">
        &larr; Back to Directory
      </button>

      <div className="profile-card-detailed">
        <div className="profile-hero-bg"></div>
        <div className="profile-content">
          <img src={`/images/${user.avatar}`} alt={user.name} className="detail-avatar" />
          <h2>{user.name}</h2>
          <span className="profile-badge">{user.role}</span>
          
          <div className="profile-meta">
            <p><strong>Email Address:</strong> {user.email}</p>
            <p><strong>Account Scope:</strong> Developer Profile Node #{user.id}</p>
          </div>

          <hr className="divider" />
          
          <div className="profile-bio">
            <h3>Biography Statement</h3>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;