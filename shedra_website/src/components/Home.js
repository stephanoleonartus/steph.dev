import React, { useState } from 'react';
import { Eye, Brain, BarChart } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  const [textColor, setTextColor] = useState('black');

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-black">
            {/* Main intro */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8" style={{ color: textColor }}>
                <TypeAnimation
                  sequence={[
                    "Hello, I'm\n",
                    500,
                    () => setTextColor('blue'),
                    "Hello, I'm\nShedrack Siame",
                    500,
                    () => setTextColor('black'),
                    "Hello, I'm\nShedrack Siame\nA Computer Engineer",
                    1000,
                    '',
                  ]}
                  speed={70}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ whiteSpace: 'pre-line' }}
                />
              </h1>
              <button
                onClick={() => setCurrentPage('project')}
                className="bg-blue-500 hover:bg-blue-700 px-8 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300"
            >
              <Eye size={20} />
              Browse All Projects
            </button>
          </div>
        </div>
        
        {/* Skills boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-gray-700 hover:border-blue-800 transition-colors duration-300">
            <Brain className="text-blue-800 mb-4" size={32} />
            <h3 className="text-black text-xl font-bold mb-2">Machine Learning</h3>
            <p className="text-black">and</p>
            <h3 className="text-black text-xl font-bold">Artificial Intelligence</h3>
          </div>
          
          <div className="p-6 rounded-xl border border-gray-700 hover:border-blue-800 transition-colors duration-300">
            <BarChart className="text-blue-800 mb-4" size={32} />
            <h3 className="text-black text-xl font-bold">Data Analytics</h3>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="text-center mb-20">
        <div className="text-black">
          <p className="text-blue-800 text-lg mb-4">What I can Offer</p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Which Service I<br />
            Can Provide For You
          </h2>
          <button
            onClick={() => setCurrentPage('services')}
            className="bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-500 hover:text-black px-8 py-3 rounded-lg transition-all duration-300"
          >
            Explore All Services
          </button>
        </div>
      </div>
      
      {/* About Section Preview */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center">
          <div className="text-black text-6xl mb-4">👨‍💻</div>
          <span className="text-black text-lg">About Image</span>
        </div>
        
        <div className="text-black">
          <p className="text-blue-800 text-lg mb-4">About me</p>
          <h3 className="text-3xl font-bold leading-relaxed">
            My values are Integrity,<br />
            Empathy and Time Management.
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
