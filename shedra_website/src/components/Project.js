import React, { useState } from 'react';
import { Code } from 'lucide-react';
import ProjectModal from './ProjectModal';
import content from '../content.json';

const { projects } = content;

// Project Page Component
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-black text-lg">Showcasing my work in AI, ML, and Data Analytics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="rounded-xl p-6 border border-gray-700 hover:border-blue-800 transition-colors duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mb-4">
                <Code className="text-black mx-auto" size={32} />
              </div>
              <h3 className="text-black text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-black mb-4">{project.description}</p>
              <button onClick={() => openModal(project)} className="text-blue-800 hover:text-blue-500 transition-colors duration-300">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
};

export default Project;
