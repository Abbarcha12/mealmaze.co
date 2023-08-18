import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./card.css";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  const { id, amount, p1, p2, p3, p5, p6, days,$ } = item;

  return (
    <Box m={3} >
      <Typography variant='h4' className='days'>
        {days}
      </Typography>
      <Box mt={2}>
        <Typography variant='normal' className='p1'>
          <DoneIcon className='DoneIcon' />
          <span className='MarginLeft'>{p1}</span>
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant='normal' className='p1'>
          <DoneIcon className='DoneIcon' />
          <span className='MarginLeft'>{p2}</span>
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant='normal' className='p1'>
          <DoneIcon className='DoneIcon' />
          <span className='MarginLeft'>{p3}</span>
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant='normal' className='p1'>
          <DoneIcon className='DoneIcon' />
          <span className='MarginLeft'>{p5}</span>
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant='normal' className='p1'>
          <DoneIcon className='DoneIcon' />

          <span className='MarginLeft'>{p6}</span>
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant='normal' className='p1'>
          {$}<span className='Amount1'>{amount}</span>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={2}>
        <Link to={`/payment/${id}`}>
          <Button className='selectBtn'>Select Plan</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
