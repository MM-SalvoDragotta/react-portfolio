import React from 'react';

export default function Featured(props) {
    console.log(props);
    return (         
        <div className="container px-4 px-lg-5">      
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div className="col-xl-8 col-lg-7">
                    <a href="https://store-back-end-deployed.herokuapp.com/"
                        title="Link to Grocery Delivery App" target="_blank">
                        <img className="img-fluid-project mb-3 mb-lg-0" 
                            src="assets/images/grocery-delivery-application.gif" 
                            alt="Grocery Delivery App"/>
                        <p className="label left-align"> x {props.featuredProject.title}</p>
                    </a>      
                </div>            
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4>Grocery Delivery App</h4>
                        <p className="text-black-50 mb-0 text-black-50-reducedfont">
                            This project is for an online department store customer and admin side. 
                            All items are listed on the website, with their quantities and prices. 
                            The admin can change stock, prices, delete products, add products and show current promotions. 
                            The application runs a <strong className="bold-red">RESTful API </strong>to retrieve or create data from it's database.
                            The application is displayed with both front-end and back-end models, with authentication needed for the back-end (admin) side.
                            The application uses <strong className="bold-red">Node.js, Express.js, Handlebars.js, MySQL, Sequelize ORM, Heroku.</strong>
                            <a href="https://github.com/MM-SalvoDragotta/grocery-delivery-application"
                                title="Link to GitHub Repository for Grocery Delivery App" target="_blank"
                                className="btn"> 
                                GitHub Repository for Grocery Delivery App
                            </a> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}