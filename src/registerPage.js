import React, { useState } from 'react';
import './registerPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    education: '',
    gender: '',
    region: '',
    course: ''
  });
const [showPasswordSetup, setShowPasswordSetup] = useState(false);
const [passwordData, setPasswordData] = useState({
  password: '',
  confirmPassword: ''
});

const handleFinalSubmit = async () => {
  if (passwordData.password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }

  if (passwordData.password !== passwordData.confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  const applicationId = 'OMC2024-' + Math.random().toString(36).substr(2, 6).toUpperCase();

  const completeRegistrationData = {
    ...formData,
    password: passwordData.password,
    applicationId,
    submissionDate: new Date().toISOString(),
    status: 'pending'
  };

  // 🔽 Load existing registrations from localStorage
  let users = JSON.parse(localStorage.getItem('registrationData')) || [];

  // Ensure it's an array (backwards compatibility)
  if (!Array.isArray(users)) {
    users = [users];
  }

  // 🔽 Add new user
  users.push(completeRegistrationData);

  // Save updated list
  localStorage.setItem('registrationData', JSON.stringify(users));

  alert(`Registration successful! Your application ID is: ${applicationId}`);
  window.location.href = '/shortlist';
};



  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ghanaRegions = [
    'Greater Accra', 'Ashanti', 'Western', 'Central', 'Eastern', 
    'Volta', 'Northern', 'Upper East', 'Upper West', 'Brong Ahafo',
    'Western North', 'Ahafo', 'Bono East', 'Oti', 'North East', 'Savannah'
  ];

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

  const educationLevels = [
    'SHS (Senior High School)',
    'Diploma',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (Ghana format)
    const phoneRegex = /^(\+233|0)[0-9]{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Ghana phone number';
    }

    // Date of birth validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const today = new Date();
      const birthDate = new Date(formData.dateOfBirth);
      const age = today.getFullYear() - birthDate.getFullYear();
      
      if (age < 18 || age > 35) {
        newErrors.dateOfBirth = 'Age must be between 18-35 years';
      }
    }

    // Education validation
    if (!formData.education) {
      newErrors.education = 'Education level is required';
    }

    // Gender validation
    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    // Region validation
    if (!formData.region) {
      newErrors.region = 'Region is required';
    }

    // Course validation
    if (!formData.course) {
      newErrors.course = 'Course selection is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate application ID
      const applicationId = 'OMC2024-' + Math.random().toString(36).substr(2, 6).toUpperCase();
      
      // Store registration data (in real app, this would go to backend)
      const registrationData = {
        ...formData,
        applicationId,
        submissionDate: new Date().toISOString(),
        status: 'pending'
      };

      console.log('Registration submitted:', registrationData);
      
      // Redirect to shortlist page
      console.log('Registration data validated, showing password setup');
setShowPasswordSetup(true);
      
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-page">
      {/* Header */}
      <header className="registration-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="register-logo">
              <img src="/geez.png" alt="One Million Coders" />
            </div>
            <h1 className="page-title">Register</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="registration-main">
        <div className="container">
          <div className="form-wrapper">
            <div onSubmit={handleSubmit} className="registration-form">
              
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone No.</label>
                <div className="phone-input-wrapper">
                  <span className="country-code">+233</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input phone-input ${errors.phone ? 'error' : ''}`}
                    placeholder="567543210"
                  />
                </div>
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              {/* Date of Birth Field */}
              <div className="form-group">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`form-input ${errors.dateOfBirth ? 'error' : ''}`}
                />
                {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
              </div>

              {/* Education Field */}
              <div className="form-group">
                <label htmlFor="education" className="form-label">Highest level of education</label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className={`form-select ${errors.education ? 'error' : ''}`}
                >
                  <option value="">Select education level</option>
                  {educationLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                {errors.education && <span className="error-message">{errors.education}</span>}
              </div>

              {/* Gender Field */}
              <div className="form-group">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={`form-select ${errors.gender ? 'error' : ''}`}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <span className="error-message">{errors.gender}</span>}
              </div>

              {/* Region Field */}
              <div className="form-group">
                <label htmlFor="region" className="form-label">Region</label>
                <select
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className={`form-select ${errors.region ? 'error' : ''}`}
                >
                  <option value="">Select your region</option>
                  {ghanaRegions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                {errors.region && <span className="error-message">{errors.region}</span>}
              </div>

              {/* Course Field */}
              <div className="form-group">
                <label htmlFor="course" className="form-label">Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className={`form-select ${errors.course ? 'error' : ''}`}
                >
                  <option value="">Select a course</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
                {errors.course && <span className="error-message">{errors.course}</span>}
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                onClick={handleSubmit}
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

            </div>
          </div>
        </div>
      </main>
      {showPasswordSetup && (
  <div className="password-setup-overlay">
    <div className="password-setup-form">
      <h2>Set Your Password</h2>
      <p>Create a secure password to access your account</p>
      
      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          type="password"
          value={passwordData.password}
          onChange={(e) => setPasswordData(prev => ({...prev, password: e.target.value}))}
          className="form-input"
          placeholder="Enter password (min 6 characters)"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          value={passwordData.confirmPassword}
          onChange={(e) => setPasswordData(prev => ({...prev, confirmPassword: e.target.value}))}
          className="form-input"
          placeholder="Confirm your password"
        />
      </div>
      
      <button onClick={handleFinalSubmit} className="submit-btn">
        Complete Registration
      </button>
    </div>
  </div>
)}

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-indicator"></div>
      </div>
    </div>
  );
};

export default RegistrationPage;