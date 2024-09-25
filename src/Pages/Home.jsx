import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { AiOutlineSend } from 'react-icons/ai'; // Send Icon from react-icons
import { FaFileUpload, FaImage } from 'react-icons/fa'; // Icons for file and image upload

const Homepage = () => {
  const [theme, setTheme] = useState('theme-calm-and-tranquil');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const [input, setInput] = useState(''); // State for input message
  const [selectedFile, setSelectedFile] = useState(null); // State for file upload
  const [selectedImage, setSelectedImage] = useState(null); // State for image upload

  

  // Handle file upload
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  // Handle send action (Submit input, files, etc.)
  const handleSend = () => {
    console.log('Input:', input);
    console.log('Selected File:', selectedFile);
    console.log('Selected Image:', selectedImage);

    // Clear input and file states after sending
    setInput('');
    setSelectedFile(null);
    setSelectedImage(null);
  };

  return (
    <>
    
    <div className={`app-container ${theme}`}>
      <h1 className="text-primary text-3xl">Welcome to the Themed Homepage!</h1>
      <div className="action-buttons">
        <button onClick={() => handleThemeChange('theme-calm-and-tranquil')} className="m-2 p-2">
          Calm & Tranquil
        </button>
        <button onClick={() => handleThemeChange('theme-energize-and-uplift')} className="m-2 p-2">
          Energize & Uplift
        </button>
        <button onClick={() => handleThemeChange('theme-soothing-and-reflective')} className="m-2 p-2">
          Soothing & Reflective
        </button>
        <button onClick={() => handleThemeChange('theme-comfort-and-warmth')} className="m-2 p-2">
          Comfort & Warmth
        </button>
        <button onClick={() => handleThemeChange('theme-focus-and-clarity')} className="m-2 p-2">
          Focus & Clarity
        </button>
        <button onClick={() => handleThemeChange('theme-inspiration-and-motivation')} className="m-2 p-2">
          Inspiration & Motivation
        </button>
        <button onClick={() => handleThemeChange('theme-hope-and-optimism')} className="m-2 p-2">
          Hope & Optimism
        </button>
        <button onClick={() => handleThemeChange('theme-peace-and-balance')} className="m-2 p-2">
          Peace & Balance
        </button>
        <button onClick={() => handleThemeChange('theme-joy-and-playfulness')} className="m-2 p-2">
          Joy & Playfulness
        </button>
        <button onClick={() => handleThemeChange('theme-mindfulness-and-serenity')} className="m-2 p-2">
          Mindfulness & Serenity
        </button>
        <button onClick={() => handleThemeChange('theme-adventure-and-exploration')} className="m-2 p-2">
          Adventure & Exploration
        </button>
      </div>

      <div className="card p-4 rounded-lg shadow-lg">
        <p className="text-primary">Your dynamic content goes here!</p>
      </div>
    </div>
    <div className={`min-h-screen flex flex-col items-center bg-theme app-container ${theme}`}>
      {/* Main Content */}
      <main className="flex flex-col items-start mt-20 flex-grow p-8 text-center text-theme">
        {/* Gradient Heading */}
        <h1 className=" text-primary text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Hello, Dhruv
        </h1>
        <h2 className=" text-primary text-6xl text-gray-400 dark:text-gray-300 mb-3">
          How can I help you today?
        </h2>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 max-w-4xl w-full h-40">
          {['Generate unit tests for C#', 'How to apply for a role', 'Write code for edge cases', 'Create a weekly meal plan'].map((text, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              className={` p-6 rounded-lg shadow-lg text-center cursor-pointer `}
            >
              <p className="text-primary text-lg font-semibold">
                {text}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Prompt Input Section with File Upload, Image Upload, and Send Button */}
        <div className="w-full flex justify-center mt-8">
          {/* Input Container */}
          <div className={`w-full max-w-2xl flex items-center card rounded-lg border ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} p-2`}>
            
            {/* Upload Document Icon */}
            <label className="cursor-pointer mx-2">
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
              <FaFileUpload className={`w-6 h-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`} />
            </label>

            {/* Upload Image Icon */}
            <label className="cursor-pointer mx-2">
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              <FaImage className={`w-6 h-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`} />
            </label>

            {/* Text Input */}
            <input
              type="text"
              value={input}
              
              placeholder="Enter a prompt here"
              className={`text-primary flex-grow p-2 bg-transparent focus:outline-none ${theme === 'light' ? 'text-black' : 'text-white'}`}
            />

            {/* Send Icon */}
            <button 
              onClick={handleSend}
              className={`mx-2 p-2 rounded-full ${theme === 'light' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-700 text-white hover:bg-blue-800'}`}>
              <AiOutlineSend className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>
    </div>
    
    </>
    
  );
};

export default Homepage;
