import React, { useState, useContext } from 'react';
import { signInWithGoogle,  signInWithFacebook} from '../../config/Fire';
import { AuthContext } from '../../context/Auth';
import { withRouter, Redirect, Link } from 'react-router-dom';
import './LoginRegister.css';


function LoginRegister(props) {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }


  return(
    <section className="What-we-do">
    <div className="authentication">
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6">
            {/* <h1 className="title">KIDO SCHOOL DASHBOARD</h1> */}
            <div className="login-buttons">
                <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Google</span>
              </button>
              </div>
              <p>--- or ---- </p>
              <div className="login-buttons">
                <button className="login-provider-button" onClick={signInWithFacebook}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Facebook</span>
              </button>
              </div>
            </div>
        </div>
    </div>
    </div>
    </section>
  );

}

export default withRouter(LoginRegister);
