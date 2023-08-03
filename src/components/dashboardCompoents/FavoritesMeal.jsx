import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./overview.css";
const FavoritesMeal = ({ Icon, heading, title, day, heart }) => {
  return (
    <Box mt={2}>
      <Link className='Favlist'>
        <Box>{Icon}</Box>
        <Box>
          <Box
            ml={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Typography
              sx={{ color: "#232627", fontSize: "16px", fontWeight: "600" }}>
              {heading}
            </Typography>
            <Typography
              sx={{
                color: "rgba(108, 114, 117, 0.50)",
                fontSize: "14px",
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
              sx={{ color: "#6C7275", fontSize: "14px", fontWeight: "500" }}>
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
