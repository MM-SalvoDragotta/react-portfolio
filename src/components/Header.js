import React from 'react';

export default function Head() {
    return (
        <div>    
            <div className="masthead">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Full Stack Development</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">
                            <i className="fab fa-html5 fa-3x" style= {{color: '#FF7F50'}}></i> 
                            <i className="fab fa-css3-alt fa-3x" style={{color: '#1E90FF'}} ></i>
                            <i className="fab fa-bootstrap fa-3x" style= {{color: '#080135'}}></i>
                            <i className="fab fa-js-square fa-3x" style= {{color: '#DAA520'}}></i>
                            <i className="fab fa-node fa-3x" style= {{color: '#9ACD32'}}></i>
                            <i className="fab fa-react fa-3x" style= {{color: '#00CED1'}}></i>
                            <i className="fas fa-database fa-3x" style= {{color: '#00758F'}}></i>
                            <i className="fas fa-leaf fa-3x" style= {{color: '#4DB33D'}}></i>           
                            <i className="fab fa-github fa-3x" style= {{color: 'white'}}></i>
                        </h2>                        
                    </div>          
                        <div>
                            <i className="fab fa-html5 fa-3x"></i>                
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}