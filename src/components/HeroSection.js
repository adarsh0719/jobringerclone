// src/components/HeroSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMapPin, FiBarChart2, FiDollarSign } from 'react-icons/fi';

const HeroSection = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const locations = [
    "Select Location", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune"
  ];
  
  const experiences = [
    "Select Experience", "Fresher", "0-2 Years", "2-5 Years", "5-10 Years", "10+ Years"
  ];
  
  const salaries = [
    "Select Salary", "0-3 LPA", "3-6 LPA", "6-10 LPA", "10-15 LPA", "15+ LPA"
  ];
  
  const quickJobTags = [
    "#Fresher", "#Work From Home", "#WFH", "#IT", 
    "#HR", "#Back Office", "#BPO Jobs", "#ITES",
    "#Finance", "#Accounts", "#Medical", "#Pharma",
    "#Manager", "#Developer", "#CA", "#Marketing",
    "#Engineering", "#Research", "#Sales", "#MBA"
  ];

  return (
    <div className={`hero-section ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Find Your <span>Dream Job</span> Today
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Discover thousands of job opportunities with all the information you need. 
            It's your future. Come find it.
          </motion.p>
          
          <motion.div 
            className="search-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="search-bar">
              <div className="search-input">
                <FiSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Type keyword and press enter" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <motion.button 
                  className="search-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search
                </motion.button>
              </div>
              
              <div className="filters">
                <div className="filter-group">
                  <FiMapPin className="filter-icon" />
                  <select>
                    {locations.map((loc, idx) => (
                      <option key={idx} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                
                <div className="filter-group">
                  <FiBarChart2 className="filter-icon" />
                  <select>
                    {experiences.map((exp, idx) => (
                      <option key={idx} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
                
                <div className="filter-group">
                  <FiDollarSign className="filter-icon" />
                  <select>
                    {salaries.map((sal, idx) => (
                      <option key={idx} value={sal}>{sal}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="quick-job-tags">
              <h3>Quick Job search</h3>
              <div className="tags-container">
                {quickJobTags.map((tag, index) => (
                  <motion.span 
                    key={index} 
                    className="tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: darkMode ? '#3b82f6' : '#2563eb',
                      color: '#fff'
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="hero-illustration">
          <motion.div 
            className="floating-element el1"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="inner"></div>
          </motion.div>
          
          <motion.div 
            className="floating-element el2"
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="inner"></div>
          </motion.div>
          
          <motion.div 
            className="floating-element el3"
            animate={{ 
              y: [0, -25, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="inner"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;