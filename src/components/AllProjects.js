import React from 'react';
import ReactHtmlParser from 'react-html-parser'
export default function AllProjects(props) {
    function isOdd(n) {
        return Math.abs(n % 2) == 1;
     }
     
    var class1 = "";
    var class2 = "";
    var class3 = "";
    var class4 = "";
    var class5 = "col-lg-5";

     if (!isOdd(props.project.id)){
         class1 = "row gx-0 mb-5 mb-lg-0 justify-content-center"
         class2 = "label left-align"
         class3 = class5
         class4 = "img-fluid-project img-h"

     } else {
        class1 = "row gx-0 justify-content-center"
        class2 = "label right-align"
        class3 = `${class5} order-lg-first`
        class4 = "img-fluid-project"
     }

    return (       
        <div className={class1}>
            <div className={class5}>
            <a href={props.project.appUrl}
                title={`Link to ${props.project.title}`} target="_blank">
                <img className={class4} 
                src={props.project.gif}
                alt={props.project.title} />
                <p className={class2}>{`Deployed ${props.project.title}`}</p>
            </a>
            </div>
            <div className={class3}>
            <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">{props.project.title}</h4>
                    <p className="mb-0 text-white-50">
                    {ReactHtmlParser(props.project.description)}
                    </p>  
                    <a href={props.project.repo}
                        title={`Link to GitHub Repository for ${props.project.title}`} target="_blank"
                        className="btn">{`GitHub Repository for ${props.project.title}`}
                    </a>
                    <hr className="d-none d-lg-block mb-0 ms-0" />
                </div>
                </div>
            </div>
            </div>
        </div> 

    )
}