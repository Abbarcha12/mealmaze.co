import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../../assest/logo.png";
import MealImg from "../../assest/meal.png";
import { useNavigate } from "react-router-dom";
const CreateMealHangUp = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => Navigate("/dashboard"), 3 * 1000);
  });
  return (
    <Box m={4} SX={{ height: "100vh" }}>
      <img src={Logo} alt={Logo} className='Logo' />
      <Grid container justifyContent={"center"} alignContent={"center"}>
        <Grid lg={10.7} xs={12}>
          <Box
            mt={4}
         
            sx={{
              borderRadius: "18px",
              backgroundColor: "#fff",
              textAlign: "center",
              padding:{lg:"40px",xs:"10px"},
              boxShadow:
                "0px 3.6213507652282715px 44.361541748046875px 0px rgba(74, 207, 119, 0.13)",
            }}>
            <img
              src={MealImg}
              alt='MealImg'
              className='meal'
              height={"414px"}
            />
            <Typography
              sx={{
                color: "#16A34A",
                fontFamily: "Inter",
                fontSize: { lg: "40px", sm: "32p", xs: "22px" },
                marginTop: "10px",
                fontWeight: 600,

                lineHeight: {lg:"45.728px",xs:"30px"}
              }}>
              Hang in there. We're cooking up a storm in the AI kitchen.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateMealHangUp;
