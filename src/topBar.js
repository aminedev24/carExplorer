// TopBar.js
import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './topbar.css';
import { ModalHeader } from './responsiveModal';

// Other imports...

const TopBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <div className="top-bar">
      <div className="left-section">
        <img src="/img/logo.png" alt="Logo" className="logo" />
        {windowWidth > 1400 && <ModalHeader/>}
      </div>
      <div className={`center-section ${windowWidth > 1400 ? 'move-right' : ''}`}>
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

