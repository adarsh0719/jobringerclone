// src/components/JobListings.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import JobCard from './JobCard';
import { FiX, FiFilter } from 'react-icons/fi';
import {FaAppStoreIos } from 'react-icons/fa'
const JobListings = ({ jobs, loading, darkMode, onJobClick }) => {
  const [filters, setFilters] = useState({
    keywords: '',
    workMode: 'all',
    jobType: 'all',
    experience: 'all',
    salary: 'all'
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredJobs = jobs.filter(job => {
    // Filter by keywords
    if (filters.keywords && 
        !job.title.toLowerCase().includes(filters.keywords.toLowerCase()) &&
        !job.skills.some(skill => skill.toLowerCase().includes(filters.keywords.toLowerCase()))) {
      return false;
    }
    
    // Filter by work mode
    if (filters.workMode !== 'all' && job.workMode.toLowerCase() !== filters.workMode) {
      return false;
    }
    
    // Filter by job type
    if (filters.jobType !== 'all' && !job.type.toLowerCase().includes(filters.jobType)) {
      return false;
    }
    
    // Filter by experience
    if (filters.experience !== 'all') {
      const expRange = filters.experience.split('-');
      const jobExp = parseInt(job.experience.split(' ')[0]);
      if (expRange[0] === "10+") {
        if (jobExp < 10) return false;
      } else {
        if (jobExp < parseInt(expRange[0])) return false;
        if (expRange[1] && jobExp > parseInt(expRange[1])) return false;
      }
    }
    
    // Filter by salary
    if (filters.salary !== 'all') {
      const salRange = filters.salary.split('-');
      const jobSal = parseInt(job.salary.split(' ')[1].replace(/,/g, ''));
      if (salRange[0] === "15+") {
        if (jobSal < 1500000) return false;
      } else {
        const minSal = parseInt(salRange[0]) * 100000;
        const maxSal = parseInt(salRange[1]) * 100000;
        if (jobSal < minSal || jobSal > maxSal) return false;
      }
    }
    
    return true;
  });

  return (
    <section className={`job-listings ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest Job Openings
          </motion.h2>
          <p className="no-govt">No Government Jobs</p>
        </div>
        
        <div className="filters-toggle" onClick={() => setShowFilters(!showFilters)}>
          <FiFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
        </div>
        
        <div className={`filters-container ${showFilters ? 'show' : ''}`}>
          <div className="filter-group">
            <label>Keywords</label>
            <input 
              type="text" 
              placeholder="Type keyword" 
              value={filters.keywords}
              onChange={(e) => setFilters({...filters, keywords: e.target.value})}
            />
          </div>
          
          <div className="filter-group">
            <label>Work Mode</label>
            <select 
              value={filters.workMode}
              onChange={(e) => setFilters({...filters, workMode: e.target.value})}
            >
              <option value="all">All Modes</option>
              <option value="in office">In Office</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Job Type</label>
            <select 
              value={filters.jobType}
              onChange={(e) => setFilters({...filters, jobType: e.target.value})}
            >
              <option value="all">All Types</option>
              <option value="full time">Full Time</option>
              <option value="part time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Experience</label>
            <select 
              value={filters.experience}
              onChange={(e) => setFilters({...filters, experience: e.target.value})}
            >
              <option value="all">All Experiences</option>
              <option value="0-2">0-2 Years</option>
              <option value="2-5">2-5 Years</option>
              <option value="5-10">5-10 Years</option>
              <option value="10+">10+ Years</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Salary Range</label>
            <select 
              value={filters.salary}
              onChange={(e) => setFilters({...filters, salary: e.target.value})}
            >
              <option value="all">All Salaries</option>
              <option value="0-3">0-3 LPA</option>
              <option value="3-6">3-6 LPA</option>
              <option value="6-10">6-10 LPA</option>
              <option value="10-15">10-15 LPA</option>
              <option value="15+">15+ LPA</option>
            </select>
          </div>
          
          <button 
            className="clear-filters"
            onClick={() => setFilters({
              keywords: '',
              workMode: 'all',
              jobType: 'all',
              experience: 'all',
              salary: 'all'
            })}
          >
            Clear Filters
          </button>
        </div>
        
        <div className="job-grid">
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading jobs...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="no-jobs">
              <h3>No jobs found matching your criteria</h3>
              <p>Try adjusting your filters</p>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <JobCard 
                key={job.id} 
                job={job} 
                index={index} 
                darkMode={darkMode}
                onClick={() => onJobClick(job)}
              />
            ))
          )}
        </div>
        
        <div className="pagination">
          <span>Showing 1 to {filteredJobs.length} of 255</span>
          <div className="pagination-controls">
            <button>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>Next</button>
          </div>
          <div className="per-page">
            <span>Show</span>
            <select>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span>per page</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;