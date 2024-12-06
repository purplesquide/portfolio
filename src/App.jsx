// App.jsx
import React, { useState } from 'react';
import Navbar from './Components/Navrab';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects.Jsx'; // Add this import

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex">
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === 'home' && <Hero />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />} {/* Add this line */}
    </div>
  );
}

export default App;