import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const MainContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

function Home() {
  return (
    <MainContent>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="body1" paragraph>
        This is a sample page to demonstrate the layout and styling using MUI and styled components.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </MainContent>
  );
}

export default Home;