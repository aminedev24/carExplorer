import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarBuyingSteps.css'; // Import custom CSS
import { Container, Typography, Grid, Paper } from '@mui/material';

const stepsData = [
  {
    imageSrc: 'img/how-to-buy/step-1.png',
    description: "Find the best Japanese vehicle for you using our search function or from our Once you find the used car you like, check its details and photos. Use the quote function to immediately verify the total cost from Japan to your Country. (Online quotation not available for some Country / vehicle combinations).",
  },
  {
    imageSrc: 'img/how-to-buy/step-2.png',
    description: "Request an invoice for any used car from our stock: it is free and easy. Input your details and we will email you an invoice within one hour time. If you decide to purchase, contact us so that we can reserve the vehicle for you before someone else buys it.",
    scaleDown: true,
  },
  {
    imageSrc: 'img/how-to-buy/step-3.png',
    description: "Complete the payment by Bank Telegraphic Transfer, from any bank. You can pay also using the PayPal system. After you have completed the payment please send us a copy of Telegraphic Transfer copy as proof of payment. When the payment is here, we will email you a confirmation.",
  },
  {
    imageSrc: 'img/how-to-buy/step-4.png',
    description: "After receiving the full payment we will immediately begin the export arrangements for the first vessel available. You can follow the status of your shipment by accessing your account page, at any time. We will send the documents to you or your agent by DHL courier a few days after the vessel leaves Japan.",
  },
  {
    imageSrc: 'img/how-to-buy/step-5.png',
    description: "Once you receive the documents, you can begin arranging collection and registration in your country of the vehicle. A clearing agent can help you complete the procedure and give you an indication of the fee and taxes to be paid. Complete the procedures and drive your vehicle away!",
  },
  // Add more steps as needed
];

const CarBuyingSteps = () => {
  return (
    <Container maxWidth="xl" style={{ marginTop: '20px' }}>
      <Paper elevation={3} className="main-paper">
        <Typography variant="h4" className="main-title">
          Buy a car from Ichinomiya Motors in 5 Easy Steps.
        </Typography>
        <img
          src="img/how-to-buy/how-to-buy-banner.png"
          alt="How to Buy Image"
          className="img-fluid rounded main-image"
        />
        <div className="overlay-text">
          <Typography variant="h5" gutterBottom>
            How to Buy
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Buy a car from Ichinomiya Motors in 5 Easy Steps.
          </Typography>
        </div>
      </Paper>
      <div className='second-header'>
        <Grid container spacing={4} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" align="center" style={{ fontWeight: 'bold' }}>
            Buy a car from Ichinomiya Motors in 5 Easy Steps.
          </Typography>
        </Grid>
      </Grid>
      </div>
      
      <hr className="my-4" />

      <Grid container spacing={4}>
        {stepsData.map((step, index) => (
          <Grid item key={index} xs={12} md={12}>
            <Paper elevation={3} className="step-paper">
              <div className="text-center mb-3 mb-md-0 img-container">
                <img
                  src={step.imageSrc}
                  alt={`Step ${index + 1}`}
                  className={`img-fluid rounded custom-img ${step.scaleDown ? 'scaleDown' : ''}`}
                />
              </div>
              <div className="text-container ml-md-3">
                <Typography variant="h4">Step {index + 1}: Lorem Ipsum</Typography>
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
