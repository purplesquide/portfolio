// About.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaJava, FaPython, FaPhp } from 'react-icons/fa';
import { 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow 
} from 'react-icons/si';

const About = () => {
    return (
      <div className="w-full h-auto md:h-screen ml-0 md:ml-64 bg-[#0f0f0f] text-white p-4 md:p-8">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-4xl font-bold border-b-4 border-[#F3FFB6] inline-block mb-8">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Bio and Connect */}
            <div className="flex flex-col gap-8">
              {/* Bio Section */}
              <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-[#F3FFB6]">Who Am I?</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate software developer who thrives on creating innovative solutions through clean and efficient code. With a knack for problem-solving and a deep love for technology, I specialize in building modern, user-friendly applications that bridge creativity and functionality. Whether it’s crafting seamless front-end experiences or designing robust back-end systems, I’m driven to bring ideas to life and deliver value through my work.

                Let’s build something amazing together!
                </p>
                
                {/* Connect Section */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-4 text-[#F3FFB6]">Connect With Me</h3>
                  <div className="flex gap-6">
                    <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-[#F3FFB6] transition-colors">
                      <FaGithub className="text-2xl" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-[#F3FFB6] transition-colors">
                      <FaLinkedin className="text-2xl" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-[#F3FFB6]">Tech Stack</h3>
              
              {/* Web Development */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-400 mb-2">Web Development</h4>
                <div className="flex flex-wrap gap-6">
                  <SiJavascript className="text-4xl text-yellow-400 hover:scale-110 transition-transform" />
                  <SiReact className="text-4xl text-blue-400 hover:scale-110 transition-transform" />
                  <SiTailwindcss className="text-4xl text-cyan-400 hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Database Section */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-400 mb-2">Databases</h4>
                <div className="flex flex-wrap gap-6">
                  <SiMongodb className="text-4xl text-green-400 hover:scale-110 transition-transform" />
                  <SiMysql className="text-4xl text-blue-500 hover:scale-110 transition-transform" />
                  <SiPostgresql className="text-4xl text-blue-400 hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Programming Languages */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-400 mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-6">
                  <FaJava className="text-4xl text-red-500 hover:scale-110 transition-transform" />
                  <FaPython className="text-4xl text-blue-300 hover:scale-110 transition-transform" />
                  <FaPhp className="text-4xl text-purple-500 hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Data Science */}
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Data Science</h4>
                <div className="flex flex-wrap gap-6">
                  <SiPandas className="text-4xl text-purple-400 hover:scale-110 transition-transform" />
                  <SiNumpy className="text-4xl text-blue-400 hover:scale-110 transition-transform" />
                  <SiScikitlearn className="text-4xl text-orange-400 hover:scale-110 transition-transform" />
                  <SiTensorflow className="text-4xl text-orange-500 hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default About;