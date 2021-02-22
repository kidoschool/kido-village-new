import React from 'react';
import {Link} from "react-router-dom";
import ContactBanner from '../../assets/contact-banner.jpg';
import $ from "jquery";
import validate from 'jquery-validation';


function Contact(props) {
    $(document).ready(function() {
  
        $("#validateform").validate({
                  rules:{
                      name:{
                          required:true,
                          minlength: 2
                      },
                      email: {
                          required: true,
                          email: true
                       },
                       mobile: { 
                          required:true,
                          digits: true,
                          minlength: 10,
                          maxlength: 10 
                       },  
                  },
      
                  messages:{
                    name: {
                      required: "This field is required",
                      minlength: "Please enter atleast two character"
                    },
                    email: {
                       required: "This field is required",
                       email: "Please enter a valid email id",
                    },
                    mobile: { 
                      required: "This field is required",
                      digits: "Please enter a valid mobile number",
                      minlength: "Please enter 10 digits only",
                      maxlength: "Please enter 10 digits only" 
                    },
      
                  }
              });
        });
    


    return(
        <>
           <section className="banner-contact">
            <div className="container-fluid">
                <div className="row">
                    <img src={ContactBanner} className="contact-banner-img img-fluid" alt="contact_banner"/>
                </div>
            </div>
            </section>


        <section className="Appointment-section py-5" id="appointment">
        <div className="container">
            <header className="text-center mb-5">
                <h2 className="text-uppercase lined">Contact Us</h2>
            </header>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <form onSubmit="" className="contact-form" id="validateform">
                        <div className="row">
                            <div className="form-group col-lg-12">
                                <label htmlFor="name">Name *</label>
                                <input id="name" type="text" name="name" placeholder="Enter your firstname" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label htmlFor="mobile">phone *</label>
                                <input id="mobile" type="number" name="mobile" placeholder="Enter your phone no" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label htmlFor="email">Email *</label>
                                <input id="email" type="email" name="email" placeholder="Enter your email address" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-12">
                                <label htmlFor="message">Message*</label>
                                <textarea id="message" name="message" placeholder="Enter your message" rows="4" className="form-control"></textarea>
                            </div>
                            <div className="form-group col-lg-12">
                                <button type="submit" className="my-btn center">Send Message</button>
                            </div>
                        </div>
                        {/* {thankuMessage ? <span className="text-success text-center my-2">"Thank you for making Appointment!"</span> : null} */}
                    </form>
                </div>
                <div className="col-lg-3">
                <div className="contact=info pt-4">
                    <div className="icon mb-3"><i className="fa fa-phone"></i> Get in Touch</div>
                    <p>+91 9987807102</p>
                    <p>+91 9930477324</p>
                    <div className="icon mb-3"><i className="fa fa-envelope"></i> Mail Us At</div>
                    <p>village@kido.school</p>
                </div>
                </div>
            </div>
        </div>
      </section>
                    
        </>
    )
    }
export default Contact;