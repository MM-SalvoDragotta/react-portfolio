// We import useState and useEffect in our component
import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useSticky from "./hooks/useSticky.js"
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';

import './assets/css/jass.css';
import './assets/css/style.css';

function App() {
  const { isSticky, element } = useSticky()
  return (
    <div>
    <Router>
      
      <div className="App">
        <NavBar sticky={isSticky}/>             
      </div>
      <Header sticky={element} /> 
      <About sticky={element}/>
    
    </Router>    
    </div>

  );
}


export default App;
