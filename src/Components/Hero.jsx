// Hero.jsx
import React from 'react';
import profileImage from '../assets/IMG_20240109_145404_989.jpg';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full h-auto md:h-screen ml-0 md:ml-64 bg-[#0f0f0f] flex flex-col md:flex-row items-center px-4 py-8">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        
        {/* Text Content */}
        <div className="text-white w-full md:w-1/2 order-1 md:order-1 text-center md:text-left">
          <h2 className="text-[#F3FFB6] text-xl font-semibold">Hello, I'm</h2>
          <h1 className="text-4xl sm:text-5xl font-bold py-4 text-white">Ouassim Touati</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-400">
            Full Stack Developer /
            Data Scientist
          </h2>
          <p className="text-gray-400 py-4 max-w-[700px] mx-auto md:mx-0">
            I specialize in building exceptional digital experiences.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            
            <button className="px-6 py-3 border-2 border-[#F3FFB6] text-[#F3FFB6] rounded-full font-semibold hover:bg-[#F3FFB6] hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <FaEnvelope className="mr-2" />
              Hire Me
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-2 mb-8 md:mb-0 md:flex md:justify-center">
          <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] mx-auto md:mx-0">
            <div className="absolute inset-0 bg-[#F3FFB6] rounded-full blur-3xl opacity-20"></div>
            <img
              src={profileImage}
              alt="Professional headshot"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-[#F3FFB6]"
            />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Hero;