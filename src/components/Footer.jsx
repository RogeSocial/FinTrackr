import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/"><h2>FinTrackr</h2></Link>
      <ul className="footer-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/">Expenses</Link></li>
        <li><Link to="/">Savings</Link></li>
        <li><Link to="/">Investments</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
