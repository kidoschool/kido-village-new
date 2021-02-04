import React from 'react';
import PodBanner1 from '../../assets/POD-1.jpg';
import PodBanner2 from '../../assets/POD-2.jpg';
import PodBanner3 from '../../assets/POD-3.jpg';
import FormEnquiry from "../../components/FormEnquiry";
import Map from "../../components/Map/Map";
import AOS from "aos";
import $ from "jquery";
import "aos/dist/aos.css";


function Parent(props) {

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
                            <h1 className="banner-head1 text-white">Give your child the best in early education and care</h1>
                            <div class="banner mt-4">
                                <button onClick={openNav} class="my-btn center">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="overlay1"></div>
                        <img src={PodBanner2} class="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div class="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Give your child the best in early education and care</h1>
                            <div class="banner mt-4">
                                <button onClick={openNav} class="my-btn center">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="overlay1"></div>
                        <img src={PodBanner3} class="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div class="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Give your child the best in early education and care</h1>
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
                <h1 className="banner-head pb-2">It takes a village to raise a child </h1>
                    <div className="col-lg-10">
                        <p>At Kido Village, we hope to transform the future of our children by making early interventions in the form of lots of love, care and exceptional education. With our Kido Early Years Program that works as the framework for all our learning spaces, we are creating launchpads for your children under the age of six.</p>
                        <p>Each Kido Village pod provides: the nurture and trust of a community teacher, the excellence of a global education framework and a creative activity led approach to learning. All our learning spaces are structured around the fundamental values of Kido and offer the highest standards of safety, security, and quality control to ensure that your child gets nothing but the best. </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="how-it-works py-5" style={{backgroundColor : "#F0F0F0"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5" data-aos="zoom-out-right" data-aos-duration="2000">
                    <h2 className="banner-head pb-2">Find a Kido pod near you today</h2>

                    <div class="card my-2">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={PodBanner1} width="200"class="find-pod-img img-fluid" alt=""/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title">Title</h4>
                                    <p class="card-text">Description</p>
                                    <a href="#" class="my-btn-info center">Schedule a Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card my-2">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={PodBanner2} width="200" class="find-pod-img img-fluid" alt=""/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title">Title</h4>
                                    <p class="card-text">Description</p>
                                    <a href="#" class="my-btn-info center">Schedule a Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card my-2">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={PodBanner3} width="200" class="find-pod-img img-fluid" alt=""/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title">Title</h4>
                                    <p class="card-text">Description</p>
                                    <a href="#" class="my-btn-info center">Schedule a Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card my-2">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={PodBanner1} width="200" class="find-pod-img img-fluid" alt=""/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title">Title</h4>
                                    <p class="card-text">Description</p>
                                    <a href="#" class="my-btn-info center">Schedule a Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className="col-lg-5 mt-5" data-aos="zoom-out-left" data-aos-duration="2000">
                        <Map/>
                    </div>
                </div>
            </div>
        </section>

        <section className="What-we-do py-5">
            <div className="container" data-aos="fade-right" data-aos-duration="2000">
           
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                    <div className="col-lg-10">
                    <h1 className="banner-head">The Kido advantage </h1>
                    <div className="pb-4"><i>Give your children a head start! </i></div>
                        <ul className="list-unstyled">
                            <li className="list-group-item py-4 bg-primary text-white">Homely care - right in your neighbourhood</li>
                            <li className="list-group-item py-4 bg-info text-white">Small batches to ensure personal attention</li>
                            <li className="list-group-item py-4 bg-success text-white">Highly customized approach for each child</li>
                            <li className="list-group-item py-4 bg-warning text-white">Community events and regular parent-teacher communication</li>
                            <li className="list-group-item py-4 bg-danger text-white">Globally-recognized learning models</li>
                            <li className="list-group-item py-4 bg-primary text-white">Quality control checks with the highest standards</li>
                            <li className="list-group-item py-4 bg-info text-white">Safe and secure environment</li>
                            <li className="list-group-item py-4 bg-success text-white">Interactive groups to foster creativity, learning and independent thinking </li>
                        </ul>
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


export default Parent;