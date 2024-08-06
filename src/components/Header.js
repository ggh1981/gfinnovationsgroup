import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../App.css'; // Importa el archivo CSS

function Header() {
  return (
    <AppBar position="fixed" className="styled-app-bar">
      <Toolbar className="styled-toolbar">
        <Box>
          <ScrollLink to="home" smooth={true} duration={500}>
            <Button className="nav-button">Home</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button className="nav-button">Projects</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button className="nav-button">Contact Us</Button>
          </ScrollLink>
          <ScrollLink to="donate" smooth={true} duration={500}>
            <Button className="nav-button">Donate</Button>
          </ScrollLink>
        </Box>
        <Typography variant="h6" className="company-name">
          G&F Innovations Group LLC
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;