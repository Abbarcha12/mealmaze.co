import React from "react";
import { Divider, Button, Box, Typography, Grid } from "@mui/material";

const Recipe = () => {
  return (
    <Grid container spacing={1}>
      <Grid item lg={6}>
        <Box
          sx={{
            padding: "32px",
            borderRadius: "16px",
            background: "#fff",
            border: "1px solid #E8E8ED",
          }}>
          <Typography
            sx={{ color: "#62585D", fontSize: "26px", fontWeight: 700 }}>
            Ingredients:
          </Typography>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g grilled chicken
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              100g mixed greens
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              120g cherry tomatoes
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              100g cucumber
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              15g vinaigrette dressing
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g steamed vegetables, 
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g steamed vegetables,
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              zucchini, bell peppers
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g grilled chicken
            </Typography>
          </Box>
          <Box mt={10}>
            <Divider />
            <Box mt={4} display='flex' justifyContent={"space-between"}>
              <Box className='MealBage1'width="80%" >348 Cal</Box>
              <Box className='MealBage2' width="80%" ml={3}>28g Protein</Box>
              
            </Box>
            <Box mt={4} display='flex' justifyContent={"space-between"}>
              
              <Box className='MealBage3' width="80%">28g Protein</Box>
              <Box className='MealBage4' width="80%" ml={3}>4g Fat</Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6}>
        <Box
          sx={{
            padding: "32px",
            borderRadius: "16px",
            background: "#fff",
            border: "1px solid #E8E8ED",
          }}>
          <Typography
            sx={{ color: "#62585D", fontSize: "26px", fontWeight: 700 }}>
            Recipe:
          </Typography>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
            }}>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              1
            </Typography>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              Slice the grilled chicken into thin strips.
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
            }}>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              2
            </Typography>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              Wash the mixed greens thoroughly and pat them dry.
            </Typography>
          </Box>

          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
            }}>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              3
            </Typography>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              In a large bowl, combine the grilled chicken, mixed greens, cherry
              tomatoes, and cucumber.
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
            }}>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              4
            </Typography>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              Pour the vinaigrette dressing over the salad and toss gently to
              coat all the ingredients.
            </Typography>
          </Box>
          <Box
            mt={1.5}
            sx={{
              display: "flex",
              alignContent: "center",
            }}>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              5
            </Typography>
            <Typography
              sx={{
                color: "#8F95B2",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              Serve immediately and enjoy your delicious Grilled Chicken Salad!
            </Typography>
          </Box>
          <Box mt={16}>
            <Divider />
            <Box mt={2} textAlign={"end"} >
              <Box >
                <Button
                  sx={{
                    '&:hover':{background:"#F6F4F5"},
                    borderRadius: "9px",
                    background: "#F6F4F5",
                    padding: "10px 32px",
                    textTransform:"capitalize",
                    color: "#888587",
                    fontSize: "20",
                    fontWeight: 500,
                    marginRight:"18px"
                  }}>
                    copy
                  </Button>
                  <Button
                  sx={{
                    '&:hover':{background:"#F6F4F5"},
                    borderRadius: "9px",
                    background: "#F6F4F5",
                    padding: "10px 32px",
                    color: "#888587",
                    textTransform:"capitalize",
                    fontSize: "20",
                    fontWeight: 500,

                  }}>
                    share
                  </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Recipe;
