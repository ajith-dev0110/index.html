import React from 'react';
import { Link } from 'react-router';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="avatar-wrapper">
        <img src={`/images/${user.avatar}`} alt={user.name} className="user-avatar" />
      </div>
      <h3>{user.name}</h3>
      <p className="user-role">{user.role}</p>
      <Link to={`/users/${user.id}`} className="view-profile-btn">
        View Profile
      </Link>
    </div>
  );
};

export default UserCard;