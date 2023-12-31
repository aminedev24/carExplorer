import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaArrowLeft ,FaAngleDown} from 'react-icons/fa';
import styles from './responsiveModal.module.css';
import  {BestDealsSection,cardsData} from './deals';
import { Paper,Button,Checkbox,FormControlLabel, Container, Select, MenuItem, InputLabel, FormControl, Slider, Typography,Card ,CardContent,Menu} from '@mui/material';
import InputSlider from 'react-input-slider';


const markers = [
  { name: "Toyota", value: "toyota", image: '/img/markers/toyota.jfif' },
  { name: "Nissan", value: "nissan", image: 'img/markers/nissan.jfif' },
  { name: "Mitsubishi", value: "honda", image: 'img/markers/mitsubitchi.jfif' },
  { name: "mercedes", value: "mercedes", image: 'img/markers/mercedes.jpg' }
  // Add more markers as needed
];

// ... (other imports and code)

export const ModalHeader = ({ searchInput, handleSearchChange, handleToggleModal }) => (
  <div className={`${styles.modalHeader} topBarHeader`}>
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
);


const ResponsiveModal = ({ showModal, onClose }) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedMarker, setSelectedMarker] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(window.innerWidth > 900); // Set initial state based on screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [priceRange, setPriceRange] = useState({ from: '750', to: '3000' });
  const [showPriceSection, setShowPriceSection] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMarkers, setShowMarkers] = useState(true);


  
  const handleTogglePriceSection = () => {
  setShowPriceSection(!showPriceSection);
};

const handleToggleMarkers = () => {
    setShowMarkers(!showMarkers);
  };



  const handleCheckboxChange = () => {
    // Handle checkbox change here
  };

const [filteredData, setFilteredData] = useState(cardsData)
const [filters, setFilters] = useState({
  marker: '',
  yearFrom: '',
  yearTo: '',
  priceFrom: '',
  priceTo: '',
});


const applyFilters = () => {
  // Filter the data based on selected filters
  console.log('Selected Marker:', filters.marker);

  // Check if filters.marker is a string before converting to lowercase
  const formattedMarker = typeof filters.marker === 'string' ? filters.marker.toLowerCase() : '';
  
  const filteredData = cardsData.filter((card) => {
    // Implement your filter conditions here
    console.log(`Brand: ${card.brand.toLowerCase()}, filters marker: ${formattedMarker}`);
    const markerFilter = !formattedMarker || card.brand.toLowerCase().includes(formattedMarker);

    const yearFromFilter = !filters.yearFrom || card.year >= parseInt(filters.yearFrom);

    const yearToFilter = !filters.yearTo || card.year <= parseInt(filters.yearTo);

    // Convert filters.priceFrom and filters.priceTo to numbers
    const priceFrom = parseFloat(filters.priceFrom);
    const priceTo = parseFloat(filters.priceTo);

    //console.log(`Price from: ${priceFrom}, Price to: ${priceTo}, Card FOB: ${card.fob}`);
    const priceFromFilter = !filters.priceFrom || card.fob >= priceFrom;

    const priceToFilter = !filters.priceTo || card.fob <= priceTo;

    // Price range filter
    const priceRangeFilter =
      card.fob >= priceRange.from && card.fob <= priceRange.to;

    console.log(priceRangeFilter)
    //console.log(`PriceFromFilter: ${priceFromFilter}, PriceToFilter: ${priceToFilter}`);

    return markerFilter && yearFromFilter && yearToFilter && priceFromFilter && priceToFilter;
  });

  // Pass the filtered data back to the BestDealsSection component
  // You can use a callback passed as a prop for this purpose
  console.log('Selected Marker:', filters.marker);
  console.log('Price Range:', priceRange);
  console.log('Price From:', filters.priceFrom);
  console.log('Price To:', filters.priceTo);
  setFilteredData(filteredData);
};



