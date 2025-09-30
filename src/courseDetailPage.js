import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './courseDetailPage.css';

const CourseDetailPage = ({ courseId = 4 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const courseData = {
    1: {
      title: 'CYBERSECURITY FUNDAMENTALS',
      icon: '/courseicons/cyber.png',
      description: 'Master essential cybersecurity principles and practices. This comprehensive program covers threat analysis, risk assessment, and security frameworks to protect digital assets in today\'s evolving threat landscape.',
      duration: '4 weeks',
      level: 'Beginner to Intermediate',
      prerequisite: 'Basic computer literacy and networking knowledge',
      certificate: 'CompTIA Security+ preparation included',
      modules: [
        'Introduction to Cybersecurity',
        'Threat Landscape & Risk Assessment',
        'Network Security Fundamentals',
        'Incident Response & Recovery'
      ],
      outcomes: [
        'Identify and mitigate common security threats',
        'Implement security best practices',
        'Conduct basic risk assessments',
        'Develop incident response procedures'
      ]
    },
    2: {
      title: 'NETWORKING',
      icon: '/courseicons/rename.png',
      description: 'Build foundational networking skills essential for modern IT infrastructure. Learn network design, protocols, and troubleshooting techniques used in enterprise environments.',
      duration: '3 weeks',
      level: 'Beginner',
      prerequisite: 'Basic computer knowledge',
      certificate: 'Cisco CCNA preparation track',
      modules: [
        'Network Fundamentals',
        'TCP/IP Protocol Suite',
        'Routing & Switching Basics',
        'Network Troubleshooting'
      ],
      outcomes: [
        'Design basic network architectures',
        'Configure network devices',
        'Troubleshoot connectivity issues',
        'Implement network security measures'
      ]
    },
    3: {
      title: 'PENETRATION TESTING',
      icon: '/courseicons/pentesting.png',
      description: 'Learn ethical hacking techniques to identify and exploit security vulnerabilities. This hands-on course covers penetration testing methodologies used by cybersecurity professionals.',
      duration: '6 weeks',
      level: 'Intermediate to Advanced',
      prerequisite: 'Cybersecurity fundamentals and Linux basics',
      certificate: 'CEH (Certified Ethical Hacker) preparation',
      modules: [
        'Penetration Testing Methodology',
        'Information Gathering & Reconnaissance',
        'Vulnerability Assessment & Exploitation',
        'Post-Exploitation & Reporting'
      ],
      outcomes: [
        'Conduct professional penetration tests',
        'Use industry-standard testing tools',
        'Write comprehensive security reports',
        'Implement remediation strategies'
      ]
    },
    4: {
      title: 'CLOUD COMPUTING',
      icon: '/courseicons/images.png',
      description: 'Learn essential cloud computing concepts, platforms, and services. This hands-on program covers cloud architecture, security, and deployment strategies to prepare you for today\'s digital workplace.',
      duration: '2 weeks',
      level: 'Intermediate',
      prerequisite: 'SHS Graduate degree with minimum I.T knowledge',
      certificate: 'AWS Cloud Practitioner preparation',
      modules: [
        'Cloud Computing Fundamentals',
        'Cloud Service Models (IaaS, PaaS, SaaS)',
        'Cloud Security & Compliance',
        'Cloud Migration Strategies'
      ],
      outcomes: [
        'Understand cloud architecture principles',
        'Deploy applications on cloud platforms',
        'Implement cloud security measures',
        'Optimize cloud costs and performance'
      ]
    },
    5: {
      title: 'S.I.E.M',
      icon: '/courseicons/siem.png',
      description: 'Master Security Information and Event Management systems. Learn to collect, analyze, and respond to security events using industry-leading SIEM platforms and techniques.',
      duration: '4 weeks',
      level: 'Intermediate',
      prerequisite: 'Cybersecurity fundamentals and log analysis basics',
      certificate: 'Splunk Core Certified User',
      modules: [
        'SIEM Architecture & Components',
        'Log Collection & Normalization',
        'Threat Detection & Analytics',
        'Incident Response Integration'
      ],
      outcomes: [
        'Configure and manage SIEM systems',
        'Create effective detection rules',
        'Analyze security events and logs',
        'Coordinate incident response activities'
      ]
    },
    6: {
      title: 'G.R.C (GOVERNANCE, RISK & COMPLIANCE)',
      icon: '/courseicons/grc.png',
      description: 'Develop expertise in governance, risk management, and compliance frameworks. Learn to build and manage comprehensive security programs that align with business objectives.',
      duration: '5 weeks',
      level: 'Intermediate to Advanced',
      prerequisite: 'Business or cybersecurity background preferred',
      certificate: 'CISSP domain preparation',
      modules: [
        'Governance Frameworks & Standards',
        'Risk Assessment & Management',
        'Compliance Management',
        'Security Program Development'
      ],
      outcomes: [
        'Develop governance frameworks',
        'Conduct comprehensive risk assessments',
        'Ensure regulatory compliance',
        'Build effective security programs'
      ]
    },
    7: {
      title: 'A.P.I SECURITY',
      icon: '/courseicons/api.jpeg',
      description: 'Secure modern API architectures against emerging threats. Learn API security testing, authentication methods, and protection strategies for REST and GraphQL APIs.',
      duration: '3 weeks',
      level: 'Intermediate',
      prerequisite: 'Web development basics and security fundamentals',
      certificate: 'OWASP API Security certification track',
      modules: [
        'API Architecture & Security Models',
        'Authentication & Authorization',
        'API Vulnerability Testing',
        'API Security Implementation'
      ],
      outcomes: [
        'Implement secure API designs',
        'Test APIs for security vulnerabilities',
        'Configure API gateways and protection',
        'Develop API security policies'
      ]
    },
    8: {
      title: 'D.F.I.R (DIGITAL FORENSICS & INCIDENT RESPONSE)',
      icon: '/courseicons/dfir.png',
      description: 'Master digital forensics and incident response techniques. Learn to investigate security incidents, collect digital evidence, and coordinate effective incident response procedures.',
      duration: '6 weeks',
      level: 'Advanced',
      prerequisite: 'Cybersecurity experience and legal knowledge basics',
      certificate: 'GCIH (GIAC Certified Incident Handler)',
      modules: [
        'Digital Forensics Fundamentals',
        'Evidence Collection & Preservation',
        'Incident Response Procedures',
        'Malware Analysis Basics'
      ],
      outcomes: [
        'Conduct professional forensic investigations',
        'Preserve and analyze digital evidence',
        'Lead incident response activities',
        'Present findings in legal contexts'
      ]
    },
    9: {
      title: 'PROGRAMMING',
      icon: '/courseicons/programming.jpeg',
      description: 'Build foundational programming skills essential for cybersecurity and IT careers. Learn multiple programming languages and development practices used in security tools and automation.',
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      prerequisite: 'Basic computer literacy',
      certificate: 'Industry-recognized programming competency',
      modules: [
        'Programming Fundamentals',
        'Python for Security',
        'Web Development Basics',
        'Automation & Scripting'
      ],
      outcomes: [
        'Write effective security scripts',
        'Develop web applications',
        'Automate routine tasks',
        'Contribute to security tool development'
      ]
    }
  };

  const course = courseData[courseId];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail-page">
      {/* Header */}
      <header className="course-header">
        <div className="header-image">
          <img src="/larger.png" alt="Header with logos" />
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

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
      <main className="course-main">
        <div className="container">
          
          {/* Course Title Section */}
          <div className="course-title-section">
            <h1 className="course-title">{course.title}</h1>
          </div>

          {/* Course Icon */}
          <div className="course-icon-display">
            <div className="icon-container">
              <img src={course.icon} alt={course.title} className="course-main-icon" />
            </div>
          </div>

          {/* Course Content Grid */}
          <div className="course-content-grid">
            
            {/* About Course */}
            <section className="content-card">
              <h2 className="card-title">About {course.title.split(' ')[0]} Course:</h2>
              <p className="course-description">{course.description}</p>
            </section>

            {/* Course Details */}
            <section className="content-card">
              <h3 className="card-subtitle">Training Duration:</h3>
              <p className="detail-text">{course.duration}</p>
              
              <h3 className="card-subtitle">Level:</h3>
              <p className="detail-text">{course.level}</p>
              
              <h3 className="card-subtitle">Prerequisite:</h3>
              <p className="detail-text">{course.prerequisite}</p>
              
              <h3 className="card-subtitle">Certificate Available:</h3>
              <p className="detail-text">{course.certificate}</p>
            </section>

            {/* Course Modules */}
            <section className="content-card">
              <h3 className="card-subtitle">Course Modules:</h3>
              <ul className="modules-list">
                {course.modules.map((module, index) => (
                  <li key={index}>{module}</li>
                ))}
              </ul>
            </section>

            {/* Learning Outcomes */}
            <section className="content-card">
              <h3 className="card-subtitle">Learning Outcomes:</h3>
              <ul className="outcomes-list">
                {course.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </section>

          </div>

          {/* Register Button */}
          <div className="register-section">
            <button className="register-btn">
              <Link to="/register">Register</Link>
              <div className="btn-icon">
                <img src="/geez.png" alt="Register icon" />
              </div>
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

export default CourseDetailPage;