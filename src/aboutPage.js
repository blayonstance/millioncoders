import React from 'react';
import { Link } from 'react-router-dom';
import './aboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <div className="header-image">
          <img src="/larger.png" alt="One Million Coders Banner" />
        </div>

        <nav className="about-nav">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/shortlist">Shortlist</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="glass-card hero-content">
          <div className="coders-logo">
               <h1><span className="one">One</span></h1>
               <h1><span className="million">Million</span></h1>
               <h1><span className="coders">CODERS</span></h1>
              </div>
          <p>
            A bold vision launched under <strong>His Excellency President John
            Dramani Mahama</strong>, designed to empower Ghanaians with digital
            skills, accelerate innovation, and build a globally competitive tech
            workforce.
          </p>
        </div>
        <div className="glass-card hero-image">
          <a
            href="https://en.wikipedia.org/wiki/John_Dramani_Mahama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/mahama.png"
              alt="President John Dramani Mahama"
            />
            <p className="hero-caption">
            Championing Ghana’s Technology Evolution 🚀
          </p>
          </a>
          
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Why This Initiative Exists</h2>
        <div className="mission-grid">
          <div className="glass-card mission-card">
            <h3>💼 Digital Jobs</h3>
            <p>
              Train one million Ghanaians in coding & digital skills to thrive in
              the global job market.
            </p>
          </div>
          <div className="glass-card mission-card">
            <h3>💡 Innovation</h3>
            <p>
              Inspire startups & entrepreneurs to solve Ghana’s local challenges
              with cutting-edge technology.
            </p>
          </div>
          <div className="glass-card mission-card">
            <h3>🌍 Inclusion</h3>
            <p>
              Bring opportunities to rural communities, women, and marginalized
              groups across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision glass-card">
        <h2>Our Vision</h2>
        <p>
          A future-ready Ghana where technology fuels progress, equality, and
          prosperity for all citizens.
        </p>
      </section>

      {/* Footer */}
      <footer className="about-footer glass-card">
        <p>© 2025 One Million Coders Initiative | Powered by Innovation</p>
      </footer>
    </div>
  );
};

export default AboutPage;
