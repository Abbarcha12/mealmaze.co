import React from "react";
import { Button, Box, Typography, Grid, Tab } from "@mui/material";
import PasswordModel from "./passwordModel";
import Profile from "./Profile";
import Recipe from "./Recipe";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Logo from "../../assest/logo.png";
import Ingredients from "./Ingredients";
const Weeklyplan = ({handelClick}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <PasswordModel />
        <Grid className='FoodMatch' container mt={1} spacing={2}>
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
        <Box className='FoodmatchSmallScreen'>
          <Box className='mobileHeader' mt={5}>
            <Box>
              <img src={Logo} alt='Logo' height={"20px"} />
            </Box>
            <Box>
              <Button
                href='/dashboard'
                sx={{
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  color: "#888587",
                  fontSize: "16px",
                  fontWeight: "600",
                  backgroundColor: "#fff",
                  padding: "8px 14px",
                  borderRadius: "10px",
                  width: "100%",
                }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='12'
                  viewBox='0 0 20 14'
                  fill='none'>
                  <path
                    d='M5.04812 5.83333L9.29937 1.645L7.625 0L0.5 7L7.625 14L9.29937 12.355L5.04812 8.16667H19.5V5.83333H5.04812Z'
                    fill='#62585D'
                  />
                </svg>{" "}
                <Typography
                  sx={{
                    color: "#62585D",
                    textTransform: "capitalize",
                    fontSize: "18px",
                    fontWeight: 600,
                    marginLeft: "20px",
                  }}>
                  back
                </Typography>
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{
              marginTop: "15px",
              fontSize: "24px",
              fontWeight: 500,
              color: "#4C4448",
            }}>
            Oatmeal And Egg Whites{" "}
            <span className='subHeadingSpan'>(Lounch)</span>{" "}
          </Typography>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ paddingBottom: "20px" }} mt={2} p={1.5}>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'>
                  <Tab label='Ingredients' value='1' />
                  <Tab label='Recipe' value='2' />
                </TabList>
              </Box>
              <TabPanel value='1'>
                <Ingredients />
              </TabPanel>
              <TabPanel value='2'>
                <Recipe
                  heart={
                    <svg
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M15 27.9403C14.5728 27.9403 14.1611 27.7856 13.8402 27.5045C12.6283 26.4448 11.4599 25.4489 10.429 24.5705L10.4237 24.5659C7.40131 21.9903 4.79138 19.7661 2.97544 17.5749C0.945525 15.1256 0 12.803 0 10.2659C0 7.80083 0.845272 5.52663 2.3799 3.86199C3.93286 2.17765 6.06374 1.25 8.38071 1.25C10.1124 1.25 11.6983 1.7975 13.0943 2.87715C13.7988 3.42207 14.4374 4.08904 15 4.86699C15.5628 4.08904 16.2011 3.42207 16.9058 2.87715C18.3018 1.7975 19.8877 1.25 21.6195 1.25C23.9362 1.25 26.0673 2.17765 27.6203 3.86199C29.1549 5.52663 29.9999 7.80083 29.9999 10.2659C29.9999 12.803 29.0546 15.1255 27.0247 17.5747C25.2087 19.7661 22.599 21.9901 19.5771 24.5655C18.5444 25.4453 17.3742 26.4427 16.1595 27.505C15.8385 27.7858 15.4264 27.9405 15 27.9403ZM8.38071 3.00734C6.56044 3.00734 4.88823 3.73384 3.67171 5.05308C2.43714 6.39229 1.75711 8.2435 1.75711 10.2659C1.75711 12.3997 2.55017 14.3081 4.32837 16.4537C6.04704 18.5276 8.60342 20.7061 11.5633 23.2286L11.5688 23.2332C12.6035 24.115 13.7766 25.1148 14.9975 26.1823C16.2256 25.1127 17.4005 24.1114 18.4373 23.2281C21.397 20.7056 23.9531 18.5276 25.6718 16.4537C27.4498 14.3081 28.2428 12.3997 28.2428 10.2659C28.2428 8.24344 27.5628 6.39224 26.3282 5.05308C25.1119 3.73384 23.4396 3.00734 21.6195 3.00734C20.286 3.00734 19.0617 3.43127 17.9807 4.2671C17.0173 5.01236 16.3463 5.95442 15.9528 6.6136C15.7505 6.95257 15.3944 7.15489 15 7.15489C14.6056 7.15489 14.2494 6.95257 14.0471 6.6136C13.654 5.95442 12.9828 5.01236 12.0192 4.2671C10.9383 3.43127 9.71395 3.00734 8.38071 3.00734Z'
                        fill='#62585D'
                      />
                    </svg>
                  }
                />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
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
          className='FoodMatch'
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
        className='FoodMatch'
        sx={{
          padding: "32px 32px 43px 32px",
          borderRadius: "24px",
          background: "#fff",
        }}
        mt={3}>
        <Grid
          container
          spacing={1.5}
          pb={3}
          mt={0.1}
          sx={{
            borderRadius: "20px",
            background: "#FEFEFE",
            border: "1px solid  #E8ECEF",
          }}>
          <Grid item lg={6} md={6}>
            <Ingredients />
          </Grid>
          <Grid item lg={6} md={6}>
            <Recipe />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Weeklyplan;
