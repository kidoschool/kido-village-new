import React from 'react';
import {withRouter, NavLink} from "react-router-dom";
import logo from '../../assets/kido-village-logo1.png';
import $ from "jquery";
import { isMobile } from "react-device-detect";


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

    if(isMobile){
      $(".nav-link,.dropdown-item").click(function(){
        if(!$(this).hasClass("dropdown-toggle")){
          $("#navcolbtn").click();
        }
      });
    }


    return(
      <>
       <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
          <NavLink className="navbar-brand pl-4" className="nav-link" to="/"><img src={logo} alt="logo" width="120"/></NavLink>
          <button className="navbar-toggler" id="navcolbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item active pl-4">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/parent">Parents</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/pods">Pods</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/centa">Centa-Accreditation</NavLink>
              </li>
              <li className="nav-item pl-4">
                <a className="nav-link" href="/kido-village-faq/faq.html">FAQs</a>
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
