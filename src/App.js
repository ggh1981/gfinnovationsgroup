import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import Donate from './components/Donate';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Element name="home">
          <Home />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <ContactUs />
        </Element>
        <Element name="donate">
          <Donate />
        </Element>
      </div>
    </div>
  );
}

export default App;