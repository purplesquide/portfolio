// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = ({ setActiveSection }) => {
  const [nav, setNav] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setNav(false);
  };

  const links = [
    { id: 'home', name: 'Home', icon: <FaHome /> },
    { id: 'about', name: 'About', icon: <FaUser /> },
    { id: 'projects', name: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', name: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed top-0 left-0 hidden md:flex flex-col w-[200px] h-screen bg-[#1f1f1f] text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#F3FFB6]">CodeByOT</h1>
        </div>
        
        <nav className="flex-1 px-4">
          <ul className="space-y-4">
            {links.map(({ id, name, icon }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className="w-full flex items-center gap-3 p-3 text-gray-400 hover:text-[#F3FFB6] hover:bg-[#2d2d2d] rounded-lg transition-all duration-300"
                >
                  {icon}
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 md:hidden bg-[#1f1f1f] flex items-center justify-between px-4 z-50">
        <h1 className="text-xl font-bold text-[#F3FFB6]">CodeByOT</h1>
        <button
          onClick={() => setNav(!nav)}
          className="text-white focus:outline-none"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 ${nav ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 right-0 w-64 h-full bg-[#1f1f1f] transform transition-transform duration-300 ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <ul className="space-y-4">
              {links.map(({ id, name, icon }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className="w-full flex items-center gap-3 p-3 text-gray-400 hover:text-[#F3FFB6] hover:bg-[#2d2d2d] rounded-lg transition-all duration-300"
                  >
                    {icon}
                    <span>{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;