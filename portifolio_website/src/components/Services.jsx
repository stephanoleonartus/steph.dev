// Services Page Component
const Services = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-white text-4xl font-bold mb-4">My Services</h1>
        <p className="text-gray-400 text-lg">Professional services in technology and analytics</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Brain, title: "AI Solutions", desc: "Custom AI and machine learning implementations" },
          { icon: BarChart, title: "Data Analytics", desc: "Comprehensive data analysis and insights" },
          { icon: Monitor, title: "Web Development", desc: "Modern, responsive web applications" },
          { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile development" },
          { icon: Database, title: "Data Management", desc: "Database design and optimization" },
          { icon: Code, title: "Consulting", desc: "Technical consulting and architecture" }
        ].map((service, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
            <service.icon className="text-blue-400 mb-4" size={40} />
            <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
