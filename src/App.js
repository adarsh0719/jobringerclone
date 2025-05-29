// src/App.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiSearch, FiFilter, FiBriefcase, FiUser, FiBook, FiDollarSign } from 'react-icons/fi';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JobListings from './components/JobListings';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import JobDetailsModal from './components/JobDetailsModal';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch jobs
    setTimeout(() => {
      const mockJobs = [
        {
          id: 1,
          title: "Senior HR and Compliance Manager",
          company: "Cotton Concepts",
          experience: "7 - 12 Years",
          salary: "₹4 Lac - ₹5 Lac",
          location: "Kaur",
          type: "Full Time - Permanent",
          posted: "21 minutes ago",
          skills: ["Labor Law Compliance", "Statutory Requirements", "Payroll Management", "Employee Engagement"],
          workMode: "In Office",
          industry: "Home Textiles",
          description: "We are seeking an experienced HR and Compliance Manager to oversee our HR operations and ensure compliance with all labor laws and statutory requirements. The ideal candidate will have extensive experience in the textile manufacturing industry and a strong understanding of HR best practices.",
          responsibilities: [
            "Manage end-to-end HR operations",
            "Ensure compliance with labor laws and statutory requirements",
            "Oversee payroll management and employee records",
            "Develop and implement employee engagement programs",
            "Handle recruitment for textile manufacturing roles"
          ],
          requirements: [
            "Bachelor's degree in Human Resources or related field",
            "7+ years of HR experience in manufacturing",
            "In-depth knowledge of labor laws and compliance",
            "Excellent communication and leadership skills"
          ]
        },
        {
          id: 2,
          title: "HR Executive",
          company: "Cotton Concepts",
          experience: "3 - 5 Years",
          salary: "₹3 Lac - ₹4.5 Lac",
          location: "Delhi",
          type: "Full Time - Permanent",
          posted: "45 minutes ago",
          skills: ["Recruitment", "Employee Onboarding", "HR Policies", "Performance Management"],
          workMode: "Hybrid",
          industry: "Textile Manufacturing",
          description: "We are looking for an HR Executive to support our HR department in recruitment, onboarding, and employee relations. The ideal candidate should have experience in the textile industry and be familiar with HR best practices.",
          responsibilities: [
            "Manage recruitment process from sourcing to onboarding",
            "Assist in developing HR policies and procedures",
            "Coordinate performance management processes",
            "Handle employee relations and engagement activities"
          ],
          requirements: [
            "Bachelor's degree in Human Resources or related field",
            "3+ years of HR experience",
            "Knowledge of recruitment processes and HR policies",
            "Strong interpersonal and communication skills"
          ]
        },
        {
          id: 3,
          title: "Software Developer",
          company: "Tech Innovations",
          experience: "2 - 5 Years",
          salary: "₹6 Lac - ₹10 Lac",
          location: "Bangalore",
          type: "Full Time - Permanent",
          posted: "1 hour ago",
          skills: ["JavaScript", "React", "Node.js", "MongoDB"],
          workMode: "Remote",
          industry: "IT Services",
          description: "Join our dynamic team as a Software Developer to build cutting-edge web applications. We're looking for someone passionate about modern JavaScript frameworks and cloud technologies.",
          responsibilities: [
            "Develop and maintain web applications",
            "Collaborate with cross-functional teams",
            "Write clean, efficient, and reusable code",
            "Participate in code reviews and testing"
          ],
          requirements: [
            "Bachelor's degree in Computer Science or related field",
            "2+ years of experience in web development",
            "Proficiency in JavaScript, React, and Node.js",
            "Experience with MongoDB or similar databases"
          ]
        },
        {
          id: 4,
          title: "Marketing Manager",
          company: "Global Brands",
          experience: "5 - 8 Years",
          salary: "₹8 Lac - ₹12 Lac",
          location: "Mumbai",
          type: "Full Time - Permanent",
          posted: "2 hours ago",
          skills: ["Digital Marketing", "Brand Strategy", "Campaign Management", "Market Research"],
          workMode: "In Office",
          industry: "Marketing & Advertising",
          description: "We are seeking a Marketing Manager to lead our brand strategy and digital marketing efforts. The ideal candidate will have a proven track record in developing successful marketing campaigns.",
          responsibilities: [
            "Develop and implement marketing strategies",
            "Manage digital marketing campaigns",
            "Conduct market research and analysis",
            "Oversee brand development and positioning"
          ],
          requirements: [
            "Bachelor's degree in Marketing or related field",
            "5+ years of marketing experience",
            "Proven success in digital marketing campaigns",
            "Strong analytical and leadership skills"
          ]
        },
        {
          id: 5,
          title: "Financial Analyst",
          company: "Capital Investments",
          experience: "4 - 7 Years",
          salary: "₹7 Lac - ₹9 Lac",
          location: "Gurugram",
          type: "Full Time - Permanent",
          posted: "3 hours ago",
          skills: ["Financial Modeling", "Data Analysis", "Forecasting", "Excel"],
          workMode: "Hybrid",
          industry: "Finance",
          description: "Join our finance team as a Financial Analyst to provide insights and analysis for investment decisions. The ideal candidate has strong analytical skills and experience in financial modeling.",
          responsibilities: [
            "Develop financial models and forecasts",
            "Analyze financial data and market trends",
            "Prepare reports and presentations for management",
            "Support investment decision-making processes"
          ],
          requirements: [
            "Bachelor's degree in Finance or related field",
            "4+ years of financial analysis experience",
            "Advanced Excel and financial modeling skills",
            "CFA or similar certification preferred"
          ]
        },
        {
          id: 6,
          title: "UX Designer",
          company: "Digital Creations",
          experience: "3 - 6 Years",
          salary: "₹5 Lac - ₹8 Lac",
          location: "Chennai",
          type: "Full Time - Permanent",
          posted: "4 hours ago",
          skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
          workMode: "Remote",
          industry: "Design",
          description: "We're looking for a talented UX Designer to create intuitive and engaging user experiences for our digital products. The ideal candidate has a strong portfolio showcasing UX design skills.",
          responsibilities: [
            "Design user interfaces and experiences",
            "Conduct user research and usability testing",
            "Create wireframes and prototypes",
            "Collaborate with developers to implement designs"
          ],
          requirements: [
            "Bachelor's degree in Design or related field",
            "3+ years of UX design experience",
            "Proficiency in Figma or similar tools",
            "Strong portfolio of UX design work"
          ]
        }
      ];
      setJobs(mockJobs);
      setLoading(false);
    }, 1500);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <JobListings 
        jobs={jobs} 
        loading={loading} 
        darkMode={darkMode}
        onJobClick={handleJobClick}
      />
      <StatsSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      
      <AnimatePresence>
        {showModal && (
          <JobDetailsModal 
            job={selectedJob} 
            onClose={closeModal} 
            darkMode={darkMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;