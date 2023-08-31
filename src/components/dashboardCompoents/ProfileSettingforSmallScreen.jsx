import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Tab,
  TextField,
  InputLabel,
  FormControl,
  Button,
  Grid,
  Divider,
  Typography,
  IconButton,
  InputAdornment,
  Input,
} from "@mui/material";
import profileImg from "../../assest/profile.png";
import Visibility from "@mui/icons-material/Visibility";
import "./overview.css";
import Logo from "../../assest/logo.png";
import DeleteAccount from "./DeleteAccount";

const PasswordModelSmallScreen = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (id) => {
    setValue(id);
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const [DeleteModel, setDeleteModel] = React.useState(false);
  const handleDelete = () => {
    setDeleteModel(true);
  };
  const handleDeleteClose = () => {
    setDeleteModel(false);
  };
  return (
    <React.Fragment>
      <DeleteAccount
        DeleteModel={DeleteModel}
        handleDeleteClose={handleDeleteClose}
      />
      <Box p={2} >
        <Grid container mt={2}>
          <img src={Logo} alt='logo' height={"22px"} />
        </Grid>
        <Grid
          container
          mt={3}
          p={2}
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 26px 0px rgba(0, 132, 44, 0.06)",
            borderRadius: "16px",
          }}>
          <Box mt={4} width='100%'>
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
              <div>
                <Typography className='Name' sx={{ paddingLeft: "10px" }}>
                  Khalid Hosen
                </Typography>
                <Typography sx={{ paddingLeft: "10px" }} className='email'>
                  kh.khaliduiux@gmail.com
                </Typography>
              </div>
            </Box>

            <Box mt={2}>
              <Divider />

              <Box sx={{ width: "100%", typography: "body1" }}>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  mt={2}>
                  <Button
                    className={value===1?'accountBtnFocus':"accountBtn"}
                    onClick={() => handleChange(1)}>
                    Setting
                  </Button>
                  <Button
                     className={value===2?'accountBtnFocus':"accountBtn"}
                    onClick={() => handleChange(2)}>
                    Contact{" "}
                  </Button>
                  <Button className='accountBtnFocus1'>Log Out</Button>
                </Box>

                {value === 1 ? (
                  <>
                    <FormControl
                      fullWidth
                      sx={{ m: 1, mt: 3 }}
                      variant='standard'>
                      <InputLabel
                        htmlFor='standard-adornment-amount'
                        className='Label'>
                        Old password
                      </InputLabel>
                      <Input
                        id='standard-adornment-amount'
                        className='InputPassword'
                        placeholder='Password'
                        type={showPassword ? "text" : "password"}
                        startAdornment={
                          <InputAdornment position='start'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='14'
                              height='14'
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
                            </svg>
                          </InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position='start'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={handleClickShowPassword}>
                              {!showPassword ? (
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='18'
                                  height='18'
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
                    <FormControl
                      fullWidth
                      sx={{ m: 1, mt: 3 }}
                      variant='standard'>
                      <InputLabel
                        htmlFor='standard-adornment-amount'
                        className='Label'>
                        New password
                      </InputLabel>
                      <Input
                        id='standard-adornment-amount'
                        className='InputPassword'
                        placeholder='Password'
                        type={showPassword1 ? "text" : "password"}
                        startAdornment={
                          <InputAdornment position='start'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='14'
                              height='14'
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
                              onClick={handleClickShowPassword1}>
                              {!showPassword1 ? (
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='18'
                                  height='18'
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
                    <InputLabel
                      htmlFor='standard-adornment-amount'
                      className='Label1'>
                      Minimum 8 characters
                    </InputLabel>
                    <FormControl
                      fullWidth
                      sx={{ m: 1, mt: 3 }}
                      variant='standard'>
                      <InputLabel
                        htmlFor='standard-adornment-amount'
                        className='Label'>
                        Confirm new password
                      </InputLabel>
                      <Input
                        id='standard-adornment-amount'
                        className='InputPassword'
                        placeholder='Password'
                        type={showPassword2 ? "text" : "password"}
                        startAdornment={
                          <InputAdornment position='start'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='14'
                              height='14'
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
                              onClick={handleClickShowPassword2}>
                              {!showPassword2 ? (
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='18'
                                  height='18'
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
                    <InputLabel
                      htmlFor='standard-adornment-amount'
                      className='Label1'>
                      Minimum 8 characters
                    </InputLabel>

                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt={5}
                      width='100%'>
                      <Box>
                        <Button
                          sx={{
                            borderRadius: "10px",
                            border: "1px solid #EF4444",
                            color: "#EF4444",
                            fontSize: "11px",
                            fontWeight: "700",
                            padding: "6px 16px",
                          }}
                          onClick={handleDelete}>
                          Delete account
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            "&:hover": {
                              backgroundColor: "#22C55E", // Remove the hover background color
                            },
                            borderRadius: "10px",
                            background: "#22C55E",
                            color: "#fff",
                            fontSize: "11px",
                            fontWeight: "700",
                            padding: "7px 16px",
                          }}>
                          Save Changes
                        </Button>
                      </Box>
                    </Box>
                  </>
                ) : (
                  ""
                )}

                {value === 2 ? (
                  <Box p={2}>
                    <Box mt={2} 
                      sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography
                        sx={{
                          color: "#4C4448",
                          fontSize: "24px",
                          fontWeight: "600",
                        }}>
                        Contact
                      </Typography>
                    </Box>
                   
                    <InputLabel className='Label' sx={{ marginTop: "10px" }}>
                      Name
                    </InputLabel>
                    <FormControl fullWidth variant='standard'>
                      <Input className='InputPassword' placeholder='Name' />
                    </FormControl>
                    <InputLabel className='Label' sx={{ marginTop: "10px" }}>
                      Subject
                    </InputLabel>
                    <FormControl fullWidth variant='standard'>
                      <Input className='InputPassword' placeholder='Subject' />
                    </FormControl>
                    <Box mt={3}>
                      <TextField
                        fullWidth
                        id='outlined-multiline-static'
                        label='Your message' // Placeholder text
                        multiline
                        rows={4}
                        variant='outlined'
                        InputProps={{
                          style: { border: "1px solid lightgray" },
                        }}
                      />
                    </Box>
                    <Box mt={2} width='100%'>
                      <Button
                        sx={{
                          "&:hover": {
                            backgroundColor: "#22C55E", // Remove the hover background color
                          },
                          borderRadius: "10px",
                          background: "#22C55E",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: "700",
                          width: "100%",
                          padding: "12px 10px",
                        }}>
                        send
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </Box>
            <Divider sx={{ marginTop: "20px" }} />
          </Box>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default PasswordModelSmallScreen;
