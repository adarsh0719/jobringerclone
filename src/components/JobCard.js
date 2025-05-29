// src/components/JobCard.js
import React from 'react';
import { motion } from 'framer-motion';
import {FaAppStoreIos,FaGooglePlay } from 'react-icons/fa'
const JobCard = ({ job, index, darkMode, onClick }) => {
  return (
    <motion.div 
      className={`job-card ${darkMode ? 'dark' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        boxShadow: darkMode 
          ? '0 10px 25px rgba(0,0,0,0.3)' 
          : '0 10px 25px rgba(0,0,0,0.1)'
      }}
      onClick={onClick}
    >
      <div className="job-header">
        <span className={`work-mode ${job.workMode.toLowerCase().replace(' ', '-')}`}>
          {job.workMode}
        </span>
        <span className="posted">{job.posted}</span>
      </div>
      
      <h3>{job.title}</h3>
      <div className="company">{job.company}</div>
      
      <div className="job-details">
        <div className="detail">
          <span>Experience:</span> {job.experience}
        </div>
        <div className="detail">
          <span>Salary:</span> {job.salary}
        </div>
        <div className="detail">
          <span>Location:</span> {job.location}
        </div>
        <div className="detail">
          <span>Job Type:</span> {job.type}
        </div>
      </div>
      
      <div className="skills">
        {job.skills.slice(0, 4).map((skill, idx) => (
          <span key={idx} className="skill-tag">{skill}</span>
        ))}
        {job.skills.length > 4 && (
          <span className="skill-tag more">+{job.skills.length - 4} more</span>
        )}
      </div>
      
      <div className="job-footer">
        <div className="industry">{job.industry}</div>
        <motion.button 
          className="apply-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          APPLY
        </motion.button>
      </div>
      
      <div className="app-banner">
        <span>Apply to JOBS On-The-Go Jobringer Mobile App</span>
        <div className="app-badges">
          <div className="app-badge">
            <FaAppStoreIos className="icon" /> App Store
          </div>
          <div className="app-badge">
            <FaGooglePlay className="icon" /> Google Play
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;