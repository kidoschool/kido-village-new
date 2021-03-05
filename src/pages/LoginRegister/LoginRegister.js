import React, { useState, useContext } from 'react';
import { signInWithGoogle,  signInWithFacebook} from '../../config/Fire';
import { AuthContext } from '../../context/Auth';
import { withRouter, Redirect, Link } from 'react-router-dom';
import './LoginRegister.css';
import $ from 'jquery';


function LoginRegister(props) {

  const { currentUser } = useContext(AuthContext);

  const teachersInfo = JSON.parse(localStorage.getItem("teachersPodData"));

if (currentUser) {
  // console.log(currentUser);
  var sel_teach = props.match.params.tname;
  var red_lnk = "";
  $.each(teachersInfo, function (k, v) {
    if(v.name == sel_teach){
      red_lnk = "/teacher-info/"+encodeURI(sel_teach);
    }
  });
  if(red_lnk.length){
    return <Redirect to={red_lnk} />
  }

var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('api', 'save_parent');
data.append('data', '{\n    "name":"'+currentUser.displayName+'",\n    "email":"'+currentUser.email+'",\n    "profile_email":"'+currentUser.email+'",,\n    "google_id":"'+currentUser.uid+'",\n}');

var config = {
  method: 'post',
  url: 'https://shop.kidovillage.com/kvshop_api/api.php',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}





  return(
    <section className="What-we-do">
    <div className="authentication">
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-5 col-lg-5 text-center border shadow p-5">
            <h2 className="title pb-3">Sign Up</h2>
            <div className="login-buttons">
              <button class="btn btn-lg btn-google btn-block text-uppercase btn-outline" onClick={signInWithGoogle}>
              <img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</button> 
            </div>
            <div className="or py-3">
              <h3 className="divider"><span>or</span></h3>
            </div>
              <div className="login-buttons">
              <button class="btn btn-lg btn-google btn-block text-uppercase btn-outline" onClick={signInWithFacebook}>
              <img src="https://img.icons8.com/color/16/000000/facebook"/> Signup Using Facebook</button> 
              </div>
            </div>
        </div>
    </div>
    </div>
    </section>
  );

}

export default withRouter(LoginRegister);
