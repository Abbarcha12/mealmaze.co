import React from "react";
import { Divider, Button, Box, Typography, Grid } from "@mui/material";

const Recipe = () => {
  return (
    <>
      
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
          <Box mt={6.5}>
            <Divider />
            <Box mt={2} textAlign={"end"}>
              <Box>
                <Button
                  sx={{
                    "&:hover": { background: "#F6F4F5" },
                    borderRadius: "9px",
                    background: "#F6F4F5",
                    padding: "10px 32px",
                    textTransform: "capitalize",
                    color: "#888587",
                    fontSize: "20",
                    fontWeight: 500,
                    marginRight: "18px",
                  }}>
                  copy
                </Button>
                <Button
                  sx={{
                    "&:hover": { background: "#F6F4F5" },
                    borderRadius: "9px",
                    background: "#F6F4F5",
                    padding: "10px 32px",
                    color: "#888587",
                    textTransform: "capitalize",
                    fontSize: "20",
                    fontWeight: 500,
                  }}>
                  share
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      
    </>
  );
};

export default Recipe;
