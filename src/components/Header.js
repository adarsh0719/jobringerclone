// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun,FiBriefcase,FiUser,FiBook,FiDollarSign,FiMenu, FiX } from 'react-icons/fi';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Jobs", icon: <FiBriefcase /> },
    { name: "Active Employers", icon: <FiUser /> },
    { name: "Job Blogs", icon: <FiBook /> },
    { name: "Pricing", icon: <FiDollarSign /> }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          JobRinger
        </motion.div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.a 
              key={index}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                color: darkMode ? '#60a5fa' : '#2563eb'
              }}
            >
              <span className="icon">{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
        </div>
        
        <div className="auth-buttons">
          <button 
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          
          <motion.button 
            className="jobseeker-login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jobseeker Login
          </motion.button>
          <motion.button 
            className="employer-login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Employer Login
          </motion.button>
        </div>
        
        <div 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
      
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={index}
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="icon">{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
          <div className="mobile-auth">
            <button className="jobseeker-login">Jobseeker Login</button>
            <button className="employer-login">Employer Login</button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;