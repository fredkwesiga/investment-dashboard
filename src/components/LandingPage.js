import React from 'react';


const LandingPage = () => {
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
            <li><a href="#signup">Sign Up</a></li>
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
            <img src="/icons/feature1.png" alt="Feature 1" />
            <h3>Feature 1</h3>
            <p>Short description of feature 1</p>
          </div>
          <div className="feature-item">
            <img src="/icons/feature2.png" alt="Feature 2" />
            <h3>Feature 2</h3>
            <p>Short description of feature 2</p>
          </div>
          <div className="feature-item">
            <img src="/icons/feature3.png" alt="Feature 3" />
            <h3>Feature 3</h3>
            <p>Short description of feature 3</p>
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
          <p>Contact us: info@fortuneconnect.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
