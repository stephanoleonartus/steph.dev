import React from 'react';

// Sample data - replace with your actual certifications and awards
const certificationsAndAwards = [
  {
    id: 1,
    title: 'University of Dar es Salaam Certified',
    issuer: 'UDSM',
    date: '2023',
    category: 'Certification',
    image: '/assets/alxprofession_faundation.png',
  },
  {
    id: 2,
    title: 'Top Performer Award',
    issuer: 'Example Corp',
    date: '2022',
    category: 'Award',
    image: '/assets/cert2.svg',
  },
  {
    id: 3,
    title: 'Cloud Practitioner                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ',
    issuer: 'Amazon Web Services',
    date: '2023',
    category: 'Certification',
    image: '/assets/cert1.svg',
  },
  {
    id: 4,
    title: 'Innovation Prize',
    issuer: 'Tech Conference 2023',
    date: '2023',
    category: 'Award',
    image: '/assets/cert2.svg',
  },
];

// Certification Page Component
const Certification = () => {
  const certifications = certificationsAndAwards.filter(item => item.category === 'Certification');
  const awards = certificationsAndAwards.filter(item => item.category === 'Award');

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-black text-4xl font-bold mb-4">Certifications & Rewards</h1>
          <p className="text-black text-lg">Professional achievements and recognitions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Certifications Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Certifications</h2>
            <div className="grid gap-8">
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
            <h2 className="text-2xl font-bold mb-8">Awards</h2>
            <div className="grid gap-8">
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
