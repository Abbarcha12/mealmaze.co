import React, { useState } from "react";
import {
  Input,
  InputLabel,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import AllFoodMatch from "../../components/dashboardCompoents/AllFoodMatch";
import PasswordModel from "../../components/dashboardCompoents/passwordModel";
import Profile from "../../components/dashboardCompoents/Profile";
import Recipe from "../../components/dashboardCompoents/Recipe";
import PurchaseFoodmatchpopUp from "../../components/dashboardCompoents/PurchaseFoodmatchpopUp";
import {  useDispatch } from "react-redux";
import { handleOpenPopUp } from "../../Redux/actions/CreateMealAction";
const FoodMatch = () => {
  const [openModel, setOpenModel] = useState(false);
  const dispatch = useDispatch();
  

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
    setData((prevData) => [...prevData, metaData]);
    Data.push(Data);
  };
  const handleSubmit1 = () => {
    setData1((prevData) => [...prevData, metaData1]);

    Data1.push(Data1);
  };
  const handleSubmit2 = () => {
    setData2((prevData) => [...prevData, metaData2]);
    setMetaData2(" ");
    Data2.push(Data2);
  };

  const handleSubmit3 = () => {
    setData3((prevData) => [...prevData, metaData3]);
    setMetaData3(" ");
    Data2.push(Data3);
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
      <Grid container mt={1} spacing={2}>
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
                  Let's find the perfect meal to match your ingredients. Tell us
                  what you have in your pantry and we'll do the rest.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} display='flex' justifyContent={"space-evenly"}>
              <Button className='createNewPlan1' >
                10 Searches left
              </Button>

              <Button
                className='createNewPlan'
                onClick={()=>dispatch(handleOpenPopUp())}
               >
              Add FoodMatch
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3.5} md={4} sm={5} xs={6}>
          <Profile handleOpen={handleOpen} />
        </Grid>
        <Grid container mt={5} spacing={3} p={1}>
          {Btn === 1 && (
            <Grid item lg={4}>
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
                    <Grid item lg={12} mt={2}>
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
                    <Grid item lg={12} mt={2}>
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
                    <Grid item lg={12} mt={2}>
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
                    <Grid item lg={12} mt={4}>
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
                        }}>
                        View all Foodmatch
                      </Button>
                    </Grid>
                    <Grid item lg={12} mt={4}>
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
            <Grid item lg={4}>
              <Box className='MyplansBox'>
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
          <Grid item lg={8}>
            <Box
              sx={{
                borderRadius: "20px",
                background: "#FEFEFE",
                border: "1px solid  #E8ECEF",
                padding: "32px   ",
              }}>
              <Recipe />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FoodMatch;