const handlePriceChange = (e) => {
  const newValue = parseInt(e.target.value);
  const { from, to } = priceRange;

  // Determine which end of the range is being adjusted
  const isFrom = Math.abs(newValue - from) < Math.abs(newValue - to);

  // Update the state based on which end is being adjusted
  setPriceRange(isFrom ? { from: newValue, to } : { from, to: newValue });
};




  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleResetFilters = () => {
  // Reset state variables related to filters
  setSearchInput('');
  setSelectedMarker('');
  setPriceRange('');
  setFilters({
    marker: '',
    yearFrom: '',
    yearTo: '',
    priceFrom: '',
    priceTo: '',
  });

  // Apply filters after resetting
  applyFilters();
};


  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

const handleMarkerChange = (event, value) => {
  console.log('Event:', event);
  console.log('Value:', value);

  // Check if the value is defined (coming from the div click)
  if (value !== undefined) {
    const selectedMarkerValue = value;
    setSelectedMarker(selectedMarkerValue);

    setFilters((prevFilters) => ({
      ...prevFilters,
      marker: selectedMarkerValue,
    }));
  } else {
    // Handle the case when the event is coming from the Select component
    const selectedMarkerValue = event.target.value;

    console.log('Select value:', selectedMarkerValue);
    setSelectedMarker(selectedMarkerValue);

    setFilters((prevFilters) => ({
      ...prevFilters,
      marker: selectedMarkerValue,
    }));
  }


};

