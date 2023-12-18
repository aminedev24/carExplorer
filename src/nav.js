import React, { useState } from 'react';
import { FaBars, FaTimes, FaPlus } from 'react-icons/fa';
import { HashRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import styles from './nav.module.css';
import CarBuyingSteps from './howToBuy';

const NavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleAboutDropdown = (e) => {
    e.preventDefault();
    setShowAboutDropdown(!showAboutDropdown);
  };

  return (
    <div className={`app ${showMenu ? styles.menuOpen : ''}`}>
      <Router>
        <div className={styles.navContainer}>
          <div className={styles.menuBtn} onClick={toggleMenu}>
            ☰
          </div>
          <nav className={`${styles.nav} ${showMenu ? styles.show : ''}`}>
            <div className={styles.headerContainer}>
              <div className={styles.menuHeader}>Menu</div>
              <div className={styles.closeBtn} onClick={toggleMenu}>
                &times;
              </div>
            </div>
            <Link onClick={toggleMenu} to="/">Shop</Link>
            <Link onClick={toggleMenu} to="/how-to-buy">How to buy</Link>
            <div className={styles.navAbout}>
              About Us
              {showAboutDropdown ? (
                <FaTimes onClick={toggleAboutDropdown} className={styles.plusIcon} />
              ) : (
                <FaPlus onClick={toggleAboutDropdown} className={styles.plusIcon} />
              )}
              {showAboutDropdown && (
                <div className={styles.aboutDropdown}>
                  <Link to="/company-profile">Company Profile</Link>
                </div>
              )}
            </div>
            <Link to="/shipping">Shipping</Link>
            <div className='nav-btns'>
                <button className={styles.navBtn}>Sign In</button>
                <button className={styles.navBtn}>Sign Up</button>
            </div>
            
          </nav>
        </div>
      </Router>
    </div>
  );
};

export default NavigationMenu;
