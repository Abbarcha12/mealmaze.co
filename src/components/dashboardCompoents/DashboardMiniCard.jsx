import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import "../dashboardCompoents/overview.css";
const DashboardMiniCard = ({ image, title, amount }) => {
  return (
    <Box  display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
      <div>{image}</div>
      <div>
        <Typography className="CardTitle">{title}</Typography>
        <Typography className="CardAmount">{amount}</Typography>
      </div>
    </Box>
  );
};

export default DashboardMiniCard;
