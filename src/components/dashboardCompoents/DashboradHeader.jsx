import React from "react";
import { Grid, Typography, Box, Button, Divider } from "@mui/material";
import PasswordModel from "./passwordModel";
import Profile from "./Profile";
const DashboradHeader = () => {
  const [openModel, setOpenModel] = React.useState(false);

  const handleOpen = () => {
    setOpenModel(true);
  };
  const handleClose = () => {
    setOpenModel(false);
  };

  return (
    <>
      <PasswordModel
        handleClose={handleClose}
        handleOpen={handleOpen}
        openModel={openModel}
        setOpenModel={setOpenModel}
      />
      <Grid container mt={1} spacing={2}>
        <Grid item lg={8.5} md={8} sm={7} xs={6}>
          <Grid container>
            <Grid item lg={8.8}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "27px",
                    fontWeight: 700,
                    lineHeight: "37px",
                  }}>
                 Overview
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
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
            <Grid item lg={3.2}>
              <Button className='createNewPlan'>Create New Plan</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3.5} md={4} sm={5} xs={6}>
          <Profile handleOpen={handleOpen}/>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboradHeader;
