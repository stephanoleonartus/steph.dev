import React from 'react';
import { Brain, BarChart, Code, Monitor, Facebook, Twitter, Instagram, Mail, Linkedin, Phone } from 'lucide-react';

// About Page Component
const AboutPage = ({ setCurrentPage }) => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="bg-gradient-to-r from-brand-blue to-purple-600 rounded-xl p-12 mb-8">
          <div className="text-white text-8xl mb-4">👨‍💻</div>
          <h1 className="text-white text-4xl font-bold">About Shedrack Siame</h1>
        </div>
        <button
          onClick={() => setCurrentPage('certification')}
          className="bg-brand-blue hover:bg-blue-700 px-8 py-3 rounded-lg text-black transition-colors duration-300"
        >
          See my Certificates and Rewards
        </button>
      </div>
      
      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Brain, title: "AI & Machine Learning", desc: "Advanced algorithms and neural networks" },
            { icon: BarChart, title: "Data Analytics", desc: "Statistical analysis and visualization" },
            { icon: Code, title: "Software Development", desc: "Full-stack web and mobile development" }
          ].map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand-blue transition-colors duration-300">
              <skill.icon className="text-brand-blue mb-4" size={40} />
              <h3 className="text-white text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Experiences Section */}
      <div className="mb-16">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
          <div className="text-center text-gray-400">
            <Monitor size={48} className="mx-auto mb-4 text-brand-blue" />
            <p>Experience details coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
