import React from 'react';

const Sidebar = () => {
  return (

    
    <aside className="sidebar">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/investments">Investments</a></li>
        <li><a href="/dependants">Dependants</a></li>
        <li><a href="/loans">Loans</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/profile">My Profile</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
