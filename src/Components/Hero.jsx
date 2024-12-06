// Hero.jsx
import React from 'react';
import profileImage from '../assets/IMG_20240109_145404_989.jpg';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full h-auto md:h-screen ml-0 md:ml-64 bg-[#0f0f0f] flex items-center px-4 py-8">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="text-white md:w-1/2">
          <h2 className="text-[#F3FFB6] text-xl font-semibold">Hello, I'm</h2>
          <h1 className="text-4xl sm:text-5xl font-bold py-4 text-white">Ouassim Touati</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-400">
            Full Stack Developer / Data Scientist
          </h2>
          <p className="text-gray-400 py-4 max-w-[700px]">
            I specialize in building exceptional digital experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-6 py-3 bg-[#F3FFB6] text-gray-900 rounded-full font-semibold hover:bg-[#d9e59f] transition-all duration-300 flex items-center justify-center">
              <FaDownload className="mr-2" />
              Download CV
            </button>
            <button className="px-6 py-3 border-2 border-[#F3FFB6] text-[#F3FFB6] rounded-full font-semibold hover:bg-[#F3FFB6] hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <FaEnvelope className="mr-2" />
              Hire Me
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] mx-auto">
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