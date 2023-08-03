import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./overview.css";
const AllFoodMatch = ({ Icon, heading, title, day }) => {
  return (
    <Box mt={2}>
      <Link className='Favlist'>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ color: "#232627", fontSize: "16px", fontWeight: "600" }}>
              {heading}
            </Typography>
            <Typography
              sx={{
                color: "rgba(108, 114, 117, 0.50)",
                fontSize: "14px",
                fontWeight: "500",
                ml: "70px", // Add margin-left auto to push the second Typography to the right
              }}>
              {day}
            </Typography>
          </Box>

          <Typography
            sx={{ color: "#6C7275", fontSize: "14px", fontWeight: "500" }}>
            {title}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default AllFoodMatch;
