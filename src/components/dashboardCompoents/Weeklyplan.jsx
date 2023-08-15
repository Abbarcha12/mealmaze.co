import React from "react";
import { Button, Box, Typography, Grid } from "@mui/material";
import PasswordModel from "./passwordModel";
import Profile from "./Profile";
import Recipe from "./Recipe";
const Weeklyplan = () => {
  return (
    <>
      <Box>
        <PasswordModel />
        <Grid container mt={1} spacing={2}>
          <Grid item lg={9} md={8} sm={8} xs={12}>
            <Grid container>
              <Grid item lg={9} xs={12}>
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
              <Grid item lg={3} xs={12}>
                <Button className='createNewPlan' href='/createMeal'>
                  Create New Plan
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} md={4} sm={4} xs={12}>
            <Profile />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        p={1}
        mt={5}>
        <Typography className='subHeading'>
          Oatmeal And Egg Whites{" "}
          <span className='subHeadingSpan'>(Lounch)</span>{" "}
        </Typography>{" "}
        <Button
          href='/dashboard'
          sx={{
            "&:hover": {
              background: "#fff",
            },
            color: "#888587",
            fontSize: "18px",
            fontWeight: "500",

            borderRadius: "9px",
            background: "#fff",
            boxShadow: "0px 2px 19px 2px rgba(0, 122, 41, 0.08)",
            display: "flex",
            padding: "8px 20px",
            justifyContent: "space-between",
            alignitems: "center",
          }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='16'
            viewBox='0 0 20 16'
            fill='none'>
            {" "}
            <path
              d='M4.7875 6.75L9.2625 2.2625L7.5 0.5L0 8L7.5 15.5L9.2625 13.7375L4.7875 9.25H20V6.75H4.7875Z'
              fill='#888587'
            />{" "}
          </svg>
          <Box ml={2}>Back</Box>
        </Button>
      </Box>
      <Box
        sx={{
          padding: "32px 32px 43px 32px",
          borderRadius: "24px",
          background: "#fff",
        }}
        mt={3}>
        <Recipe />
      </Box>
    </>
  );
};

export default Weeklyplan;
