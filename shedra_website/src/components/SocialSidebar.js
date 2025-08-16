import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Linkedin, Phone } from 'lucide-react';

// Social Sidebar Component
const SocialSidebar = () => (
  <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 rounded-r-xl p-3 shadow-lg">
    <div className="flex flex-col space-y-4">
      {[Facebook, Twitter, Instagram, Mail, Linkedin, Phone].map((Icon, index) => (
        <button key={index} className="text-black hover:text-blue-800 transition-colors duration-300">
          <Icon size={20} />
        </button>
      ))}
    </div>
  </div>
);

export default SocialSidebar;