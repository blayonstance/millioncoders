import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './aboutPage.css';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <div className="header-image">
          <img src="/larger.png" alt="One Million Coders Banner" />
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

        {/* Navigation */}
        <nav className={`about-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about" className="active">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="about-main">
        <div className="container">
          
          {/* Hero Section */}
          <section className="about-hero">
            <div className="hero-content">
              <div className="program-branding">
                <h1 className="program-name">
                  <span className="one">One</span>{' '}
                  <span className="million">Million</span>{' '}
                  <span className="coders">CODERS</span>
                </h1>
              </div>
              <p className="hero-description">
                A bold vision launched under <strong>His Excellency President John
                Dramani Mahama</strong>, designed to empower Ghanaians with digital
                skills, accelerate innovation, and build a globally competitive tech
                workforce.
              </p>
            </div>
            
            <div className="hero-image-section">
              <div className="president-card">
                <img
                  src="/mahama.png"
                  alt="President John Dramani Mahama"
                  className="president-image"
                />
                <p className="image-caption">
                  Championing Ghana's Technology Evolution
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="about-mission">
            <h2 className="section-title">Why This Initiative Exists</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="card-icon">💼</div>
                <h3>Digital Jobs</h3>
                <p>
                  Train one million Ghanaians in coding and digital skills to thrive in
                  the global job market.
                </p>
              </div>
              <div className="mission-card">
                <div className="card-icon">💡</div>
                <h3>Innovation</h3>
                <p>
                  Inspire startups and entrepreneurs to solve Ghana's local challenges
                  with cutting-edge technology.
                </p>
              </div>
              <div className="mission-card">
                <div className="card-icon">🌍</div>
                <h3>Inclusion</h3>
                <p>
                  Bring opportunities to rural communities, women, and marginalized
                  groups across Ghana.
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="about-vision">
            <div className="vision-content">
              <h2 className="section-title">Our Vision</h2>
              <p>
                A future-ready Ghana where technology fuels progress, equality, and
                prosperity for all citizens.
              </p>
            </div>
          </section>

          {/* Impact Stats */}
          <section className="impact-stats">
            <h2 className="section-title">Program Goals</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Trained Coders</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Job Placements</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">16</div>
                <div className="stat-label">Regional Centers</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Free Training</div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="about-footer">
        <div className="container">
          <p>© 2025 One Million Coders Initiative | Ministry of Communication, Digital Technology and Innovation</p>
        </div>
      </footer>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-indicator"></div>
      </div>
    </div>
  );
};

export default AboutPage;