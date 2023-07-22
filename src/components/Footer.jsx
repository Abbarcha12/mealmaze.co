import React, { useState } from "react";
import Logo from "../assest/logo.png";
import "./Header.css"; // Import your custom CSS file
import { Link, animateScroll as scroll } from "react-scroll";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo-container'>
        <img src={Logo} alt='Logo' className='logoPage' />
      </div>
      <div className='Link1'>
        <Link
          to='section1'
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          className='link'>
          Home
        </Link>
        <Link
          to='section2'
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          className='link'>
          Features
        </Link>
        <Link
          to='section3'
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          className='link'>
          Pricing
        </Link>
        <Link
          to='section7'
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          className='link'>
          FAQ
        </Link>
        <Link
          to='section5'
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          className='link'>
          Contact
        </Link>
        <Link
          activeClass='active'
          to='section6'
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          className='link'>
          Become an Affiliate
        </Link>
      </div>
    </div>
  );
};

export default Footer;
