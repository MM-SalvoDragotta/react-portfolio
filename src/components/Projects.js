import React from 'react';
import Featured from './Featured';
import AllProjects from './AllProjects';
import { projects } from '../Data.js';

export default function projectsSection() {
    const featuredProject = projects.filter((project) => {
        return project.id === 1
    })
    // console.log(featuredProject);
    const restOfProjects = projects.slice(1);
    // console.log(restOfProjects);
    return (        
        <section className="projects-section bg-light" id="projects">            
            <Featured key={featuredProject[0].id} featuredProject={featuredProject[0]}/>
            {restOfProjects.map((project) => (
              <AllProjects key={project.id} project={project} />
            ))}                        
        </section>
    )
}