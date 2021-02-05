import React from 'react';
import PodBanner1 from '../../assets/POD-1.jpg';
import PodBanner2 from '../../assets/POD-2.jpg';
import PodBanner3 from '../../assets/POD-3.jpg';
import FormEnquiry from "../../components/FormEnquiry";
import Map from "../../components/Map/Map";
import AOS from "aos";
import $ from "jquery";
import "aos/dist/aos.css";


function Teacher(props) {

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
           
        <section class="main_banner">
            <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="overlay1"></div>
                        <img src={PodBanner1} class="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div class="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Help us reinvent early years education</h1>
                            <i  className="banner-italic text-white">Become a Kido entrepreneur and help children unlock their potential </i>
                            <div class="banner mt-4">
                                <button onClick={openNav} class="btn my-btn center">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="overlay1"></div>
                        <img src={PodBanner2} class="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div class="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Help us reinvent early years education</h1>
                            <i  className="banner-italic text-white">Become a Kido entrepreneur and help children unlock their potential </i>
                            <div class="banner mt-4">
                                <button onClick={openNav} class="my-btn center">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="overlay1"></div>
                        <img src={PodBanner3} class="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div class="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Help us reinvent early years education</h1>
                            <i  className="banner-italic text-white">Become a Kido entrepreneur and help children unlock their potential </i>
                            <div class="banner mt-4">
                                <button onClick={openNav} class="my-btn center">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>

        <section className="What-we-do py-5">
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="banner-head pb-2">Become an early childhood entrepreneur</h1>
                    <div className="col-lg-10">
                        <p>Starting a Kido Village pod is easy. Sign up on the form on our website and we’ll get you started on training modules and help you set up everything from your physical learning space to the marketing materials you will need to enroll children. Not just this, we also provide 24/7 support throughout your journey with us and we’ll help you every step of the way with whatever you need.</p>
                        <p>For all this and more, we charge only 50% of the fee you charge from one child - no matter how many children you take in (you get to keep the rest!). </p>
                        <p>Find out how you can earn Rs 50,000-Rs 1,00,000+ within a couple of months by just enrolling 8 students! </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="start_journey">
            <div className="overlay py-5">
            <div className="container">
                <div className="row justify-content-center py-5">
                <h1 className="banner-head text-white pb-2">Curious to learn more? Start your journey</h1>
                    <div className="col-lg-10 text-center">
                    <div class="banner mt-4">
                        <button onClick={openNav} class="btn my-btn center">Sign Up Now</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className="posible earning py-5" style={{backgroundColor : "#F0F0F0"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="earning" data-aos="fade-up" data-aos-duration="2000">
                            <h1 className="banner-head pb-2">Possible Earnings</h1>
                            <p>We've crunched the numbers so you don't have to. This calculator gives an illustration of how much you could earn on a monthly basis depending on how much fees you charge, number of children you take care of at any point in time and the number of batches you want to run. Try it out and see for yourself!</p>
                        </div>
                        <div className="earning-data border shadow bg-white" data-aos="fade-right" data-aos-duration="2000">
                            <div className="row">
                                <div className="col-lg-8">
                                <div className="earning-form p-4">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                            <label for="monthly_fees">Monthly Fees</label>
                                            <select name="no_of_students" value="" class="form-control" id="monthly_fees">
                                                <option value="3000" selected="">₹3,000</option>
                                                <option value="4000">₹4,000</option>
                                                <option value="5000">₹5,000</option>
                                                <option value="6000">₹6,000</option>
                                                <option value="7000">₹7,000</option>
                                            </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label for="no_of_students">No. of Students</label>
                                            <select name="no_of_students" value="" class="form-control" id="no_of_students">
                                                <option value="4">4</option>
                                                <option value="6">6</option>
                                                <option value="8" selected="">8</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                            <label for="day">Half Day/Full Day</label>
                                            <select name="day" value="" class="form-control" id="day">
                                                <option value="Half Day" selected="">Half Day</option>
                                                <option value="Full Day">Full Day</option>
                                            </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label for="batches">No. of Batches</label>
                                            <select name="batches" value="" class="form-control" id="batches">
                                                <option value="1">1</option>
                                                <option value="2" selected="">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="earning-total text-center bg-blue">
                                        <h5 className="ex-earning text-white">Expected Earnings</h5>
                                        <h1 className="total-earn banner-head text-white">₹48,000</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="how-it-works py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4" data-aos="zoom-out-right" data-aos-duration="2000">
                    <h1 className="banner-head pb-2">How It Works</h1>
                        <p>Setting up your own Pod at home is easy. Within a few weeks, you can be all set up and ready to take your first batch of children. Depending on how many children you take, and what you charge, you could be earning ₹50,000 to ₹ 1 lakh+ per month within a couple of months! Watch the video to get a better understanding of the process.</p>
                    </div>
                    <div className="offset-lg-1 col-lg-5" data-aos="zoom-out-left" data-aos-duration="2000">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lDNAbdm1Sh8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section className="school_network">
            <div className="overlay py-5">
            <div className="container">
                <div className="row justify-content-center py-5">
                <h1 className="banner-head text-white pb-2">Ready to begin your journey? Create your Kido pod today</h1>
                    <div className="col-lg-10 text-center">
                    <div class="banner mt-4">
                        <button onClick={openNav} class="btn my-btn center">Sign Up Now</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>



        <section className="video-card py-5">
            <div className="container">
            <h1 className="banner-head text-center pb-3">Hear from our Parent</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                    <div class="card-deck">
                        <div class="card" data-aos="zoom-in" data-aos-duration="2000">
                            <iframe className="card-img-top" width="560" height="280" src="https://www.youtube.com/embed/I7euUBZq4sw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            {/* <div class="card-body">
                            <h3 class="card-title">Kïdo Village Pod owner.</h3>
                            <p class="card-text">Ms Arbin Banu, shares her experience of starting her own micro preschool in provided, she joins the ever expanding group of female eduprenuers who trust Kido Village platform to help them set up their own Micro Preschool from the convenience of their home.</p>
                            </div> */}
                        </div>
                        <div class="card" data-aos="zoom-in" data-aos-duration="2000">
                        <iframe className="card-img-top" width="560" height="280" src="https://www.youtube.com/embed/CbyUND4AvPY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            {/* <div class="card-body">
                            <h3 class="card-title">Parent, Kïdo.</h3>
                            <p class="card-text">Ms Sameera Reddy, Kïdo Parent talks to India CEO Mr Jeetu Karsan about parenting, Kïdo and more. The talk demonstrates our values, our principles and our commitment to educate young children in the best possible way everywhere.</p>
                            </div> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


                   

    <div id="mySidenav" class="sidenav bg-light border-right">
      <div class="p-3">
          <h5>Send your Enquiry</h5><a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
          <hr/>
           <FormEnquiry/>
      </div>
    </div>
                    
        </>
    )
}


export default Teacher;