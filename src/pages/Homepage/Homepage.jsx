import React, { useState } from "react";
import "./Home.css";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Header from "../../components/Header";
import Line from "../../assest/line.png";
import HomeBannerImg from "../../assest/home11-removebg-preview.png";
import HomeBannerImgtwo from "../../assest/HomeBannerimg.3.png";
import HomeBannerImgfour from "../../assest/four.png";
import HomeBannerImgFive from "../../assest/HomeImg.png";
import { HomeCardData } from "../../components/data";
import { cardData } from "../../components/data";
import HomeCard from "../../components/HomeCard";
import Card from "../../components/Cards";
import contactImg from "../../assest/contact.png";
import SpeakerImg from "../../assest/affliate.png";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";
const Homepage = () => {
  const [cardId, setCardId] = useState(2);
  const handleClick = (id) => {
    setCardId(id);
  };
  return (
    <>
      <Box className='Home' id='section1' smooth={true} duration={500}>
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
              <Box mt={5}>
                <Button
                  href='/login'
                  className={cardId === 1 ? "Homebtn2" : "Homebtn3"}
                  onClick={() => handleClick(1)}>
                  Login
                </Button>
                <Button
                  href='/sign'
                  className={cardId === 2 ? "Homebtn2" : "Homebtn3"}
                  onClick={() => handleClick(1)}
                  sx={{ marginLeft: "20px" }}>
                  Sign Up
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} lg={5} className='homebanner'>
              <img
                src={HomeBannerImg}
                alt={HomeBannerImg}
                height={"420px"}
                className='homebannerimg'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='HomeSectionTwo' id='section2'>
        <Container maxWidth='lg'>
          <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
            <Typography className='homeSectionTwoHeading' >
              What makes mealmaze different?
            </Typography>
          </Box>
          <Grid container mt={2} spacing={5}>
            {HomeCardData.map((item) => {
              return (
                <Grid item xs={12} lg={4}>
                  <HomeCard
                    item={item}
                    handleClick={handleClick}
                    cardId={cardId}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Box className='HomeSectionThird' id='section4'>
        <Container maxWidth='lg'>
          <Box
            display={"flex"}
            sx={{ justifyContent: { lg: "center", xs: "start" } }}>
            <Typography className='homeSectionTwoHeading' mt={15}>
              How it works
            </Typography>
          </Box>
          <Grid
            container
            mt={3}
            justifyContent={"space-between"}
            sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}>
            <Grid item xs={12} lg={5} className='homebanner'>
              <img
                src={HomeBannerImgtwo}
                alt={HomeBannerImgtwo}
                height={"420px"}
                className='homebannerimg'
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}>
              <Typography className='sectionTwoHeading'>
                <span className='spanHome1'> Let us know </span> your likes and
                dislikes, your allergies and what your goals are. Simple
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth='lg'>
          <Grid mt={4} container justifyContent={"space-around"}>
            <Grid
              item
              xs={12}
              lg={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}>
              <Typography className='sectionfourHeading'>
                Sit back while mealmaze works its magic.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={5} className='homebanner'>
              <img
                src={HomeBannerImgfour}
                alt={HomeBannerImgfour}
                height={"250px"}
                className='homebannerimg1'
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth='lg'>
          <Grid
            container
            mt={4}
            justifyContent={"space-around"}
            sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}>
            <Grid item xs={12} lg={6} className='homebanner'>
              <img
                src={HomeBannerImgFive}
                alt={HomeBannerImgFive}
                height={"315px"}
                className='homebannerimg1'
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}>
              <Typography className='sectionfourHeading'>
                Enjoy your meal plan created just for you.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='HomeSectionFour' id='section3'>
        <Container maxWidth='lg'>
          <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
            <Typography className='homeSectionTwoHeading' mt={15}>
              Choose a Plan That’s Right For You
            </Typography>
          </Box>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                mt={5}>
                {cardData.map((item) => {
                  return (
                    <>
                      <Box
                        mt={2}
                        className={`card ${
                          cardId === item.id ? "scale-animation" : ""
                        }`}
                        sx={{
                          backgroundColor:
                            cardId === item.id ? "#166534" : "#fff",
                        }}>
                        <Card
                          key={item.id}
                          item={item}
                          handleClick={handleClick}
                          cardId={cardId}
                        />
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='HomeSectionseven' id='section7'>
        <Faq/>
      </Box>
      <Box className='HomeSectionfive' id='section5'>
        <Container maxWidth='lg'>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid
              item
              lg={11.7}
              md={12}
              sm={12}
              xs={12}
              mt={10}
              className='contact'>
              <Grid container>
                <Grid lg={6} md={12}>
                  <Typography
                    sx={{
                      color: "#15803D",
                      fontFamily: "Inter",
                      fontSize: "26px",
                      fontWeight: 500,
                      lineHeight: "22.141px",
                    }}>
                    Contact us
                  </Typography>
                  <Typography
                    sx={{
                      color: "#191A15",
                      fontFamily: "Inter",
                      fontSize: "30px",
                      fontWeight: 700,
                      marginTop: "15px",
                    }}>
                    We're here to help!{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#191A15",
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: 400,
                      marginTop: "15px",
                    }}>
                    Feel free to reach out with any questions or feedback on:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#494BF3",
                      fontFamily: "Inter",
                      fontSize: { lg: "32px", xs: "28px" },
                      fontWeight: 700,
                      marginTop: "20px",
                    }}>
                    info@mealmaze.co
                  </Typography>
                </Grid>
                <Grid
                  lg={6}
                  md={12}
                  sx={{ marginTop: { sm: "10px", xs: "20px" } }}>
                  <img
                    src={contactImg}
                    alt={contactImg}
                    height={"260px"}
                    className='homebannerimg2'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='HomeSectionsix' id='section6'>
        <Container maxWidth='lg'>
          <Grid container pt={5}>
            <Grid lg={6} md={12}>
              <img
                src={SpeakerImg}
                alt={SpeakerImg}
                height={"490px"}
                className='homebannerimg3'
              />
            </Grid>
            <Grid
              lg={6}
              md={12}
              justifyContent={"center"}
              alignContent={"center"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}>
              <Typography
                sx={{
                  color: "#15803D",
                  fontFamily: "Inter",
                  fontSize: "26px",
                  fontWeight: 500,
                  lineHeight: "22.141px",
                }}>
                Affiliate Program
              </Typography>
              <Typography
                sx={{
                  color: "#191A15",
                  fontFamily: "Inter",
                  fontSize: "50px",
                  fontWeight: 700,
                  marginTop: "15px",
                }}>
                Become an affiliate
              </Typography>
              <Typography
                sx={{
                  color: "#888587",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: 400,
                  marginTop: "15px",
                }}>
                Discover a rewarding opportunity to earn by joining our
                affiliate program. Start monetizing your online influence and
                join us today!
              </Typography>
              <Button className='Homebtn2' sx={{ marginTop: "20px" }}>
                Learn more
              </Button>
            </Grid>
          </Grid>
          <Box>
            <Footer />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Homepage;
