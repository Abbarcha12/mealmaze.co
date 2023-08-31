import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Logo from "../../assest/logo.png";
import "../../components/dashboardCompoents/smallScreen.css";
import {
  Input,
  InputLabel,
  Grid,
  Tab,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import AllFoodMatch from "../../components/dashboardCompoents/AllFoodMatch";
import PasswordModel from "../../components/dashboardCompoents/passwordModel";
import Profile from "../../components/dashboardCompoents/Profile";
import Recipe from "../../components/dashboardCompoents/Recipe";
import PurchaseFoodmatchpopUp from "../../components/dashboardCompoents/PurchaseFoodmatchpopUp";
import { useDispatch } from "react-redux";
import { handleOpenPopUp } from "../../Redux/actions/CreateMealAction";
import Ingredients from "../../components/dashboardCompoents/Ingredients";
import DashboradMobileTopNavBar from "../../components/dashboardCompoents/DashboradMobileTopNavBar";
const FoodMatch = () => {
  const [openModel, setOpenModel] = useState(false);
  const [value, setValue] = React.useState("1");
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [Btn, setBtn] = useState(1);

  const HandleBtnId = (id) => {
    setBtn(id);
  };

  const handleOpen = () => {
    setOpenModel(true);
  };
  const handleClose = () => {
    setOpenModel(false);
  };

  const [metaData, setMetaData] = useState("");
  const [metaData1, setMetaData1] = useState("");
  const [metaData2, setMetaData2] = useState("");
  const [metaData3, setMetaData3] = useState("");

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const Data = [];
  const Data1 = [];
  const Data2 = [];
  const Data3 = [];

  const handleChangeData = (e) => {
    setMetaData(e.target.value);
  };
  const handleChangeData1 = (e) => {
    setMetaData1(e.target.value);
  };
  const handleChangeData2 = (e) => {
    setMetaData2(e.target.value);
  };
  const handleChangeData3 = (e) => {
    setMetaData3(e.target.value);
  };

  const handleSubmit = () => {
    if (metaData.trim() !== "") {
      setData((prevData) => [...prevData, metaData]);
      Data.push(Data);
    }
    setMetaData(" ");
  };
  const handleSubmit1 = () => {
    if (metaData1.trim() !== "") {
      setData1((prevData) => [...prevData, metaData1]);
      Data1.push(Data1);
    }
    setMetaData1("");
  };
  const handleSubmit2 = () => {
    if (metaData2.trim() !== "") {
      setData2((prevData) => [...prevData, metaData2]);
      Data2.push(metaData2);
    }
    setMetaData2("");
  };

  const handleSubmit3 = () => {
    if (metaData3.trim() !== "") {
      setData3((prevData) => [...prevData, metaData3]);
      Data3.push(metaData3);
    }
    setMetaData3("");
  };

  const handleClose1 = (itemToRemove) => {
    setData((prevData) => prevData.filter((item) => item !== itemToRemove));
  };
  const handleClose2 = (itemToRemove) => {
    setData1((prevData) => prevData.filter((item) => item !== itemToRemove));
  };
  const handleClose3 = (itemToRemove) => {
    setData2((prevData) => prevData.filter((item) => item !== itemToRemove));
  };
  const handleClose4 = (itemToRemove) => {
    setData3((prevData) => prevData.filter((item) => item !== itemToRemove));
  };
  return (
    <>
      <PasswordModel
        handleClose={handleClose}
        handleOpen={handleOpen}
        openModel={openModel}
        setOpenModel={setOpenModel}
      />
      <PurchaseFoodmatchpopUp />
      <Box>
        <Grid container mt={{ lg: 1 }} spacing={2} className='FoodMatch'>
          <Grid item lg={8.5} md={8} sm={7} xs={6}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Grid item lg={6}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "27px",
                      fontWeight: 700,
                      lineHeight: "37px",
                    }}>
                    Foodmatch
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#738391",
                      maxWidth: "431px",
                      display: "none",
                    }}>
                    Let's find the perfect meal to match your ingredients. Tell
                    us what you have in your pantry and we'll do the rest.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} display='flex' justifyContent={"space-evenly"}>
                <Button className='createNewPlan1'>10 Searches left</Button>
                <Button
                  className='createNewPlan'
                  onClick={() => dispatch(handleOpenPopUp())}>
                  Add FoodMatch
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3.5} md={4} sm={5} xs={6}>
            <Profile handleOpen={handleOpen} />
          </Grid>
        </Grid>
        <Grid container mt={{ lg: 5 }} spacing={3} p={1}>
          {Btn === 1 && (
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className='FoodmatchSmallScreen'>
                <DashboradMobileTopNavBar />
                <Box
                  mt={3}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "9px 12px 9px 14px",
                    borderRadius: "12px",
                    border: "1px solid #B5B3B4",
                  }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#252525",
                    }}>
                    10 Searches left
                  </Typography>
                  <Button
                    sx={{
                      padding: "11px 16px",
                      color: "#fff",
                      backgroundColor: "#0E983D",
                      borderRadius: "6px",
                      textTransform: "capitalize",
                    }}
                    onClick={() => dispatch(handleOpenPopUp())}>
                    Add Foodmatch
                  </Button>
                </Box>
                <Box
                  mt={3}
                  pb={2}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#252525",
                    }}>
                    Foodmatch
                  </Typography>
                  <Button
                  onClick={() => HandleBtnId(2)}
                    sx={{
                      padding: "6px 16px",
                      color: "#22C55E",
                      backgroundColor: "#DCFCE7",
                      borderRadius: "6px",
                      textTransform: "capitalize",
                    }}>
                    view All
                  </Button>
                </Box>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#738391" }}>
                  Let's find the perfect meal to match your ingredients. Tell us
                  what you have in your pantry and we'll do the rest.
                </Typography>
              </Box>
              <Box className='MyplansBox'>
                <Box>
                  <Typography
                    sx={{
                      color: "#252525",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}>
                    What ingredients do you have?
                  </Typography>

                  <Grid container mt={1}>
                    <Grid item lg={12} xs={12}>
                      <Box className='createMealBox1'>
                        <Box className='createMealBox'>
                          <Input
                            onChange={handleChangeData}
                            value={metaData}
                            sx={{
                              borderRadius: "63px",
                              width: "100%",
                              borderBottom: "none",
                              backgroundColor: "#FFF",
                              padding: "5px",
                            }}
                          />
                          <Button
                            onClick={() => handleSubmit()}
                            sx={{
                              position: "absolute",
                              right: "7px",
                              top: "3px",
                              color: "#62585D",
                              fontSize: "12px",
                              fontWeight: 400,
                              padding: "7px 12px",
                              borderRadius: "51px",
                              backgroundColor: "#F6F4F5",
                            }}>
                            Add
                          </Button>
                        </Box>
                        <Box display='flex' flexWrap={"wrap"}>
                          {data.map((item, index) => (
                            <Box
                              m={0.9}
                              key={index}
                              sx={{
                                padding: "8px  14px",
                                borderRadius: "33px",
                                backgroundColor: "#DBEAFE",
                                color: "#2563EB",
                                fontSize: "12px",
                                fontWeight: 500,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}>
                              <div> {item}</div>
                              <Box
                                marginLeft={"6px"}
                                onClick={() => handleClose1(item)}>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='10'
                                  height='10'
                                  viewBox='0 0 10 10'
                                  fill='none'>
                                  <g clip-path='url(#clip0_10239_2716)'>
                                    <path
                                      d='M6.66709 3.33293C6.58895 3.25482 6.48299 3.21094 6.3725 3.21094C6.26202 3.21094 6.15606 3.25482 6.07792 3.33293L5.00042 4.41043L3.92293 3.33293C3.84434 3.25703 3.73909 3.21504 3.62984 3.21598C3.52059 3.21693 3.41609 3.26075 3.33884 3.33801C3.26158 3.41526 3.21776 3.51977 3.21681 3.62901C3.21586 3.73826 3.25786 3.84351 3.33376 3.9221L4.41126 4.9996L3.33376 6.0771C3.25786 6.15568 3.21586 6.26093 3.21681 6.37018C3.21776 6.47943 3.26158 6.58394 3.33884 6.66119C3.41609 6.73844 3.52059 6.78226 3.62984 6.78321C3.73909 6.78416 3.84434 6.74216 3.92293 6.66627L5.00042 5.58876L6.07792 6.66627C6.15651 6.74216 6.26176 6.78416 6.37101 6.78321C6.48025 6.78226 6.58476 6.73844 6.66201 6.66119C6.73927 6.58394 6.78309 6.47943 6.78403 6.37018C6.78498 6.26093 6.74299 6.15568 6.66709 6.0771L5.58959 4.9996L6.66709 3.9221C6.7452 3.84396 6.78908 3.738 6.78908 3.62752C6.78908 3.51703 6.7452 3.41107 6.66709 3.33293Z'
                                      fill='#2563EB'
                                    />
                                    <path
                                      d='M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216643 4.00021 -0.0968503 5.00555 0.0960758 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99857 3.67436 9.47132 2.40342 8.53395 1.46605C7.59658 0.528678 6.32564 0.00143378 5 0V0ZM5 9.16667C4.17591 9.16667 3.37033 8.9223 2.68513 8.46446C1.99992 8.00662 1.46587 7.35587 1.1505 6.59451C0.835139 5.83316 0.752625 4.99538 0.913397 4.18712C1.07417 3.37887 1.47101 2.63644 2.05372 2.05372C2.63644 1.471 3.37887 1.07417 4.18713 0.913395C4.99538 0.752623 5.83316 0.835137 6.59452 1.1505C7.35588 1.46587 8.00662 1.99992 8.46446 2.68512C8.9223 3.37033 9.16667 4.17591 9.16667 5C9.16546 6.1047 8.72608 7.1638 7.94494 7.94494C7.1638 8.72608 6.1047 9.16545 5 9.16667Z'
                                      fill='#2563EB'
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id='clip0_10239_2716'>
                                      <rect
                                        width='10'
                                        height='10'
                                        fill='white'
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={12} sm={12} xs={12} mt={2}>
                      <InputLabel
                        sx={{
                          color: " #888587",
                          fontSize: { lg: "16px", xs: "13px" },
                          fontWeight: 400,
                          lineHeight: "24px",
                        }}>
                        Allergies?
                      </InputLabel>
                      <Box className='createMealBox1'>
                        <Box className='createMealBox'>
                          <Input
                            onChange={handleChangeData1}
                            value={metaData1}
                            sx={{
                              borderRadius: "63px",
                              width: "100%",
                              borderBottom: "none",
                              backgroundColor: "#FFF",
                              padding: "5px",
                            }}
                          />
                          <Button
                            onClick={() => handleSubmit1()}
                            sx={{
                              position: "absolute",
                              right: "7px",
                              top: "3px",
                              color: "#62585D",
                              fontSize: "12px",
                              fontWeight: 400,
                              padding: "7px 12px",
                              borderRadius: "51px",
                              backgroundColor: "#F6F4F5",
                            }}>
                            Add
                          </Button>
                        </Box>
                        <Box display='flex' flexWrap={"wrap"}>
                          {data1.map((item, index) => (
                            <Box
                              m={0.9}
                              key={index}
                              sx={{
                                padding: "8px  14px",
                                borderRadius: "33px",
                                backgroundColor: "#FEE2E2",
                                color: "#EF4444",
                                fontSize: "12px",
                                fontWeight: 500,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}>
                              <div> {item}</div>
                              <Box
                                marginLeft={"6px"}
                                onClick={() => handleClose2(item)}>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='10'
                                  height='10'
                                  viewBox='0 0 10 10'
                                  fill='none'>
                                  <g clip-path='url(#clip0_10239_2735)'>
                                    <path
                                      d='M6.66709 3.33293C6.58895 3.25482 6.48299 3.21094 6.3725 3.21094C6.26202 3.21094 6.15606 3.25482 6.07792 3.33293L5.00042 4.41043L3.92293 3.33293C3.84434 3.25703 3.73909 3.21504 3.62984 3.21598C3.52059 3.21693 3.41609 3.26075 3.33884 3.33801C3.26158 3.41526 3.21776 3.51977 3.21681 3.62901C3.21586 3.73826 3.25786 3.84351 3.33376 3.9221L4.41126 4.9996L3.33376 6.0771C3.25786 6.15568 3.21586 6.26093 3.21681 6.37018C3.21776 6.47943 3.26158 6.58394 3.33884 6.66119C3.41609 6.73844 3.52059 6.78226 3.62984 6.78321C3.73909 6.78416 3.84434 6.74216 3.92293 6.66627L5.00042 5.58876L6.07792 6.66627C6.15651 6.74216 6.26176 6.78416 6.37101 6.78321C6.48025 6.78226 6.58476 6.73844 6.66201 6.66119C6.73927 6.58394 6.78309 6.47943 6.78403 6.37018C6.78498 6.26093 6.74299 6.15568 6.66709 6.0771L5.58959 4.9996L6.66709 3.9221C6.7452 3.84396 6.78908 3.738 6.78908 3.62752C6.78908 3.51703 6.7452 3.41107 6.66709 3.33293Z'
                                      fill='#EF4444'
                                    />
                                    <path
                                      d='M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216643 4.00021 -0.0968503 5.00555 0.0960758 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99857 3.67436 9.47132 2.40342 8.53395 1.46605C7.59658 0.528678 6.32564 0.00143378 5 0V0ZM5 9.16667C4.17591 9.16667 3.37033 8.9223 2.68513 8.46446C1.99992 8.00662 1.46587 7.35587 1.1505 6.59451C0.835139 5.83316 0.752625 4.99538 0.913397 4.18712C1.07417 3.37887 1.47101 2.63644 2.05372 2.05372C2.63644 1.471 3.37887 1.07417 4.18713 0.913395C4.99538 0.752623 5.83316 0.835137 6.59452 1.1505C7.35588 1.46587 8.00662 1.99992 8.46446 2.68512C8.9223 3.37033 9.16667 4.17591 9.16667 5C9.16546 6.1047 8.72608 7.1638 7.94494 7.94494C7.1638 8.72608 6.1047 9.16545 5 9.16667Z'
                                      fill='#EF4444'
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id='clip0_10239_2735'>
                                      <rect
                                        width='10'
                                        height='10'
                                        fill='white'
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={12} mt={2} sm={12} xs={12}>
                      <InputLabel
                        sx={{
                          color: " #888587",
                          fontSize: { lg: "16px", xs: "14px" },
                          fontWeight: 400,
                          lineHeight: "24px",
                        }}>
                        Likes ?
                      </InputLabel>
                      <Box className='createMealBox1'>
                        <Box className='createMealBox'>
                          <Input
                            onChange={handleChangeData2}
                            value={metaData2}
                            sx={{
                              borderRadius: "63px",
                              width: "100%",
                              borderBottom: "none",
                              backgroundColor: "#FFF",
                              padding: "5px",
                            }}
                          />
                          <Button
                            onClick={() => handleSubmit2()}
                            sx={{
                              position: "absolute",
                              right: "7px",
                              top: "3px",
                              color: "#62585D",
                              fontSize: "12px",
                              fontWeight: 400,
                              padding: "7px 12px",
                              borderRadius: "51px",
                              backgroundColor: "#F6F4F5",
                            }}>
                            Add
                          </Button>
                        </Box>
                        <Box display='flex' flexWrap={"wrap"}>
                          {data2.map((item, index) => (
                            <Box
                              m={0.9}
                              key={index}
                              sx={{
                                padding: "8px  14px",
                                borderRadius: "33px",
                                backgroundColor: "#DCFCE7",
                                color: "#22C55E",
                                fontSize: "12px",
                                fontWeight: 500,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}>
                              <div>{item}</div>
                              <Box
                                marginLeft={"6px"}
                                onClick={() => handleClose3(item)}>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='10'
                                  height='10'
                                  viewBox='0 0 10 10'
                                  fill='none'>
                                  <g clip-path='url(#clip0_10057_997)'>
                                    <path
                                      d='M6.66709 3.33293C6.58895 3.25482 6.48299 3.21094 6.3725 3.21094C6.26202 3.21094 6.15606 3.25482 6.07792 3.33293L5.00042 4.41043L3.92293 3.33293C3.84434 3.25703 3.73909 3.21504 3.62984 3.21598C3.52059 3.21693 3.41609 3.26075 3.33884 3.33801C3.26158 3.41526 3.21776 3.51977 3.21681 3.62901C3.21586 3.73826 3.25786 3.84351 3.33376 3.9221L4.41126 4.9996L3.33376 6.0771C3.25786 6.15568 3.21586 6.26093 3.21681 6.37018C3.21776 6.47943 3.26158 6.58394 3.33884 6.66119C3.41609 6.73844 3.52059 6.78226 3.62984 6.78321C3.73909 6.78416 3.84434 6.74216 3.92293 6.66627L5.00042 5.58876L6.07792 6.66627C6.15651 6.74216 6.26176 6.78416 6.37101 6.78321C6.48025 6.78226 6.58476 6.73844 6.66201 6.66119C6.73927 6.58394 6.78309 6.47943 6.78403 6.37018C6.78498 6.26093 6.74299 6.15568 6.66709 6.0771L5.58959 4.9996L6.66709 3.9221C6.7452 3.84396 6.78908 3.738 6.78908 3.62752C6.78908 3.51703 6.7452 3.41107 6.66709 3.33293Z'
                                      fill='#22C55E'
                                    />
                                    <path
                                      d='M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216643 4.00021 -0.0968503 5.00555 0.0960758 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99857 3.67436 9.47132 2.40342 8.53395 1.46605C7.59658 0.528678 6.32564 0.00143378 5 0V0ZM5 9.16667C4.17591 9.16667 3.37033 8.9223 2.68513 8.46446C1.99992 8.00662 1.46587 7.35587 1.1505 6.59451C0.835139 5.83316 0.752625 4.99538 0.913397 4.18712C1.07417 3.37887 1.47101 2.63644 2.05372 2.05372C2.63644 1.471 3.37887 1.07417 4.18713 0.913395C4.99538 0.752623 5.83316 0.835137 6.59452 1.1505C7.35588 1.46587 8.00662 1.99992 8.46446 2.68512C8.9223 3.37033 9.16667 4.17591 9.16667 5C9.16546 6.1047 8.72608 7.1638 7.94494 7.94494C7.1638 8.72608 6.1047 9.16545 5 9.16667Z'
                                      fill='#22C55E'
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id='clip0_10057_997'>
                                      <rect
                                        width='10'
                                        height='10'
                                        fill='white'
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={12} mt={2} sm={12} xs={12}>
                      <InputLabel
                        sx={{
                          color: " #888587",
                          fontSize: { lg: "16px", xs: "14px" },
                          fontWeight: 400,
                          lineHeight: "24px",
                        }}>
                        DisLikes ?
                      </InputLabel>
                      <Box className='createMealBox1'>
                        <Box className='createMealBox'>
                          <Input
                            onChange={handleChangeData3}
                            value={metaData3}
                            sx={{
                              borderRadius: "63px",
                              width: "100%",
                              borderBottom: "none",
                              backgroundColor: "#FFF",
                              padding: "5px",
                            }}
                          />
                          <Button
                            onClick={() => handleSubmit3()}
                            sx={{
                              position: "absolute",
                              right: "7px",
                              top: "3px",
                              color: "#62585D",
                              fontSize: "12px",
                              fontWeight: 400,
                              padding: "7px 12px",
                              borderRadius: "51px",
                              backgroundColor: "#F6F4F5",
                            }}>
                            Add
                          </Button>
                        </Box>
                        <Box display='flex' flexWrap={"wrap"}>
                          {data3.map((item, index) => (
                            <Box
                              m={0.9}
                              key={index}
                              sx={{
                                padding: "8px  14px",
                                borderRadius: "33px",
                                backgroundColor: "#FEF3C7",
                                color: "#EAB308",
                                fontSize: "12px",
                                fontWeight: 500,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}>
                              <div>{item}</div>
                              <Box
                                marginLeft={"6px"}
                                onClick={() => handleClose4(item)}>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='10'
                                  height='10'
                                  viewBox='0 0 10 10'
                                  fill='none'>
                                  <g clip-path='url(#clip0_10239_2764)'>
                                    <path
                                      d='M6.66709 3.33293C6.58895 3.25482 6.48299 3.21094 6.3725 3.21094C6.26202 3.21094 6.15606 3.25482 6.07792 3.33293L5.00042 4.41043L3.92293 3.33293C3.84434 3.25703 3.73909 3.21504 3.62984 3.21598C3.52059 3.21693 3.41609 3.26075 3.33884 3.33801C3.26158 3.41526 3.21776 3.51977 3.21681 3.62901C3.21586 3.73826 3.25786 3.84351 3.33376 3.9221L4.41126 4.9996L3.33376 6.0771C3.25786 6.15568 3.21586 6.26093 3.21681 6.37018C3.21776 6.47943 3.26158 6.58394 3.33884 6.66119C3.41609 6.73844 3.52059 6.78226 3.62984 6.78321C3.73909 6.78416 3.84434 6.74216 3.92293 6.66627L5.00042 5.58876L6.07792 6.66627C6.15651 6.74216 6.26176 6.78416 6.37101 6.78321C6.48025 6.78226 6.58476 6.73844 6.66201 6.66119C6.73927 6.58394 6.78309 6.47943 6.78403 6.37018C6.78498 6.26093 6.74299 6.15568 6.66709 6.0771L5.58959 4.9996L6.66709 3.9221C6.7452 3.84396 6.78908 3.738 6.78908 3.62752C6.78908 3.51703 6.7452 3.41107 6.66709 3.33293Z'
                                      fill='#EAB308'
                                    />
                                    <path
                                      d='M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216643 4.00021 -0.0968503 5.00555 0.0960758 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99857 3.67436 9.47132 2.40342 8.53395 1.46605C7.59658 0.528678 6.32564 0.00143378 5 0V0ZM5 9.16667C4.17591 9.16667 3.37033 8.9223 2.68513 8.46446C1.99992 8.00662 1.46587 7.35587 1.1505 6.59451C0.835139 5.83316 0.752625 4.99538 0.913397 4.18712C1.07417 3.37887 1.47101 2.63644 2.05372 2.05372C2.63644 1.471 3.37887 1.07417 4.18713 0.913395C4.99538 0.752623 5.83316 0.835137 6.59452 1.1505C7.35588 1.46587 8.00662 1.99992 8.46446 2.68512C8.9223 3.37033 9.16667 4.17591 9.16667 5C9.16546 6.1047 8.72608 7.1638 7.94494 7.94494C7.1638 8.72608 6.1047 9.16545 5 9.16667Z'
                                      fill='#EAB308'
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id='clip0_10239_2764'>
                                      <rect
                                        width='10'
                                        height='10'
                                        fill='white'
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={12} mt={4} className="FoodMatch">
                      <Button
                        onClick={() => HandleBtnId(2)}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#DCFCE7",
                          },
                          color: "#22C55E",
                          fontSize: "18px",
                          fontWeight: "600",
                          backgroundColor: "#DCFCE7",
                          padding: "11px 18px",
                          borderRadius: "10px",
                          width: "100%",
                          textTransform:"capitalize"
                        }}>
                        View all Foodmatch
                      </Button>
                    </Grid>
                    <Grid item lg={12} mt={4} sm={12} xs={12}>
                      <Button
                        sx={{
                          "&:hover": {
                            backgroundColor: "#16A34A",
                          },
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "600",
                          backgroundColor: "#16A34A",
                          padding: "11px 18px",
                          borderRadius: "10px",
                          textTransform:"capitalize",
                           
                          width: "100%",
                        }}>
                        Generate
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          )}
          {/* AllFoodCompoents */}
          {Btn === 2 && (
            <Grid item lg={4} md={4} xs={12}>
              <Box className='FoodmatchSmallScreen'>
                <Box className='mobileHeader' mt={5}>
                  <Box>
                    <img src={Logo} alt='Logo' height={"20px"} />
                  </Box>
                  <Box>
                    <Button
                      onClick={() => HandleBtnId(1)}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#fff",
                        },
                        color: "#888587",
                        fontSize: "16px",
                        fontWeight: "600",
                        backgroundColor: "#fff",
                        padding: "8px 14px",
                        borderRadius: "10px",
                        width: "100%",
                      }}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='12'
                        viewBox='0 0 20 14'
                        fill='none'>
                        <path
                          d='M5.04812 5.83333L9.29937 1.645L7.625 0L0.5 7L7.625 14L9.29937 12.355L5.04812 8.16667H19.5V5.83333H5.04812Z'
                          fill='#62585D'
                        />
                      </svg>{" "}
                      <Typography
                        sx={{
                          color: "#62585D",
                          textTransform: "capitalize",
                          fontSize: "18px",
                          fontWeight: 600,
                          marginLeft: "20px",
                        }}>
                        back
                      </Typography>
                    </Button>
                  </Box>
                </Box>
                <Swiper
                  breakpoints={{
                    // When the screen width is 768px or less (small screens)
                    768: {
                      slidesPerView: 1, // Show 3 slides
                    },
                  }}
                  slidesPerView={1}
                  spaceBetween={3}
                  className='mySwiper'>
                  <SwiperSlide>
                    <Grid container mt={1}>
                      <Grid item lg={12} xs={12}>
                        <AllFoodMatch
                          day='Jun 21, 6:38 pm'
                          heading='Food Match 1'
                          title='Search with Steak And Steamed '
                        />
                      </Grid>
                      <Grid item lg={12} xs={12}>
                        <AllFoodMatch
                          day='Jun 21, 6:38 pm'
                          heading='Food Match 1'
                          title='Search with Steak And Steamed '
                        />
                      </Grid>{" "}
                      <Grid item lg={12} xs={12}>
                        <AllFoodMatch
                          day='Jun 21, 6:38 pm'
                          heading='Food Match 1'
                          title='Search with Steak And Steamed '
                        />
                      </Grid>{" "}
                      <Grid item lg={12} xs={12}>
                        <AllFoodMatch
                          day='Jun 21, 6:38 pm'
                          heading='Food Match 1'
                          title='Search with Steak And Steamed '
                        />
                      </Grid>{" "}
                      <Grid item lg={12}  sm={12} xs={12}>
                        <AllFoodMatch
                          day='Jun 21, 6:38 pm'
                          heading='Food Match 1'
                          title='Search with Steak And Steamed '
                        />
                      </Grid>{" "}
                      <Grid item lg={12} xs={12}>
                        <AllFoodMatch
                          day='Jun 21, 6:38 pm'
                          heading='Food Match 1'
                          title='Search with Steak And Steamed '
                        />
                      </Grid>{" "}
                      <Grid item lg={12} xs={12}>
                        <AllFoodMatch
                          day='Jun 21, 6:38 pm'
                          heading='Food Match 1'
                          title='Search with Steak And Steamed '
                        />
                      </Grid>
                    </Grid>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box sx={{ width: "100%", typography: "body1" }}>
                      <Box mt={1}>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: 600,
                            color: "#1E2029",
                          }}>
                          Grilled Chicken and roasted  vegetables
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { lg: "14px", sm: "14px", xs: "14px" },
                            fontWeight: "700",
                            lineHeight: "24px",
                            color: "#738391",
                           
                          }}>
                          A perfect meal with ingredients:{" "}
                          <span className='spanOrange'>asparagus,</span>
                          <span className='spanOrange'>penne,</span>
                          <span className='spanOrange'>salmon</span>.Allergies:
                          <span className='spanGreen'>
                            mushrooms
                          </span>  Likes:{" "}
                          <span className='yellowSpan'>Beef Lentils</span>
                          And Dislikes:{" "}
                          <span className='yellowSpan'>Eggplant</span>
                        </Typography>
                      </Box>
                      <TabContext value={value}>
                        <Box sx={{ paddingBottom: "20px" }} mt={2} p={1.5}>
                          <TabList
                            onChange={handleChange}
                            aria-label='lab API tabs example'>
                            <Tab label='Ingredients' value='1' />
                            <Tab label='Recipe' value='2' />
                          </TabList>
                        </Box>
                        <TabPanel value='1'>
                          <Ingredients />
                        </TabPanel>
                        <TabPanel value='2'>
                          <Recipe
                            heart={
                              <svg
                                width='30'
                                height='30'
                                viewBox='0 0 30 30'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M15 27.9403C14.5728 27.9403 14.1611 27.7856 13.8402 27.5045C12.6283 26.4448 11.4599 25.4489 10.429 24.5705L10.4237 24.5659C7.40131 21.9903 4.79138 19.7661 2.97544 17.5749C0.945525 15.1256 0 12.803 0 10.2659C0 7.80083 0.845272 5.52663 2.3799 3.86199C3.93286 2.17765 6.06374 1.25 8.38071 1.25C10.1124 1.25 11.6983 1.7975 13.0943 2.87715C13.7988 3.42207 14.4374 4.08904 15 4.86699C15.5628 4.08904 16.2011 3.42207 16.9058 2.87715C18.3018 1.7975 19.8877 1.25 21.6195 1.25C23.9362 1.25 26.0673 2.17765 27.6203 3.86199C29.1549 5.52663 29.9999 7.80083 29.9999 10.2659C29.9999 12.803 29.0546 15.1255 27.0247 17.5747C25.2087 19.7661 22.599 21.9901 19.5771 24.5655C18.5444 25.4453 17.3742 26.4427 16.1595 27.505C15.8385 27.7858 15.4264 27.9405 15 27.9403ZM8.38071 3.00734C6.56044 3.00734 4.88823 3.73384 3.67171 5.05308C2.43714 6.39229 1.75711 8.2435 1.75711 10.2659C1.75711 12.3997 2.55017 14.3081 4.32837 16.4537C6.04704 18.5276 8.60342 20.7061 11.5633 23.2286L11.5688 23.2332C12.6035 24.115 13.7766 25.1148 14.9975 26.1823C16.2256 25.1127 17.4005 24.1114 18.4373 23.2281C21.397 20.7056 23.9531 18.5276 25.6718 16.4537C27.4498 14.3081 28.2428 12.3997 28.2428 10.2659C28.2428 8.24344 27.5628 6.39224 26.3282 5.05308C25.1119 3.73384 23.4396 3.00734 21.6195 3.00734C20.286 3.00734 19.0617 3.43127 17.9807 4.2671C17.0173 5.01236 16.3463 5.95442 15.9528 6.6136C15.7505 6.95257 15.3944 7.15489 15 7.15489C14.6056 7.15489 14.2494 6.95257 14.0471 6.6136C13.654 5.95442 12.9828 5.01236 12.0192 4.2671C10.9383 3.43127 9.71395 3.00734 8.38071 3.00734Z'
                                  fill='#62585D'
                                />
                              </svg>
                            }
                          />
                        </TabPanel>
                      </TabContext>
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Box>
              <Box className={`MyplansBox ${"FoodMatch"}`}>
                <Box>
                  <Typography
                    sx={{
                      color: "#252525",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}>
                    All Foodmatches
                  </Typography>

                  <Grid container mt={1}>
                    <Grid item lg={12} xs={12}>
                      <AllFoodMatch
                        day='Jun 21, 6:38 pm'
                        heading='Food Match 1'
                        title='Search with Steak And Steamed '
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <AllFoodMatch
                        day='Jun 21, 6:38 pm'
                        heading='Food Match 1'
                        title='Search with Steak And Steamed '
                      />
                    </Grid>{" "}
                    <Grid item lg={12} xs={12}>
                      <AllFoodMatch
                        day='Jun 21, 6:38 pm'
                        heading='Food Match 1'
                        title='Search with Steak And Steamed '
                      />
                    </Grid>{" "}
                    <Grid item lg={12} xs={12}>
                      <AllFoodMatch
                        day='Jun 21, 6:38 pm'
                        heading='Food Match 1'
                        title='Search with Steak And Steamed '
                      />
                    </Grid>{" "}
                    <Grid item lg={12} xs={12}>
                      <AllFoodMatch
                        day='Jun 21, 6:38 pm'
                        heading='Food Match 1'
                        title='Search with Steak And Steamed '
                      />
                    </Grid>{" "}
                    <Grid item lg={12} xs={12}>
                      <AllFoodMatch
                        day='Jun 21, 6:38 pm'
                        heading='Food Match 1'
                        title='Search with Steak And Steamed '
                      />
                    </Grid>{" "}
                    <Grid item lg={12} xs={12}>
                      <AllFoodMatch
                        day='Jun 21, 6:38 pm'
                        heading='Food Match 1'
                        title='Search with Steak And Steamed '
                      />
                    </Grid>
                    <Grid item lg={12} mt={4}>
                      <Button
                        onClick={() => HandleBtnId(1)}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#D8D5D6",
                          },
                          color: "#62585D",
                          fontSize: "18px",
                          fontWeight: "600",
                          backgroundColor: "#D8D5D6",
                          padding: "12px 10px",
                          borderRadius: "10px",
                          width: "100%",
                        }}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='14'
                          viewBox='0 0 20 14'
                          fill='none'>
                          <path
                            d='M5.04812 5.83333L9.29937 1.645L7.625 0L0.5 7L7.625 14L9.29937 12.355L5.04812 8.16667H19.5V5.83333H5.04812Z'
                            fill='#62585D'
                          />
                        </svg>{" "}
                        <Typography
                          sx={{
                            color: "#62585D",
                            textTransform: "capitalize",
                            fontSize: "20px",
                            fontWeight: 600,
                            marginLeft: "20px",
                          }}>
                          Go back
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          )}
          <Grid item lg={8} md={8} className='FoodMatch'>
            <Grid
              container
              p={1}
              spacing={1.5}
              
              mt={0.1}
              sx={{
                borderRadius: "20px",
                background: "#FEFEFE",
                border: "1px solid  #E8ECEF",
              }}>
              <Grid item lg={6} md={6}>
                <Ingredients />
              </Grid>
              <Grid item lg={6} md={6}>
                <Recipe />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FoodMatch;
