import React, {useState} from 'react';
import $ from "jquery";
import validate from 'jquery-validation';
import { withRouter, useHistory } from "react-router-dom";

function PreSchoolForm(props) {

      const latlongListing = JSON.parse(localStorage.getItem("latlongList"));

       //   const [selectState, setSelectState] = useState("");
       const [selectCity, setSelectCity] = useState("");
       const [cityData, setCityData] = useState("");
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
                       state:{
                        required:true
                       }, 
                       city:{
                        required:true
                       }, 
                       area:{
                        required:true
                       },
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
                      state: {
                        required: "This field is required",
                      },
                      city: {
                        required: "This field is required",
                      },
                      area: {
                        required: "This field is required",
                      },
      
                  }
              });
        });


            const formSubmit = (event)=>{
              var data;
              
              event.stopPropagation();
              event.preventDefault();
              var form = new FormData();
              form.append("api", "upload_file");

              if(latlongListing[$("#area").val()]){
                var lat = latlongListing[$("#area").val()].lat;
                var long = latlongListing[$("#area").val()].long;
              }else{
                var lat = "0.00";
                var long = "0.00";
              }

              form.append("name", $("#name").val());
              form.append("email", $("#email").val());
              form.append("contact", $("#contact").val());
              form.append("state", $("#state").val());
              form.append("city", $("#city").val());
              form.append("position_of_teacher", "Preschool");
              form.append("area", $("#area").val());
              form.append("location_type", "APPROXIMATE");
              form.append("country", "1");
              form.append("latitude", lat);
              form.append("longitude", long);


      
              var settings = {
              "url": "https://shop.kidovillage.com/kvshop_api/api.php",
              "method": "POST",
              "timeout": 0,
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form,
              success: function (response) {
                  // window.location = "thankyou-msg.html";
                  history.push('/thank-you');
                  // alert("completed");
              },
              error: function (xhr, ajaxOptions, thrownError) {
                  alert(xhr.status);
                  alert(thrownError);
              }
              };
      
              $.ajax(settings);
      
          }
    


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
        
    <button type="submit" name="submit" className="my-btn">Submit</button>
    </form>	     

            </>
    )
}


export default PreSchoolForm;