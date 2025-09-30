import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import CoursesPage from './courses';
import ShortlistPage from './shortlistPage';
import RegistrationPage from './registerPage';
import LoginPage from './loginPage';
import ProfilePage from './profilePage';
import CourseDetailPage from './courseDetailPage';
import AboutPage from './aboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Landing/Home page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Courses listing page */}
          <Route path="/courses" element={<CoursesPage />} />
          
          {/* Individual course detail pages */}
          <Route path="/course/1" element={<CourseDetailPage courseId={1} />} />
          <Route path="/course/2" element={<CourseDetailPage courseId={2} />} />
          <Route path="/course/3" element={<CourseDetailPage courseId={3} />} />
          <Route path="/course/4" element={<CourseDetailPage courseId={4} />} />
          <Route path="/course/5" element={<CourseDetailPage courseId={5} />} />
          <Route path="/course/6" element={<CourseDetailPage courseId={6} />} />
          <Route path="/course/7" element={<CourseDetailPage courseId={7} />} />
          <Route path="/course/8" element={<CourseDetailPage courseId={8} />} />
          <Route path="/course/9" element={<CourseDetailPage courseId={9} />} />
          
          {/* Future routes */}
          
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shortlist" element={<ShortlistPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/profile' element={<ProfilePage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;