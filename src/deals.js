import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './responsiveModal.module.css';
import { 
  Button, 
  Typography,
  Card ,
  CardContent,
  Menu,
  Modal,
  Tabs, 
  Tab,
  Box,
  CardMedia} from '@mui/material';


const cardData = [
  {
    id: 1,
    model: 'Toyota Dyna',
    year: 2006,
    fob: 7000,
    price: 8000,
    imageUrl:'img/deals/dyna.jpg',
  },
  {
    id: 2,
    model: 'Toyota Noah',
    year: 2008,
    fob: 1500,
    price: 1960,
    imageUrl: 'img/deals/toyotoNoah.jpg',
  },
   {
    id: 3,
    model: 'Land CruiserPorado',
    year: 2018,
    fob: 26000,
    price: 26675,
    imageUrl: 'img/deals/landcruiserprado.jpg',
  },

   {
    id: 4,
    model: 'Mercedes benz',
    year: 2017,
    fob: 14800,
    price: 15600,
    imageUrl:'img/deals/mercedesBenz.jpg',
  }
];

const csvData = `
Brand,Model,Year,FOB_Min,FOB_Max,Chassis,Mileage,Engine,Transmission,Brakes,Suspension
TOYOTA,land cruiser,2023,108600,113888,JT123456,50000,4.5L V8,Automatic,Disc,Independent
TOYOTA,toyota DYNA,2003,6280,6800,WU789012,120000,3.0L Diesel,Manual,Drum,Solid Axle
MITSUBISHI,FUSO FIGHTER MIGNON,1999,14000,15500,FM456789,80000,6.0L Diesel,Automatic,Disc,Independent
TOYOTA,toyota NOAH,2008,1500,1960,AR012345,90000,2.0L Petrol,Automatic,Disc,MacPherson Strut
TOYOTA,LAND CRUISER PRADO,2018,26000,26675,JTEBU3FJ5K2222222,30000,3.5L V6,Automatic,Disc,Independent
TOYOTA,LAND CRUISER PRADO14,2014,17900,18800,JTEBU3FJ1EK123456,75000,4.0L V6,Automatic,Disc,Independent
TOYOTA,toyota Carina,2001,2210,2590,AT012345,110000,1.8L Petrol,Automatic,Disc,MacPherson Strut
MERCEDES BENZ,mercedes E-class,2017,14800,15600,WDDHF5KB8DA765432,40000,3.0L V6,Automatic,Disc,Independent
MERCEDES BENZ,mercedes G-class,2003,17500,18930,WDCYR49E43X123456,90000,5.0L V8,Automatic,Disc,Live Axle
MITSUBISHI,FUSO FIGHTER,2003,8600,8800,FP456789,60000,6.4L Diesel,Manual,Drum,Solid Axle
`;

const rows = csvData.trim().split('\n').slice(1); // Skip header row

const cardsData = rows.map((row, id) => {
  const [brand, model, year, fobMin, fobMax, chassis, mileage, engine, transmission, brakes, suspension] = row.split(',');

  const formattedModel = model.replace(/\s+/g, '').toLocaleLowerCase();
  const imageUrl = `img/deals/${formattedModel}.jpg`;

  const parsedFobMin = parseFloat(fobMin, 10);
  const parsedFobMax = parseFloat(fobMax, 10);

  const car = {
    id: id + 1,
    brand: brand.trim(),
    model: model.trim(),
    year: parseFloat(year.trim(), 10),
    fob: parsedFobMin,
    price: parsedFobMax,
    imageUrl,
    chassis: chassis.trim(),
    mileage: parseFloat(mileage.trim(), 10),
    specs: {
      engine: engine.trim(),
      transmission: transmission.trim(),
    },
    checkpoints: {
      brakes: brakes.trim(),
      suspension: suspension.trim(),
    },
  };

  return car;
});

