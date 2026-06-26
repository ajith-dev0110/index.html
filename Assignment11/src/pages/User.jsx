import React, { useState } from 'react';
import { users } from '../data/users';
import UserCard from '../components/UserCard';

const User = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-page fade-in">
      <div className="users-header">
        <h2>Team Members Directory</h2>
        <input 
          type="text" 
          placeholder="Filter members by name or title..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="user-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <p className="no-results">No profiles match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default User;