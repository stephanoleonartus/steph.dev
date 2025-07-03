const AboutPage = () => (
    <div className="min-h-screen bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div></div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition-colors duration-300 font-medium">
            See my Certificates and Reward
          </button>
        </div>
        
        {/* Skills Section */}
        <div className="bg-gray-200 rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="bg-purple-900 rounded-lg h-24 shadow-lg">
              </div>
            ))}
          </div>
        </div>
        
        {/* Experiences Section */}
        <div className="bg-gray-200 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Experiences</h2>
          <div className="bg-gray-300 rounded-lg h-48 shadow-inner">
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-purple-900 border-t border-purple-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 text-white">
            {[Facebook, Twitter, Instagram, Mail, Linkedin, Phone].map((Icon, index) => (
              <Icon key={index} className="w-6 h-6 hover:text-red-400 cursor-pointer transition-colors duration-300" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <div className="relative">
      <SocialSidebar />
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
    </div>
  );

export default AboutPage;