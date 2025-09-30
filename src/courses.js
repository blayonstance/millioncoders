import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './courses.css';

const CoursesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      name: 'Cybersecurity Fundamentals',
      imagePath: '/courseicons/cyber.png',
      color: '#1f2937'
    },
    {
      id: 2,
      name: 'Networking',
      imagePath: '/courseicons/rename.png',
      color: '#6b7280'
    },
    {
      id: 3,
      name: 'Pentesting',
      imagePath: '/courseicons/pentesting.png',
      color: '#6b7280'
    },
    {
      id: 4,
      name: 'Cloud Computing',
      imagePath: '/courseicons/images.png',
      color: '#3b82f6'
    },
    {
      id: 5,
      name: 'S.I.E.M',
      imagePath: '/courseicons/siem.png',
      color: '#06b6d4'
    },
    {
      id: 6,
      name: 'G.R.C',
      imagePath: '/courseicons/grc.png',
      color: '#1f2937'
    },
    {
      id: 7,
      name: 'A.P.I Security',
      imagePath: '/courseicons/api.jpeg',
      color: '#1f2937'
    },
    {
      id: 8,
      name: 'D.F.I.R',
      imagePath: '/courseicons/dfir.png',
      color: '#78716c'
    },
    {
      id: 9,
      name: 'Programming',
      imagePath: '/courseicons/programming.jpeg',
      color: '#6b7280'
    }
  ];

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="courses-page">
      {/* Header with logos */}
      <header className="courses-header">
        <div className="header-image">
          <img src="/larger.png" alt="Header with logos" />
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

        {/* Desktop Navigation - Updated with React Router Links */}
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
      <Link to="/register">Register</Link>
    </>
  )}
</nav>

      </header>

      {/* Main Content */}
      <main className="courses-main">
        <div className="container">
          {/* Courses Title */}
          <div className="courses-title-section">
            <div className="courses-icon">
              <img src="/geez.png" alt="Courses" />
            </div>
            <h1 className="courses-title">COURSES</h1>
          </div>

          {/* Courses Grid */}
          <div className="courses-grid">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="course-card" 
                onClick={() => handleCourseClick(course.id)}
                style={{ '--card-color': course.color }}
              >
                <div className="course-icon">
                  <img src={course.imagePath} alt={course.name} className="course-image" />
                </div>
                <h3 className="course-name">{course.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation Indicator */}
      <div className="bottom-nav">
        <div className="nav-indicator"></div>
      </div>
    </div>
  );
};

export default CoursesPage;