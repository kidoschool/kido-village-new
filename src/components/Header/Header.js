import React from 'react';
import {withRouter, NavLink} from "react-router-dom";
import logo from '../../assets/kido-village-logo.png';
import $ from "jquery";


function Header(props){

  $(document).ready(function () { 
    $("ul.navbar-nav > li > a").click( 
      function (e) { 
        $("ul.navbar-nav > li").removeClass( 
          "active"); 
        $("ul.navbar-nav > li > a").css( 
          "borderBottom", ""); 

        $(this).addClass("active"); 
        $(this).css('borderBottom', '3px solid white'); 
    }); 
}); 

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
              <li className="nav-item active pl-4">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/parent">Parents</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/teacher">Teachers</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/Pre-school">Pre-School</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/home2">FAQs</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      </>

    );

}

export default withRouter(Header);
