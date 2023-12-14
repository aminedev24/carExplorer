import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    imageUrl:'img/deals/toyoraDyna.jpg',
  },
  {
    id: 2,
    model: 'Toyota Noah',
    year: 2008,
    fob: 1500,
    price: 1960,
    imageUrl: 'img/deals/toyoroNoah.jpg',
  },
   {
    id: 3,
    model: 'Land CruiserPorado',
    year: 2018,
    fob: 26000,
    price: 26675,
    imageUrl: 'img/deals/landCruiserPorado.jpg',
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


const generateSampleData = (numberOfCards) => {
  const sampleData = [];

  for (let i = 1; i <= numberOfCards; i++) {
    const card = {
      id: i,
      model: `Car Model ${i}`,
      year: 2000 + i,
      fob: Math.floor(Math.random() * 30000) + 1000, // Random fob between 1000 and 31000
      price: Math.floor(Math.random() * 5000) + 15000, // Random price between 15000 and 20000
      imageUrl: `img/deals/car${i}.jpg`,
    };

    sampleData.push(card);
  }

  return sampleData;
};

// Example: Generate 5 sample cards
//const cardData = generateSampleData(5);

console.log(generateSampleData(5));


const BestDealsSection = ({ filteredData }) => {
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
                  <Typography variant="body1">FOB: ${card.fob}</Typography>
                  <Typography variant="body1">Price: ${card.price}</Typography>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <Typography
            variant="subtitle1"
            style={{
              textAlign: 'center',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f8d7da', // Light red background color
              color: '#721c24', // Dark red text color
            }}
          >
            Sorry, there's no car available at the moment.
          </Typography>

        )}
      </div>

    </div>
  );
};


export {cardData ,BestDealsSection}

