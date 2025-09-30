import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newCourse, setNewCourse] = useState('');
  const [message, setMessage] = useState('');

  const courses = [
    'Cybersecurity Fundamentals',
    'Networking',
    'Pentesting',
    'Cloud Computing',
    'S.I.E.M',
    'G.R.C',
    'A.P.I Security',
    'D.F.I.R',
    'Programming'
  ];

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      alert('You must log in first.');
      navigate('/login');
      return;
    }
    setUser(currentUser);
    setNewCourse(currentUser.course);
  }, [navigate]);

  const handleUpdate = () => {
    if (!user) return;

    if (newPassword && newPassword !== confirmPassword) {
      setMessage('❌ Passwords do not match');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.map(u => {
      if (u.email === user.email) {
        return {
          ...u,
          course: newCourse,
          password: newPassword ? newPassword : u.password
        };
      }
      return u;
    });

    localStorage.setItem('users', JSON.stringify(users));

    const updatedUser = {
      ...user,
      course: newCourse,
      password: newPassword ? newPassword : user.password
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setUser(updatedUser);

    setMessage('✅ Profile updated successfully!');
    setNewPassword('');
    setConfirmPassword('');
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <div className="header-image">
          <img src="/larger.png" alt="Header with logos" />
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/shortlist">Shortlist</Link>
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
        </nav>
      </header>

      {/* Main */}
      <main className="profile-main container">
        <h1 className="page-title">My Profile</h1>

        {/* Info Card */}
        <section className="profile-card">
          <h2 className="section-title">Account Information</h2>
          <div className="info-grid">
            <p><span className="info-label">Name:</span> {user.name}</p>
            <p><span className="info-label">Email:</span> {user.email}</p>
            <p><span className="info-label">Application ID:</span> {user.applicationId}</p>
            <p><span className="info-label">Current Course:</span> {user.course}</p>
          </div>
        </section>

        {/* Update Card */}
        <section className="profile-card">
          <h2 className="section-title">Update Information</h2>
          
          <div className="form-group">
            <label className="form-label">Change Course</label>
            <select 
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="form-select"
            >
              {courses.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">New Password</label>
            <input 
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="form-input"
            />
          </div>

          <button onClick={handleUpdate} className="primary-btn">
            Save Changes
          </button>

          {message && <p className="update-message">{message}</p>}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
