import React from 'react';
import { Typography, Container, Grid, Paper, Avatar, Divider, Box } from '@mui/material';

const AboutSection = () => {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>About Us</Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ width: 120, height: 120, mb: 2 }} alt="Company Logo" src={`https://i.pravatar.cc/150?u`} />
            <Typography variant="h6" align="center" sx={{ mb: 2 }}>Our Mission</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ width: 120, height: 120, mb: 2 }} alt="Team" src={`https://i.pravatar.cc/150?u`} />
            <Typography variant="h6" align="center" sx={{ mb: 2 }}>Our Team</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" align="center">
              We are a dedicated team of professionals passionate about delivering the best automotive solutions to our clients.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={5} sx={{ textAlign: 'center' }}>
        <Typography variant="body1">
          For more information, feel free to contact us at <a href="mailto:info@example.com">info@example.com</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutSection;
