import "../styling/UserDashboard.css";
import { Doughnut, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
     ArcElement, 
     Tooltip, 
     Legend, 
     CategoryScale, 
     LinearScale, 
     BarElement,
  } from 'chart.js';
  
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale, 
    LinearScale,
    BarElement
  );

function UserDashboard() {
  const roundChartData = {
    labels: ["Housing", "Food", "Transportation", "Other"],
    datasets: [
      {
        data: [500, 300, 150, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barChartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Amount",
        data: [2000, 1050],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>

      <section className="dashboard-section overview-section">
        <h2>Current Month Overview</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <h3>Income</h3>
            <p>10,000 SEK</p>
          </div>
          <div className="overview-item">
            <h3>Expenses</h3>
            <p>6,000 SEK</p>
          </div>
          <div className="overview-item">
            <h3>Savings/Investments</h3>
            <p>4,000 SEK</p>
          </div>
        </div>
      </section>

      <section className="dashboard-section update-income-section">
        <h2>Update Your Income</h2>
        <form>
          <input type="number" placeholder="Enter new income" />
          <button type="submit">Update</button>
        </form>
      </section>

      <section className="dashboard-section insights-section">
        <h2>Data Insights & Tips</h2>
        <p>
          Youre spending 60% of your income. Aim to keep it below 50% for
          better savings!
        </p>
      </section>

      <section className="dashboard-section financial-overview-section">
        <h2>Financial Overview</h2>
        <div className="financial-charts">
          <div className="chart-container">
            <h3>Expenses Breakdown</h3>
            <Doughnut data={roundChartData} />
          </div>
          <div className="chart-container">
            <h3>Income vs Expenses</h3>
            <Bar data={barChartData} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
