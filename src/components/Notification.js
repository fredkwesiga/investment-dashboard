// src/components/Notification.js
import React from 'react';

const Notification = () => {
  return (
    <div className="notification-section">
      <h3>Recent Activity</h3>
      <ul>
        <li>Investment added: 10,000 UGX on 01/October/2024</li>
        <li>Investment projected: 40,000 UGX by 31/December/2024</li>
      </ul>
    </div>
  );
};

export default Notification;
