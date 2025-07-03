const Navigation = () => (
    <nav className="bg-purple-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Shedrack Siame</div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Home', key: 'home' },
            { name: 'About', key: 'about' },
            { name: 'Project', key: 'project' },
            { name: 'Services', key: 'services' },
            { name: 'Certification & Reward', key: 'certification' }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`hover:text-gray-300 transition-colors duration-300 ${
                currentPage === item.key ? 'text-gray-300 underline' : ''
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <button className="bg-white text-purple-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-300 font-medium">
          Download CV
        </button>
      </div>
    </nav>
  );

  export default Navigation;