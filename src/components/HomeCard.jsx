import React from "react";
import { Box,  Typography } from "@mui/material";
import "./card.css";
const HomeCard = ({ item }) => {
  const { id, title, description, img } = item;
  return (
    <Box className='Homecard' key={id}>
      <Box className='miniSq'>{img}</Box>
      <Box mt={3}>
        <Typography className='title'>{title}</Typography>
      </Box>
      <Box mt={3}>
        <Typography className='description'>{description}</Typography>
      </Box>
    </Box>
  );
};

export default HomeCard;
