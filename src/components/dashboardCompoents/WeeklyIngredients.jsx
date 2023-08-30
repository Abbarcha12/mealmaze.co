import React, { useState } from "react";
import { Grid,Box } from "@mui/material";
import "../../pages/Dashboard/Dashboard.css";

import DashboardSidebar from "../../components/dashboardCompoents/DashboardSidebar";
import Weeklyplan from "./Weeklyplan";
import Myplans from "../../pages/MyPlans/Myplans";
import MealPlan from "../../pages/myMealPlan/MealPlan";
import FoodMatch from "../../pages/FoodMatch/foodMatch";
import PasswordModelSmallScreen from "./ProfileSettingforSmallScreen";
import SmallScreenNavigation from "./SmallScreenNavigation";
const WeeklyIngredients = () => {
  const [Id, setId] = useState(1);
  const [open, setOpen] = useState(false);

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
      position={"relative"}
      className='MobileScreenDashboard'
      sx={{
        background: "#FAFAFA",
      }}
      spacing={4}>
      <Grid
        sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
        className='SibeBar'
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
      <Grid item lg={open ? 10.5 : 9.7} md={open ? 10.5 : 9.7} sm={11} xs={11}>
        <Box pb={{ xs: 10 }}>
          {Id === 1 ? <Weeklyplan /> : ""}
          {Id === 2 ? <Myplans /> : ""}
          {Id === 3 ? <MealPlan /> : ""}
          {Id === 4 ? <FoodMatch /> : ""}
          {Id === 5 ? <PasswordModelSmallScreen /> : ""}
        </Box>
      </Grid>
      <Box className='SmallScreenNavigation'>
        <SmallScreenNavigation Id={Id} handelClick={handelClick} />
      </Box>
    </Grid>
  );
};

export default WeeklyIngredients;
