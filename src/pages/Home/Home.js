import React from 'react';
import {Link} from "react-router-dom";
import ParentsBanner from '../../assets/parents-banner.jpg';
import TeachersBanner from '../../assets/teachers-banner-new.jpg';
import PreschoolsBanner from '../../assets/pre-schools-banner-new.jpg';
import FormEnquiry from "../../components/FormEnquiry";
import AOS from "aos";
import $ from "jquery";
import "aos/dist/aos.css";


function Home(props) {

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
            <section className="banner-parent py-5" style={{backgroundColor : "#fff"}}>
                <div className="container">
                    <div className="parent row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="banner-head">Give your child the best in early education and care!</h1>
                            <p>If you are looking for a nurturing environment for your child where they can learn, play and be cared for in a homely safe environment, Kido Village Pod is just the right place for them. Built on our internationally followed Kido Early Years Program, our pods  provide the right creative environment that helps learning and development of a young brain. </p>
                            <p>Each of our pods provide the nurture and trust of a qualified and trained teacher, the excellence of a global education framework and a creative activity led approach to learning.</p>
                            <div className="pt-3">
                            <Link to="/parent" className="my-btn center">Find a Pod</Link>
                        </div>
                        </div>
                        <div className="col-lg-6 pt-5">
                            <img src={ParentsBanner} className="img-fluid" alt="ParentsBanner"/>
                        </div>
                    </div>
                    </div>
                    </section>

                    <section className="banner-teacher py-5 bg-red">
                        <div className="container">
                            <div className="teacher row justify-content-center">
                                <div className="col-lg-6 pt-5">
                                    <img src={TeachersBanner} className="img-fluid" alt="TeachersBanner" />
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="banner-head">Aspiring to be financially independent?</h1>
                                    <i><strong>Become a Kido entrepreneur and help us reinvent early years education!</strong></i>
                                    <div>
                                    <p>By becoming a Kido pod owner, you can help shape the future of kids in your community by providing them with high quality education and care, with the backing of Kido! Our internationally recognized model will help you set up a pod in your living space with an investment as little as Rs 6,000 and you can start monetizing it quickly by enrolling kids with complete flexibility.</p>
                                    <p>Simply fill the form on our website and we’ll reach out to you with the next steps for onboarding and help you through the journey – be it education materials or marketing support!</p>
                                    <div className="pt-3">
                                    <Link to="/pods" className="my-btn center">I want to start a Pod </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="banner-pre-school py-5" style={{backgroundColor : "#fff"}}>
                        <div className="container">
                            <div className="pre-school row justify-content-center">
                                <div className="col-lg-6">
                                    <h1 className="banner-head">Looking for a pre-school franchise? </h1>
                                    <p>With more than 15,000 families served and a globally implemented childcare program, Kido Village is expanding fast by setting up Preschools across India. If you already run a preschool or want to start your own Preschool, partner with Kido Village to enter a never-seen-before growth trajectory.</p>
                                    <p>Based on world class materials, training, support and safety protocols, our vision for preschools is to create trust in the market and enable high-quality outcomes for children across the country.</p>
                                    <p>Learn more about our offerings and partnership opportunities through a turnkey franchise model.</p>
                                    <div className="pt-3">
                                    <Link to="/Pre-school" className="my-btn center">I want to start a pre-school</Link>
                                </div>
                                </div>
                                <div className="col-lg-6 pt-5">
                                    <img src={PreschoolsBanner} className="img-fluid" alt="PreschoolsBanner"/>
                                </div>
                            </div>
                        </div>
                    </section> */}


                    <section className="What-we-do py-5">
                        <div className="container">
                            <div className="row justify-content-center">
                            <h1 className="banner-head pb-2">What is Kido Village?</h1>
                                <div className="col-lg-10">
                                    <p>Kido Village is a growing chain of neighbourhood learning pods which aim to provide the highest quality, flexible and affordable education and care to children under six everywhere - in their homes, or around the corner from where they live.</p>
                                    <p>If you are a parent looking for education and care for your child, <Link to="/Parent" className="fap-text"><span className="we-do-color">find a pod near you,</span> </Link>and you will be assured of a trained and certified provider in your community at affordable prices. Teaching will be in small groups (maximum of eight children) to ensure customization and attention for each child.</p>
                                    <p>If you are interested in teaching, you can set up a micro-preschool (we call it a Kïdo Village Pod) at home for your children, or children in the neighborhood. For as little as ₹1500/month, we'll provide the training, curriculum, support, quality control and everything you'll need to be a successful teacher or Pod owner.</p>
                                    <p>All Kïdo Village Pods use the Kïdo Early Years Program, an international program running in nurseries across the USA, UK, UAE, India and Hong Kong, and follow the strictest health and safety protocols, in line with global best practices.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="school_network">
                        <div className="overlay py-5">
                        <div className="container">
                            <div className="row justify-content-center py-5">
                                <div className="col-lg-12 text-center">
                                <h1 className="banner-head text-white pb-2">Ready to begin your journey? Create your Kido pod today</h1>
                                <div className="banner mt-4">
                                    <button onClick={openNav} className="btn my-btn center">Sign Up Now</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section className="how-it-works py-5 bg-red">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4">
                                <h1 className="banner-head pb-2">How It Works</h1>
                                    <p>It's simple. If you want to set up a Kïdo Village Pod in your home, just sign up on the website and we'll be in touch with the next steps. If you're a parent, you can search and select a Pod near you, schedule tours and find one that suits you! Watch the video for an overview of how Kïdo Village works!</p>
                                </div>
                                <div className="offset-lg-1 col-lg-5">
                                <iframe width="480" height="265" src="https://www.youtube.com/embed/HB4Pn1BftpQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="video-card py-5">
                        <div className="container">
                        <h1 className="banner-head text-center pb-3">Hear from our Parents & Teachers</h1>
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                <div className="card-deck">
                                    <div className="card">
                                        <iframe className="card-img-top" width="560" height="280" src="https://www.youtube.com/embed/-HsoPi2Amc4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        {/* <div className="card-body">
                                        <h3 className="card-title">Kïdo Village Pod owner.</h3>
                                        <p className="card-text">Ms Arbin Banu, shares her experience of starting her own micro preschool in provided, she joins the ever expanding group of female eduprenuers who trust Kido Village platform to help them set up their own Micro Preschool from the convenience of their home.</p>
                                        </div> */}
                                    </div>
                                    <div className="card">
                                    <iframe className="card-img-top" width="560" height="280" src="https://www.youtube.com/embed/vglc5eR8HTM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

                    <div id="mySidenav" className="sidenav bg-red border-right">
                    <div className="p-3">
                        <h5>Send your Enquiry</h5><a href={null} className="closebtn" onClick={closeNav}>&times;</a>
                        <hr/>
                        <FormEnquiry/>
                    </div>
                    </div>
                    
        </>
    )
}


export default Home;