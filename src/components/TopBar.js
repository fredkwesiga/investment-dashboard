import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TopBar.css'; // Import the CSS for the TopBar

const TopBar = () => {
  const [user, setUser] = useState({});

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

  return (
    <div className="topbar">
      <div className="topbar-content">
        <img src={user.avatar} alt="User Avatar" className="avatar" />
        <span className="user-name">{user.name}</span>
        <button className="sign-out-button">Sign Out</button>
      </div>
    </div>
  );
};

export default TopBar;
