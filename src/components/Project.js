import React, { useState } from 'react';
import { Code } from 'lucide-react';
import ProjectModal from './ProjectModal';

// Sample project data - replace with your actual project details
const projects = [
  {
    id: 1,
    title: 'Edawa-Mobile app',
    description: 'Ecommarce application that deals with purchase medical online.',
    explanation: 'Edawa project this comes with some of the revalutions in how the phamacy industry should operate due to the provision of the medicine  and how the medicine buyed and selling according to the laws.',
    image: `${process.env.PUBLIC_URL}/assets/edawa.jpeg`,
  },
  {
    id: 2,
    title: 'Lishe Bora Ecommarce',
    description: 'A brief description of Lishe Bora.',
    explanation: 'A Lishe bora ecommarce project that deals with food delivery system  and how the food is being prepared and delivered to the customer in a timely manner and also maintaining the quality of the food being delivered to the customer.',
    image: `${process.env.PUBLIC_URL}/assets/Lishe-Bora.c3.jpg`,
  },
  {
    id: 3,
    title: 'Shop Management System',
    description: 'A brief description of Shop Management System.',
    explanation: 'A Shop Management System project that deals with inventory management and sales tracking.',
    image: `${process.env.PUBLIC_URL}/assets/placeholder.svg`,
  },
  {
    id: 4,
    title: 'Kysunny mobile app',
    description: 'A brief description of Kysunny mobile app.',
    explanation: 'A more detailed explanation of Kysunny mobile app, discussing the technologies used, the problems solved, and the outcomes.',
    image: `${process.env.PUBLIC_URL}/assets/KY-1.jpg`,
  },
  {
    id: 5,
    title: 'Lishe bora website',
    description: 'A brief description of Lishe bora website.',
    explanation: 'A more Lishe bora website project that deals with food delivery system  and how the food is being prepared and delivered to the customer in a timely manner and also maintaining the quality of the food being delivered to the customer.',
    image: `${process.env.PUBLIC_URL}/assets/Lishe-Bora.c2.jpg`,
  },
  {
    id: 6,
    title: 'Social Media Management system',
    description: 'A brief description of Social Media Management system.',
    explanation: 'A more detailed explanation of Social Media Management system, discussing the technologies used, the problems solved, and the outcomes.',
    image: `${process.env.PUBLIC_URL}/assets/placeholder.svg`,
  },
];


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
