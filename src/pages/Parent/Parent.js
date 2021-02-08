import React from 'react';
import PodBanner1 from '../../assets/POD-1.jpg';
import PodBanner2 from '../../assets/POD-2.jpg';
import PodBanner3 from '../../assets/POD-3.jpg';
import testiProfile1 from '../../assets/testi-profile1.jpg';
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
           
        <section className="main_banner">
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="overlay1"></div>
                        <img src={PodBanner1} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Give your child the best in early education and care</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay1"></div>
                        <img src={PodBanner2} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Give your child the best in early education and care</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay1"></div>
                        <img src={PodBanner3} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Give your child the best in early education and care</h1>
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
                <h2 className="banner-head pb-2">Find a Kido pod near you today</h2>
                    <div className="col-lg-10">
                    <div className="search-pod-form bg-white p-4 my-4 border shadow"  data-aos="fade-right" data-aos-duration="2000">
                        <h3>Quick Search</h3>
                        <form>
                        <div className="form-row">
                            <div className="col-md-3">
                            <label for="stateselect">Select State</label>
                            <select name="state" className="form-control" id="state">
                                <option value="">Select any state</option>
                                <option value="1">ANDHRA PRADESH</option>
                                <option value="2">ASSAM</option>
                                <option value="3">ARUNACHAL PRADESH</option>
                                <option value="4">BIHAR</option>
                                <option value="5">GUJRAT</option>
                                <option value="6">HARYANA</option>
                                <option value="7">HIMACHAL PRADESH</option>
                                <option value="8">JAMMU &amp; KASHMIR</option>
                                <option value="9">KARNATAKA</option>
                                <option value="10">KERALA</option>
                                <option value="11">MADHYA PRADESH</option>
                                <option value="12">MAHARASHTRA</option>
                                <option value="13">MANIPUR</option>
                                <option value="14">MEGHALAYA</option>
                                <option value="15">MIZORAM</option>
                                <option value="16">NAGALAND</option>
                                <option value="17">ORISSA</option>
                                <option value="18">PUNJAB</option>
                                <option value="19">RAJASTHAN</option>
                                <option value="20">SIKKIM</option>
                                <option value="21">TAMIL NADU</option>
                                <option value="22">TRIPURA</option>
                                <option value="23">UTTAR PRADESH</option>
                                <option value="24">WEST BENGAL</option>
                                <option value="25">DELHI</option>
                                <option value="26">GOA</option>
                                <option value="27">PONDICHERY</option>
                                <option value="28">LAKSHDWEEP</option>
                                <option value="29">DAMAN &amp; DIU</option>
                                <option value="30">DADRA &amp; NAGAR</option>
                                <option value="31">CHANDIGARH</option>
                                <option value="32">ANDAMAN &amp; NICOBAR</option>
                                <option value="33">UTTARANCHAL</option>
                                <option value="34">JHARKHAND</option>
                                <option value="35">CHATTISGARH</option>
                            </select>
                            </div>
                            <div className="col-md-3">
                            <label for="inputEmail4">Select City</label>
                            <input type="text" className="form-control" placeholder="First name"/>
                            </div>
                            <div className="col-md-3">
                            <label for="inputEmail4">Pin Code</label>
                            <input type="text" className="form-control" placeholder="Enter Pin Code"/>
                            </div>
                            <div className="col-md-3 pod-search-now">
                            <a href="#" className="btn my-btn center">Search Now</a>
                            </div>
                        </div>
                        <div className="sm-text mt-4"><small>Note: You can enter Pin code in above mentioned field. In case if you are not aware about postcode then you can leave the field blank and it will automatically pick your location.</small></div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5" data-aos="zoom-out-right" data-aos-duration="2000">
                    <div className="card my-2 shadow">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={PodBanner1} width="200"className="find-pod-img img-fluid" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Description</p>
                                    <a href="#" className="my-btn-info center">Schedule a Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-2 shadow">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={PodBanner2} width="200" className="find-pod-img img-fluid" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Description</p>
                                    <a href="#" className="my-btn-info center">Schedule a Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-2 shadow">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={PodBanner3} width="200" className="find-pod-img img-fluid" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Description</p>
                                    <a href="#" className="my-btn-info center">Schedule a Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-2 shadow">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={PodBanner1} width="200" className="find-pod-img img-fluid" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Description</p>
                                    <a href="#" className="my-btn-info center">Schedule a Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className="col-lg-5 mt-3" data-aos="zoom-out-left" data-aos-duration="2000">
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
                        <ul className="k-advantage">
                            <li>Homely care - right in your neighbourhood</li>
                            <li>Small batches to ensure personal attention</li>
                            <li>Highly customized approach for each child</li>
                            <li>Community events and regular parent-teacher communication</li>
                            <li>Globally-recognized learning models</li>
                            <li>Quality control checks with the highest standards</li>
                            <li>Safe and secure environment</li>
                            <li>Interactive groups to foster creativity, learning and independent thinking </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        <section className="testimonial py-5" style={{backgroundColor : "#F0F0F0"}}>
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="banner-head pb-4">What Our Parent Say About Our Kido Village</h1>
                    <div className="col-lg-10 text-center">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="pic">
                                        <img src={testiProfile1} width="300" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 pt-2">
                                    <div className="testi-content pt-4"><i className="fas fa-quote-left text-primary px-2 fa-2x"></i>
                                    <i>Incididunt anim dolor sint sit Incididunt anim dolor sint sit Incididunt anim dolor sint sit Incididunt anim dolor sint sit.</i>
                                    </div>
                                    <div className="text-right pt-4">
                                        <h3>Teachers Name</h3>
                                        <small className="text-primary"><i>-from Bandra</i></small>
                                    </div>
                                </div>
                           </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="pic">
                                        <img src={testiProfile1} width="300" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 pt-2">
                                    <div className="testi-content pt-4"><i className="fas fa-quote-left text-primary px-2 fa-2x"></i>
                                    <i>Incididunt anim dolor sint sit Incididunt anim dolor sint sit Incididunt anim dolor sint sit Incididunt anim dolor sint sit.</i>
                                    </div>
                                    <div className="text-right pt-4">
                                        <h3>Teachers Name</h3>
                                        <small className="text-primary"><i>-from Bandra</i></small>
                                    </div>
                                </div>
                           </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="pic">
                                        <img src={testiProfile1} width="300" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 pt-2">
                                    <div className="testi-content pt-4"><i className="fas fa-quote-left text-primary px-2 fa-2x"></i>
                                    <i>Incididunt anim dolor sint sit Incididunt anim dolor sint sit Incididunt anim dolor sint sit Incididunt anim dolor sint sit.</i>
                                    </div>
                                    <div className="text-right pt-4">
                                        <h3>Teachers Name</h3>
                                        <small className="text-primary"><i>-from Bandra</i></small>
                                    </div>
                                </div>
                           </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev invisible" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
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
                    <div className="card-deck">
                        <div className="card" data-aos="zoom-in" data-aos-duration="2000">
                            <iframe className="card-img-top" width="560" height="280" src="https://www.youtube.com/embed/I7euUBZq4sw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            {/* <div className="card-body">
                            <h3 className="card-title">Kïdo Village Pod owner.</h3>
                            <p className="card-text">Ms Arbin Banu, shares her experience of starting her own micro preschool in provided, she joins the ever expanding group of female eduprenuers who trust Kido Village platform to help them set up their own Micro Preschool from the convenience of their home.</p>
                            </div> */}
                        </div>
                        <div className="card" data-aos="zoom-in" data-aos-duration="2000">
                        <iframe className="card-img-top" width="560" height="280" src="https://www.youtube.com/embed/CbyUND4AvPY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            {/* <div className="card-body">
                            <h3 className="card-title">Parent, Kïdo.</h3>
                            <p className="card-text">Ms Sameera Reddy, Kïdo Parent talks to India CEO Mr Jeetu Karsan about parenting, Kïdo and more. The talk demonstrates our values, our principles and our commitment to educate young children in the best possible way everywhere.</p>
                            </div> */}
                        </div>
                        </div>
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


export default Parent;