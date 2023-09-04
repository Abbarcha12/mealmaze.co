import React,{useState} from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./overview.css";
import Frame from "../../assest/Frame.png";


const AllFoodMatch = ({ heading, title, HandleBtnId }) => {

  return (
    <Box mt={2} onClick={() => HandleBtnId(3)}>
      <Link className='Favlist'>
        <Box>
   
          <img src={Frame} alt='icon' />{" "}
        </Box>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ color: "#232627", fontSize: "16px", fontWeight: "600" }}>
              {heading}
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
