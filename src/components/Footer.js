// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const popularCities = [
    "#Mumbai", "#Delhi", "#Ajmer", "#Pune", "#Hyderabad", 
    "#Agra", "#Chennai", "#Kolkata", "#Indore", "#Gurugram",
    "#Jaipur", "#Ahmedabad"
  ];
  
  const internationalCities = [
    "#Africa", "#USA", "#UK", "#Australia", "#Canada", 
    "#Singapore", "#Dubai", "#Saudi Arabia", "#New Zealand"
  ];
  
  const links = [
    "Terms and conditions", 
    "Privacy Policy", 
    "Refund / Cancellation Policy", 
    "About Us", 
    "Contact Us", 
    "FAQ", 
    "Blogs"
  ];

  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <motion.div 
              className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              JobRinger
            </motion.div>
            <p>Find your perfect job match</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Jobs in India</h4>
              <div className="city-tags">
                {popularCities.map((city, index) => (
                  <motion.a 
                    key={index}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ 
                      color: darkMode ? '#60a5fa' : '#2563eb'
                    }}
                  >
                    {city}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="link-group">
              <h4>International Jobs</h4>
              <div className="city-tags">
                {internationalCities.map((city, index) => (
                  <motion.a 
                    key={index}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ 
                      color: darkMode ? '#60a5fa' : '#2563eb'
                    }}
                  >
                    {city}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="disclaimer">
            <p>
              <strong>Disclaimer:</strong> All Trademarks and Logos are the property of their respective owners, 
              depicted here purely for representation purpose. Jobringer.com has taken all reasonable steps to 
              ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. 
              Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly 
              designed & meant only for job search assistance and to maximize the chances for the jobseekers to get 
              their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. 
              We do not guarantee any job to any Jobseeker.
            </p>
          </div>
          
          <div className="social-links">
            <h4>Follow us on</h4>
            <div className="social-icons">
              {[
                { icon: <FaFacebookF />, name: 'facebook' },
                { icon: <FaTwitter />, name: 'twitter' },
                { icon: <FaLinkedinIn />, name: 'linkedin' },
                { icon: <FaInstagram />, name: 'instagram' }
              ].map((platform, index) => (
                <motion.a 
                  key={index}
                  href="#"
                  className={`social-icon ${platform.name}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {platform.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-links-bottom">
            {links.map((link, index) => (
              <motion.a 
                key={index}
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  color: darkMode ? '#60a5fa' : '#2563eb'
                }}
              >
                {link}
              </motion.a>
            ))}
          </div>
          
          <div className="copyright">
            © All Rights Reserved @ 2025 Jobtech Ventures Private Limited.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;