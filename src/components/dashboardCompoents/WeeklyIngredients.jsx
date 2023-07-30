import React, { useState } from "react";
import { Grid } from "@mui/material";
import "../../pages/Dashboard/Dashboard.css";

import DashboardSidebar from "../../components/dashboardCompoents/DashboardSidebar";
import Weeklyplan from "./Weeklyplan";
import Myplans from "../../pages/MyPlans/Myplans";
import MealPlan from "../../pages/myMealPlan/MealPlan";
import FoodMatch from "../../pages/FoodMatch/foodMatch";
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
        {Id === 1 ? <Weeklyplan /> : ""}
        {Id === 2 ? <Myplans /> : ""}
        {Id === 3 ? <MealPlan /> : ""}
        {Id === 4 ? <FoodMatch /> : ""}


      </Grid>
    </Grid>
  );
};

export default WeeklyIngredients;
