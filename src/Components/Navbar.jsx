import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Gemini</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className="hidden md:block px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </motion.button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4 space-y-4 text-white">
          <a href="#home" className="block hover:text-blue-400">Home</a>
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#services" className="block hover:text-blue-400">Services</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>

          {/* Theme Toggle for mobile */}
          <motion.button
            onClick={toggleTheme}
            className="w-full px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
          >
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </motion.button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
