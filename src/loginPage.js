import React, { useState,useEffect } from 'react';
import './loginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      window.location.href = '/shortlist';
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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

  // ✅ LOGIN FUNCTION
 const handleLogin = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 🔽 Fetch stored registration data (array of users)
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const users = JSON.parse(storedData);
      const usersArray = Array.isArray(users) ? users : [users];

      // Find matching user
      const user = usersArray.find(
        u => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Save logged-in user separately
        localStorage.setItem('currentUser', JSON.stringify(user));

        alert('Login successful! Redirecting to shortlist page...');
        window.location.href = '/shortlist';
        return;
      }
    }

    // Fallback for admin account
    if (formData.email === 'admin@onemillion.gov.gh' && formData.password === 'admin123') {
      alert('Admin login successful! Redirecting to dashboard...');
      
      // Save admin as currentUser too
      const adminUser = {
        name: 'Admin',
        email: formData.email,
        role: 'admin'
      };
      localStorage.setItem('currentUser', JSON.stringify(adminUser));

      window.location.href = '/shortlist'; 
      return;
    }

    // Otherwise invalid
    setErrors({
      general: 'Invalid email or password. Please try again.'
    });
    
  } catch (error) {
    console.error('Login failed:', error);
    setErrors({
      general: 'Login failed. Please try again later.'
    });
  } finally {
    setIsSubmitting(false);
  }
};

  // ✅ FORGOT PASSWORD FUNCTION
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!forgotPasswordEmail.trim() || !emailRegex.test(forgotPasswordEmail)) {
      setErrors({ forgotEmail: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResetEmailSent(true);
      setErrors({});
      
    } catch (error) {
      setErrors({ forgotEmail: 'Failed to send reset email. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ RESET FORGOT PASSWORD
  const resetForgotPassword = () => {
    setShowForgotPassword(false);
    setForgotPasswordEmail('');
    setResetEmailSent(false);
    setErrors({});
  };

  // ==============================================
  // RENDER
  // ==============================================
  if (showForgotPassword) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <div className="login-logo">
              <img src="/geez.png" alt="One Million Coders" />
            </div>
            <h1 className="login-title">Reset Password</h1>
          </div>

          {resetEmailSent ? (
            <div className="reset-success">
              <div className="success-icon">✓</div>
              <h2>Email Sent!</h2>
              <p>We've sent password reset instructions to your email address. Please check your inbox and follow the instructions to reset your password.</p>
              <button 
                type="button" 
                onClick={resetForgotPassword}
                className="back-to-login-btn"
              >
                Back to Login
              </button>
            </div>
          ) : (
            <div className="forgot-password-form">
              <p className="forgot-description">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
              
              <div className="form-group">
                <label htmlFor="forgotEmail" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="forgotEmail"
                  name="forgotEmail"
                  value={forgotPasswordEmail}
                  onChange={(e) => {
                    setForgotPasswordEmail(e.target.value);
                    if (errors.forgotEmail) setErrors({});
                  }}
                  className={`form-input ${errors.forgotEmail ? 'error' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.forgotEmail && <span className="error-message">{errors.forgotEmail}</span>}
              </div>

              <button 
                type="button"
                onClick={handleForgotPassword}
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Reset Instructions'}
              </button>

              <button 
                type="button" 
                onClick={resetForgotPassword}
                className="back-link"
              >
                ← Back to Login
              </button>
            </div>
          )}
        </div>

        <div className="bottom-nav">
          <div className="nav-indicator"></div>
        </div>
      </div>
    );
  }

  // ✅ DEFAULT LOGIN FORM
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <img src="/geez.png" alt="One Million Coders" />
          </div>
          <h1 className="login-title">Login</h1>
        </div>

        <div className="login-form">
          {errors.general && (
            <div className="error-banner">
              {errors.general}
            </div>
          )}

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

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-actions">
            <button 
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="forgot-password-link"
            >
              Forgot Password?
            </button>
          </div>

          <button 
            type="button"
            onClick={handleLogin}
            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing In...' : 'Login'}
          </button>

          <div className="login-footer">
            <p>Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <div className="nav-indicator"></div>
      </div>
    </div>
  );
};

export default LoginPage;
