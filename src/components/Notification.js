import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('/data/userData.json').then(response => {
      setNotifications(response.data.notifications);
    });
  }, []);

  return (
    <div className="notification-section">
      <h4>Recent Activity</h4>
      <ul>
        {notifications.map(notif => (
          <li key={notif.id}>{notif.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
