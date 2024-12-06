// Navrab.jsx
import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

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
    { id: 'contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center p-4 bg-[#1f1f1f]">
        <button onClick={toggleNav}>
          {nav ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
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
                    <span className="text-base">{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 w-64 h-full bg-[#1f1f1f] p-6">
        <ul className="space-y-4">
          {links.map(({ id, name, icon }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className="w-full flex items-center gap-3 p-3 text-gray-400 hover:text-[#F3FFB6] hover:bg-[#2d2d2d] rounded-lg transition-all duration-300"
              >
                {icon}
                <span className="text-base">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;