// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => (
  <nav className="bg-gray-900 text-white p-4 sticky top-0 z-40">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-400">Shedrack Siame</div>
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
            className={`hover:text-blue-400 transition-colors duration-300 ${
              currentPage === item.key ? 'text-blue-400 underline' : ''
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-300">
        Download CV
      </button>
    </div>
  </nav>
);

