import React from 'react';
import { Brain, BarChart, Monitor, Smartphone, Database, Code } from 'lucide-react';

// Services Page Component
const Services = () => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">My Services</h1>
        <p className="text-black text-lg">Professional services in technology and analytics</p>
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
          <div key={index} className="rounded-xl p-6 border border-gray-700 hover:border-blue-800 transition-colors duration-300">
            <service.icon className="text-blue-800 mb-4" size={40} />
            <h3 className="text-black text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-black">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
