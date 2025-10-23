import "../styling/UserDashboard.css";
import { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function UserDashboard() {
  // --- State placeholders (will later come from database) ---
  const [income, setIncome] = useState(10000); // initial placeholder
  const [expenses, setExpenses] = useState(6000); // sum of user's expense data
  const [investments, setInvestments] = useState(4000); // savings + investments

  // --- Input state for updating income ---
  const [newIncome, setNewIncome] = useState("");

  // Example: derived percentage of income spent
  const expensePercentage = ((expenses / income) * 100).toFixed(1);

  // --- Simulate loading user data (replace with API call later) ---
  useEffect(() => {
    // Example: fetchUserData(userId)
    // .then(data => {
    //   setIncome(data.income);
    //   setExpenses(data.expensesTotal);
    //   setInvestments(data.investments);
    // })
  }, []);

  // --- Handle income updates ---
  const handleIncomeUpdate = (e) => {
    e.preventDefault();
    if (!newIncome) return;

    // In future: send update to backend API
    // await updateUserIncome(userId, newIncome);

    setIncome(Number(newIncome));
    setNewIncome("");
  };

  // --- Chart data (reactive to state changes) ---
  const roundChartData = {
    labels: ["Housing", "Food", "Transportation", "Other"],
    datasets: [
      {
        data: [500, 300, 150, 100], // later fetched dynamically
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barChartData = {
    labels: ["Income", "Expenses", "Investments"],
    datasets: [
      {
        label: "Amount (SEK)",
        data: [income, expenses, investments],
        backgroundColor: ["#36A2EB", "#FF6384", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>

      {/* --- Overview Section --- */}
      <section className="dashboard-section overview-section">
        <h2>Current Month Overview</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <h3>Income</h3>
            <p>{income.toLocaleString()} SEK</p>
          </div>
          <div className="overview-item">
            <h3>Expenses</h3>
            <p>{expenses.toLocaleString()} SEK</p>
          </div>
          <div className="overview-item">
            <h3>Savings/Investments</h3>
            <p>{investments.toLocaleString()} SEK</p>
          </div>
        </div>
      </section>

      {/* --- Income Update Section --- */}
      <section className="dashboard-section update-income-section">
        <h2>Update Your Income</h2>
        <form onSubmit={handleIncomeUpdate}>
          <input
            type="number"
            placeholder="Enter new income"
            value={newIncome}
            onChange={(e) => setNewIncome(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      </section>

      {/* --- Insights Section --- */}
      <section className="dashboard-section insights-section">
        <h2>Data Insights & Tips</h2>
        <p>
          You’re spending {expensePercentage}% of your income.{" "}
          {expensePercentage > 50
            ? "Aim to keep it below 50% for better savings!"
            : "Nice! You're managing your expenses well."}
        </p>
      </section>

      {/* --- Financial Overview Section --- */}
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
