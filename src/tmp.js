// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TopBar from './topBar';
import NavigationMenu from './nav';
import ResponsiveModal from './responsiveModal';
import CarBuyingSteps from './howToBuy'; // Import the CarBuyingSteps component
import { FaBars, FaTimes, FaPlus } from 'react-icons/fa';
import styles from './nav.module.css'; // Import the CSS module

function App() {

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
      {/* Hamburger menu button */}
      <div className={styles.navContainer}>
        <div className={styles.menuBtn} onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`${styles.nav} ${showMenu ? styles.show : ''}`}>
          {/* Close button and menu header in the same line for small screens */}
          <div className={styles.headerContainer}>
            <div className={styles.menuHeader}>Menu</div>
            <div className={styles.closeBtn} onClick={toggleMenu}>
              &times;
            </div>
          </div>

          {/* Your navigation links go here */}
          <Link to="/">Shop</Link>
          <Link to="/how-to-buy">How to buy</Link>
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

          <button className={styles.navBtn}>Sign In</button>
          <button className={styles.navBtn}>Sign Up</button>
        </nav>
      </div>
      {/* Set up routes for your components */}
      <Switch>
        <Route path="/how-to-buy" component={CarBuyingSteps} />
        {/* Add more routes for other components */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Typography, Grid, Paper } from '@mui/material';
import './CarBuyingSteps.css'; // Import custom CSS

const stepsData = [
  // Your steps data here...
];

const CarBuyingSteps = () => {
  return (
    <Container maxWidth="xl" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
        <Typography variant="body1" style={{ borderRadius: '15px 15px 0 0', textAlign: 'center' }}>
          <h2>Buy a car from Ichinomiya Motors in 5 Easy Steps.</h2>
        </Typography>
        <img
          src="img/how-to-buy/how-to-buy-banner.png"
          alt="How to Buy Image"
          className="img-fluid rounded"
          style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0 0 15px 15px' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '1rem', color: 'white', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            How to Buy
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Buy a car from Ichinomiya Motors in 5 Easy Steps.
          </Typography>
        </div>
      </Paper>

      <Grid container spacing={4} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={12}>
          <Typography variant="body1" align="center" style={{ fontWeight: 'bold' }}>
            <h1>Buy a car from Ichinomiya Motors in 5 Easy Steps.</h1>
          </Typography>
        </Grid>
      </Grid>
      <hr className="my-4" />

      <Grid container spacing={4}>
        {stepsData.map((step, index) => (
          <Grid item key={index} xs={12} md={12}>
            <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
              <div className="text-center mb-3 mb-md-0 img-container">
                <img
                  src={step.imageSrc}
                  alt={`Step ${index + 1}`}
                  className={`img-fluid rounded custom-img ${step.scaleDown ? 'scaleDown' : ''}`}
                />
              </div>
              <div className="text-container ml-md-3">
                <Typography variant="h5">Step {index + 1}: Lorem Ipsum</Typography>
                <Typography variant="body1" className="lead custom-text">
                  {step.description}
                </Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CarBuyingSteps;


import React, { useState, useEffect } from 'react';
import {
  FaSearch,
  FaFilter,
  FaArrowLeft,
  FaAngleDown
} from 'react-icons/fa';
import styles from './responsiveModal.module.css';
import { BestDealsSection, cardData } from './deals';
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider
} from '@mui/material';

const ResponsiveModal = ({ showModal, onClose }) => {
  // ... (existing code)

  return (
    <>
      <Container className={styles.dealsAndcontainer}>
        <div className={styles.modalHeader}>
          <div className={`${styles.searchContainer} ${'d-flex align-items-center'}`}>
            <FaSearch className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
          <div className={styles.filterContainer} onClick={handleToggleModal}>
            <FaFilter className={styles.filterIcon} />
            Filters
          </div>
        </div>

        <BestDealsSection filteredData={filteredData} />
      </Container>

      {windowWidth >= 1000 && (
        <div className={styles.fbRoot} id="fb-root">
          <div
            className="fb-page"
            data-href="https://web.facebook.com/profile.php?id=100087193303945"
            data-tabs="timeline"
            data-width="500"
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://web.facebook.com/profile.php?id=100087193303945" className="fb-xfbml-parse-ignore">
              <a href="https://web.facebook.com/profile.php?id=100087193303945">Ichinomiya Motors</a>
            </blockquote>
          </div>
        </div>
      )}
      {isModalOpen && (
        <Card className={styles.modal}>
          <CardContent className={styles.modalContent}>
            <div className={styles.contentHeader}>
              <FaArrowLeft onClick={handleToggleModal} className={styles.backIcon} />
              <Typography variant="h6">Filters</Typography>
              <Button variant="contained" className={styles.resetButton} onClick={handleResetFilters}>
                Reset
              </Button>
            </div>

            <div className={styles.markersContainer}>
              {windowWidth > 900 ? (
                <>
                  <Typography variant="h5">Search with Accuracy</Typography>
                  <div className={styles.inputContainer}>
                    <FormControl fullWidth variant="outlined" className={styles.markerSelect}>
                      <InputLabel id="marker-select-label">Select a Marker</InputLabel>
                      <Select
                        labelId="marker-select-label"
                        id="marker-select"
                        value={selectedMarker}
                        onChange={handleMarkerChange}
                        label="Select a Marker"
                      >
                        <MenuItem value="" disabled>
                          Select a Marker
                        </MenuItem>
                        {markers.map((marker) => (
                          <MenuItem key={marker.value} value={marker.value}>
                            {marker.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <div className={styles.priceRange}>
                      <Typography variant="h5">Price</Typography>
                      <div className={styles.inputsFlex}>
                        {/* ... (existing code) */}
                      </div>
                    </div>

                    <div className={styles.yearRange}>
                      <Typography variant="h5">Year</Typography>
                      <div className={styles.inputsFlex}>
                        {/* ... (existing code) */}
                      </div>
                    </div>

                    <div className={styles.searchButton}>
                      <FaSearch className={styles.searchIcon} />
                      <Button variant="contained" onClick={applyFilters} className={styles.searchButton}>
                        Search
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.markers}>
                    {markers.map((marker) => (
                      <div onClick={handleMarkerChange} key={marker.value} className={styles.markerButton}>
                        <img src={marker.image} alt={"maker-image"} className={styles.markerImage} />
                        <span>{marker.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.priceSection}>
                    <div className={styles.priceHeader}>
                      <Typography variant="h3">Price</Typography>
                    </div>

                    <div className={styles.dropdownHeaderContainer}>
                      <div className={styles.dropdownHeader} onClick={handleTogglePriceSection}>
                        <FaAngleDown className={styles.dropdownIcon} />
                      </div>
                    </div>
                  </div>

                  {showPriceSection && (
                    <div className={styles.rangeSliderContainer}>
                      <Slider
                        min={750}
                        max={30000}
                        step={50}
                        value={priceRange}
                        onChange={handlePriceChange}
                        className={styles.rangeSlider}
                      />

                      <Typography variant="body1" className={styles.rangeValue}>
                        ${priceRange}
                      </Typography>
                    </div>
                  )}
                </>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ResponsiveModal;

