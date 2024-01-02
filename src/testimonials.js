import React from 'react';
import { Typography, Card, CardContent, Box, Container, Grid, Avatar, Divider } from '@mui/material';
import Rating from '@mui/material/Rating';

const testimonialsData = [
  {
    id: 1,
    clientName: 'John Doe',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
  {
    id: 2,
    clientName: 'Jane Smith',
    feedback: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    rating: 5,
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ testimonial }) => (
  <Card sx={{ boxShadow: 4, borderRadius: 8, textAlign: 'center', p: 2 }}>
    <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }} alt={testimonial.clientName} src={`https://i.pravatar.cc/150?u=${testimonial.id}`} />
    <Typography variant="h6">{testimonial.clientName}</Typography>
    <Divider sx={{ my: 1 }} />
    <Rating value={testimonial.rating} precision={0.5} readOnly />
    <CardContent>
      <Typography variant="body1" sx={{ mt: 2 }}>{testimonial.feedback}</Typography>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  return (
    <Container>
      <Box mt={5} mb={5} textAlign="center">
        <Typography variant="h4">Client Testimonials</Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {testimonialsData.map(testimonial => (
          <Grid key={testimonial.id} item xs={12} md={6} lg={4}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialsSection;
