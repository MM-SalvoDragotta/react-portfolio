import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

import './assets/css/jass.css';
import './assets/css/style.css';


function App() { 
  const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "projects":
				return <Projects />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	}; 

  return (
    <div>
      <Router>        
        <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab}/>           
        <Header /> 
        <main>{renderTab()}</main>
        <Footer />
      </Router>    
    </div>

  );
}


export default App;