const CarModal = ({ car, isOpen, onClose }) => {

  const [activeTab, setActiveTab] = useState(0);
  console.log(car)
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
     <Modal open={isOpen} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box className={styles.carModal} sx={{ width:'75%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 24, p: 4}}>
        <Card>
          <CardMedia component="img" height="300" image={car.imageUrl} alt={`Car ${car.id}`} />
          <CardContent>
            <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ borderBottom: '1px solid #ccc' }}>
              <Tab label="Basic Information" sx={{ fontWeight: activeTab === 0 ? 'bold' : 'normal' }} />
              <Tab label="Specs" sx={{ fontWeight: activeTab === 1 ? 'bold' : 'normal' }} />
              <Tab label="Mechanical Checkpoints" sx={{ fontWeight: activeTab === 2 ? 'bold' : 'normal' }} />
            </Tabs>

            <Box sx={{textAlign: 'left' }}>
              {activeTab === 0 && (
              <div className={styles.tabContent}>
                <div style={{ flex: '1', marginRight: '16px' }}>
                  <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Brand: {car.brand}</Typography>
                  <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Model: {car.model}</Typography>
                  <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Year: {car.year}</Typography>
                </div>
                <div style={{ flex: '1' }}>
                  <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>FOB: ${car.fob.toLocaleString()}</Typography>
                  <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Chassis: {car.chassis}</Typography>
                  <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Mileage: {car.mileage}</Typography>
                </div>
              </div>
            )}


             {activeTab === 1 && (
              <div className={styles.tabContent}>
                <div style={{ display: 'flex', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                  <div style={{ flex: '1', marginRight: '16px' }}>
                    <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Engine: {car.specs.engine}</Typography>
                  </div>
                  <div style={{ flex: '1' }}>
                    <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Transmission: {car.specs.transmission}</Typography>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className={styles.tabContent}>
                <div style={{ display: 'flex', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                  <div style={{ flex: '1', marginRight: '16px' }}>
                    <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Brake System: {car.checkpoints.brakes}</Typography>
                  </div>
                  <div style={{ flex: '1' }}>
                    <Typography variant="body1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>Suspension: {car.checkpoints.suspension}</Typography>
                  </div>
                </div>
              </div>
            )}

            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

const BestDealsSection = ({ filteredData,windowWidth }) => {
  //console.log(filteredData);
  const [dataToDisplay, setDataToDisplay] = useState(filteredData);

  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
  };


useEffect(() => {
  console.log('BestDealsSection re-rendered');
  setDataToDisplay(filteredData)
}, [filteredData]);


  return (
    <div className="container mt-5">
      
      <div className="d-flex justify-content-between align-items-center">
        <Typography variant="h4">Best Deals</Typography>
        <Button variant="contained" color="primary">
          Show All
        </Button>
      </div>

      <div className="row mt-3">
        {dataToDisplay && dataToDisplay.length > 0 ? (
          dataToDisplay.map((card) => (
            <div key={card.id} className="col-md-4 mb-3" onClick={() => openModal(card)}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.imageUrl}
                  alt={`Car ${card.id}`}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {card.model}
                  </Typography>
                  <Typography variant="body1">Year: {card.year}</Typography>
                  <Typography variant="body1">FOB: ${card.fob.toLocaleString()}</Typography>
                  <Typography variant="body1">Price: ${card.price.toLocaleString()}</Typography>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
         <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '50vh', // Adjust the height based on your needs
            }}
          >
          <div
              style={{
                textAlign: 'center',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f8d7da', // Light red background color
                color: '#721c24', // Dark red text color
              }}
            >
              <Typography variant="subtitle1">
                Sorry, there's no car available at the moment.
              </Typography>
            </div>
            </div>
          )}
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

      {selectedCar && (
        <CarModal car={selectedCar} isOpen={isModalOpen} onClose={closeModal} />
      )}


    </div>
  );
};


export {cardsData ,BestDealsSection}

