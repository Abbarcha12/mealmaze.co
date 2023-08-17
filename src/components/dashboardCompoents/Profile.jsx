import { Link } from "react-router-dom";
import profileImg from "../../assest/profile.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import {  Typography, Box,  Divider } from "@mui/material";
import { profileOpen } from "../../Redux/actions/CreateMealAction";
import { useDispatch } from "react-redux";
const Profile = () => {
  const dispatch =useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box className='profileBox'>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box
              display={"flex"}
              sx={{
                flexDirection: { lg: "row", md: "column", sm: "column" },
              }}>
              <div>
                <img
                  src={profileImg}
                  alt={profileImg}
                  height={"40px"}
                  width={"40px"}
                />
              </div>
              <Box sx={{ display: { lg: "block", sm: "none", xs: "none" } }}>
                <Typography className='Name' sx={{ paddingLeft: "10px" }}>
                  Khalid Hosen
                </Typography>
                <Typography sx={{ paddingLeft: "10px" }} className='email'>
                  kh.khaliduiux@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box onClick={handleToggle} sx={{ marginLeft: { xs: "10px" } }}>
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </Box>
          </Box>
          {open ? (
            <>
              <Box sx={{ display: { lg: "none", md: "block", sm: "block" } }}>
                <div>
                  <Typography className='Name' sx={{ paddingLeft: "10px" }}>
                    Khalid Hosen
                  </Typography>
                  <Typography sx={{ paddingLeft: "10px" }} className='email'>
                    kh.khaliduiux@gmail.com
                  </Typography>
                </div>
              </Box>
              <Divider sx={{ paddingTop: "10px" }} />

              <Link className='Setting' onClick={()=>dispatch(profileOpen())}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'>
                  <path
                    opacity='0.4'
                    d='M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z'
                    fill='#B7B7B7'
                  />
                  <path
                    d='M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z'
                    fill='#B7B7B7'
                  />
                </svg>
                <Typography className='settingtitle'>Settings</Typography>{" "}
              </Link>
              <Link className='Setting'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'>
                  <path
                    d='M7.88023 12.07C7.88023 11.66 8.22023 11.32 8.63023 11.32H14.1102V2.86C14.1002 2.38 13.7202 2 13.2402 2C7.35023 2 3.24023 6.11 3.24023 12C3.24023 17.89 7.35023 22 13.2402 22C13.7102 22 14.1002 21.62 14.1002 21.14V12.81H8.63023C8.21023 12.82 7.88023 12.48 7.88023 12.07Z'
                    fill='#EF4444'
                  />
                  <path
                    d='M20.5396 11.5402L17.6996 8.69016C17.4096 8.40016 16.9296 8.40016 16.6396 8.69016C16.3496 8.98016 16.3496 9.46016 16.6396 9.75016L18.1996 11.3102H14.0996V12.8102H18.1896L16.6296 14.3702C16.3396 14.6602 16.3396 15.1402 16.6296 15.4302C16.7796 15.5802 16.9696 15.6502 17.1596 15.6502C17.3496 15.6502 17.5396 15.5802 17.6896 15.4302L20.5296 12.5802C20.8296 12.3002 20.8296 11.8302 20.5396 11.5402Z'
                    fill='#EF4444'
                  />
                </svg>
                <Typography className='logOut'>Log out</Typography>{" "}
              </Link>
            </>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default Profile;
