// src/components/StatsSection.js
import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = ({ darkMode }) => {
  const stats = [
    { value: 40927, label: 'Jobs Posted' },
    { value: 15153, label: 'Jobs Filled' },
    { value: 25781, label: 'Employers' },
    { value: 1560712, label: 'Active Users' }
  ];

  return (
    <section className={`stats-section ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="stat-value"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 1,
                  delay: 0.5 + index * 0.2
                }}
              >
                {stat.value.toLocaleString()}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="event-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3>Delivering Asia's Energy Transition</h3>
          <p>16 – 18 June 2025</p>
          <p>Kuala Lumpur, Malaysia</p>
          <motion.button 
            className="register-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;