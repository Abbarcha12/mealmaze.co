import React from "react";
import Logo from "../assest/logo.png";
import "./Header.css"; // Import your custom CSS file
import { Link } from "react-scroll";
import { Box ,Typography} from "@mui/material";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <>
      <Box className='footer'>
        <Box className='logo-container'>
          <img src={Logo} alt='Logo' className='logoPage' />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: { lg: "none", md: "none", sm: "none",xs: "block" },
            marginTop: "20px",
          }}>
          <Divider sx={{ backgroundColor: "#D8D5D6" }} />
        </Box>
        <Box className='Link1'>
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
      </Box>
      <Box
          sx={{
            width: "98%",
            margin:"auto",
            marginTop: "20px",
          }}>
          <Divider sx={{ backgroundColor: "#D8D5D6" }} />
          <Typography
          className="mealmaze "
          >
          ©2023 mealmaze.co all rights reserved.
          </Typography>
        </Box>
    </>
  );
};

export default Footer;
