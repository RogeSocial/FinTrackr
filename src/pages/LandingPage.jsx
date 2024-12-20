import '../styling/LandingPage.css';
import laptop from '../assets/laptop.jpg';

function LandingPage() {
  return (
    <div>

      <section className="cta-section">
        <h1>Take Control of Your Finances Today</h1>
        <p>Track expenses, save smarter, and achieve your financial goals.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <div className="service-icon">💸</div>
            <h3>Expense Tracking</h3>
            <p>Keep track of your spending and stay on top of your monthly expenses.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">📊</div>
            <h3>Budget Planning</h3>
            <p>Create personalized budgets that help you achieve financial freedom.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🎯</div>
            <h3>Goal Setting</h3>
            <p>Set financial goals and track your progress with ease.</p>
          </div>
        </div>
      </section>

      <section className="signup-section">
        <h2>Sign Up Today</h2>
        <p>Start tracking your finances and achieving your goals in minutes.</p>
        <div className="signup-container">
          <div className="signup-image">
            <img src={laptop} alt="Person with a laptop" />
          </div>
          <div className="signup-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="signup-button">Create Account</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
