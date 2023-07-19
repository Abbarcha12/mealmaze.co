import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import "./card.css";
const HomeCard = ({ item, handleClick,cardId }) => {
  const { id, title, description, img } = item;
 
  return (
    <Box className={cardId===id?"Homecard1":"Homecard" }key={id} onClick={()=>handleClick(id)}>
      <Box className={cardId===id?"miniSq1":"miniSq"}>{img}</Box>
      <Box mt={3}>  <Typography className={cardId===id?"title1":"title"}>{title}</Typography></Box>
      <Box mt={3}>  <Typography className={cardId===id?"description":"description1"}>{description}</Typography></Box>

    </Box>
  );
};

export default HomeCard;
