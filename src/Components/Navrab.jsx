// Navrab.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ setActiveSection }) => {
  const [nav, setNav] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setNav(false);
  };

  return (
    <div className="navbar">
      <div className="hamburger md:hidden" onClick={() => setNav(!nav)}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <h1>CodeByOT</h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex flex-col">
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
        <ul className="mobile-menu">
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