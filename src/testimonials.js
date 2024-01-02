import React from 'react';
import { Typography, Card, CardContent, Box, Container, Divider } from '@mui/material';

const testimonialsData = [
  {
    id: 1,
    clientName: 'John Doe',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    clientName: 'Jane Smith',
    feedback: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ testimonial }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{testimonial.clientName}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1">{testimonial.feedback}</Typography>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  return (
    <Container>
      <Box mt={5} mb={5}>
        <Typography variant="h4" align="center">Client Testimonials</Typography>
      </Box>

      <Box display="flex" justifyContent="space-around">
        {testimonialsData.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
