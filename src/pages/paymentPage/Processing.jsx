import React, { useEffect, useState } from "react";
import "./payment.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, Box } from "@mui/material";
import Logo from "../../assest/logo.png";

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
                  className='paymentCard1'
                  display={"flex"}
                  container
                  justifyContent={"center"}
                
                  alignContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}>
                  <CircularProgress
                    size={70}
                    className="progress"
                    sx={{
                      color: "#02A63A",
                      
                    }}
                  />

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
