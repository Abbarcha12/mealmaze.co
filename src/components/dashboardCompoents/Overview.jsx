import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
const Overview = () => {
  return (
    <>
      <Container lg>
        <Grid container mt={4}>
          <Grid lg={9}>
            <Box>
              <Typography
                sx={{
                  fontSize: "27px",
                  fontWeight: "700",
                  lineHeight: "37px",
                }}>
                Overview
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color:"#738391",
                  maxWidth:"431px"
                }}>
                7 day meal plan to build muscle with an anything diet and
                allergy to shrimp. Likes beef and shrimp and dislikes tofu
              </Typography>
            </Box>
          </Grid>
          <Grid lg={3}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Overview;
