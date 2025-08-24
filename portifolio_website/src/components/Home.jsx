import React from 'react';
import { Eye, Brain, BarChart } from 'lucide-react';

// Home Page Component
const HomePage = ({ setCurrentPage }) => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Main Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="text-white">
          {/* Main intro */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Hello, I'm<br />
              <span className="text-brand-blue">Shedrack Siame</span><br />
              A Computer Engineer
            </h1>
            <button
              onClick={() => setCurrentPage('project')}
              className="bg-brand-blue hover:bg-blue-700 px-8 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300"
            >
              <Eye size={20} />
              Browse All Projects
            </button>
          </div>
        </div>

        {/* Skills boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand-blue transition-colors duration-300">
            <Brain className="text-brand-blue mb-4" size={32} />
            <h3 className="text-white text-xl font-bold mb-2">Machine Learning</h3>
            <p className="text-gray-400">and</p>
            <h3 className="text-white text-xl font-bold">Artificial Intelligence</h3>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand-blue transition-colors duration-300">
            <BarChart className="text-brand-blue mb-4" size={32} />
            <h3 className="text-white text-xl font-bold">Data Analytics</h3>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mb-20">
        <div className="text-white">
          <p className="text-brand-blue text-lg mb-4">What I can Offer</p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Which Service I<br />
            Can Provide For You
          </h2>
          <button
            onClick={() => setCurrentPage('services')}
            className="bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
          >
            Explore All Services
          </button>
        </div>
      </div>

      {/* About Section Preview */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-gradient-to-r from-brand-blue to-purple-600 rounded-xl p-8 text-center">
          <div className="text-white text-6xl mb-4">👨‍💻</div>
          <span className="text-white text-lg">About Image</span>
        </div>

        <div className="text-white">
          <p className="text-brand-blue text-lg mb-4">About me</p>
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
