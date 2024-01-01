import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './responsiveModal.module.css';
import { 
  Button, 
  Container, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl, 
  Slider, 
  Typography,Card ,
  CardContent,
  Menu,
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
Brand,Model,Year,FOB_Min,FOB_Max
TOYOTA,land cruiser,2023,108600,113888
TOYOTA,toyota DYNA,2003,6280,6800
MITSUBISHI,FUSO FIGHTER MIGNON,1999,14000,15500
TOYOTA,toyota NOAH,2008,1500,1960
TOYOTA,LAND CRUISER PRADO,2018,26000,26675
TOYOTA,LAND CRUISER PRADO14,2014,17900,18800
TOYOTA,toyota Carina,2001,2210,2590
MERCEDES BENZ,mercedes E-class,2017,14800,15600
MERCEDES BENZ,mercedes G-class,2003,17500,18930
MITSUBISHI,FUSO FIGHTER,2003,8600,8800
`;

const rows = csvData.trim().split('\n').slice(1); // Skip header row

const cardsData = rows.map((row, id) => {
  const [brand, model, year, fobMin, fobMax] = row.split(',');

  const formattedModel = model.replace(/\s+/g, '').toLocaleLowerCase();
  console.log(`formattedModel ${formattedModel}`);
  const imageUrl = `img/deals/${formattedModel}.jpg`;

  // Convert fobMin and fobMax to numbers
  const parsedFobMin = parseFloat(fobMin, 10);
  const parsedFobMax = parseFloat(fobMax, 10);

  // Format the FOB prices and prices using toLocaleString
  const formattedFobMin = parsedFobMin.toLocaleString();
  const formattedFobMax = parsedFobMax.toLocaleString();

  console.log(formattedFobMax, formattedFobMin);

  return {
    id: id + 1,
    brand: brand.trim(),
    model: model.trim(),
    year: parseFloat(year.trim(), 10),
    fob: parsedFobMin,
    price: parsedFobMax,
    
    imageUrl: imageUrl,
  };
});

const BestDealsSection = ({ filteredData,windowWidth }) => {
  //console.log(filteredData);
  const [dataToDisplay, setDataToDisplay] = useState(filteredData);


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
            <div key={card.id} className="col-md-4 mb-3">
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

    </div>
  );
};


export {cardsData ,BestDealsSection}

