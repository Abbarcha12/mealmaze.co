import React, { useState } from "react";
import "./Home.css";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Header from "../../components/Header";
import Line from "../../assest/line.png";
import HomeBannerImg from "../../assest/oooq.png";
import HomeBannerImgtwo from "../../assest/HomeBannerimg.3.png";
import HomeBannerImgfour from "../../assest/four.png"
import HomeBannerImgFive from "../../assest/HomeImg.png"

import { HomeCardData } from "../Pricing/data";
import HomeCard from "../../components/HomeCard";
const Homepage = () => {
  const [cardId, setCardId] = useState(3);
  const handleClick = (id) => {
    setCardId(id);
  };
  return (
    <>
      <Box className='Home'>
        <Header />
        <Container maxWidth='lg'>
          <Grid container mt={5}>
            <Grid item xs={12} lg={7}>
              <Typography className='HomeHeading'>
                Using AI magic to create the perfect{" "}
                <span className='spanHome'>meal plan</span> just for you.
              </Typography>
              <Box mt={5}>
                <img src={Line} alt='line' className='line' />
              </Box>
              <Box mt={5}>
                <Typography className='HomeSubHeading'>
                  Bespoke meal plans to help you achieve your goals. Bulking,
                  shredding, losing weight or simply eating healthy? Don't
                  stress about what to eat. mealmaze it.
                </Typography>
              </Box>
              <Box mt={3}>
                <Button className='Homebtn1'>Login</Button>
                <Button className='Homebtn1' sx={{ marginLeft: "20px" }}>
                  Sign Up
                </Button>
              </Box>
            </Grid>

            {/* Second Column */}
            <Grid item xs={12} lg={5} className="homebanner">
              <img src={HomeBannerImg} alt={HomeBannerImg} height={"420px"} className="homebannerimg"/>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='HomeSectionTwo'>
        <Container maxWidth='lg'>
          <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
            <Typography className='homeSectionTwoHeading' mt={15}>
              What makes mealmaze different?
            </Typography>
          </Box>
          <Grid container mt={5} spacing={5}>
            {HomeCardData.map((item) => {
              return (
                <Grid item xs={12} lg={4}>
                  <HomeCard item={item} handleClick={handleClick} cardId={cardId}/>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Box className='HomeSectionThird'>
        <Container maxWidth='lg'>
          <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
            <Typography className='homeSectionTwoHeading' mt={15}>
            How it works
            </Typography>
          </Box>
          <Grid container mt={5} justifyContent={'space-between'}>
          <Grid item xs={12} lg={5} className="homebanner">
              <img src={HomeBannerImgtwo} alt={HomeBannerImgtwo} height={"420px"} className="homebannerimg"/>
            </Grid>
            <Grid item xs={12} lg={6} display={'flex'} justifyContent={"center"} alignItems={'center'}>
              <Typography className='sectionTwoHeading' >
              <span className='spanHome1'>  Let us know </span>  your likes and dislikes, your allergies and what your goals are. Simple
              </Typography>
             
            </Grid>

           
          </Grid>
        </Container>
      </Box>
      <Box className='HomeSectionFourth'>
        <Container maxWidth='lg'>
         
          <Grid container  justifyContent={'space-around'} sx={{flexDirection:{sm:'column-reverse',xs:"column-reverse",lg:"row"},justifyContent:{xs:"center"}}}>
          <Grid item xs={12} lg={6} display={'flex'} justifyContent={"center"} alignItems={'center'}>
              <Typography className='sectionfourHeading' >
              Sit back while mealmaze works its magic.
              </Typography>
             
            </Grid>
          <Grid item xs={12} lg={5} className="homebanner">

              <img src={HomeBannerImgfour} alt={HomeBannerImgfour} height={"250px"} className="homebannerimg1"/>
            </Grid>
           

           
          </Grid>
        </Container>
        <Container maxWidth='lg'>
         
         <Grid container mt={5}  justifyContent={'space-around'} >
         <Grid item xs={12} lg={5} className="homebanner">

<img src={HomeBannerImgFive} alt={HomeBannerImgFive} height={"250px"} className="homebannerimg1"/>
</Grid>
         <Grid item xs={12} lg={6} display={'flex'} justifyContent={"center"} alignItems={'center'}>
             <Typography className='sectionfourHeading' >
             Enjoy your meal plan created just for you.
             </Typography>
            
           </Grid>
     
          

          
         </Grid>
       </Container>
      </Box>
    </>
  );
};

export default Homepage;
