import "../styling/Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/"><h2 className="footer-logo">FinTrackr</h2></Link>
      <ul className="footer-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/savings">Savings</Link></li>
        <li><Link to="/investments">Investments</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
