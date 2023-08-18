import React from "react";
import Card from "../../components/Cards";
import { Grid, Typography, Box } from "@mui/material";
import Logo from "../../assest/logo.png";
import { cardData } from "../../components/data";
import "./pricing.css";
const PricingCard = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12} sm={12} m={2.5}>
          <img src={Logo} alt='logo' className='Logo' />
        </Grid>
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        mt={2}
        p={1}>
        <Typography variant='h1' className='cardPageMainHeading'>
        Choose a Plan
That’s Right For You
        </Typography>
        <Typography variant='h3' className='cardSubPageMainHeading' mt={0.8}>
          Simple and transparent pricing
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid lg={11} md={11} sm={12} xs={12} mt={3}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}>
            {cardData.map((item) => {
              return (
                <>
                  <Box mt={2} className='card'>
                    <Card key={item.id} item={item} />
                  </Box>
                </>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PricingCard;
