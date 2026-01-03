import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'Project', key: 'project' },
    { name: 'Services', key: 'services' },
    { name: 'Certification & Reward', key: 'certification' },
  ];

  return (
    <nav className="bg-white text-gray-800 p-4 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-2xl font-bold text-blue-800 cursor-pointer focus:outline-none"
        >
          Stephs Dev
        </button>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`hover:text-blue-800 transition-colors duration-300 ${
                currentPage === item.key ? 'text-blue-800 underline' : ''
              }`}
            >
              {item.name}
            </button>
          ))}
          <a href="/assets/cv.txt" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
            Download CV
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key);
                  setIsMenuOpen(false);
                }}
                className={`hover:text-blue-800 transition-colors duration-300 ${
                  currentPage === item.key ? 'text-blue-800 underline' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <a href="/assets/Data-Science-Live-PDF.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
