// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ setActiveSection }) => {
  const [nav, setNav] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setNav(false);
  };

  return (
    <div className="navbar flex justify-between items-center p-4 bg-[#0f0f0f] text-white fixed w-full z-10">
      <div className="hamburger md:hidden" onClick={() => setNav(!nav)}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <h1 className="text-2xl font-bold">CodeByOT</h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8">
        <li 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer hover:text-[#F3FFB6] transition-all duration-300"
        >
          Home
        </li>
        <li 
          onClick={() => handleNavClick('about')}
          className="cursor-pointer hover:text-[#F3FFB6] transition-all duration-300"
        >
          About
        </li>
        <li 
          onClick={() => handleNavClick('projects')}
          className="cursor-pointer hover:text-[#F3FFB6] transition-all duration-300"
        >
          Projects
        </li>
        <li 
          onClick={() => handleNavClick('contact')}
          className="cursor-pointer hover:text-[#F3FFB6] transition-all duration-300"
        >
          Contact
        </li>
      </ul>

      {/* Mobile menu */}
      {nav && (
        <ul className="mobile-menu absolute top-16 left-0 w-full bg-[#0f0f0f] flex flex-col items-center gap-4 py-4">
          <li onClick={() => handleNavClick('home')}>Home</li>
          <li onClick={() => handleNavClick('about')}>About</li>
          <li onClick={() => handleNavClick('projects')}>Projects</li>
          <li onClick={() => handleNavClick('contact')}>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;