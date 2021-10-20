import React from 'react';
import resume from '../assets/Resume - Salvo Dragotta.pdf';


export default function Nav() {
    return (
     <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Salvo Dragotta</a>
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
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href={resume} target="_blank">Resume</a></li>
                    </ul>
                </div>             
            </div>
        </nav>           
     </div>
    )
}