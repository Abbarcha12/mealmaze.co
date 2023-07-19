import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from "../assest/logo.png"
import {Link} from "react-router-dom"
import './Header.css'; // Import your custom CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position='static' >
      <Toolbar  >
        
        <div className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className='logoPage'/>
        </div>
        <div className="Links" >
          <Link to="/" className='link'>Home</Link>
          <Link to="/" className='link'>Features</Link>
          <Link to="/" className='link'>Pricing</Link>
          <Link to="/" className='link'>FAQ</Link>
          <Link to="/" className='link'>Contact</Link>
          <Link to="/" className='link'>Become an Affiliate</Link>
        </div>

        <div >
          <Button className='Homebtn'>Login</Button>
          <Button className='Homebtn'>Sign Up</Button>
        </div>
       
        </div>
       
       
      </Toolbar>
    </AppBar>
  );
};

export default Header;

