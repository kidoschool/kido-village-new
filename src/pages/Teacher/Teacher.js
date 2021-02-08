import React, {useState} from 'react';
import PodBanner1 from '../../assets/POD-1.jpg';
import PodBanner2 from '../../assets/POD-2.jpg';
import PodBanner3 from '../../assets/POD-3.jpg';
import testiProfile1 from '../../assets/testi-profile1.jpg';
import FormEnquiry from "../../components/FormEnquiry";
import AOS from "aos";
import $ from "jquery";
import "aos/dist/aos.css";


function Teacher(props) {

    const [monthlyFees, setMonthlyFees] = useState(3000);
    const [noOfStudents, setNoOfStudents] = useState(4);

    const handleMonthlyfeeChange = (event)=>{
        setMonthlyFees(event.target.value)
    }

    const handleNoOfStudents = (event)=>{
        setNoOfStudents(event.target.value)
    }

    var totalFees = monthlyFees * noOfStudents;

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

        $('body').on('change','#day',function () {  
            var dayVal = $(this).val();
            if(dayVal=="Full Day"){
                 $('#batches').html('');
                 $('#batches').html('<option value="">Select No. Of Batches</option><option value="1">1</option>');
            }else{
                $('#batches').html('');
                $('#batches').html('<option value="">Select No. Of Batches</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>');
            }
        });
        

    return(
        <>
           
        <section className="main_banner">
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="overlay1"></div>
                        <img src={PodBanner1} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Help us reinvent early years education</h1>
                            <i  className="banner-italic text-white">Become a Kido entrepreneur and help children unlock their potential </i>
                            <div className="banner mt-4">
                                <button onClick={openNav} className="btn my-btn center">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay1"></div>
                        <img src={PodBanner2} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Help us reinvent early years education</h1>
                            <i  className="banner-italic text-white">Become a Kido entrepreneur and help children unlock their potential </i>
                            <div className="banner mt-4">
                                <button onClick={openNav} className="my-btn center">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay1"></div>
                        <img src={PodBanner3} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            <h1 className="banner-head1 text-white">Help us reinvent early years education</h1>
                            <i  className="banner-italic text-white">Become a Kido entrepreneur and help children unlock their potential </i>
                            <div className="banner mt-4">
                                <button onClick={openNav} className="my-btn center">GET STARTED</button>
                            </div>
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
                    <div className="banner mt-4">
                        <button onClick={openNav} className="btn my-btn center">Sign Up Now</button>
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
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                            <label for="monthly_fees">Monthly Fees</label>
                                            <select name="no_of_students" className="form-control" id="monthly_fees"
                                            value={monthlyFees}
                                            onChange={handleMonthlyfeeChange}>
                                                <option value="3000" defaultValue>₹3,000</option>
                                                <option value="4000">₹4,000</option>
                                                <option value="5000">₹5,000</option>
                                                <option value="6000">₹6,000</option>
                                                <option value="7000">₹7,000</option>
                                            </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                            <label for="no_of_students">No. of Students</label>
                                            <select name="no_of_students" className="form-control" id="no_of_students"
                                            value={noOfStudents}
                                            onChange={handleNoOfStudents}>
                                                <option value="4" defaultValue>4</option>
                                                <option value="6">6</option>
                                                <option value="8">8</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                            <label for="day">Half Day/Full Day</label>
                                            <select name="day" className="form-control" id="day">
                                                <option value="Half Day" defaultValue>Half Day</option>
                                                <option value="Full Day">Full Day</option>
                                            </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                            <label for="batches">No. of Batches</label>
                                            <select name="batches" className="form-control" id="batches">
                                                <option value="1" defaultValue>1</option>
                                                <option value="2">2</option>
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
                                        <h1 className="total-earn banner-head text-white">₹{totalFees}</h1>
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
                    <iframe width="480" height="270" src="https://www.youtube.com/embed/lDNAbdm1Sh8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <div className="banner mt-4">
                        <button onClick={openNav} className="btn my-btn center">Sign Up Now</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className="testimonial py-5" style={{backgroundColor : "#F0F0F0"}}>
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="banner-head pb-4">What Our Teachers Say About Our Kido Village</h1>
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
            <h1 className="banner-head text-center pb-3">Hear from our Teacher</h1>
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


export default Teacher;