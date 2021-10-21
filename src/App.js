// We import useState and useEffect in our component
import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

import './assets/css/jass.css';
import './assets/css/style.css';


function App() {  
  return (
    <div>
    <Router>      
      <div className="App">
        <NavBar/>             
      </div>
      <Header /> 
      <About />
      <Projects />
    
    </Router>    
    </div>

  );
}


export default App;
