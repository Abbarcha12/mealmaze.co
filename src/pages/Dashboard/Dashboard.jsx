import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import "./Dashboard.css";


import Overview from "../../components/dashboardCompoents/Overview";
import DashboardSidebar from "../../components/dashboardCompoents/DashboardSidebar";
import Myplans from "../MyPlans/Myplans";

const Dashboard = () => {
  const [Id, setId] = useState(1);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handelClick = (id) => {
    setId(id);
    console.log(id)
  };
  return (
    <Grid
      container
      sx={{
        background: "#FAFAFA",
      }}
      spacing={0.5}>
      <Grid item lg={open ? 1 : 2.2} md={3.2} sm={2}>
       <DashboardSidebar
       handleOpen={handleOpen}
       handelClick={handelClick}
       Id={Id}
       open={open}
       />
      </Grid>
      <Grid item lg={open ? 11 : 9.7} md={8.7} sm={9}>
        {Id === 1 ? <Overview /> : ""}
        {Id === 2 ? <Myplans /> : ""}

     

      </Grid>
    </Grid>
  );
};

export default Dashboard;
