import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animation effects
import { AiOutlineSend } from 'react-icons/ai'; // Send Icon from react-icons
import { FaFileUpload, FaImage } from 'react-icons/fa'; // Icons for file and image upload

const Home = () => {
  // State for managing the theme
  const [theme, setTheme] = useState('light'); // Default theme
  const [input, setInput] = useState(''); // State for input message
  const [selectedFile, setSelectedFile] = useState(null); // State for file upload
  const [selectedImage, setSelectedImage] = useState(null); // State for image upload

  // Function to determine the theme based on input
  const determineTheme = (inputText) => {
    const loweredInput = inputText.toLowerCase();
    
    if (loweredInput.includes('sad') || loweredInput.includes('stress')) {
      return 'calm'; // Calm & Tranquil
    } else if (loweredInput.includes('happy') || loweredInput.includes('excite')) {
      return 'energize'; // Energize & Uplift
    } else if (loweredInput.includes('anxious') || loweredInput.includes('overwhelm')) {
      return 'soothing'; // Soothing & Reflective
    } else if (loweredInput.includes('lonely')) {
      return 'comfort'; // Comfort & Warmth
    } else if (loweredInput.includes('confuse') || loweredInput.includes('distract')) {
      return 'focus'; // Focus & Clarity
    } else if (loweredInput.includes('lethargic') || loweredInput.includes('procrastinate')) {
      return 'inspiration'; // Inspiration & Motivation
    } else if (loweredInput.includes('angry') || loweredInput.includes('frustrate')) {
      return 'balance'; // Peace & Balance
    } else if (loweredInput.includes('joy') || loweredInput.includes('play')) {
      return 'playful'; // Joy & Playfulness
    } else {
      return 'light'; // Default theme
    }
  };

  // Handle input change and dynamically adjust the theme
  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);

    const newTheme = determineTheme(newInput);
    setTheme(newTheme);
  };

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

  // Return the appropriate background based on the theme
  const getThemeBackground = () => {
    switch (theme) {
      case 'calm':
        return 'theme-calm-and-tranquil'; // Class for Calm & Tranquil
      case 'energize':
        return 'theme-energize-and-uplift'; // Class for Energize & Uplift
      case 'soothing':
        return 'theme-soothing-and-reflective'; // Class for Soothing & Reflective
      case 'comfort':
        return 'theme-comfort-and-warmth'; // Class for Comfort & Warmth
      case 'focus':
        return 'theme-focus-and-clarity'; // Class for Focus & Clarity
      case 'inspiration':
        return 'theme-inspiration-and-motivation'; // Class for Inspiration & Motivation
      case 'balance':
        return 'theme-peace-and-balance'; // Class for Peace & Balance
      case 'playful':
        return 'theme-joy-and-playfulness'; // Class for Joy & Playfulness
      default:
        return 'bg-white'; // Default light theme
    }
  };

  return (
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
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              <p className="text-primary text-lg font-semibold">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Prompt Input Section with File Upload, Image Upload, and Send Button */}
        <div className="w-full flex justify-center mt-8">
          {/* Input Container */}
          <div className={`w-full max-w-2xl flex items-center bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg border ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} p-2`}>
            
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
              onChange={handleInputChange}
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
  );
};

export default Home;
