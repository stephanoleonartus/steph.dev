import React from 'react';
import { Brain, BarChart, Code } from 'lucide-react';
import content from '../content.json';

const { skills, experiences } = content;

const iconMap = {
  Brain,
  BarChart,
  Code,
};

// About Page Component
const AboutPage = ({ setCurrentPage }) => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 md:p-12 mb-8">
          <div className="text-black text-6xl md:text-8xl mb-4">👨‍💻</div>
          <h1 className="text-black text-3xl md:text-4xl font-bold">About Shedrack Siame</h1>
        </div>
        <button
          onClick={() => setCurrentPage('certification')}
          className="bg-blue-500 hover:bg-blue-700 px-8 py-3 rounded-lg text-black transition-colors duration-300"
        >
          See my Certificates and Rewards
        </button>
      </div>
      
      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-black text-2xl md:text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <div key={index} className="p-6 rounded-xl border border-gray-700 hover:border-blue-800 transition-colors duration-300">
                <Icon className="text-blue-800 mb-4" size={40} />
                <h3 className="text-black text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-black">{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Experiences Section */}
      <div className="mb-16">
        <h2 className="text-black text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="p-6 rounded-xl border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{exp.jobTitle}</h3>
                <p className="text-sm text-gray-600">{exp.duration}</p>
              </div>
              <p className="text-lg mb-4">{exp.company}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
