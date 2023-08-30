import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./overview.css";
import Frame from "../../assest/Frame.png"
const FavoritesMeal = ({  heading, title, day, heart }) => {
  return (
    <Box mt={2} >
      <Link className='Favlist'>
        <Box>
         <img src={Frame} alt="icon" />
        </Box>
        <Box>
          <Box
            ml={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Typography
              sx={{ color: "#232627", fontSize: "15px", fontWeight: "600" }}>
              {heading}
            </Typography>
            <Typography
              sx={{
                color: "rgba(108, 114, 117, 0.50)",
                fontSize: "13px",
                fontWeight: "500",
              }}>
              {day}
            </Typography>
          </Box>
          <Box
            ml={2}
            mt={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Typography
              sx={{ color: "#6C7275", fontSize: "13.5px", fontWeight: "500" }}>
              {title}
            </Typography>

            {heart}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default FavoritesMeal;
