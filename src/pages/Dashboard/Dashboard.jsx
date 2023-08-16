import React, { useState, useEffect } from "react";
import { Grid,Box} from "@mui/material";
import "./Dashboard.css";

import Overview from "../../components/dashboardCompoents/Overview";
import DashboardSidebar from "../../components/dashboardCompoents/DashboardSidebar";
import Myplans from "../MyPlans/Myplans";
import MealPlan from "../myMealPlan/MealPlan";
import FoodMatch from "../FoodMatch/foodMatch";
import SmallScreenNavigation from "../../components/dashboardCompoents/SmallScreenNavigation";

const Dashboard = () => {
  const [Id, setId] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)"); // Define your media query here

    // Update state based on media query match
    const updateMediaMatch = (e) => {
      setOpen(e.matches);
    };

    mediaQuery.addListener(updateMediaMatch); // Add listener to the media query
    updateMediaMatch(mediaQuery); // Initial check

    // Clean up the listener when component unmounts
    return () => {
      mediaQuery.removeListener(updateMediaMatch);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handelClick = (id) => {
    setId(id);
    console.log(id);
  };
  return (
    <Grid
      container
      position={'relative'}
      className="MobileScreenDashboard"
      sx={{
        background: "#FAFAFA",
      }}
      spacing={4}>
      <Grid
        sx={{display:{lg:"block",md:"block",sm:"block",xs:"none"}}}
       className="SibeBar"
        item
        lg={open ? 1.5 : 2.2}
        md={open ? 1.5 : 2.2}
        sm={1}
        xs={open ? 1.5 : 2.2}>
        <DashboardSidebar
          handleOpen={handleOpen}
          handelClick={handelClick}
          Id={Id}
          open={open}
        />
      </Grid>
      <Grid
        item
        lg={open ? 10.5 : 9.7}
        md={open ? 10.5 : 9.7}
        sm={11}
        xs={11}>
       <Box pb={{xs:10}}>
       {Id === 1 ? <Overview /> : ""}
        {Id === 2 ? <Myplans /> : ""}
        {Id === 3 ? <MealPlan /> : ""}
        {Id === 4 ? <FoodMatch /> : ""}
        
        </Box>
      </Grid>
      <Box className="SmallScreenNavigation">
          <SmallScreenNavigation 
          Id={Id}
          handelClick={handelClick}
          />
        </Box>
    </Grid>
  );
};

export default Dashboard;
