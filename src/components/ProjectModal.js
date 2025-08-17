import React from 'react';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-black">{project.explanation}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
