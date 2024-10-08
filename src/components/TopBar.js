import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 

const TopBar = () => {
  const [user, setUser] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/data/userData.json')
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
        alert('User data could not be loaded. Please try again later.');
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality (e.g., API call, filtering, etc.)
    console.log('Searching for:', searchQuery);
  };

  const handleSignOut = () => {
    // Perform sign-out logic, e.g., clearing user data, etc.
    setUser({});

    // Redirect to the landing page
    navigate('/');
  }

  return (
    <div className="topbar">
      <div className="topbar-content">
        <div className="logo">
          <img src="/images/F500K.png" alt="Logo" className="logo-img" />
          <span className="logo-text">Fortune 500 Klub</span>
        </div>
        
        <form className="searchbar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </form>

        {/* User Info */}
        <div className="user-info">
          <img src="/images/profile-icon-design-free-vector.jpg" alt="User Avatar" className="avatar" />
          <span className="user-name">{user.name}</span>
          <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
