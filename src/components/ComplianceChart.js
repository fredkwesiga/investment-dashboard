import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register the required element
Chart.register(ArcElement);


const ComplianceChart = () => {
    const data = {
        labels: ['Label1', 'Label2', 'Label3'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
    };
    return <Doughnut data={data} />;
};
export default ComplianceChart;