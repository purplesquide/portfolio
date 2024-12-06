// Hero.jsx
import React from 'react';
import profileImage from '../assets/IMG_20240109_145404_989.jpg';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] flex items-center px-4 py-16 sm:py-20">
      <div className="max-w-[1000px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#F3FFB6] text-lg sm:text-xl font-semibold">
            Hello, I'm
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-2 sm:py-4 text-white">
            Ouassim Touati
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-400">
            Full Stack Developer / Data Scientist
          </h2>
          <p className="text-gray-400 py-4 max-w-[700px] text-sm sm:text-base mx-auto lg:mx-0">
            I specialize in building exceptional digital experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-[#F3FFB6] text-gray-900 rounded-full font-semibold hover:bg-[#d9e59f] transition-all duration-300 text-sm sm:text-base">
              <FaDownload className="inline mr-2" />
              Download CV
            </button>
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-[#F3FFB6] text-[#F3FFB6] rounded-full font-semibold hover:bg-[#F3FFB6] hover:text-gray-900 transition-all duration-300 text-sm sm:text-base">
              <FaEnvelope className="inline mr-2" />
              Hire Me
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]">
            <div className="absolute inset-0 bg-[#F3FFB6] rounded-full blur-3xl opacity-20"></div>
            <img
              src={profileImage}
              alt="Professional headshot"
              className="relative z-10 w-full h-full rounded-full object-cover border-2 sm:border-4 border-[#F3FFB6]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;