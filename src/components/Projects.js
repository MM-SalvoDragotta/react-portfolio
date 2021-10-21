import React from 'react';
import Featured from './Featured';
import { projects } from '../Data.js';

export default function projectsSection() {
    const featuredProject = projects.filter((project) => {
        return project.id === "Grocery Delivery App"
    })
    console.log(featuredProject);
    return (        
        <section className="projects-section bg-light" id="projects">            
            <Featured key={featuredProject.id} featuredProject={featuredProject}/>               
        </section>
    )
}