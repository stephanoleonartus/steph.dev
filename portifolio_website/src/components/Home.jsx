import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Mail, Linkedin, Phone, Eye } from 'lucide-react';

const HomePage = () => (
    <div className="">
      <div className="">
        {/* Main Hero Section */}
        <div className>
          <div className="">

            {/* Main intro  of shedrack siame box */}
            <div className="">
              <h1 className="">
                Hello, I'm<br />
                <span className="">Shedrack Siame</span> An<br />
                Computer Engineer
              </h1>
              <button className="">
                <Eye className="" />
                Browse All Project
              </button>
            </div>
            
            {/* Skills boxes displayed */}
            <div className="">
              <div className="">
                <h3 className="">Machine Learning</h3>
                <p className="">and</p>
                <h3 className="">Artificial Intelligence</h3>
              </div>
              
              <div className="">
                <h3 className="">Data Analytics</h3>
              </div>
            </div>
          </div>
          
          
        </div>
        
        {/* Services Section */}
        <div className="">
          <div className="">
            <p className="">What I can Offer</p>
            <h2 className="">
              Which Service I<br />
              Can Provide For You
            </h2>
            <button className="">
              Explore All Services
            </button>
          </div>
        </div>
        
        {/* About Section  link */}
        <div className="">
          <div className="">
            <div className="">
              <span className="">About Image</span>
            </div>
          </div>
          
          <div className="">
            <p className="">About me</p>
            <h3 className="">
              My values is Integrity,<br />
              Empathy and Time Management.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
export default HomePage;