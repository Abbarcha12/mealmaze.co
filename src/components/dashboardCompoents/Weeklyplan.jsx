import React from "react";
import { Button, Box, Typography } from "@mui/material";
import DashboradHeader from "./DashboradHeader";
import Recipe from "./Recipe";
const Weeklyplan = () => {
  return (
    <div>
      <DashboradHeader />
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        p={1}
        mt={10}>
        <Typography className='subHeading'>
          Oatmeal And Egg Whites{" "}
          <span className='subHeadingSpan'>(Lounch)</span>{" "}
        </Typography>{" "}
        <Button
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
        sx={{
          padding: "32px 32px 43px 32px",
          borderRadius: "24px",
          background: "#fff",
        }}>
        <Recipe />
      </Box>
    </div>
  );
};

export default Weeklyplan;
