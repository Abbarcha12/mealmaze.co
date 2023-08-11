import React from "react";
import "../Login/Login.css";
import Logo from "../../assest/logo.png";
import Visibility from "@mui/icons-material/Visibility";
import BannerImage from "../../assest/main.png";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Box,
  Button,
} from "@mui/material";
const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Grid container className='MainClass'>
      <Grid item xs={12} lg={6} md={6} className='rightSide'>
        <Grid container>
          <Grid item xs={12} m={2} sx={{marginTop:{lg:"5px",xs:"25px"}}}>
            <img src={Logo} alt='logo' className='Logo' />
          </Grid>
          
        </Grid>
       <Box className="smallScreenBox">
       <Grid container mt={2} alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={12}>
            <Grid container mt={6} direction='column' alignItems='center'>
              <Grid item xs={12}>
                <Typography variant='h1' className='MainHeading' >
                  Sign Up
                </Typography>
              </Grid>
              <Grid item xs={12} mt={1.8}>
                <Typography variant='normal' className='MainSubHeading' sx={{display:{lg:"block",xs:"none"}}}>
                  Unlock all Features!
                </Typography>
              </Grid>
              <Grid xs={12} item></Grid>
            </Grid>
          </Grid>
          <Grid lg={8} xs={10}>
            <FormControl fullWidth sx={{ m: 1 }} variant='standard'>
              <InputLabel htmlFor='standard-adornment-amount' className='Label'>
                Email
              </InputLabel>
              <Input
                id='standard-adornment-amount'
                className='Input'
                placeholder='Email'
                startAdornment={
                  <InputAdornment position='start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='26'
                      height='26'
                      viewBox='0 0 26 26'
                      fill='none'>
                      <path
                        d='M2.16699 7.58333C2.16699 5.1901 4.10709 3.25 6.50033 3.25H19.5003C21.8936 3.25 23.8337 5.1901 23.8337 7.58333V18.4167C23.8337 20.8099 21.8936 22.75 19.5003 22.75H6.50032C4.10709 22.75 2.16699 20.8099 2.16699 18.4167V7.58333Z'
                        fill='#D8D5D6'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M5.82405 8.21638C6.07296 7.84302 6.57741 7.74213 6.95078 7.99104L11.0471 10.7219C12.2297 11.5103 13.7704 11.5103 14.9531 10.7219L19.0494 7.99104C19.4228 7.74213 19.9272 7.84302 20.1761 8.21638C20.425 8.58975 20.3241 9.09421 19.9508 9.34312L15.8545 12.074C14.126 13.2263 11.8742 13.2263 10.1457 12.074L6.04939 9.34312C5.67603 9.09421 5.57513 8.58975 5.82405 8.21638Z'
                        fill='white'
                      />
                    </svg>{" "}
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant='standard'>
              <InputLabel htmlFor='standard-adornment-amount' className='Label'>
                Password
              </InputLabel>
              <Input
                id='standard-adornment-amount'
                className='Input'
                placeholder='Password'
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position='start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='26'
                      height='27'
                      viewBox='0 0 26 27'
                      fill='none'>
                      <g clip-path='url(#clip0_9913_768)'>
                        <path
                          d='M20.5836 9.626V8.08332C20.5836 3.89518 17.1885 0.5 13.0003 0.5C8.81213 0.5 5.41699 3.89518 5.41699 8.08332V9.626C3.44536 10.4865 2.16984 12.4321 2.16699 14.5833V21.0833C2.17055 24.0734 4.59357 26.4964 7.58362 26.5H18.4169C21.407 26.4964 23.83 24.0734 23.8336 21.0833V14.5833C23.8308 12.4321 22.5553 10.4865 20.5836 9.626ZM14.0836 18.9167C14.0836 19.515 13.5986 20 13.0003 20C12.402 20 11.917 19.515 11.917 18.9167V16.75C11.917 16.1517 12.402 15.6667 13.0003 15.6667C13.5986 15.6667 14.0836 16.1517 14.0836 16.75V18.9167ZM18.417 9.16668H7.58362V8.08337C7.58362 5.09184 10.0087 2.66668 13.0003 2.66668C15.9919 2.66668 18.417 5.09179 18.417 8.08337V9.16668Z'
                          fill='#D8D5D6'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_9913_768'>
                          <rect
                            width='26'
                            height='26'
                            fill='white'
                            transform='translate(0 0.5)'
                          />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='start'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='28'
                          height='28'
                          viewBox='0 0 28 28'
                          fill='none'>
                          <path
                            d='M23.3781 19.6653C26.3573 17.0113 28 13.9996 28 13.9996C28 13.9996 22.75 4.37458 14 4.37458C12.2231 4.37458 10.5905 4.77151 9.11692 5.40417L10.4659 6.75319C11.5672 6.35763 12.7477 6.12458 14 6.12458C17.7089 6.12458 20.7882 8.1689 23.0438 10.4245C24.1565 11.5372 25.0212 12.6555 25.6073 13.4963C25.7346 13.6789 25.8482 13.8477 25.9478 13.9996C25.8482 14.1515 25.7346 14.3202 25.6073 14.5028C25.0212 15.3437 24.1565 16.462 23.0438 17.5746C22.7554 17.8631 22.4535 18.1481 22.1385 18.4258L23.3781 19.6653Z'
                            fill='#B5B3B4'
                          />
                          <path
                            d='M19.7706 16.0578C20 15.4146 20.125 14.7217 20.125 13.9996C20.125 10.6168 17.3827 7.87458 14 7.87458C13.2779 7.87458 12.585 7.99953 11.9417 8.22899L13.3808 9.66806C13.5831 9.6394 13.7898 9.62458 14 9.62458C16.4162 9.62458 18.375 11.5833 18.375 13.9996C18.375 14.2098 18.3602 14.4165 18.3315 14.6188L19.7706 16.0578Z'
                            fill='#B5B3B4'
                          />
                          <path
                            d='M14.6192 18.3311L16.0583 19.7702C15.415 19.9996 14.7221 20.1246 14 20.1246C10.6173 20.1246 7.875 17.3823 7.875 13.9996C7.875 13.2775 7.99996 12.5846 8.22943 11.9413L9.66848 13.3803C9.63982 13.5826 9.625 13.7894 9.625 13.9996C9.625 16.4158 11.5838 18.3746 14 18.3746C14.2102 18.3746 14.4169 18.3598 14.6192 18.3311Z'
                            fill='#B5B3B4'
                          />
                          <path
                            d='M5.86152 9.57338C5.54654 9.85108 5.24463 10.1361 4.95619 10.4245C3.84354 11.5372 2.97878 12.6555 2.39273 13.4963C2.26545 13.6789 2.15185 13.8477 2.05222 13.9996C2.15185 14.1515 2.26545 14.3202 2.39273 14.5028C2.97878 15.3437 3.84354 16.462 4.95619 17.5746C7.21181 19.8303 10.2911 21.8746 14 21.8746C15.2523 21.8746 16.4328 21.6415 17.5341 21.2459L18.8831 22.595C17.4095 23.2276 15.7769 23.6246 14 23.6246C5.25 23.6246 0 13.9996 0 13.9996C0 13.9996 1.64275 10.9879 4.62195 8.33382L5.86152 9.57338Z'
                            fill='#B5B3B4'
                          />
                          <path
                            d='M23.8813 25.1183L2.88128 4.1183L4.11872 2.88086L25.1187 23.8809L23.8813 25.1183Z'
                            fill='#B5B3B4'
                          />
                        </svg>
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>{" "}
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid lg={8} xs={10}>
            <Grid container m={1} direction='row' alignItems='center'>
              <Grid item xs={12} lg={12} display={"flex"} alignItems='center'>
                <FormControlLabel
                  control={
                    <Checkbox
                      size='medium'
                      sx={{
                        color: "rgba(0, 178, 59, 1)",
                        borderRadius: "10px",
                        "&.Mui-checked": {
                          color: "rgba(0, 178, 59, 1)",
                        },
                      }}
                    />
                  }
                />
                <Typography>
                  {" "}
                  <span className='Label'>Accept</span>{" "}
                  <span className='Password'>terms and conditions</span>
                </Typography>
              </Grid>

              <Grid item xs={12} lg={12} mt={1}>
                <Link className='Button' to="/pricing">
                  Create Account
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box className='centerClass'>
          <Typography className='Label' mt={2}>
            Already registered?
            <Link className='Password' to='/login'>
              Sign in
            </Link>
          </Typography>
        </Box>
       </Box>
      </Grid>
      <Grid item xs={12} lg={6} md={6} className='leftSide'>
        <Grid
          container
          direction='row'
          textAlign={'center'}
          justifyContent='center'
          alignItems='center'>
          <Grid item xs={8} lg={8} mt={10}>
            {" "}
            <div>
            <img src={BannerImage} className='BannerImage' alt='banner' />
            </div>
            <Typography className='BannerText' mt={2}>
              <i>
                “To eat is a necessity, <br />
                But to eat intelligently is an art.”
              </i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
