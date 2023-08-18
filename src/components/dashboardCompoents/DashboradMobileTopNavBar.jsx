import React from "react";
import { Box, Button } from "@mui/material";
import Logo from "../../assest/logo.png";
import "./smallScreen.css";
const DashboradMobileTopNavBar = () => {
  return (
    <Box className='mobileHeader' mt={5}>
      <Box>
        <img src={Logo} alt='Logo' height={"20px"} />
      </Box>
      <Box hre="/createMeal">
        <Button className='mobileScreenBtn'>Create New Plan</Button>
      </Box>
    </Box>
  );
};

export default DashboradMobileTopNavBar;