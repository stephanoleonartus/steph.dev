import React from 'react';

// Sample data - replace with your actual certifications and awards
const certificationsAndAwards = [
  {
    id: 1,
    title: 'ALX Foundation',
    issuer: 'ALX',
    date: '2023',
    category: 'Certification',
    image: `${process.env.PUBLIC_URL}/assets/alxprofession_faundation.png`,
  },
  {
    id: 2,
    title: 'AI Certificate',
    issuer: 'SimpliLearn',
    date: '2023',
    category: 'Certification',
    image: `${process.env.PUBLIC_URL}/assets/cheti_page-0001.jpg`,
  },
  {
    id: 3,
    title: 'Data Engineering Essentials',
    issuer: 'IBM',
    date: '2024',
    category: 'Certification',
    image: `${process.env.PUBLIC_URL}/assets/Data_Engineering_Essentials_Badge20240927-7-spp91q_page-0001.jpg`,
  },
  {
    id: 4,
    title: 'Machine Learning',
    issuer: 'Kaggle',
    date: '2025',
    category: 'Certification',
    image: `${process.env.PUBLIC_URL}/assets/kaggle.png`,
  },
  {
    id: 5,
    title: 'Python Coder Award',
    issuer: 'Kaggle',
    date: '2025',
    category: 'Award',
    image: `${process.env.PUBLIC_URL}/assets/pythoncoder.jpeg`,
  },
  {
    id: 6,
    title: "HP LIFE Bage",
    issuer: 'HP',
    date: '2024',
    category: 'Award',
    image: `${process.env.PUBLIC_URL}/assets/hpLiFe.png`,
  }
];

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
              {awards.length > 0 ? (
                awards.map((award) => (
                  <div key={award.id} className="relative rounded-xl p-6 border border-gray-700 hover:border-blue-800 transition-colors duration-300">
                    <img src={award.image} alt={award.title} className="absolute top-2 right-2 w-12 h-12" />
                    <div className="text-left mb-4">
                      <h3 className="text-black text-xl font-bold">{award.title}</h3>
                    </div>
                    <p className="text-black text-left">{award.issuer} - {award.date}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No awards yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;