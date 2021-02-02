import React from 'react';
import kidsBall from '../../assets/kids-ball.png';
import kidsplay from '../../assets/kid-play.png';
import ParentBanner from '../../assets/parent-banner.jpg';
import TeacherBanner from '../../assets/teacher-banner.jpg';
import PreSchoolBanner from '../../assets/pre-school-banner.jpg';
import {Link} from "react-router-dom";
import $ from "jquery"
import AOS from "aos";
import "aos/dist/aos.css";

function HomeOld(props) {
  
  AOS.init();

  var x = 0;
  var x1 = 0;
  $(document).ready(function(){
    $("#scroll_div").on('wheel', function(e) {
    var delta = e.originalEvent.deltaY;
    var scrn_sz = $(window).width();

    if(delta > 0){
      if($(this).position().left > (-scrn_sz*2)){
          $(this).css("left",x-= scrn_sz/10);
          // $(window).scroll();
         $("#walking").css("left",x1+= scrn_sz/37);
         $("#walking").css("transform","rotateZ("+x1+"deg)");

        }
      }
    else{
      if($(this).position().left < 0){
        $(this).css("left",x+= scrn_sz/10);  
        $("#walking").css("left",x1-= scrn_sz/37);
        $("#walking").css("transform","rotateZ("+x1+"deg)");

      }
    }

    return false; 
  });
    
    
  });

   
  return(
    <>
      <section className="banner-section">
            <div className="containers" id="scroll_div">
            <section>
              <div className="content1">
                <div className="row">
                  <div className="col-lg-5 offset-lg-1">
                    <h1 className="banner-head">parent</h1>
                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna.</p>
                    <div className="pt-3">
                    <a href="#" target='_blank' rel="noreferrer" className="my-btn center">Learn more</a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="banner-image">
                    <img src={ParentBanner} className="banner-image-round img-fluid" width="500"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="content2">
              <div className="row">
                  <div className="col-lg-5 offset-lg-1">
                    <h1 className="banner-head">Teacher</h1>
                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna.</p>
                    <div className="pt-3">
                    <a href="#" target='_blank' rel="noreferrer" className="my-btn center">Learn more</a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="banner-image">
                    <img src={TeacherBanner} className="banner-image-round img-fluid" width="450"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="content3">
              <div className="row">
                  <div className="col-lg-5 offset-lg-1">
                    <h1 className="banner-head">Pre-school</h1>
                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna et ipsum labore excepteur anim magna.</p>
                    <p>Ex esse exercitation mollit laboris et ipsum labore excepteur anim magna.</p>
                    <div className="pt-3">
                    <a href="#" target='_blank' rel="noreferrer" className="my-btn center">Learn more</a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="banner-image">
                    <img src={PreSchoolBanner} className="banner-image-round img-fluid" width="500"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
      </section>


      <div class="scroll_progress_wrap">
            <div class="container" id="scroll_div1">
                <div class="scroll_progress_head">Scroll down to know more</div>
                <div class="scroll_progress_bar">
                    <div class="indicator">
                      <img id="playing" src={kidsplay} width="150" className="indicator-img img-fluid"/>
                      <img id="walking" src={kidsBall} width="60" className="indicator-img img-fluid"/>
                      </div>
                </div>
            </div>
        </div>



      {/* <section className="about pt-2 pb-5" id="about">
      <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="about-text">
              <h2>A Few Words About Me</h2>
              <p className="text-secondary pt-4">My name is Dr. Rukmaji Prakash, I am a Neurosurgeon  and has an experience of 10 years in this field. I Had completed MBBS from Maharashtra University of Health Sciences, Nashik in 2009, MS - General Surgery from Dr. B.R. Ambedkar Open University, Hyderabad in 2013 and MCh - Neuro Surgery from Sri Venkateshwara Institute of Medical Sciences in 2019.
              <br/>Some of the services provided by the me are: Trigeminal Neuralgia, Brain & Spine Tumors, Cervical & Lumbar Disc Surgeries, Head Injury and Epilepsy surgery etc.</p>
              <a href="#contact" className="btn mainbtn mt-4">Contact Now</a>
              </div>
            </div>
            <div className="col-lg-6  offset-lg-1 col-md-12">
              <img src={about} className="img-fluid" alt="about-img"/>
            </div>
        </div>
      </div>
      </section> */}
  
    </>
  );

  

}

export default HomeOld;
