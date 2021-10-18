import React, {useState, useEffect} from 'react';
import $ from "jquery";
import validate from 'jquery-validation';
import { useHistory } from "react-router-dom";
import HubspotForm from 'react-hubspot-form';
import DatePicker from "react-datepicker";
import cities from "../pages/Parent/cities.json";
import "react-datepicker/dist/react-datepicker.css";

function FormEnquiry(props) {

      const latlongListing = JSON.parse(localStorage.getItem("latlongList"));

       const [selectCity, setSelectCity] = useState("");
       const [cityData, setCityData] = useState("");

       const [startDate, setStartDate] = useState("");

       const history = useHistory();

       const handleSelectStateChange = (event)=>{
         var st_id = event.target.value;
         setCityData(cities[st_id]);
         $("#city").val(0); 
       }

       const handleSelectCityChange = (event)=>{
         setSelectCity(event.target.value)
       }

       $('#upload_cv').on('change',function(){
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        var current_path = fileName.split("\\").pop();
        $(this).next('.custom-file-label').html(current_path);
    })

        $('#upload_cv').on('change',function(){
          //get the file name
          var fileName = $(this).val();
          //replace the "Choose a file" label
          var current_path = fileName.split("\\").pop();
          $(this).next('.custom-file-label').html(current_path);
      })

      function change_off(form) {

        var hsform_wait_ifrm = setInterval(function(){
          var hubid = "e32ed3ea-9c25-480e-8553-faa1012a043a";
          var hubiframe = $("#hubspot-form").find("iframe").contents();
          if((hubiframe.find("#firstname-"+hubid)).length) {
              // console.log(hubiframe.find("body").html());
              hubiframe.find("body script").remove();
              // console.log(hubiframe.find("body script").remove());
              $("#hs_transit").append(hubiframe.find("body").html());
              $("#hubspot-form").find("iframe").remove();
              clearInterval(hsform_wait_ifrm);
          }
        }, 300);
      }

      function formSubmit(event){
              event.stopPropagation();
              event.preventDefault();
              var form = new FormData();
              form.append("api", "capture_teacher_lead");

              if(latlongListing[$("#area").val()]){
                var lat = latlongListing[$("#area").val()].lat;
                var long = latlongListing[$("#area").val()].long;
              }else{
                var lat = "0.00";
                var long = "0.00";
              }

              var hubid = "e32ed3ea-9c25-480e-8553-faa1012a043a";
              var name = $("#name").val();
              var email = $("#email").val();
              var contact = $("#contact").val();
              var date_of_birth = $("#date_of_birth").val();
              var state = $("#state option:selected").text();
              var city = $("#city option:selected").text();
              var area = $("#area").val();
              var education_qualification = $("#education_qualification").val();
              var work_experience = $("#work_experience").val();
              
              var hubid = "e32ed3ea-9c25-480e-8553-faa1012a043a";

              var hubiframe = $("#hs_transit");
              $("#firstname-"+hubid).val(name);
              $("#email-"+hubid).val(email);
              $("#mobilephone-"+hubid).val(contact);
              $("#date_of_birth-"+hubid).val(date_of_birth);
              $("#state-"+hubid).val(state);
              $("#city-"+hubid).val(city);
              $("#zip-"+hubid).val(area);
              $("#education_qualification-"+hubid).val(education_qualification);
              $("#work_experience-"+hubid).val(work_experience);
      
              form.append("name", name);
              form.append("email", email);
              form.append("contact", contact);
              form.append("date_of_birth", date_of_birth);
              form.append("state", state);
              form.append("city", city);
              form.append("area", area);
              form.append("education_qualification", education_qualification);
              form.append("work_experience", work_experience);
              form.append("location_type", "APPROXIMATE");
              form.append("country", "1");
              form.append("latitude", lat);
              form.append("longitude", long);
              form.append("source", "Website");
      
              var settings = {
              "url": "https://shop.kidovillage.com/kvshop_api/api.php",
              "method": "POST",
              "timeout": 0,
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form,
              success: function (response) {

                var resp = JSON.parse(response);

                if(resp.Status == "Success"){
                  localStorage.setItem('RegisterTeachersData', JSON.stringify({"name" : name, "email" : email, "contact" : contact }));
                  hubiframe.find(".hs-button").trigger("click");
                  setTimeout(function(){ history.push('/thank-you'); }, 2000);
                }
                  console.log(response);
              },
              error: function (xhr, ajaxOptions, thrownError) {
                  alert(xhr.status);
                  alert(thrownError);
              }
              };
      
              $.ajax(settings);
      
          }


          $(document).ready(function() {
  
            $("#e32ed3ea-9c25-480e-8553-faa1012a043a").validate({
                      rules:{
                          name:{
                              required:true,
                              minlength: 2
                          },
                          email: {
                              required: true,
                              email: true
                           },
                           contact: { 
                              required:true,
                              digits: true,
                              minlength: 10,
                              maxlength: 10 
                           }, 
                           date_of_birth:{
                            required:true
                           }, 
                           state:{
                            required:true
                           }, 
                           city:{
                            required:true
                           }, 
                           area:{
                            required:true
                           },
                           education_qualification:{
                            required:true
                           },
                           work_experience:{
                            required:true
                           }
                      },
          
                      messages:{
                        name: {
                          required: "This field is required",
                          minlength: "Please enter atleast two character"
                        },
                        email: {
                           required: "This field is required",
                           email: "Please enter a valid email id",
                        },
                        contact: { 
                          required: "This field is required",
                          digits: "Please enter a valid mobile number",
                          minlength: "Please enter 10 digits only",
                          maxlength: "Please enter 10 digits only" 
                        },
                        date_of_birth: {
                            required: "This field is required",
                          },
                          state: {
                            required: "This field is required",
                          },
                          city: {
                            required: "This field is required",
                          },
                          area: {
                            required: "This field is required",
                          },
                          education_qualification: {
                            required: "This field is required",
                          },
                          work_experience: {
                            required: "This field is required",
                          }
                      }
                  });
            });


    return(
        <>
            
            <form className="form" id="e32ed3ea-9c25-480e-8553-faa1012a043a">
            <div className="form-group">
            <label for="name">Name <tm className="text-danger">*</tm></label>
            <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
            </div>
            <div className="form-group">
            <label for="email">Email <tm className="text-danger">*</tm></label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
            <label for="contact">Mobile Number <tm className="text-danger">*</tm></label>
            <input type="text" className="form-control" name="contact" id="contact" placeholder="Phone No"/>
            </div>
            <div className="form-group">
            <label for="date_of_birth">Date of Birth <tm className="text-danger">*</tm></label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)}  
              dateFormat="yyyy-MM-dd"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
             className="form-control" name="date_of_birth" id="date_of_birth"/>
            </div>
            <div className="form-group">
            <label for="stateselect">Select State <tm className="text-danger">*</tm></label>
            <select name="state" className="form-control" id="state" 
            onChange={handleSelectStateChange}>
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
        <div className="form-group">
            <label for="inputEmail4">Select City <tm className="text-danger">*</tm></label>
            <select name="city" className="form-control" id="city" 
            value={selectCity}
            onChange={handleSelectCityChange}>
                <option value="">Select any state</option>
                {Object.entries(cityData).map((item) => {
                    return(
                <option value={item[1].id}>{item[1].name}</option>
                    )
                    })}
            </select>
        </div>
        <div className="form-group">
            <label for="area">Pincode <tm className="text-danger">*</tm></label>
            <input type="text" className="form-control" name="area" id="area" placeholder="Enter Area"/>
        </div>
        <div className="form-group">
            <label for="education_qualification">Education Qualification <tm className="text-danger">*</tm></label>
            <select name="education_qualification" className="form-control" id="education_qualification">
                <option value="">Select Your Qualification</option>
                <option value="Graduate">Graduate</option> 
                <option value="Post Graduate">Post Graduate</option>
                <option value="NTT / ECCE">NTT / ECCE</option>
                <option value="Under Graduate">Under Graduate</option>
            </select>
        </div>
        <div className="form-group">
            <label for="work_experience">Work Experience <tm className="text-danger">*</tm></label>
            <select name="work_experience" className="form-control" id="work_experience">
                <option value="">Select Your work experience</option>
                <option value="Fresher">Fresher</option> 
                <option value="Graduate (Non-teacher)">Graduate (Non-teacher)</option>
                <option value="Teacher (1 to 3 years)">Teacher (1 to 3 years)</option>
                <option value="Teacher (Over 3 years)">Teacher (Over 3 years)</option>
            </select>
        </div>
        

    <button type="button" onClick={formSubmit} name="submit" className="btn my-btn">Submit</button>
    </form>
            <div id="hubspot-form" className="visible">
              <HubspotForm
                portalId='9397213'
                formId='e32ed3ea-9c25-480e-8553-faa1012a043a'
                onSubmit={() => console.log('Submit!')}
                onReady={(form)=>change_off(form)}
                loading={<div>Loading...</div>}
                />
          </div> 
      
            </>
    )
}


export default FormEnquiry;