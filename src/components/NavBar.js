import React from 'react';
import resume from '../assets/Resume - Salvo Dragotta.pdf';


export default function Nav(props) {
    const { currentTab, setCurrentTab } = props;
    return (
     <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="/react-portfolio">Salvo Dragotta</a>
                {/* <button className="navbar-toggler navbar-toggler-right" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button> */}
                <div className="navbar-collapse w-75 dual-collapse2" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="about" onClick={() => setCurrentTab("about")}>About</a></li>
                        <li className="nav-item"><a className="nav-link" href="projects" onClick={() => setCurrentTab("projects")}>Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact" onClick={() => setCurrentTab("contact")}>Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="resume"  onClick={() => setCurrentTab("resume")}>Resume</a></li>
                    </ul>
                </div>             
            </div>
        </nav>           
     </div>
    )
}