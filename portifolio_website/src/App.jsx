import React, { useState } from 'react';
import SocialSidebar from './components/SocialSidebar';
import Navigation from './components/Navigation';
import HomePage from './components/Home';
import AboutPage from './components/AboutPage';
import Project from './components/Project';
import Services from './components/Services';
import Certification from './components/Certification';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900">
      <SocialSidebar />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'project' && <Project />}
      {currentPage === 'services' && <Services />}
      {currentPage === 'certification' && <Certification />}
    </div>
  );
};

export default App;