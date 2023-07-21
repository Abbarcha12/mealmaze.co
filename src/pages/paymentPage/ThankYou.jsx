import React, { useState } from "react";
import "./payment.css";
import ThankYoulogo from "../../assest/thank.png"
import { Grid, Box,Button } from "@mui/material";
import Logo from "../../assest/logo.png";
import { Link } from "react-router-dom";
const Thankyou = () => {
  return (
    <>
      <Box m={2.5}>
        <img src={Logo} alt='logo' className='Logo' />
      </Box>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={10} lg={9.1} md={10} sm={10}>
          <Box>
            <Box
              className='paymentCard'
               textAlign={'center'}
              container
              height={"80vh"}
              flexDirection={"column"}>
             
           <Box p={2}> <p className='Otpheading'>Thank You For Your Purchase</p></Box>
           <Box> <img src={ThankYoulogo} alt="ThankYoulogo" height={ "200px"}/> </Box>
           <Box > <p className='order'>Order #123RGR231567Y Confirmed</p></Box>
           <Link to="/createMeal">
                     
                      <Button sx={{width:"42%"}} className='PayButton'>Create you meal plan</Button>
                    </Link>
                    <Box mt={2}>
                    <Link to="/createMeal" className="Generate">
                     
                     Generate Receipt
                    </Link>
                    </Box>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Thankyou;
