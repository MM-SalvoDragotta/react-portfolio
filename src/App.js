// We import useState and useEffect in our component
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';

import './assets/css/jass.css';
import './assets/css/style.css';

function App() {
  return (
    <div>
    <Router>
    <div className="App">
      <NavBar style={{ marginBottom: 500}}/>             
    </div>
   

    <Header /> 
    </Router>    
    </div>

  );
}


export default App;
