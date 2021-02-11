import React from 'react';
import {Link} from "react-router-dom";
import PodBanner1 from '../../assets/POD-1.jpg';
import PodBanner2 from '../../assets/POD-2.jpg';
import PodBanner3 from '../../assets/POD-3.jpg';
import FormEnquiry from "../../components/FormEnquiry";
import AOS from "aos";
import $ from "jquery";
import "aos/dist/aos.css";

function PreSchool(props) {


    AOS.init();
        /* Set the width of the side navigation to 300px and the left margin of the page content to 250px */
        function openNav() {
            // document.getElementById("mySidenav").style.width = "360px";
            $( "#mySidenav" ).css( "width", "360px" );
          }
        
          /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
          function closeNav() {
            // document.getElementById("mySidenav").style.width = "0";
            $( "#mySidenav" ).css( "width", "0" );
          } 
        

    return(
        <>
           
        <section className="main_banner">
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="overlay1"></div>
                        <img src={PodBanner1} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Are you a pre-school owner? Get the Kido advantage</h1>
                            {/* <div className="banner mt-4">
                                <button onClick={openNav} className="btn my-btn center">GET STARTED</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay1"></div>
                        <img src={PodBanner2} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Are you a pre-school owner? Get the Kido advantage</h1>
                            {/* <div className="banner mt-4">
                                <button onClick={openNav} className="my-btn center">GET STARTED</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay1"></div>
                        <img src={PodBanner3} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Are you a pre-school owner? Get the Kido advantage</h1>
                            {/* <div className="banner mt-4">
                                <button onClick={openNav} className="my-btn center">GET STARTED</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>

        <section className="What-we-do py-5">
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="banner-head pb-2">Looking for a pre-school franchise?</h1>
                    <div className="col-lg-10">
                        <p>We are creating a global platform dedicated to delivering the highest quality early years education anywhere in the world. We are integrating advances in pedagogy, technology and design to create unique learning experiences for children. We are looking for partners to scale this up and bring the best quality of care and education to every neighborhood in the country. </p>
                        <p>Partner with us with your preschool and discover the power of the most comprehensive early years preschool franchise system created anywhere. Our franchise model rests on our ability and commitment to make our franchisees successful.</p>
                        <p>Kido Village offers the best of both worlds - a globally recognized childcare model that has served more than 15,000 families served along with an easy to set up franchise model that enables maximum flexibility with a high growth potential in terms of the business opportunity. </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="start_journey">
            <div className="overlay py-5">
            <div className="container">
                <div className="row justify-content-center py-5">
                <h1 className="banner-head text-white pb-2">Ready to take the plunge? Get in touch with us</h1>
                    <div className="col-lg-10 text-center">
                    <div className="banner mt-4">
                        <button onClick={openNav} className="btn my-btn center">Get in Touch</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className="pre-school-video py-5" style={{backgroundColor : "#F0F0F0"}}>
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                    <div className="col-lg-10">
                    <iframe width="100%" height="470" src="https://www.youtube.com/embed/QIp1Tne4xFc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section className="What-we-do py-5">
            <div className="container" data-aos="fade-right" data-aos-duration="2000">
           
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                    <div className="col-lg-7">
                        <h1 className="banner-head py-3">Why Kido?</h1>
                        <ul className="k-advantage">
                            <li>Trusted by over 15,000 families</li>
                            <li>Lowest franchise fee in the industry - 5% for Kido vs up to 25% elsewhere</li>
                            <li>Over 5,000 marketing templates to help you build the business</li>
                            <li>Comprehensive App Suite that takes cares of everything from enquiries to pedagogy</li>
                            <li>Quality control assurance through a comprehensive app-based model</li>
                            <li>Access to our expert guidance and frameworks for end-to-end learning management systems </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">

                    </div>
                </div>
            </div>
        </section>


        <section className="school_network">
            <div className="overlay py-5">
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-12 text-center">
                    <h1 className="banner-head text-white pb-2">Have questions? Get in touch with a franchise specialist</h1>    
                    <div className="banner mt-4">
                        <button onClick={openNav} className="btn my-btn center">Get in Touch</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="know-more py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="banner-head pb-4">Would you like to know more?</h1>
                    <Link to="/faq" className="my-btn center">Click here for FAQs</Link>
                    </div>
                </div>
            </div>
        </section>


                   

    <div id="mySidenav" className="sidenav bg-light border-right">
      <div className="p-3">
          <h5>Send your Enquiry</h5><a href={null} className="closebtn" onClick={closeNav}>&times;</a>
          <hr/>
           <FormEnquiry/>
      </div>
    </div>
                    
        </>
    )
    }
export default PreSchool;