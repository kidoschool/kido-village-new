import React, { useState, useContext } from 'react';
import $ from "jquery";
import Maps from "../../components/Map/Maps";
import { AuthContext } from '../../context/Auth';
import validate from 'jquery-validation';
import tProfile from '../../assets/t-pod1.jpg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function TeachersInfo(props) {
          
    const { currentUser } = useContext(AuthContext);
    // console.log(JSON.stringify(currentUser));

  const teachersInfo = JSON.parse(localStorage.getItem("teachersPodData"));

  const [startDate, setStartDate] = useState("");


  var sel_teach = props.match.params.tinfo;


  var selectedTeacher = {};
  $.each(teachersInfo, function (k, v) {
    if(sel_teach == v.name){
      return selectedTeacher = v;
    }
  });
  console.log(selectedTeacher);

  function tformSubmit(e) {
    e.preventDefault();
}

$(document).ready(function() {
  
    $("#validateteacherinfoform").validate({
            rules:{
              child_name:{
                    required:true,
                    minlength: 2
                },
                child_dob: {
                    required: true,
                 },
                 phone: { 
                    required:true,
                    digits: true,
                    minlength: 10,
                    maxlength: 10 
                 },  
            },

            messages:{
              child_name: {
                required: "This field is required",
                minlength: "Please enter atleast two character"
              },
              child_dob: {
                 required: "This field is required",
              },
              phone: { 
                required: "This field is required",
                digits: "Please enter a valid mobile number",
                minlength: "Please enter 10 digits only",
                maxlength: "Please enter 10 digits only" 
              },

            }
        });
  });


var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('api', 'save_parent');
var provider_name = currentUser.providerData[0].providerId == "facebook.com" ? "facebook_id" : "google_id";
data.append('data', '{\n    "name":"'+currentUser.displayName+'",\n    "email":"'+currentUser.email+'",\n    "profile_email":"'+currentUser.email+'",\n    "'+provider_name+'":"'+currentUser.providerData[0].uid+'"\n}');

var config = {
  method: 'post',
  url: 'https://shop.kidovillage.com/kvshop_api/api.php',
  headers: {},
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



    return(
        <>

        <section className="main_banner">
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                    {/* <li data-target="#carouselExampleControls" data-slide-to="2"></li> */}
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <div className="overlay1"></div> */}
                        <img src={"https://kidovillage.com/"+selectedTeacher.place_image_1} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            {/* <h1 className="banner-head1 text-white">Give your child the best in early education and care</h1> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <div className="overlay1"></div> */}
                        <img src={"https://kidovillage.com/"+selectedTeacher.place_image_2} className="parent-banner-img d-block w-100 img-fluid" alt="Responsive image"/>
                        <div className="carousel-caption d-md-block">
                            {/* <h1 className="banner-head1 text-white">Give your child the best in early education and care</h1> */}
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

        <section className="about-teacher py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                <h1 className="title">{sel_teach}'s Kido Village {selectedTeacher.position_of_teacher === "" ? "Pod" : selectedTeacher.position_of_teacher}</h1>
                {/* <div className="t-profile-img py-4">
                    <img src={"https://kidovillage.com/"+selectedTeacher.upload_image} width="200" className="t-profile img-fluid" alt="teacher-profile"/>
                </div> */}
                    <p>{selectedTeacher.about_teacher}</p>
                    <i>{selectedTeacher.email}</i>
                </div>
            </div>
        </div>
        </section>

        <section className="schedule-tour-form py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                <h1 className="title pb-4">Schedule a tour</h1>
                    <div className="col-lg-10 border shadow bg-white p-5">
                    <form onSubmit={tformSubmit} className="teacher-contact-form" id="validateteacherinfoform">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputEmail4">Name</label>
                            <input type="text" class="form-control" name="name" id="name" value={currentUser.displayName} placeholder="Enter your name"/>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="phone">Contact Number</label>
                            <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter your contact Number" required/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="email">Email Id</label>
                            <input type="text" class="form-control" name="email" id="email" value={currentUser.email} placeholder="Enter your email address"/>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="child_name">Child Name</label>
                            <input type="text" class="form-control" name="child_name" id="child_name" placeholder="Enter your child name"/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="child_dob">Child's DOB</label>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)}  className="form-control" name="child_dob" id="child_dob"/>
                            {/* <input type="date" class="form-control" name="child_dob" id="child_dob" /> */}
                            </div>
                            <div class="form-group col-md-6">
                            <label for="hours_perday">Hour's per day</label>
                                <select name="hours_perday" class="form-control">
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
								</select>
                            </div>
                        </div>

                        <button type="submit" class="btn my-btn center">Schedule a tour</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


        <section className="con-map py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                    <h1 className="title">Contact</h1>
                    <p><b>Email:</b><i>{selectedTeacher.email}</i></p>
                    <Maps map_centre={{lat: selectedTeacher.latitude,lng: selectedTeacher.longitude}} teacherContents={[selectedTeacher]} map_zoom={13}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}


export default TeachersInfo;


