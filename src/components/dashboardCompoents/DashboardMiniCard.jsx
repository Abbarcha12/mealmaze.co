import React from "react";
import {  Box, Typography } from "@mui/material";
import "../dashboardCompoents/overview.css";
const DashboardMiniCard = ({ image, title, amount }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={{ borderRight: "1px solid #E6E8F0" }}>
      <div>{image}</div>
      <Box mr={1}>
        <Typography className='CardTitle'>{title}</Typography>
        <Typography className='CardAmount'>{amount}</Typography>
      </Box>
    </Box>
  );
};

export default DashboardMiniCard;
