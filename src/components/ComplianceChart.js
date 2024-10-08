import { useEffect, useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

const ComplianceChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch('/data/userData.json'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Extract percentage and labels for the chart
        const investmentPercentages = data.investments.map(investment => Number(investment.percentage));

        const labels = data.investments.map(investment => investment.name);

         // Check the fetched data
         console.log('Fetched data:', data);
         console.log('Investment Percentages:', investmentPercentages);
         console.log('Labels:', labels);

        // Prepare chart data
        const chartData = {
          labels: labels,
          datasets: [
            {
              data: investmentPercentages,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }
          ]
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="compliance-chart">
      <Doughnut data={chartData} />
    </div>
  );
};

export default ComplianceChart;
