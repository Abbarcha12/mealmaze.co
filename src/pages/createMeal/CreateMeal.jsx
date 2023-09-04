import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Input,
  Button,
  Select,
} from "@mui/material";
import Logo from "../../assest/logo.png";

const CreateMeal = () => {
  const options1 = ["Eat Healthy", "Lose Weight", "Build Muscle"];
  const options2 = ["3 times", "4 times", "5 times", "6 times", "7 times"];
  const options3 = ["male", "female", "other"];
  const options = [
    "Anything",
    "Flexitarian",
    "Keto",
    "Paleo",
    "Pescatarian",
    "Vegetarian",
    "Vegan",
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const [metaData, setMetaData] = useState("");
  const [metaData1, setMetaData1] = useState("");
  const [metaData2, setMetaData2] = useState("");

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const Data = [];
  const Data1 = [];
  const Data2 = [];

  const handleChangeData = (e) => {
    setMetaData(e.target.value);
  };
  const handleChangeData1 = (e) => {
    setMetaData1(e.target.value);
  };
  const handleChangeData2 = (e) => {
    setMetaData2(e.target.value);
  };

  
  const handleSubmit = () => {
    if (metaData.trim() !== "") {
      setData((prevData) => [...prevData, metaData]);
      Data.push(metaData);
    }
    setMetaData(" ");
  };

  const handleSubmit1 = () => {
    if (metaData1.trim() !== "") {
      setData1((prevData) => [...prevData, metaData1]);
      Data1.push(metaData1);
    }
    setMetaData1(" ");
  };
  const handleSubmit2 = () => {
    if (metaData2.trim() !== "") {
      setData2((prevData) => [...prevData, metaData2]);
      Data2.push(metaData2);
    }
    setMetaData2(" ");
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
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
  return (
    <Box m={4}>
      <img src={Logo} alt={Logo} className='Logo' />
      <Grid container justifyContent={"center"} alignContent={"center"}>
        <Grid lg={10.7} xs={12}>
          <Box
            mt={4}
            p={3}
            sx={{
              borderRadius: "18px",
              backgroundColor: "#fff",
              boxShadow:
                "0px 3.6213507652282715px 44.361541748046875px 0px rgba(74, 207, 119, 0.13)",
            }}>
            <Typography
              sx={{
                color: "#09090B",
                fontFamily: "Inter",
                fontSize: { lg: "32px", xs: "22px" },
                marginTop: "10px",
                fontWeight: 600,
                lineHeight: "31.728px",
              }}>
              Let's create your meal plan
            </Typography>
            <Typography
              sx={{
                color: "#71717A",
                fontFamily: "Inter",
                fontSize: { lg: "18px", xs: "14px" },
                marginTop: { lg: "30px", xs: "15px" },
                fontWeight: 500,
                lineHeight: { lg: "30px", xs: "22px" },
              }}>
              Tell us a bit about yourself, your goals, diet and any allergies
              we should know and let mealmaze take care of <br /> the rest. Oh,
              and if you don't like Brussel sprouts don't forget to tell us.
            </Typography>
            <Grid container spacing={3} mt={1}>
              <Grid item lg={3} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",
                    fontSize: { lg: "15.5px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  What should we name this Mealplan
                </InputLabel>
                <Input
                  sx={{
                    borderRadius: "9px",
                    width: "100%",
                    borderBottom: "none",
                    border: "1.5px solid #B5B3B4",
                    backgroundColor: "#F8F8F8",
                    padding: "5px",
                  }}
                />
              </Grid>
              <Grid item lg={3} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",
                    fontSize: { lg: "16px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Age
                </InputLabel>
                <Input
                  sx={{
                    borderRadius: "9px",
                    width: "100%",
                    borderBottom: "none",
                    border: "1.5px solid #B5B3B4",
                    backgroundColor: "#F8F8F8",
                    padding: "5px",
                  }}
                />
              </Grid>
              <Grid item lg={3} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",

                    fontSize: { lg: "16px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Height (cm)
                </InputLabel>
                <Input
                  sx={{
                    borderRadius: "9px",
                    width: "100%",
                    borderBottom: "none",
                    border: "1.5px solid #B5B3B4",
                    backgroundColor: "#F8F8F8",
                    padding: "5px",
                  }}
                />
              </Grid>
              <Grid item lg={3} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",
                    fontSize: { lg: "16px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Weight (kg)
                </InputLabel>
                <Input
                  sx={{
                    borderRadius: "9px",
                    width: "100%",
                    borderBottom: "none",
                    border: "1.5px solid #B5B3B4",
                    backgroundColor: "#F8F8F8",
                    padding: "5px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} mt={1}>
              <Grid item lg={3} md={3} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",
                    fontSize: { lg: "16px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Sex
                </InputLabel>

                <Select
                  value={selectedOption3}
                  onChange={handleChange3}
                  sx={{
                    borderRadius: "9px",
                    width: "100%",
                    borderBottom: "none",
                    border: "1.5px solid #B5B3B4",
                    backgroundColor: "#F8F8F8",
                    padding: "0px",
                  }}>
                  {options3.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",

                    fontSize: { lg: "16px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Meals per day
                </InputLabel>

                <Select
                  value={selectedOption2}
                  onChange={handleChange2}
                  sx={{
                    borderRadius: "9px",
                    width: "100%",
                    borderBottom: "none",
                    border: "1.5px solid #B5B3B4",
                    backgroundColor: "#F8F8F8",
                    padding: "0px",
                  }}>
                  {options2.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",
                    fontSize: { lg: "16px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Your goal with mealmaze
                </InputLabel>

                <Select
                  value={selectedOption1}
                  onChange={handleChange1}
                  sx={{
                    borderRadius: "9px",
                    width: "100%",
                    borderBottom: "none",
                    border: "1.5px solid #B5B3B4",
                    backgroundColor: "#F8F8F8",
                    padding: "0px",
                  }}>
                  {options1.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",
                    fontSize: { lg: "16px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Diet
                </InputLabel>

                <Select
                  value={selectedOption}
                  onChange={handleChange}
                  sx={{
                    borderRadius: "9px",
                    width: "100%",
                    fontSize: { lg: "16px", xs: "14px" },
                    borderBottom: "none",
                    border: "1.5px solid #B5B3B4",
                    backgroundColor: "#F8F8F8",
                    padding: "0px",
                  }}>
                  {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>

            <Grid container spacing={3} mt={1}>
              <Grid item lg={4} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",
                    fontSize: { lg: "16px", xs: "14px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Allergies:
                </InputLabel>
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
                          onClick={() => handleClose1(item)}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='10'
                            height='10'
                            viewBox='0 0 10 10'
                            fill='none'>
                            <g clip-path='url(#clip0_10057_892)'>
                              <path
                                d='M6.9705 3.77483C6.90017 3.70453 6.80481 3.66504 6.70537 3.66504C6.60593 3.66504 6.51057 3.70453 6.44025 3.77483L5.4705 4.74458L4.50075 3.77483C4.43002 3.70652 4.3353 3.66873 4.23698 3.66958C4.13865 3.67044 4.0446 3.70987 3.97507 3.7794C3.90554 3.84893 3.8661 3.94298 3.86525 4.04131C3.86439 4.13963 3.90219 4.23436 3.9705 4.30508L4.94025 5.27483L3.9705 6.24458C3.90219 6.31531 3.86439 6.41004 3.86525 6.50836C3.8661 6.60668 3.90554 6.70074 3.97507 6.77027C4.0446 6.83979 4.13865 6.87923 4.23698 6.88009C4.3353 6.88094 4.43002 6.84314 4.50075 6.77483L5.4705 5.80508L6.44025 6.77483C6.51097 6.84314 6.6057 6.88094 6.70402 6.88009C6.80235 6.87923 6.8964 6.83979 6.96593 6.77027C7.03546 6.70074 7.07489 6.60668 7.07575 6.50836C7.0766 6.41004 7.03881 6.31531 6.9705 6.24458L6.00075 5.27483L6.9705 4.30508C7.0408 4.23476 7.08029 4.1394 7.08029 4.03996C7.08029 3.94052 7.0408 3.84516 6.9705 3.77483Z'
                                fill='#EF4444'
                              />
                              <path
                                d='M5.47071 0.774414C4.58069 0.774414 3.71066 1.03833 2.97064 1.5328C2.23062 2.02727 1.65384 2.73007 1.31325 3.55234C0.972653 4.37461 0.883538 5.27941 1.05717 6.15232C1.2308 7.02524 1.65939 7.82706 2.28872 8.4564C2.91806 9.08573 3.71988 9.51431 4.5928 9.68795C5.46571 9.86158 6.37051 9.77247 7.19278 9.43187C8.01505 9.09128 8.71785 8.5145 9.21232 7.77448C9.70678 7.03446 9.97071 6.16443 9.97071 5.27441C9.96941 4.08134 9.49489 2.93749 8.65126 2.09386C7.80763 1.25022 6.66378 0.775704 5.47071 0.774414V0.774414ZM5.47071 9.02442C4.72903 9.02442 4.004 8.80448 3.38732 8.39243C2.77063 7.98037 2.28999 7.3947 2.00616 6.70948C1.72233 6.02425 1.64807 5.27025 1.79276 4.54283C1.93745 3.8154 2.29461 3.14721 2.81905 2.62276C3.3435 2.09832 4.01169 1.74116 4.73912 1.59647C5.46655 1.45177 6.22055 1.52604 6.90577 1.80987C7.59099 2.09369 8.17666 2.57434 8.58872 3.19103C9.00077 3.80771 9.22071 4.53273 9.22071 5.27441C9.21961 6.26864 8.82417 7.22183 8.12115 7.92486C7.41813 8.62788 6.46493 9.02332 5.47071 9.02442Z'
                                fill='#EF4444'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_10057_892'>
                                <rect
                                  width='9'
                                  height='9'
                                  fill='white'
                                  transform='translate(0.970703 0.774414)'
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
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",

                    fontSize: { lg: "16px", xs: "12px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Dislikes - Any ingredients you want us to avoid?
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
                          backgroundColor: "#FEF9C3",
                          color: "#EAB308",
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
                            width='9'
                            height='9'
                            viewBox='0 0 9 9'
                            fill='none'>
                            <g clip-path='url(#clip0_10057_913)'>
                              <path
                                d='M5.99979 3.00042C5.92947 2.93012 5.8341 2.89062 5.73467 2.89062C5.63523 2.89062 5.53987 2.93012 5.46954 3.00042L4.4998 3.97017L3.53005 3.00042C3.45932 2.93211 3.3646 2.89431 3.26627 2.89517C3.16795 2.89602 3.07389 2.93546 3.00437 3.00499C2.93484 3.07452 2.8954 3.16857 2.89455 3.26689C2.89369 3.36522 2.93149 3.45994 2.9998 3.53067L3.96955 4.50042L2.9998 5.47017C2.93149 5.5409 2.89369 5.63562 2.89455 5.73395C2.8954 5.83227 2.93484 5.92632 3.00437 5.99585C3.07389 6.06538 3.16795 6.10482 3.26627 6.10567C3.3646 6.10653 3.45932 6.06873 3.53005 6.00042L4.4998 5.03067L5.46954 6.00042C5.54027 6.06873 5.63499 6.10653 5.73332 6.10567C5.83164 6.10482 5.9257 6.06538 5.99522 5.99585C6.06475 5.92632 6.10419 5.83227 6.10505 5.73395C6.1059 5.63562 6.0681 5.5409 5.99979 5.47017L5.03004 4.50042L5.99979 3.53067C6.07009 3.46035 6.10959 3.36498 6.10959 3.26554C6.10959 3.16611 6.07009 3.07074 5.99979 3.00042Z'
                                fill='#EAB308'
                              />
                              <path
                                d='M4.5 0C3.60999 0 2.73996 0.26392 1.99994 0.758387C1.25991 1.25285 0.683138 1.95566 0.342544 2.77792C0.00194979 3.60019 -0.0871652 4.50499 0.0864683 5.37791C0.260102 6.25082 0.688685 7.05264 1.31802 7.68198C1.94736 8.31132 2.74918 8.7399 3.6221 8.91353C4.49501 9.08717 5.39981 8.99805 6.22208 8.65746C7.04434 8.31686 7.74715 7.74009 8.24162 7.00007C8.73608 6.26005 9 5.39002 9 4.5C8.99871 3.30692 8.52419 2.16308 7.68056 1.31944C6.83692 0.475811 5.69308 0.00129041 4.5 0V0ZM4.5 8.25C3.75832 8.25 3.0333 8.03007 2.41661 7.61801C1.79993 7.20596 1.31928 6.62029 1.03545 5.93506C0.751625 5.24984 0.677363 4.49584 0.822057 3.76841C0.966752 3.04098 1.3239 2.3728 1.84835 1.84835C2.3728 1.3239 3.04098 0.96675 3.76841 0.822055C4.49584 0.677361 5.24984 0.751623 5.93507 1.03545C6.62029 1.31928 7.20596 1.79993 7.61801 2.41661C8.03007 3.0333 8.25 3.75832 8.25 4.5C8.24891 5.49423 7.85347 6.44742 7.15045 7.15044C6.44742 7.85347 5.49423 8.24891 4.5 8.25Z'
                                fill='#EAB308'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_10057_913'>
                                <rect width='9' height='9' fill='white' />
                              </clipPath>
                            </defs>
                          </svg>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <InputLabel
                  sx={{
                    color: " #888587",
                    fontSize: { lg: "16px", xs: "13px" },
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}>
                  Likes - Any ingredients you want us to use?
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
                                <rect width='10' height='10' fill='white' />
                              </clipPath>
                            </defs>
                          </svg>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              mt={5}
              pb={3}
              sx={{ justifyContent: { lg: "end", xs: "center" } }}>
              <Button href='/meal' className='generate'>
                Generate your meal plan
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateMeal;
