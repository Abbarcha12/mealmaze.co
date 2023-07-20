import React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Logo from "../assest/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css"; // Import your custom CSS file

const Header = () => {
  return (
    <Container className='header'>
      <div className='logo-container'>
        <img src={Logo} alt='Logo' className='logoPage' />
      </div>
      <div className='Links'>
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
          to='section4'
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
      <div>
        <Button href='/login' className='Homebtn'>
          Login
        </Button>
        <Button href='/sign' className='Homebtn'>
          Sign Up
        </Button>
      </div>
    </Container>
  );
};

export default Header;