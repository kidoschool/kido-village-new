import React from 'react';
import ParentsBanner from '../../assets/parents-banner.jpg';
import TeachersBanner from '../../assets/teachers-banner.jpg';
import PreschoolsBanner from '../../assets/pre-schools-banner.jpg';
import AOS from "aos";
import "aos/dist/aos.css";


function Home(props) {

    AOS.init();

    return(
        <>
            <section className="banner-parent py-5" style={{backgroundColor : "#d0eaff"}}>
                <div className="container">
                    <div className="parent row justify-content-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                            <h1 className="banner-head">I am a Parent</h1>
                            <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                            <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna.</p>
                            <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                            <div className="pt-3">
                            <a href="#" target='_blank' rel="noreferrer" className="my-btn center">Learn more</a>
                        </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                            <img src={ParentsBanner} className="img-fluid"/>
                        </div>
                    </div>
                    </div>
                    </section>

                    <section className="banner-teacher py-5" style={{backgroundColor : "#fce8f4"}}>
                        <div className="container">
                            <div className="teacher row justify-content-center">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                                    <img src={TeachersBanner} className="img-fluid"/>
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="banner-head">I am a Teacher</h1>
                                    <div data-aos="fade-left" data-aos-duration="2000">
                                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna.</p>
                                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                                    <div className="pt-3">
                                    <a href="#" target='_blank' rel="noreferrer" className="my-btn center">Learn more</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="banner-pre-school py-5" style={{backgroundColor : "#e2fcff"}}>
                        <div className="container">
                            <div className="pre-school row justify-content-center">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                                    <h1 className="banner-head">Start a Pre-School</h1>
                                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna.</p>
                                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                                    <div className="pt-3">
                                    <a href="#" target='_blank' rel="noreferrer" className="my-btn center">Learn more</a>
                                </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                                    <img src={PreschoolsBanner} className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="What-we-do py-5">
                        <div className="container">
                            <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                            <h1 className="banner-head pb-2">What we do</h1>
                                <div className="col-lg-10">
                                    <p>We aim to provide the highest quality, flexible and affordable education and care to children under six everywhere - <span className="we-do-color">in their homes, or around the corner from where they live.</span> </p>
                                    <p><span className="we-do-color">For as little as ₹1500/month, you can set up a micro-preschool (we call it a Kïdo Village Pod) at home for your children, or children in the neighbourhood.</span> We'll provide the training, curriculum, support, quality control and everything you'll need to be a successful teacher or Pod owner.</p>
                                    <p>If you're a parent looking for education and care for your child, <span className="we-do-color">find a Pod near you</span>, and you'll be assured of a trained and certified provider in your community at affordable prices. Teaching will be in small groups (max of eight children) to ensure customisation and attention for each child.</p>
                                    <p>All Kïdo Village teachers and Pods use the Kïdo Early Years Program, an international program running in preschools and nurseries across the USA, UK, UAE, India and Hong Kong, and follow the strictest health and safety protocols, in line with global best practices.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="school_network">
                        <div className="overlay py-5">
                        <div className="container">
                            <div className="row justify-content-center py-5">
                            <h1 className="banner-head text-white pb-2">School Network</h1>
                                <div className="col-lg-10 text-center">
                                    <p><span className="text-white">bring global best practices in curriculum, operations, health and safety to each Kïdo Village Pod.</span> </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section className="how-it-works bg-light py-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4" data-aos="zoom-out-right" data-aos-duration="2000">
                                <h1 className="banner-head pb-2">How It Works</h1>
                                    <p>It's simple. If you want to set up a Kïdo Village Pod in your home, just sign up one the website and we'll be in touch with the next steps. If you're a parent, you can search and select a Pod near you, schedule tours and find one that suits you! Watch the video for an overview of how Kïdo Village works!</p>
                                </div>
                                <div className="offset-lg-1 col-lg-5" data-aos="zoom-out-left" data-aos-duration="2000">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/HB4Pn1BftpQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="video-card py-5">
                        <div className="container">
                        <h1 className="banner-head text-center pb-3">Hear from our Parent & Teacher</h1>
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                <div class="card-deck">
                                    <div class="card" data-aos="zoom-in" data-aos-duration="2000">
                                        <iframe className="card-img-top" width="560" height="280" src="https://www.youtube.com/embed/Ncl3CgduXCg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        {/* <div class="card-body">
                                        <h3 class="card-title">Kïdo Village Pod owner.</h3>
                                        <p class="card-text">Ms Arbin Banu, shares her experience of starting her own micro preschool in provided, she joins the ever expanding group of female eduprenuers who trust Kido Village platform to help them set up their own Micro Preschool from the convenience of their home.</p>
                                        </div> */}
                                    </div>
                                    <div class="card" data-aos="zoom-in" data-aos-duration="2000">
                                    <iframe className="card-img-top" width="560" height="280" src="https://www.youtube.com/embed/vglc5eR8HTM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                    
        </>
    )
}


export default Home;