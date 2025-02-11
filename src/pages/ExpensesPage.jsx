import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "../styling/Expenses.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Expenses() {
  // Sample expenses data
  const expenses = [
    { category: "Food", amount: 1500 },
    { category: "Rent", amount: 3000 },
    { category: "Utilities", amount: 500 },
  ];

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const budget = 10000; // Example budget
  const remainingBudget = budget - totalExpenses;
  const budgetProgress = ((totalExpenses / budget) * 100).toFixed(1);

  // Prepare data for Doughnut chart
  const chartData = {
    labels: expenses.map((e) => e.category),
    datasets: [
      {
        data: expenses.map((e) => e.amount),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF4F73", "#2F9CDB", "#FFB836"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Expenses</h1>

      {/* Total Expenses Overview */}
      <section className="dashboard-section">
        <h2>Total Expenses</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <h3>Total</h3>
            <p>{totalExpenses} SEK</p>
          </div>
          <div className="overview-item">
            <h3>Budget Progress</h3>
            <p>{budgetProgress}%</p>
          </div>
          <div className="overview-item">
            <h3>Remaining</h3>
            <p>{remainingBudget} SEK</p>
          </div>
        </div>
      </section>

      {/* Expense Categories Section */}
      <section className="dashboard-section expense-categories">
        <div className="category-header">
          <h2 className="category-title">Top Expense Categories</h2>
          <div className="category-table">
            {expenses.map((e, index) => (
              <div key={index} className="category-row">
                <span className="category-name">{e.category}</span>
                <span className="category-amount">{e.amount} SEK</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Recent Transactions Section */}
      <section className="dashboard-section recent-transactions">
        <h2 className="transactions-title">Most Recent Transactions</h2>
        <div className="transactions-container">
          {expenses.map((e, index) => (
            <div key={index} className="transaction-card">
              <p className="transaction-category">{e.category}</p>
              <h3 className="transaction-amount">{e.amount} SEK</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Add New Expense Form */}
      <section className="dashboard-section add-expense-section">
        <h2>Add New Expense</h2>
        <form>
          <input type="number" placeholder="Enter amount" />
          <select>
            <option value="">Select category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="utilities">Utilities</option>
            <option value="savings">Savings</option>
            <option value="investments">Investments</option>
            <option value="other">Other</option>
          </select>
          <button type="submit">Update Expense</button>
        </form>
      </section>

      {/* Expense Summary Chart */}
      <section className="dashboard-section financial-overview-section">
        <h2>Expense Summary</h2>
        <div className="chart-container">
          <Doughnut data={chartData} />
        </div>
      </section>
    </div>
  );
}

export default Expenses;
