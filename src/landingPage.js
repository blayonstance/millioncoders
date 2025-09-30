import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Government Logo */}
            <div className="logo-section">
              <div className="gov-logo">
                <div className="coat-of-arms">
                 <img src="/geez.png" alt="Students learning coding" />

                
                </div>
                
               {/* One Million Coders Logo */}
              <div className="coders-logo">
                <span className="one">One</span>
                <span className="million">Million</span>
                <span className="coders">CODERS</span>
              </div>
              
               <img width={48} height={48} src="/coat.png" alt="Students learning coding" />

                
              <div className="ministry-text">
                  <span className="ministry-line1">MINISTRY OF COMMUNICATION</span>
                  <span className="ministry-line2">DIGITAL TECHNOLOGY AND</span>
                  <span className="ministry-line3">INNOVATION SECTOR</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Desktop Navigation */}
          <nav className="nav">
  <Link to="/">Home</Link>
  <Link to="/courses">Courses</Link>
  <Link to="/about">About</Link>

  {localStorage.getItem('currentUser') ? (
    <>
      <Link to="/profile" className="nav-profile">Profile</Link>
      <button
        className="nav-logout"
        onClick={() => {
          if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem('currentUser');
            alert('You have been logged out.');
            window.location.href = '/login';
          }
        }}
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login">Login</Link>
      
    </>
  )}
</nav>


          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
        <img src="/dede.png" alt="Students learning coding" />
          <div className="hero-overlay"></div>
        </div>
        
        {/* CTA Banner */}
        <div className="cta-banner">
          <div className="container">
            <h1 className="program-title">The One Million Coders Program - Ghana</h1>
            <p className="program-subtitle">Empowering Ghanaian Youth with coding skills for the future</p>
            <h2 className="cta-question">Are you ready to unlock your digital potential?</h2>
            <button 
        className="register-btn"
        onClick={() => navigate('/courses')}
      >
        Register Now
      </button>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility">
        <div className="container">
          <h3 className="section-title">Who can apply?</h3>
          <div className="eligibility-list">
            <div className="eligibility-item">
              <span className="bullet">•</span>
              <span>Ages 18-35 years</span>
            </div>
            <div className="eligibility-item">
              <span className="bullet">•</span>
              <span>A minimum of high school degree</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="process">
        <div className="container">
          <h3 className="section-title">Application Process</h3>
          <div className="process-steps">
            <div className="step">
              <div className="step-number active">1</div>
              <span className="step-label">Register Application</span>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <span className="step-label">Details Verification</span>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <span className="step-label">Assessment Test</span>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <span className="step-label">Final Selection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      
    </div>
  );
};

export default LandingPage;