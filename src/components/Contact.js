import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import {Form , Button} from 'react-bootstrap'

export default function Contact() {
    const [formState, setFormState] = useState({
		fullName: "",
		email: "",        
		message: "",
	});

    const [errorMessage, setErrorMessage] = useState("");

	const { fullName, email, message } = formState;

    function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message" || e.target.name === "phoneNumber") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

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
                                <Form.Label htmlFor="Name" className="text-white-50">Full name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name..." onBlur={handleBlank} defaultValue={fullName} name="Name"/>                        
                            </Form.Group>

                            {/* Email address input */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">                         
                                <Form.Label htmlFor="email" className="text-white-50">Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" onBlur={handleChange} defaultValue={email} name="email" />                        
                            </Form.Group>      
                                              
                            {/* Message input */}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">                         
                                <Form.Label htmlFor="Message" className="text-white-50">Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter your message here..." style={{height: "10rem"}} rows={3} onBlur={handleBlank} defaultValue={message} name="Message"/>                        
                            </Form.Group>  

                            {errorMessage && (
                                <div>
                                    <p className="text-white-50">{errorMessage}</p>
                                </div>
				        	)}                   
                                          
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