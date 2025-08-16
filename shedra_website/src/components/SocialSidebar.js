import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Linkedin, Phone, MessageSquare } from 'lucide-react';

// Social Sidebar Component
const SocialSidebar = () => {
  // To update the links, replace the '#' with your actual URLs
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Mail, href: 'mailto:#', label: 'Email' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Phone, href: 'tel:#', label: 'Phone' },
    { Icon: MessageSquare, href: 'https://wa.me/#', label: 'WhatsApp' }, // Using MessageSquare for WhatsApp
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 rounded-r-xl p-3 shadow-lg">
      <div className="flex flex-col space-y-4">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-800 transition-colors duration-300"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;