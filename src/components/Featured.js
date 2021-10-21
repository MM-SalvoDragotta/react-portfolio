import React from 'react';

export default function Featured(props) {
    // console.log(props);
    return (         
        <div className="container px-4 px-lg-5">      
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div className="col-xl-8 col-lg-7">
                    <a href={props.featuredProject.appUrl}
                        title={`Link to ${props.featuredProject.title}`} target="_blank">
                        <img className="img-fluid-project mb-3 mb-lg-0" 
                            src={props.featuredProject.gif}
                            alt={props.featuredProject.title}/>
                        <p className="label left-align">{`Deployed ${props.featuredProject.title}`}</p>
                    </a>      
                </div>            
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4>{props.featuredProject.title}</h4>
                        <p className="text-black-50 mb-0 text-black-50-reducedfont">
                            {props.featuredProject.description}
                            <a href={props.featuredProject.repo}
                                title={`Link to GitHub Repository for ${props.featuredProject.title}`} target="_blank"
                                className="btn"> 
                                {`GitHub Repository for ${props.featuredProject.title}`}
                            </a> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}