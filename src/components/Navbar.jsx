import { Link } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-logo">FinTrackr</Link>
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/expenses">Expenses</Link></li>
          <li><Link to="/savings">Savings</Link></li>
          <li><Link to="/">Investments</Link></li>
        </ul>
        {/* based on state if logged in or not coming in the future <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;