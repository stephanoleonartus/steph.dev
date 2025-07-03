import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Mail, Linkedin, Phone, Eye } from 'lucid-react';

const HomePage = () => (
    <div className="min-h-screen bg-purple-900 relative">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {/* Main intro box */}
            <div className="bg-gray-200 rounded-lg p-8 shadow-lg">
              <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Hello, I'm<br />
                <span className="text-purple-900">Shedrack Siame</span> An<br />
                Computer Engineer
              </h1>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition-colors duration-300 flex items-center gap-2 font-medium">
                <Eye className="w-4 h-4" />
                Browse All Project
              </button>
            </div>
            
            {/* Skills boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Machine Learning</h3>
                <p className="text-gray-600 font-medium">and</p>
                <p className="text-gray-800 font-bold">Artificial Intelligence</p>
              </div>
              
              <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800">Data Analytics</h3>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="bg-gray-300 rounded-lg p-4 shadow-lg">
              <div className="w-80 h-96 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mb-16">
          <div className="bg-gray-200 rounded-lg p-8 shadow-lg text-center">
            <p className="text-red-600 font-medium mb-2">What I can Offer</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Which Service I<br />
              Can Provide For You
            </h2>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition-colors duration-300 font-medium">
              Explore All Services
            </button>
          </div>
        </div>
        
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 rounded-lg p-4 shadow-lg">
            <div className="w-full h-64 bg-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-medium">About Image</span>
            </div>
          </div>
          
          <div className="text-white">
            <p className="text-red-400 font-medium mb-4">About me</p>
            <h3 className="text-2xl font-bold leading-relaxed">
              My values is Integrity,<br />
              Empathy and Time Management.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
export default HomePage;