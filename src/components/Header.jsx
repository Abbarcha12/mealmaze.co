import React, { useState,useEffect  } from "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Logo from "../assest/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css"; // Import your custom CSS file

const Header = () => {
  const [Id, setID] = useState(2);
  const [toggle, setToggle] = useState(false);
  const [cardId, setCardId] = useState(2);
  const handleToggle = (id) => {
    setID(id);
  };
  const handleClick = (id) => {
    setCardId(id);
  };
  const handleMobileToggle = () => {
    setToggle(prevMode => !prevMode);
  };

  return (
    <Container className='header'>
      <Box className='logo-container'>
        <img src={Logo} alt='Logo' className='logoPage' />
      </Box>
      {/* Large Screen Mobile Menu */}
      <Box
        className='Links'
        sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}>
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
      </Box>
      <Box
        sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}>
        <Button
          href='/login'
          className={Id === 1 ? "Homebtn1" : "Homebtn"}
          onClick={() => handleToggle(1)}>
          Login
        </Button>
        <Button
          href='/sign'
          className={Id === 2 ? "Homebtn1" : "Homebtn"}
          onClick={() => handleToggle(2)}>
          Sign Up
        </Button>
      </Box>
      <Box className='toggleHeader' onClick={handleMobileToggle}>
        <Box>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <rect
              x='1.00098'
              y='5.00116'
              width='22'
              height='2'
              rx='1'
              fill='#1B1E28'
            />
            <rect
              x='1.00098'
              y='11.0012'
              width='22'
              height='2'
              rx='1'
              fill='#1B1E28'
            />
            <rect
              x='1.00098'
              y='17.0019'
              width='22'
              height='2'
              rx='1'
              fill='#1B1E28'
            />
          </svg>
        </Box>
      </Box>
      {/* small screen mobile menu */}
      {toggle && (
        <Box className='MobileHeader'>
          <Box display={"flex"} justifyContent={"space-between"} p={2}>
            <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
              Menu
            </Typography>
            <svg
              onClick={handleMobileToggle}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'>
              <g clip-path='url(#clip0_10668_2727)'>
                <path
                  d='M20 5.61143L18.3886 4L12 10.3886L5.61143 4L4 5.61143L10.3886 12L4 18.3886L5.61143 20L12 13.6114L18.3886 20L20 18.3886L13.6114 12L20 5.61143Z'
                  fill='#4C4448'
                />
              </g>
              <defs>
                <clipPath id='clip0_10668_2727'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Divider />
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            className='mobileMenu'>
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
          </Box>
          <Divider sx={{marginTop:"20px"}} />
          <Box m={2}>
            <Button
              href='/login'
              className={cardId === 1 ? "Homebtn2" : "Homebtn3"}>
              Login
            </Button>
            <Button
              href='/sign'
              className={cardId === 2 ? "Homebtn2" : "Homebtn3"}
              onClick={() => handleClick(1)}
              sx={{ marginLeft: "20px" }}>
              Sign Up
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Header;
