import React from 'react';
import image from '../assets/images/Salvo Dragotta.jpg';

export default function About() {
    return (
        <div >
            <section className="about-section text-center" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-4" >About me</h2>
                            <p className="text-white-50">
                                I am a passionate full-stack developer with a broad and versatile coding skill set.
                                I have a vast array of knowledge in many different front end and back end languages, 
                                responsive frameworks, databases and best code practices. 
                                I am dedicated to perfecting myself by learning from more seasoned developers 
                                and continuously making strides to learn all that I can about development. 
                            </p>
                        </div>
                    </div>
                    <img className="img-fluid" src={image} alt="Salvo Dragotta" />
                </div>
            </section>
        </div>  
    )
}