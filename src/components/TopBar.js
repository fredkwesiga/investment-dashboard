// src/components/TopBar.js
import React from 'react';

const TopBar = () => {
  return (
    <header className="top-bar">
      <div className="top-bar-content">
        <input type="text" placeholder="Search" />
        <div className="user-info">
          <span>Duncan Asiimwe</span>
          <img src="/path-to-avatar" alt="Avatar" className="avatar" />
          <button>Sign Out</button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
