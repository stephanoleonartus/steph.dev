import React from 'react';
import { Award } from 'lucide-react';

// Certification Page Component
const Certification = () => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-white text-4xl font-bold mb-4">Certifications & Rewards</h1>
        <p className="text-gray-400 text-lg">Professional achievements and recognitions</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((cert) => (
          <div key={cert} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-brand-blue transition-colors duration-300">
            <div className="text-center mb-4">
              <Award className="text-yellow-400 mx-auto mb-2" size={48} />
              <h3 className="text-white text-xl font-bold">Certification {cert}</h3>
            </div>
            <p className="text-gray-400 text-center">Professional certification in technology field {cert}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Certification;
