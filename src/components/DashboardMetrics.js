import React from 'react';

const DashboardMetrics = ({ investments }) => {
  return (
    <div className="metrics-container">
      <div className="metrics-grid">
        {investments.map((investment) => (
          <div className="metric" key={investment.id}>
            <h3 className="metric-title">{investment.name}</h3>
            <p className="metric-performance">{investment.performance}</p>
            <p className="metric-date">As at {investment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMetrics;