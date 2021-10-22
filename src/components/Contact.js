import React from 'react';
import {Form , Button} from 'react-bootstrap'

export default function Contact() {
    return (
        <section className="about-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0 text-white">Let's Get In Touch!</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5 text-white-50">Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">     
                        <Form id="contactForm">
                            {/* Name input> */}
                            <Form.Group className="mb-3">                         
                                <Form.Label className="text-white-50">Full name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name..." />                        
                            </Form.Group>

                            {/* Email address input */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">                         
                                <Form.Label className="text-white-50">Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com"  />                        
                            </Form.Group>
        
                            {/* Phone number input */}
                            <Form.Group className="mb-3">                         
                                <Form.Label className="text-white-50">Phone number</Form.Label>
                                <Form.Control type="tel" placeholder="(123) 456-7890"  />                        
                            </Form.Group>
                     
                            {/* Message input */}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">                         
                                <Form.Label className="text-white-50">Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter your message here..." style={{height: "10rem"}} rows={3} />                        
                            </Form.Group>                     
                                          
                            {/* Submit Button */}
                            <Button className="btn btn-xl text-white-50" variant="primary" type="submit">
                                Submit
                            </Button>                     
                        </Form>
                    </div>
                </div>
                                    
                <section className="contact-section">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5">
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Address</h4>
                                        <hr className="my-4 mx-auto" />
                                        <div className="small text-black-50 not-selectable">383 Kent Street, Sydney, NSW 2000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-envelope text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Email</h4>
                                        <hr className="my-4 mx-auto" />
                                        <div className="small text-black-50 not-selectable"><a href="mailto:salvo.dragotta@mottmac.com">salvo.dragotta@mottmac.com</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Phone</h4>
                                        <hr className="my-4 mx-auto" />
                                        <div className="small text-black-50 not-selectable">+61 450 158 509</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </section>
            </div>
        </section>
    )
}