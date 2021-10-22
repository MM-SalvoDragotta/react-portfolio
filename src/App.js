import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './assets/css/jass.css';
import './assets/css/style.css';


function App() {  
  return (
    <div>
      <Router>        
        <NavBar/>           
        <Header /> 
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Router>    
    </div>

  );
}


export default App;
