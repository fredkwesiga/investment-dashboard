import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardMetrics from './components/DashboardMetrics';
import Notification from './components/Notification';
import LandingPage from './components/LandingPage'; 
import ComplianceChart from './components/ComplianceChart';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/userData.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching the JSON data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Define the route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Define the route for the dashboard */}
        <Route
          path="/dashboard"
          element={
            <div className="dashboard-container">
              <Sidebar />
              <div className="dashboard-content">
                <TopBar />
                <div className="dashboard-main">
                  <div className="metrics-wrapper">
                    <DashboardMetrics investments={data.investments} />
                  </div>
                  <ComplianceChart />
                  <Notification />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;