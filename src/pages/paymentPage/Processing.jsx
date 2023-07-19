import React, { useEffect, useState } from "react";
import "./payment.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, Box } from "@mui/material";
import Logo from "../../assest/logo.png";
import cardData from "../Pricing/data";
import Thankyou from "./ThankYou";
const Processing = () => {
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeIsUp(true);
    }, 3000);

    return () => clearTimeout(timeoutId); // Clean up the timeout on unmount
  }, []);
  return (
    <>
      {timeIsUp ? (
        <Thankyou />
      ) : (
        <>
          <Box m={2.5}>
            <img src={Logo} alt='logo' className='Logo' />
          </Box>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={10} lg={9.1} md={10} sm={10}>
              <Box>
                <Box
                  className='paymentCard'
                  display={"flex"}
                  container
                  justifyContent={"center"}
                  height={"80vh"}
                  alignContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}>
                  <CircularProgress sx={{ color: "#02A63A" }} size={70} />
                  <p className='processing'>Processing</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Processing;
