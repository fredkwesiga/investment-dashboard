// src/components/DashboardMetrics.js
import React from 'react';

const DashboardMetrics = () => {
  return (
    <div className="metrics-grid">
      <div className="metric">
        <h3>Actual Investment Portfolio</h3>
        <p>10,000 UGX</p>
        <p>As at 01/October/2024</p>
      </div>
      <div className="metric">
        <h3>Projected Investment Portfolio</h3>
        <p>40,000 UGX</p>
        <p>As at 31/December/2024</p>
      </div>
      <div className="metric">
        <h3>Current Cumulative Revenue</h3>
        <p>0 UGX</p>
        <p>As at 01/October/2024</p>
      </div>
      <div className="metric">
        <h3>Outstanding Investment Arrears</h3>
        <p>-10,000 UGX</p>
        <p>As at 01/October/2024</p>
      </div>
    </div>
  );
};

export default DashboardMetrics;
