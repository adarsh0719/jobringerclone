// src/components/JobDetailsModal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const JobDetailsModal = ({ job, onClose, darkMode }) => {
  if (!job) return null;
  
  return (
    <AnimatePresence>
      <motion.div 
        className={`modal-overlay ${darkMode ? 'dark' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={`modal-content ${darkMode ? 'dark' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
          
          <div className="modal-header">
            <h2>{job.title}</h2>
            <div className="company">{job.company}</div>
            <div className="job-meta">
              <span className={`work-mode ${job.workMode.toLowerCase().replace(' ', '-')}`}>
                {job.workMode}
              </span>
              <span>{job.location}</span>
              <span>{job.experience}</span>
              <span>{job.salary}</span>
            </div>
          </div>
          
          <div className="modal-body">
            <div className="section">
              <h3>Job Description</h3>
              <p>{job.description}</p>
            </div>
            
            <div className="section">
              <h3>Responsibilities</h3>
              <ul>
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="section">
              <h3>Requirements</h3>
              <ul>
                {job.requirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="section">
              <h3>Skills</h3>
              <div className="skills">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="modal-footer">
            <motion.button 
              className="apply-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
            <motion.button 
              className="save-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Save Job
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobDetailsModal;