import React from 'react';
import {withRouter, NavLink} from "react-router-dom";
import logo from '../../assets/kido-village-logo.png'


function Header(props){

    return(
      <>
       <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
          <NavLink className="navbar-brand pl-4" to="/"><img src={logo} alt="logo" width="110"/></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              {/* <li className="nav-item">
                <NavLink className="nav-link pl-4" activeclassname="selected" to="/home2">About</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/parent">Parents</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/teacher">Teachers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/Pre-school">Pre-School</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/home2">FAQs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      </>

    );

}

export default withRouter(Header);
