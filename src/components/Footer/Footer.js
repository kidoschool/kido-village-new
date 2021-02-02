import React from 'react';
import {Link} from "react-router-dom";


function Footer(props) {
  return(
    
    <>
    <footer>
             
        <section className="footer-area">
          <div className="container">
                <div className="row py-4">
                    <div className="col-md-5 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">OPEN YOUR OWN KÏDO CENTER</h4>
                                <p>Are you interested in operating your own preschool? Head to our franchise website to learn how you can launch your own Kïdo school.</p>
                            </div>
                        </div>
                    <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">CENTRES</h4>
                                <ul className="list-unstyled">
                                  <li><Link to="/ourcentres?srch-trm=dubai">Dubai</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=greater-london">Greater London</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=houston">Houston</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=austin">Austin</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=hong-kong">Hong Kong</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=india">India</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                            <h4 className="widget-title pb-3">ABOUT KIDO</h4>
                                <ul className="list-unstyled">
                                  <li><a href="https://www.kidoholdings.com/" target="_blank" rel="noreferrer">Corporate</a></li>
                                  <li><Link to="/kido-home">Kido Home</Link></li>
                                  <li><Link to="/faq">FAQ</Link></li>
                                  <li><a href="https://www.kidofranchise.com/" target="_blank" rel="noreferrer">Franchise</a></li>
                                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                  <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">CONTACT</h4>
                                <ul className="list-unstyled">
                                  <li><Link to="/contact-us">hello@kido.school</Link></li>
                                </ul>
                            </div>
                            <div className="icon-info">
                              <a href="https://www.facebook.com/Kidoeducation" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f pr-3"></i></a>
                              <a href="https://www.instagram.com/kidoschools/" target="_blank" rel="noreferrer"><i className="fab fa-instagram pr-3"></i></a>
                              <a href="https://www.youtube.com/c/KidoSchools" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>   
                    </div>     
                </div>

                <div className="container-fluid bottom-line"></div>

                <div className="container py-3">
                  <div className="d-flex justify-content-between">
                    <div className="terms"><Link to="/">Terms and conditions</Link></div>
                    <div className="all-rights"><Link to="/">Ⓒ2020 Kïdo | All rights reserved</Link></div>
                  </div>
                </div>
        </section>
       
    </footer>
    </>
  
  );

}

export default Footer;
