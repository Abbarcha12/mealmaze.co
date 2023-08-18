import React, { useState } from "react";
import "./payment.css";
import { Link, useParams } from "react-router-dom";
import {
  Grid,
  Radio,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import Logo from "../../assest/logo.png";
import { cardData } from "../../components/data";
const OtpPage = () => {
  const [radio, setRadio] = useState();
  const { id } = useParams();
  const handleRadio = (id) => {
    setRadio(id);
  };

  return (
    <>
      <Box m={2.5}>
        <img src={Logo} alt='logo' className='Logo' />
      </Box>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item lg={9.1} md={10} sm={11} xs={12}>
          <Box>
            <Grid className='paymentCard' container justifyContent={"center"}>
            <Grid
                item
                lg={4.5}
                md={5}
                sm={10}
                xs={11}
                sx={{ borderRight: {lg:"1px solid #D9D9D9 "} }}>
                {cardData.map((item,index) => {
                  return (
                    Number(item.id) === Number(id) && (
                      <>
                        <Box
                          key={index}
                          mt={4}
                          className='smallpriceBox'
                          display='flex'
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          sx={{
                            display: {
                              lg: "none",
                              md: "none",
                              sm: "none",
                              xs: "block",
                            },
                          }}>
                          <Box>
                            <Typography className='amount'>
                              <span className='doller'> {item.$}</span>
                              {item.amount}
                            </Typography>
                            <Typography className='PricingDaysHeading'>
                              {item.days} plan
                            </Typography>
                          </Box>
                          <Box>
                            <Button className='viewDetailBtn'>
                              View Details
                            </Button>
                          </Box>
                        </Box>

                        <Box
                          mt={3}
                          sx={{
                            display: {
                              lg: "block",
                              md: "block",
                              sm: "block",
                              xs: "none",
                            },
                          }}>
                          <Typography className='PricingDaysHeading'>
                            {item.days} meal plan
                            <Box
                              mt={1.3}
                              sx={{ display: { lg: "block", xs: "none" } }}>
                              <Divider
                                sx={{ width: "90%" }}
                                className='Divider'
                              />
                            </Box>
                          </Typography>
                          <Typography
                            sx={{ display: "flex", alignItems: "center" }}
                            mt={2}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='17'
                              height='14'
                              viewBox='0 0 17 14'
                              fill='none'>
                              <g clip-path='url(#clip0_10021_877)'>
                                <path
                                  d='M6.87012 13.0687C6.38856 13.0687 5.93247 12.8863 5.64021 12.5717L1.68481 8.32833C1.56252 8.19728 1.47324 8.04795 1.42207 7.88887C1.37091 7.72979 1.35886 7.56408 1.38662 7.40122C1.41438 7.23836 1.4814 7.08154 1.58385 6.93972C1.6863 6.7979 1.82218 6.67387 1.9837 6.57471C2.14517 6.47514 2.32926 6.40243 2.5254 6.36073C2.72155 6.31903 2.9259 6.30917 3.12675 6.33172C3.3276 6.35426 3.52099 6.40877 3.69585 6.49211C3.87071 6.57545 4.02359 6.68599 4.14573 6.8174L6.74835 9.60736L13.292 1.07568C13.509 0.793991 13.8548 0.593685 14.2534 0.518702C14.6521 0.443719 15.0711 0.500182 15.4186 0.675706C16.1415 1.04063 16.364 1.81362 15.9123 2.40146L8.18084 12.4773C8.04886 12.6501 7.86694 12.7941 7.65088 12.8969C7.43481 12.9996 7.19113 13.058 6.94097 13.0669C6.91662 13.0687 6.89447 13.0687 6.87012 13.0687Z'
                                  fill='#4C4448'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_10021_877'>
                                  <rect
                                    width='15.7029'
                                    height='13.0857'
                                    fill='white'
                                    transform='translate(0.908203 0.234375)'
                                  />
                                </clipPath>
                              </defs>
                            </svg>{" "}
                            <span className='span'>
                              {item.days} of Meal Plans
                            </span>
                          </Typography>
                          <Typography
                            sx={{ display: "flex", alignItems: "center" }}
                            mt={2}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='17'
                              height='14'
                              viewBox='0 0 17 14'
                              fill='none'>
                              <g clip-path='url(#clip0_10021_877)'>
                                <path
                                  d='M6.87012 13.0687C6.38856 13.0687 5.93247 12.8863 5.64021 12.5717L1.68481 8.32833C1.56252 8.19728 1.47324 8.04795 1.42207 7.88887C1.37091 7.72979 1.35886 7.56408 1.38662 7.40122C1.41438 7.23836 1.4814 7.08154 1.58385 6.93972C1.6863 6.7979 1.82218 6.67387 1.9837 6.57471C2.14517 6.47514 2.32926 6.40243 2.5254 6.36073C2.72155 6.31903 2.9259 6.30917 3.12675 6.33172C3.3276 6.35426 3.52099 6.40877 3.69585 6.49211C3.87071 6.57545 4.02359 6.68599 4.14573 6.8174L6.74835 9.60736L13.292 1.07568C13.509 0.793991 13.8548 0.593685 14.2534 0.518702C14.6521 0.443719 15.0711 0.500182 15.4186 0.675706C16.1415 1.04063 16.364 1.81362 15.9123 2.40146L8.18084 12.4773C8.04886 12.6501 7.86694 12.7941 7.65088 12.8969C7.43481 12.9996 7.19113 13.058 6.94097 13.0669C6.91662 13.0687 6.89447 13.0687 6.87012 13.0687Z'
                                  fill='#4C4448'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_10021_877'>
                                  <rect
                                    width='15.7029'
                                    height='13.0857'
                                    fill='white'
                                    transform='translate(0.908203 0.234375)'
                                  />
                                </clipPath>
                              </defs>
                            </svg>{" "}
                            <span className='span'>{item.p2}</span>
                          </Typography>
                          <Typography
                            sx={{ display: "flex", alignItems: "center" }}
                            mt={2}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='17'
                              height='14'
                              viewBox='0 0 17 14'
                              fill='none'>
                              <g clip-path='url(#clip0_10021_877)'>
                                <path
                                  d='M6.87012 13.0687C6.38856 13.0687 5.93247 12.8863 5.64021 12.5717L1.68481 8.32833C1.56252 8.19728 1.47324 8.04795 1.42207 7.88887C1.37091 7.72979 1.35886 7.56408 1.38662 7.40122C1.41438 7.23836 1.4814 7.08154 1.58385 6.93972C1.6863 6.7979 1.82218 6.67387 1.9837 6.57471C2.14517 6.47514 2.32926 6.40243 2.5254 6.36073C2.72155 6.31903 2.9259 6.30917 3.12675 6.33172C3.3276 6.35426 3.52099 6.40877 3.69585 6.49211C3.87071 6.57545 4.02359 6.68599 4.14573 6.8174L6.74835 9.60736L13.292 1.07568C13.509 0.793991 13.8548 0.593685 14.2534 0.518702C14.6521 0.443719 15.0711 0.500182 15.4186 0.675706C16.1415 1.04063 16.364 1.81362 15.9123 2.40146L8.18084 12.4773C8.04886 12.6501 7.86694 12.7941 7.65088 12.8969C7.43481 12.9996 7.19113 13.058 6.94097 13.0669C6.91662 13.0687 6.89447 13.0687 6.87012 13.0687Z'
                                  fill='#4C4448'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_10021_877'>
                                  <rect
                                    width='15.7029'
                                    height='13.0857'
                                    fill='white'
                                    transform='translate(0.908203 0.234375)'
                                  />
                                </clipPath>
                              </defs>
                            </svg>{" "}
                            <span className='span'>{item.p3}</span>
                          </Typography>
                          <Typography
                            sx={{ display: "flex", alignItems: "center" }}
                            mt={2}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='17'
                              height='14'
                              viewBox='0 0 17 14'
                              fill='none'>
                              <g clip-path='url(#clip0_10021_877)'>
                                <path
                                  d='M6.87012 13.0687C6.38856 13.0687 5.93247 12.8863 5.64021 12.5717L1.68481 8.32833C1.56252 8.19728 1.47324 8.04795 1.42207 7.88887C1.37091 7.72979 1.35886 7.56408 1.38662 7.40122C1.41438 7.23836 1.4814 7.08154 1.58385 6.93972C1.6863 6.7979 1.82218 6.67387 1.9837 6.57471C2.14517 6.47514 2.32926 6.40243 2.5254 6.36073C2.72155 6.31903 2.9259 6.30917 3.12675 6.33172C3.3276 6.35426 3.52099 6.40877 3.69585 6.49211C3.87071 6.57545 4.02359 6.68599 4.14573 6.8174L6.74835 9.60736L13.292 1.07568C13.509 0.793991 13.8548 0.593685 14.2534 0.518702C14.6521 0.443719 15.0711 0.500182 15.4186 0.675706C16.1415 1.04063 16.364 1.81362 15.9123 2.40146L8.18084 12.4773C8.04886 12.6501 7.86694 12.7941 7.65088 12.8969C7.43481 12.9996 7.19113 13.058 6.94097 13.0669C6.91662 13.0687 6.89447 13.0687 6.87012 13.0687Z'
                                  fill='#4C4448'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_10021_877'>
                                  <rect
                                    width='15.7029'
                                    height='13.0857'
                                    fill='white'
                                    transform='translate(0.908203 0.234375)'
                                  />
                                </clipPath>
                              </defs>
                            </svg>{" "}
                            <span className='span'>{item.p4}</span>
                          </Typography>
                          <Typography
                            sx={{ display: "flex", alignItems: "center" }}
                            mt={2}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='17'
                              height='14'
                              viewBox='0 0 17 14'
                              fill='none'>
                              <g clip-path='url(#clip0_10021_877)'>
                                <path
                                  d='M6.87012 13.0687C6.38856 13.0687 5.93247 12.8863 5.64021 12.5717L1.68481 8.32833C1.56252 8.19728 1.47324 8.04795 1.42207 7.88887C1.37091 7.72979 1.35886 7.56408 1.38662 7.40122C1.41438 7.23836 1.4814 7.08154 1.58385 6.93972C1.6863 6.7979 1.82218 6.67387 1.9837 6.57471C2.14517 6.47514 2.32926 6.40243 2.5254 6.36073C2.72155 6.31903 2.9259 6.30917 3.12675 6.33172C3.3276 6.35426 3.52099 6.40877 3.69585 6.49211C3.87071 6.57545 4.02359 6.68599 4.14573 6.8174L6.74835 9.60736L13.292 1.07568C13.509 0.793991 13.8548 0.593685 14.2534 0.518702C14.6521 0.443719 15.0711 0.500182 15.4186 0.675706C16.1415 1.04063 16.364 1.81362 15.9123 2.40146L8.18084 12.4773C8.04886 12.6501 7.86694 12.7941 7.65088 12.8969C7.43481 12.9996 7.19113 13.058 6.94097 13.0669C6.91662 13.0687 6.89447 13.0687 6.87012 13.0687Z'
                                  fill='#4C4448'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_10021_877'>
                                  <rect
                                    width='15.7029'
                                    height='13.0857'
                                    fill='white'
                                    transform='translate(0.908203 0.234375)'
                                  />
                                </clipPath>
                              </defs>
                            </svg>{" "}
                            <span className='span'>{item.p5}</span>
                          </Typography>
                          <Typography className='amount' mt={4}>
                            <span className='doller'> {item.$}</span>
                            {item.amount}
                          </Typography>
                        </Box>
                      </>
                    )
                  );
                })}
              </Grid>
              <Grid item lg={6.5} md={6} sm={12} xs={12}>
                <Box m={2.5} mt={3} className='paymentBox'>
                  <Typography className='PricingDaysHeading'>
                    Payment
                    <Box mt={1}>
                      <Divider className='Divider' />
                    </Box>
                  </Typography>
                  <Box mt={2}>
                    <Typography className='payWith'>Pay With:</Typography>
                    <Box
                      display={"flex"}
                      sx={{ flexWrap: "wrap", marginLeft: "-11px" }}
                      mt={1}>
                      <Box
                        display={"flex"}
                        sx={{
                          flexWrap: "wrap",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}>
                        <Radio
                          onClick={() => handleRadio(1)}
                          sx={{
                            color: "#ACACAC",
                            "&.Mui-checked": {
                              color: radio === 1 ? "#2FBD6A" : "",
                            },
                          }}
                        />
                        <Typography
                          className={radio === 1 ? "radio" : "radio1"}>
                          master card
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        sx={{
                          flexWrap: "wrap",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}>
                        <Radio
                          onClick={() => handleRadio(2)}
                          sx={{
                            color: "#ACACAC",
                            "&.Mui-checked": {
                              color: radio === 2 ? "#2FBD6A" : "",
                            },
                          }}
                        />
                        <Typography
                          className={radio === 2 ? "radio" : "radio1"}>
                          Visa card
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        sx={{
                          flexWrap: "wrap",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}>
                        {" "}
                        <Radio
                          onClick={() => handleRadio(3)}
                          sx={{
                            color: "#ACACAC",
                            "&.Mui-checked": {
                              color: radio === 3 ? "#2FBD6A" : "",
                            },
                          }}
                        />
                        <Typography
                          className={radio === 3 ? "radio" : "radio1"}>
                          Paypal card
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box mt={2}>
                    <Typography className='Otpheading'>
                      Enter your 4-digit card pin to confirm this payment
                    </Typography>
                  </Box>
                  <Box mt={3} display={"flex"} justifyContent={"center"}>
                    <div class='otp-field'>
                      <input type='text' maxlength='1' />
                      <input type='text' maxlength='1' />
                      <input type='text' maxlength='1' />
                      <input type='text' maxlength='1' />
                    </div>
                  </Box>
                  <Box mt={10}>
                    <Link to='/processing'>
                      <Button className='PayButton'>Confirm Payment</Button>
                    </Link>
                    <Typography className='reading'>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OtpPage;
