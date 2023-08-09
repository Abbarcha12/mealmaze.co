import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import PasswordModel from "./passwordModel";
import Profile from "./Profile";
import { handleOpenPopUp } from "../../Redux/actions/CreateMealAction";
import PurchaseFoodmatchpopUp from "../../components/dashboardCompoents/PurchaseFoodmatchpopUp";

import { useDispatch } from "react-redux";
const DashboradHeader = () => {
  const [openModel, setOpenModel] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpenModel(true);
  };


  return (
    <>
      <PasswordModel
        
        setOpenModel={setOpenModel}
      />
      <PurchaseFoodmatchpopUp/>
      <Grid container mt={1} spacing={2}>
        <Grid item lg={9} md={8} sm={8} xs={6}>
          <Grid container>
            <Grid item lg={9}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "27px", sm: "20px" },
                    fontWeight: 700,
                    lineHeight: "37px",
                  }}>
                  Overview
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "14px", sm: "12px", xs: "12px" },
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "#738391",
                    maxWidth: "431px",
                  }}>
                  7 day meal plan to build muscle with an anything diet and
                  allergy to <span className='spanOrange'>shrimp</span>.{" "}
                  <span className='spanGreen'>Likes beef and shrimp</span> and
                  dislikes <span className='yellowSpan'>tofu</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Button
                className='createNewPlan'
                hrefLang="/createMeal"
                >
                Create New Plan
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} md={4} sm={4} xs={6}>
          <Profile handleOpen={handleOpen} />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboradHeader;
