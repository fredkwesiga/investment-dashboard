// src/components/DashboardMetrics.js
import React from 'react';

const DashboardMetrics = ({ investments }) => {
  return (
    <div className="metrics-grid">
      {investments.map((investment) => (
        <div className="metric" key={investment.id}>
          <h3>{investment.name}</h3>
          <p>{investment.performance}</p>
          <p>As at {investment.date}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;
