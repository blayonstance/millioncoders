import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './shortlistPage.css';

const ShortlistPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [applicationData, setApplicationData] = useState(null);
  const navigate = useNavigate();

  // ✅ Redirect if no logged-in user
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      alert('Please login first.');
      navigate('/login');
      return;
    }

    // ✅ Set application data directly from currentUser
    setApplicationData({
      applicantName: currentUser.name,
      applicationId: currentUser.applicationId,
      submissionDate: currentUser.submissionDate.split('T')[0],
      selectedCourse: currentUser.course,
      status: 'shortlisted',
      currentStep: 2,
      nextSteps: {
        testDate: getNextTestDate(),
        testTime: "10:00 AM",
        venue: "Ghana Technology University"
      }
    });
  }, [navigate]);

  const getNextTestDate = () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    return nextWeek.toISOString().split('T')[0];
  };

  const steps = applicationData ? [
    {
      id: 1,
      title: "Aptitude Test",
      description: "Prepare and complete the online aptitude test to assess your skills.",
      status: applicationData.currentStep >= 1 ? 'completed' : 'pending'
    },
    {
      id: 2,
      title: "Shortlisting",
      description: "We will review test results and shortlist candidates for final admission.",
      status: applicationData.currentStep >= 2 ? 'current' : 'pending'
    },
    {
      id: 3,
      title: "Final Admission",
      description: "Receive confirmation of your admission into the program.",
      status: applicationData.currentStep >= 3 ? 'completed' : 'pending'
    }
  ] : [];

  const getStatusMessage = () => {
    switch (applicationData?.status) {
      case 'pending':
        return {
          title: "Application Under Review",
          subtitle: "We're processing your application. Please wait for updates.",
          color: '#f59e0b'
        };
      case 'shortlisted':
        return {
          title: "Your journey to join the One Million Coders Program is underway!",
          subtitle: "We're excited to guide you through your next steps.",
          color: '#2563eb'
        };
      case 'accepted':
        return {
          title: "Congratulations! You've been accepted!",
          subtitle: "Welcome to the One Million Coders Program.",
          color: '#059669'
        };
      case 'rejected':
        return {
          title: "Application Status Update",
          subtitle: "Unfortunately, we cannot proceed with your application at this time.",
          color: '#dc2626'
        };
      default:
        return {
          title: "Application Status",
          subtitle: "Check your current application status below.",
          color: '#6b7280'
        };
    }
  };

  const statusInfo = applicationData ? getStatusMessage() : {
    title: "Loading...",
    subtitle: "Please wait while we fetch your application details.",
    color: "#6b7280"
  };

  return (
    <div className="shortlist-page">
      {/* Header */}
      <header className="shortlist-header">
        <div className="header-image">
          <img src="/larger.png" alt="Header with logos" />
        </div>

        {/* ✅ Greeting if logged in */}
        {applicationData && (
          <div className="welcome-banner">
            Welcome, <strong>{applicationData.applicantName}</strong> 🎉
          </div>
        )}
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ✅ Nav with conditional links */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
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
                    navigate('/login');
                  }
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="shortlist-main">
        <div className="container">

          {/* Status Banner */}
          <div className="status-banner" style={{ backgroundColor: statusInfo.color }}>
            <div className="status-content">
              <h1 className="status-title">{statusInfo.title}</h1>
              <p className="status-subtitle">{statusInfo.subtitle}</p>
            </div>
          </div>

          {/* Application Details */}
          {applicationData && (
            <section className="application-details">
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Application ID:</span>
                  <span className="detail-value">{applicationData.applicationId}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Selected Course:</span>
                  <span className="detail-value">{applicationData.selectedCourse}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Submission Date:</span>
                  <span className="detail-value">{new Date(applicationData.submissionDate).toLocaleDateString()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Current Status:</span>
                  <span className={`status-badge status-${applicationData.status}`}>
                    {applicationData.status.charAt(0).toUpperCase() + applicationData.status.slice(1)}
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* Progress Steps */}
          <section className="progress-section">
            <h2 className="section-title">Your Next Steps</h2>

            <div className="progress-timeline">
              {steps.map((step, index) => (
                <div key={step.id} className={`timeline-item ${step.status}`}>
                  <div className="timeline-marker">
                    <div className="step-number">
                      {step.status === 'completed' ? '✓' : step.id}
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>

                    {step.status === 'current' && applicationData.status === 'shortlisted' && (
                      <div className="next-action">
                        <div className="action-details">
                          <p><strong>Test Date:</strong> {applicationData.nextSteps.testDate}</p>
                          <p><strong>Time:</strong> {applicationData.nextSteps.testTime}</p>
                          <p><strong>Venue:</strong> {applicationData.nextSteps.venue}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {index < steps.length - 1 && <div className="timeline-connector"></div>}
                </div>
              ))}
            </div>
          </section>

          {/* Important Notice */}
          <section className="notice-section">
            <div className="notice-card">
              <div className="notice-icon">ℹ️</div>
              <div className="notice-content">
                <h3>Important Information</h3>
                <p>Please check your email and SMS for test dates, shortlist announcements, and admission updates to stay informed.</p>
                <ul className="notice-list">
                  <li>Ensure your contact information is up to date</li>
                  <li>Check your spam/junk folder regularly</li>
                  <li>Save this page for future reference</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="action-section">
            <button 
              className="primary-btn"
              onClick={() => navigate('/')}
            >
              Homepage
            </button>
            <button 
              className="secondary-btn"
              onClick={() => window.print()}
            >
              Print Status
            </button>
            <button 
              className="secondary-btn"
              onClick={() => {
                if (window.confirm("Are you sure you want to logout?")) {
                  localStorage.removeItem('currentUser');
                  navigate('/login');
                }
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-indicator"></div>
      </div>
    </div>
  );
};

export default ShortlistPage;
