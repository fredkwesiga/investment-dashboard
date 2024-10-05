import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardMetrics from './components/DashboardMetrics';
import ComplianceChart from './components/ComplianceChart';
import Notification from './components/Notification';
import './App.css';

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <div className="metrics-container">
          <DashboardMetrics />
          <ComplianceChart />
        </div>
        <Notification />
      </div>
    </div>
  );
};

export default App;
