import React, {useState, useEffect} from 'react';
import $ from "jquery";
import validate from 'jquery-validation';
import { withRouter, useHistory } from "react-router-dom";
import HubspotForm from 'react-hubspot-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormEnquiry(props) {

      const latlongListing = JSON.parse(localStorage.getItem("latlongList"));
      // console.log(latlongListing["400055"]);

       //   const [selectState, setSelectState] = useState("");
       const [selectCity, setSelectCity] = useState("");
       const [cityData, setCityData] = useState("");

       const [startDate, setStartDate] = useState("");

       const history = useHistory();

       const handleSelectStateChange = (event)=>{
         // setSelectState(event.target.value)
         var st_id = event.target.value;

         var axios = require('axios');
         var FormData = require('form-data');
         var data = new FormData();
         data.append('api', 'get_city_by_state');
         data.append('filter', '{"state_id":'+st_id+'}');

         var config = {
         method: 'post',
         url: 'https://shop.kidovillage.com/kvshop_api/api.php',
         headers: { 
            
         },
         data : data
         };

             axios(config)
             .then((response) => {
                 setCityData(response.data);
                 // console.log(response.data);
             })
             .catch((error) => console.log(error));  
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
              // $("#hs_transit").append(`<div class="hbspt-form" id="hbspt-form-1629360041534-9791445167"><form novalidate="" accept-charset="UTF-8" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/9397213/e32ed3ea-9c25-480e-8553-faa1012a043a" enctype="multipart/form-data" id="hsForm_e32ed3ea-9c25-480e-8553-faa1012a043a" method="POST" class="hs-form stacked hs-custom-style hs-form-private hsForm_e32ed3ea-9c25-480e-8553-faa1012a043a hs-form-e32ed3ea-9c25-480e-8553-faa1012a043a hs-form-e32ed3ea-9c25-480e-8553-faa1012a043a_92a27f45-1c5a-46a4-a75d-4359a1b52ba2" data-form-id="e32ed3ea-9c25-480e-8553-faa1012a043a" data-portal-id="9397213" target="target_iframe_e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0"><div class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$0"><label id="label-firstname-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your First name" for="firstname-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$0.0"><span data-reactid=".hbspt-forms-0.1:$0.0.0">First name</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$0.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$0.$firstname"><input id="firstname-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input" type="text" name="firstname" value="" placeholder="" autocomplete="given-name" data-reactid=".hbspt-forms-0.1:$0.$firstname.0" inputmode="text"></div></div><div class="hs_email hs-email hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$1"><label id="label-email-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your Email" for="email-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$1.0"><span data-reactid=".hbspt-forms-0.1:$1.0.0">Email</span><span class="hs-form-required" data-reactid=".hbspt-forms-0.1:$1.0.1">*</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$1.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$1.$email"><input id="email-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input" type="email" name="email" required="" placeholder="" value="" autocomplete="email" data-reactid=".hbspt-forms-0.1:$1.$email.0" inputmode="email"></div></div><div class="hs_mobilephone hs-mobilephone hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$2"><label id="label-mobilephone-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your Mobile phone number" for="mobilephone-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$2.0"><span data-reactid=".hbspt-forms-0.1:$2.0.0">Mobile phone number</span><span class="hs-form-required" data-reactid=".hbspt-forms-0.1:$2.0.1">*</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$2.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$2.$mobilephone"><input id="mobilephone-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input" type="tel" name="mobilephone" required="" value="" placeholder="" autocomplete="mobile" data-reactid=".hbspt-forms-0.1:$2.$mobilephone.0" inputmode="tel"></div></div><div class="hs_date_of_birth hs-date_of_birth hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$3"><label id="label-date_of_birth-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your Date of birth" for="date_of_birth-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$3.0"><span data-reactid=".hbspt-forms-0.1:$3.0.0">Date of birth</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$3.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$3.$date_of_birth"><input id="date_of_birth-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input" type="text" name="date_of_birth" value="" placeholder="" data-reactid=".hbspt-forms-0.1:$3.$date_of_birth.0" inputmode="text"></div></div><div class="hs_state hs-state hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$4"><label id="label-state-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your State/Region" for="state-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$4.0"><span data-reactid=".hbspt-forms-0.1:$4.0.0">State/Region</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$4.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$4.$state"><input id="state-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input" type="text" name="state" value="" placeholder="" autocomplete="address-level1" data-reactid=".hbspt-forms-0.1:$4.$state.0" inputmode="text"></div></div><div class="hs_city hs-city hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$5"><label id="label-city-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your City" for="city-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$5.0"><span data-reactid=".hbspt-forms-0.1:$5.0.0">City</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$5.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$5.$city"><input id="city-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input" type="text" name="city" value="" placeholder="" autocomplete="address-level2" data-reactid=".hbspt-forms-0.1:$5.$city.0" inputmode="text"></div></div><div class="hs_zip hs-zip hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$6"><label id="label-zip-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your Postal code" for="zip-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$6.0"><span data-reactid=".hbspt-forms-0.1:$6.0.0">Postal code</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$6.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$6.$zip"><input id="zip-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input" type="text" name="zip" value="" placeholder="" data-reactid=".hbspt-forms-0.1:$6.$zip.0" inputmode="text"></div></div><div class="hs_education_qualification hs-education_qualification hs-fieldtype-select field hs-form-field" data-reactid=".hbspt-forms-0.1:$7"><label id="label-education_qualification-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your Education Qualification" for="education_qualification-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$7.0"><span data-reactid=".hbspt-forms-0.1:$7.0.0">Education Qualification</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$7.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$7.$education_qualification"><select id="education_qualification-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input is-placeholder" name="education_qualification" data-reactid=".hbspt-forms-0.1:$7.$education_qualification.0"><option value="" disabled="" selected="" data-reactid=".hbspt-forms-0.1:$7.$education_qualification.0.0">Please Select</option><option value="Graduate" data-reactid=".hbspt-forms-0.1:$7.$education_qualification.0.1:$Graduate">Graduate</option><option value="Post Graduate" data-reactid=".hbspt-forms-0.1:$7.$education_qualification.0.1:$Post Graduate">Post Graduate</option><option value="NTT / ECCE" data-reactid=".hbspt-forms-0.1:$7.$education_qualification.0.1:$NTT / ECCE">NTT / ECCE</option><option value="Under Graduate" data-reactid=".hbspt-forms-0.1:$7.$education_qualification.0.1:$Under Graduate">Under Graduate</option></select></div></div><div class="hs_work_experience hs-work_experience hs-fieldtype-select field hs-form-field" data-reactid=".hbspt-forms-0.1:$8"><label id="label-work_experience-e32ed3ea-9c25-480e-8553-faa1012a043a" class="" placeholder="Enter your Work Experience" for="work_experience-e32ed3ea-9c25-480e-8553-faa1012a043a" data-reactid=".hbspt-forms-0.1:$8.0"><span data-reactid=".hbspt-forms-0.1:$8.0.0">Work Experience</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$8.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$8.$work_experience"><select id="work_experience-e32ed3ea-9c25-480e-8553-faa1012a043a" class="hs-input is-placeholder" name="work_experience" data-reactid=".hbspt-forms-0.1:$8.$work_experience.0"><option value="" disabled="" selected="" data-reactid=".hbspt-forms-0.1:$8.$work_experience.0.0">Please Select</option><option value="Fresher" data-reactid=".hbspt-forms-0.1:$8.$work_experience.0.1:$Fresher">Fresher</option><option value="Graduate (Non-teacher)" data-reactid=".hbspt-forms-0.1:$8.$work_experience.0.1:$Graduate (Non-teacher)">Graduate (Non-teacher)</option><option value="Teacher (1 to 3 years)" data-reactid=".hbspt-forms-0.1:$8.$work_experience.0.1:$Teacher (1 to 3 years)">Teacher (1 to 3 years)</option><option value="Teacher (Over 3 years)" data-reactid=".hbspt-forms-0.1:$8.$work_experience.0.1:$Teacher (Over 3 years)">Teacher (Over 3 years)</option></select></div></div><noscript data-reactid=".hbspt-forms-0.2"></noscript><div class="hs_submit hs-submit" data-reactid=".hbspt-forms-0.5"><div class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.5.0"></div><div class="actions" data-reactid=".hbspt-forms-0.5.1"><input type="submit" value="Submit" class="hs-button primary large" data-reactid=".hbspt-forms-0.5.1.0"></div></div><noscript data-reactid=".hbspt-forms-0.6"></noscript><input name="hs_context" type="hidden" value="{&quot;rumScriptExecuteTime&quot;:1519.800000000745,&quot;rumServiceResponseTime&quot;:1808.199999999255,&quot;rumFormRenderTime&quot;:9.399999998509884,&quot;rumTotalRenderTime&quot;:161.79999999701977,&quot;rumTotalRequestTime&quot;:283.30000000074506,&quot;lang&quot;:&quot;en&quot;,&quot;embedType&quot;:&quot;REGULAR&quot;,&quot;embedAtTimestamp&quot;:&quot;1629360041232&quot;,&quot;formDefinitionUpdatedAt&quot;:&quot;1629176307025&quot;,&quot;pageUrl&quot;:&quot;http://localhost:3000/pods&quot;,&quot;pageTitle&quot;:&quot;kido-village&quot;,&quot;source&quot;:&quot;FormsNext-static-5.358&quot;,&quot;timestamp&quot;:1629360041235,&quot;userAgent&quot;:&quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36&quot;,&quot;referrer&quot;:&quot;http://localhost:3000/&quot;,&quot;originalEmbedContext&quot;:{&quot;portalId&quot;:&quot;9397213&quot;,&quot;formId&quot;:&quot;e32ed3ea-9c25-480e-8553-faa1012a043a&quot;,&quot;target&quot;:&quot;#hbspt-form-1629360041534-9791445167&quot;,&quot;shellId&quot;:0,&quot;shell&quot;:true,&quot;pageUrl&quot;:&quot;http://localhost:3000/pods&quot;,&quot;pageTitle&quot;:&quot;kido-village&quot;},&quot;formTarget&quot;:&quot;#hbspt-form-1629360041534-9791445167&quot;,&quot;correlationId&quot;:&quot;e7708439-9039-4b7e-a342-a8fb3e5a9d46&quot;,&quot;useRecaptchaEnterprise&quot;:true,&quot;isIframe&quot;:true}" data-reactid=".hbspt-forms-0.7"><iframe name="target_iframe_e32ed3ea-9c25-480e-8553-faa1012a043a" style="display:none;" data-reactid=".hbspt-forms-0.8"></iframe></form></div>`);
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

              // var hubiframe = $("#hubspot-form").find("iframe").contents();
              // var hubiframe = $("#hs_transit");
              // hubiframe.find("#firstname-"+hubid).val(name);
              // hubiframe.find("#email-"+hubid).val(email);
              // hubiframe.find("#mobilephone-"+hubid).val(contact);
              // hubiframe.find("#date_of_birth-"+hubid).val(date_of_birth);
              // hubiframe.find("#state-"+hubid).val($("#state option:selected").text());
              // hubiframe.find("#city-"+hubid).val($("#city option:selected").text());
              // hubiframe.find("#zip-"+hubid).val(area);
              // hubiframe.find("#education_qualification-"+hubid).val(education_qualification);
              // hubiframe.find("#work_experience-"+hubid).val(work_experience);

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
                  hubiframe.find(".hs-button").trigger("click");
                }
                  history.push('/thank-you');
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
  
            $("#validatetsignup").validate({
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
            
            <form onSubmit={formSubmit} className="form" id="validatetsignup">
            <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
            </div>
            <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
            <label for="contact">Mobile Number</label>
            <input type="text" className="form-control" name="contact" id="contact" placeholder="Phone No"/>
            </div>
            <div className="form-group">
            <label for="date_of_birth">Date of Birth</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)}  
              dateFormat="yyyy-MM-dd"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
             className="form-control" name="date_of_birth" id="date_of_birth"/>
            </div>
            <div className="form-group">
            <label for="stateselect">Select State</label>
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
            <label for="inputEmail4">Select City</label>
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
            <label for="area">Pincode</label>
            <input type="text" className="form-control" name="area" id="area" placeholder="Enter Area"/>
        </div>
        <div className="form-group">
            <label for="education_qualification">Education Qualification</label>
            <select name="education_qualification" className="form-control" id="education_qualification">
                <option value="">Select Your Qualification</option>
                <option value="Graduate">Graduate</option> 
                <option value="Post Graduate">Post Graduate</option>
                <option value="NTT / ECCE">NTT / ECCE</option>
                <option value="Under Graduate">Under Graduate</option>
            </select>
        </div>
        <div className="form-group">
            <label for="work_experience">Work Experience</label>
            <select name="work_experience" className="form-control" id="work_experience">
                <option value="">Select Your work experience</option>
                <option value="Fresher">Fresher</option> 
                <option value="Graduate (Non-teacher)">Graduate (Non-teacher)</option>
                <option value="Teacher (1 to 3 years)">Teacher (1 to 3 years)</option>
                <option value="Teacher (Over 3 years)">Teacher (Over 3 years)</option>
            </select>
        </div>
        

    <button type="submit" name="submit" className="btn my-btn">Submit</button>
    </form>
            <div id="hubspot-form" className="visible">
            {/* <button type="button" name="submit" onClick={test_click} className="btn my-btn">Test lick</button> */}
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