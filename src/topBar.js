// TopBar.js
import React from 'react';
import { FaWhatsapp,FaPhone } from 'react-icons/fa';
import './topbar.css';

const TopBar = () => {
  return (
      <div className="top-bar">
        <div className="left-section">
          <img src="/img/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="center-section">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <div>
              <FaWhatsapp className="whatsapp-icon" />
              <span className="phone-number">123-456-7890</span>
              <FaPhone className="whatsapp-icon" />
              <span className="phone-number">123-456-7890</span>
            </div>
          </div>
        </div>
          <div className="right-section">
            <button className="top-bar-btn">Sign In</button>
            <button className="top-bar-btn">Sign Up</button>
          </div>
        </div>


  );
};

export default TopBar;
