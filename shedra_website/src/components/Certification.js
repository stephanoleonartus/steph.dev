import React from 'react';
import content from '../content.json';

const { certificationsAndAwards } = content;

// Certification Page Component
const Certification = () => {
  const certifications = certificationsAndAwards.filter(item => item.category === 'Certification');
  const awards = certificationsAndAwards.filter(item => item.category === 'Award');

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">Certifications & Rewards</h1>
          <p className="text-black text-lg">Professional achievements and recognitions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Certifications Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Certifications</h2>
            <div className="space-y-8">
              {certifications.map((cert) => (
                <div key={cert.id} className="relative rounded-xl p-6 border border-gray-700 hover:border-blue-800 transition-colors duration-300">
                  <img src={cert.image} alt={cert.title} className="absolute top-2 right-2 w-12 h-12" />
                  <div className="text-left mb-4">
                    <h3 className="text-black text-xl font-bold">{cert.title}</h3>
                  </div>
                  <p className="text-black text-left">{cert.issuer} - {cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Awards</h2>
            <div className="space-y-8">
              {awards.map((award) => (
                <div key={award.id} className="relative rounded-xl p-6 border border-gray-700 hover:border-blue-800 transition-colors duration-300">
                  <img src={award.image} alt={award.title} className="absolute top-2 right-2 w-12 h-12" />
                  <div className="text-left mb-4">
                    <h3 className="text-black text-xl font-bold">{award.title}</h3>
                  </div>
                  <p className="text-black text-left">{award.issuer} - {award.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