useEffect(() => {
    // Apply filters when any filter changes
    applyFilters();
  }, [filters]); 



  useEffect(() => {
    // Function to update window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

 

  return (
    <>
    <div className={styles.dealsAndcontainer}>

      {windowWidth < 1400 && 
      <ModalHeader
          searchInput={searchInput}
          handleSearchChange={handleSearchChange}
          handleToggleModal={handleToggleModal}
      /> }
      
      <div className={`container ${styles.bannerContainer}`}>
       <img src='img/banner.png' className={`img-fluid ${styles.bannerImage}`} alt="Banner" />
      </div>

       
      <BestDealsSection filteredData={filteredData} />
    </div>

       {windowWidth >= 1001 &&
        <div className={styles.fbRoot} id="fb-root">
          <div
            className="fb-page"
            data-href="https://web.facebook.com/profile.php?id=100087193303945"
            data-tabs="timeline"
            data-width="700"
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
        >
            <blockquote cite="https://web.facebook.com/profile.php?id=100087193303945" class="fb-xfbml-parse-ignore"><a href="https://web.facebook.com/profile.php?id=100087193303945">Ichinomiya Motors</a></blockquote>
        </div>
        </div>
          
      }
      {isModalOpen && (
        <Card className={styles.modal}>
          {/* Rest of your modal content */}
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
                  <Typography className={styles.markersHeader} variant="h5">Search with Accuracy</Typography>
                  <div className={styles.inputContainer}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="marker-select-label">Select a Marker</InputLabel>
                      <Select
                        labelId="marker-select-label"
                        id="marker-select"
                        value={selectedMarker}
                        onChange={(e) => handleMarkerChange(e)}
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
                      <Typography variant="h5" style={{ textAlign: 'center' }}>Price</Typography>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FormControl variant="outlined" >
                          <InputLabel id="price-from-label">From</InputLabel>
                          <Select
                            labelId="price-from-label"
                            id="price-from"
                            value={filters.priceFrom}
                            onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
                            label="From"
                            className={styles.formControl}
                            MenuComponent={({ children, ...props }) => (
                              <Menu {...props} >
                                {children}
                              </Menu>
                            )}
                          >
                            <MenuItem value="">From</MenuItem>
                            {Array.from({ length: 292 }, (_, index) => 750 + index * 50).map((value) => (
                              <MenuItem key={value} value={value} >
                                ${value}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <span style={{ margin: '0 5px' }}>-</span>
                        <FormControl variant="outlined">
                          <InputLabel id="price-to-label">To</InputLabel>
                          <Select
                            labelId="price-to-label"
                            id="price-to"
                            value={filters.priceTo}
                            onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
                            label="To"
                            className={styles.formControl}
                            MenuComponent={({ children, ...props }) => (
                              <Menu {...props} style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                                {children}
                              </Menu>
                            )}
                          >
                            <MenuItem value="">To</MenuItem>
                            {Array.from({ length: 292 }, (_, index) => 750 + index * 500).map((value) => (
                              <MenuItem key={value} value={value}>
                                ${value}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    <div className={styles.yearRange}>
                      <Typography variant="h5" style={{ textAlign: 'center' }}>Year</Typography>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FormControl variant="outlined">
                          <InputLabel id="year-from-label">From</InputLabel>
                          <Select
                            labelId="year-from-label"
                            id="year-from"
                            value={filters.yearFrom}
                            onChange={(e) => setFilters({ ...filters, yearFrom: e.target.value })}
                            label="From"
                            className={styles.formControl}
                            MenuComponent={({ children, ...props }) => (
                              <Menu {...props} style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                                {children}
                              </Menu>
                            )}
                          >
                            <MenuItem value="">From</MenuItem>
                            {Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, index) => 1980 + index).map((year) => (
                              <MenuItem key={year} value={year}>
                                {year}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <span style={{ margin: '0 5px' }}>-</span>
                        <FormControl variant="outlined">
                          <InputLabel id="year-to-label">To</InputLabel>
                          <Select
                            labelId="year-to-label"
                            id="year-to"
                            value={filters.yearTo}
                            onChange={(e) => setFilters({ ...filters, yearTo: e.target.value })}
                            label="To"
                            className={styles.formControl}
                            MenuComponent={({ children, ...props }) => (
                              <Menu {...props} style={{ height: '200px !important', overflowY: 'scroll' }}>
                                {children}
                              </Menu>
                            )}
                          >
                            <MenuItem value="">To</MenuItem>
                            {Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, index) => 1980 + index).map((year) => (
                              <MenuItem key={year} value={year}>
                                {year}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>


                  <div className={styles.searchButton}>
                      <FaSearch className={styles.searchIcon} />
                      <Button variant="contained" onClick={applyFilters} className={styles.searchButton}>Search</Button>
                    </div>
                  </div>
                  <div style={{ display: 'flex',flexDirection: 'column' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between', 
                      marginBottom: '10px',
                      padding: '20px'
                       }}>
                      <h5 style={{ marginRight: '10px' }}>Markers:</h5>
                      <Button onClick={handleToggleMarkers} endIcon={<FaAngleDown />}>
                        {selectedMarker || ''}
                      </Button>
                    </div>

                    {showMarkers && (
                      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' ,padding: '0 20px'}}>
                        {markers.map((marker) => (
                          <FormControlLabel
                            key={marker.value}
                            control={<Checkbox checked={selectedMarker === marker.value} />}
                            label={marker.name}
                            onChange={(event) => handleMarkerChange(event, marker.value)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
              </>
              
              ) : (
              <>
                
                {/* Scrollable container with marker buttons on smaller screens */}
                <div className={styles.markers}>
                {markers.map((marker) => (
                  <div onClick={(event) => handleMarkerChange(event, marker.value)} key={marker.value} className={styles.markerButton}>
                    <img src={marker.image} alt={"maker-image"} className={styles.markerImage} />
                    <span>{marker.name}</span>
                  </div>
                ))}
                </div>

                {/* Price Section */}
                <div className={styles.priceSection}>
                {/* Price Header */}
                <div className={styles.priceHeader}>
                  <h3>Price</h3>
                </div>

                {/* Dropdown Header */}
                <div className={styles.dropdownHeaderContainer}>
                  <div className={styles.dropdownHeader} onClick={handleTogglePriceSection}>
                    <FaAngleDown className={styles.dropdownIcon} />
                  </div>
                </div>

 
                </div>
                {/* Price Range Section */}
                 
                {showPriceSection && (
                  <div className={styles.rangeSliderContainer}>
                    {/* Range Slider for "from" */}
                    <input
                      type="range"
                      min={750}
                      max={30000}
                      step={50}
                      value={priceRange.from}
                      onChange={(e) => handlePriceChange(e, 'from')}
                      className={styles.rangeSlider}
                    />

                    {/* Range Slider for "to" */}
                    <input
                      type="range"
                      min={750}
                      max={30000}
                      step={50}
                      value={priceRange.to}
                      onChange={(e) => handlePriceChange(e, 'to')}
                      className={`${styles.rangeSlider} ${styles.absoluteSlider}`}
                    />

                    {/* Display the selected range */}
                    <div className={styles.rangeValue}>
                      ${priceRange.from} - ${priceRange.to}
                    </div>
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
