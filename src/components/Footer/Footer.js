import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/kido-village-logo.png';



function Footer(props) {
  return(
    
    <>
    <footer>
             
        <section className="footer-area">
          <div className="container">
                <div className="row py-4">
                    <div className="col-lg-5 my-1">
                            <div className="footer-widget footer-info pb-3">
                                {/* <h4 className="widget-title pb-3">OPEN YOUR OWN KIDO POD & PRESCHOOL</h4> */}
                                <div className="global-offices">
                                  <h4 className="widget-title">GLOBAL OFFICES:</h4>
                                  <ul className="list-unstyled">
                                      <li><b>United Kingdom: </b>Kido Education Oakmoore Court Kingswood Road, Hampton Lovett, Driotwich, Worcestershire WR9 0QH, UK</li>
                                      <li><b>Singapore: </b>Kido Education (Singapore) Pte. Ltd. <br/>Quantm education Pte. Ltd. <br/>#06-00 ASO Building, 8 Robinson Road, Singapore</li>
                                      <li><b>India: </b>KID-O EDUCATION PRIVATE LIMITED 1002, Mohini heights, 5th Road, Ramkrishna Nagar, Khar West, Mumbai-400052</li>
                                  </ul>
                                </div>
                                {/* <Link className="logo" to="/"><img src={logo} alt="logo" width="110"/></Link> */}
                            </div>
                        </div>
                    <div className="col-lg-3 col-md-3 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3 quick-links">QUICK LINKS</h4>
                                <ul className="list-unstyled row justify-content-center">
                                  <div className="col-lg-3">
                                <li><Link className="" to="/">Home</Link></li>
                                  <li><Link className="" to="/parent">Parents</Link></li>
                                  <li><Link className="" to="/pods">Pods</Link></li>
                                  </div>
                                  <div className="col-lg-7">
                                  <li><Link className="" to="/about">About</Link></li>
                                  <li><a className="" href="/kido-village-faq/faq.html">FAQs</a></li>
                                  <li><Link className="" to="/contact">Contact</Link></li>
                                  </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 my-1">
                            <div className="footer-widget footer-info">
                            <h4 className="widget-title pb-3">ABOUT KIDO</h4>
                                <ul className="list-unstyled">
                                  <li><Link to="/website-privacy-notice">Website Privacy Notice </Link></li>
                                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                  <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">CONTACT</h4>
                                <ul className="list-unstyled">
                                  <li><Link to="/contact-us">enquiry@kidovillage.com</Link></li>
                                </ul>
                            </div>
                            <div className="icon-info">
                              <a href="https://www.facebook.com/KidoVillage" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f pr-3"></i></a>
                              <a href="https://www.instagram.com/kidovillage/?igshid=qwip2dzcm6az" target="_blank" rel="noreferrer"><i className="fab fa-instagram pr-3"></i></a>
                              <a href="https://www.youtube.com/c/KidoSchools" target="_blank" rel="noreferrer"><i className="fab fa-youtube pr-3"></i></a>
                              <a href="https://www.linkedin.com/company/kidoed" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                              
                    
                            </div>
                        </div>   
                    </div>     
                </div>

                <div className="container-fluid bottom-line"></div>

                <div className="container py-3">
                  <div className="d-flex justify-content-between">
                    <div className="terms"><Link to="/">Terms and conditions</Link></div>
                    <div className="all-rights"><Link to="/">© 2021 Kïdo Education Pte. Ltd.<sup>TM</sup></Link></div>
                  </div>
                </div>
        </section>
       
    </footer>
    </>
  
  );

}

export default Footer;
