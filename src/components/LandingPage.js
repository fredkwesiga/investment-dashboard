import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const LandingPage = () => {
  const navigate = useNavigate();  // Create a navigate instance

  const handleSignUp = () => {
    // Redirect to the dashboard when "Sign Up" is clicked
    navigate('/dashboard');
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">FortuneConnect</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            {/* Update the Sign Up link to trigger the handleSignUp function */}
            <li><button onClick={handleSignUp} className="signup-btn">Sign Up</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <h1>Welcome to FortuneConnect</h1>
        <p>Your Gateway to Investment Success</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <img src="/images/real estate-01.png" alt="Feature 1" />
            <h3>Fortune Real Estate</h3>
            <p>F500K Real Estates is a next generation real estate company offering a comprehensive range of services, including land trading, real estate development, and property management.</p>
          </div>
          <div className="feature-item">
            <img src="/images/finances-01.png" alt="Feature 2" />
            <h3>Fortune Financial Services</h3>
            <p>Fortune Financial Services is aimed at increasing credit uptake towards the Fortune 500 Klub investors in providing more accessiblity to capital by micro lending to working persons, SMEs, firms, companies and corporations within the Fortune 500 ecosystem.</p>
          </div>
          <div className="feature-item">
            <img src="/images/tech-01.png" alt="Feature 3" />
            <h3>FortuneTech</h3>
            <p>Fortune tech was established with a view to carry on the business of providing financial technology services, software applications and other transactions related services. </p>
          </div>
        </div>
      </section>

      {/* Optional Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>"FortuneConnect has revolutionized the way I invest."</p>
            <h4>- User 1</h4>
          </div>
          <div className="testimonial-item">
            <p>"The features are outstanding and easy to use."</p>
            <h4>- User 2</h4>
          </div>
          <div className="testimonial-item">
            <p>"I highly recommend it to all investors."</p>
            <h4>- User 3</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="contact-info">
          <p>Contact us: info@fortune500klub.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
