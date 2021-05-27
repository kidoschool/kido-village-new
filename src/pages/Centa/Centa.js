import React from 'react';
import CentaLogo from '../../assets/centaRLogo.jpg';
import {Link} from "react-router-dom";



function Centa(props) {

    return(
        <>
        
        <section className="centa py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h2>Training and Accreditation</h2>
                        <img src={CentaLogo} width="200" className="img-fluid" alt="centa-logo" />
                        <p className="centa-text pt-3">We’re proud to partner with <a target="_blank" rel="noopener noreferrer" href="https://centa.org/" className="hiper-link" >CENTA<sup>®</sup></a>, the Centre for Teacher Accreditation in India to deliver training and accreditation for all of our Pod Partners. Through our partnership, we offer the following certified trainings for all Pod Partners:</p>
                        <ul className="centa-list">
                            <li className="py-2">CENTA Training in Early Childhood Education (ECE)</li>
                            <li className="py-2">Training in the Kido Early Years Program and the Kido Village Program</li>
                            <li className="py-2">Training in operations, marketing, and everything else you need to successfully run your own Pod.</li>
                        </ul>
                        <p className="centa-text">All prospective Pod Partners are required to get a CENTA accreditation as a certified Kido Village Pod Owner at the end of their training program before they can operate their Pods. With a CENTA ECE certification, you are eligible to work in the early childhood education industry anywhere, even if you don’t operate your own Pod.</p>
                        <p className="centa-text">If you are already an early childhood education professional, you may not need to undergo training in ECE. Please discuss with your counselor.</p>
                        <p className="centa-text">Please <a target="_blank" rel="noopener noreferrer" href="https://signup.kidovillage.com/centa" className="hiper-link">click here</a> for more details, and to register for the training.</p>
                    </div>
                </div>
            </div>
        </section>
        

        </>
    )
    }
export default Centa;