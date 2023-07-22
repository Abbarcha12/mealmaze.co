import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import DasboardLogo from "../../assest/DashboardLogo.png";
const Dasboard = () => {
  const [Id, setId] = useState(2);

  const handelClick = (id) => {
    setId(id);
  };
  return (
    <Grid
      container
      sx={{
        background: "#FAFAFA",
      }}
      spacing={5}>
      <Grid item lg={2.5}>
        <Box className='DashboradSideBar' textAlign={"center"}>
          <img src={DasboardLogo} alt='logo' height={"65px"} />
         <Box mt={4}>
         <Box mt={2}>
            <Link
              className={Id === 1 ? "DashboardLink1" : "DashboardLink"}
              onClick={() => handelClick(1)}>
              <div>
                {Id === 1 ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    fill='none'>
                    <path
                      d='M4.15584 8.45031C6.45105 8.45031 8.31169 6.67057 8.31169 4.47516C8.31169 2.27974 6.45105 0.5 4.15584 0.5C1.86063 0.5 0 2.27974 0 4.47516C0 6.67057 1.86063 8.45031 4.15584 8.45031Z'
                      fill='white'
                    />
                    <path
                      d='M16.6226 8.45031C18.9179 8.45031 20.7785 6.67057 20.7785 4.47516C20.7785 2.27974 18.9179 0.5 16.6226 0.5C14.3274 0.5 12.4668 2.27974 12.4668 4.47516C12.4668 6.67057 14.3274 8.45031 16.6226 8.45031Z'
                      fill='white'
                    />
                    <path
                      d='M4.15584 20.3761C6.45105 20.3761 8.31169 18.5964 8.31169 16.4009C8.31169 14.2055 6.45105 12.4258 4.15584 12.4258C1.86063 12.4258 0 14.2055 0 16.4009C0 18.5964 1.86063 20.3761 4.15584 20.3761Z'
                      fill='white'
                    />
                    <path
                      d='M16.6226 20.3761C18.9179 20.3761 20.7785 18.5964 20.7785 16.4009C20.7785 14.2055 18.9179 12.4258 16.6226 12.4258C14.3274 12.4258 12.4668 14.2055 12.4668 16.4009C12.4668 18.5964 14.3274 20.3761 16.6226 20.3761Z'
                      fill='white'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    fill='none'>
                    <path
                      d='M4.15584 8.45031C6.45105 8.45031 8.31169 6.67057 8.31169 4.47516C8.31169 2.27974 6.45105 0.5 4.15584 0.5C1.86063 0.5 0 2.27974 0 4.47516C0 6.67057 1.86063 8.45031 4.15584 8.45031Z'
                      fill='#7D8DA7'
                    />
                    <path
                      d='M16.6226 8.45031C18.9179 8.45031 20.7785 6.67057 20.7785 4.47516C20.7785 2.27974 18.9179 0.5 16.6226 0.5C14.3274 0.5 12.4668 2.27974 12.4668 4.47516C12.4668 6.67057 14.3274 8.45031 16.6226 8.45031Z'
                      fill='#7D8DA7'
                    />
                    <path
                      d='M4.15584 20.3761C6.45105 20.3761 8.31169 18.5964 8.31169 16.4009C8.31169 14.2055 6.45105 12.4258 4.15584 12.4258C1.86063 12.4258 0 14.2055 0 16.4009C0 18.5964 1.86063 20.3761 4.15584 20.3761Z'
                      fill='#7D8DA7'
                    />
                    <path
                      d='M16.6226 20.3761C18.9179 20.3761 20.7785 18.5964 20.7785 16.4009C20.7785 14.2055 18.9179 12.4258 16.6226 12.4258C14.3274 12.4258 12.4668 14.2055 12.4668 16.4009C12.4668 18.5964 14.3274 20.3761 16.6226 20.3761Z'
                      fill='#7D8DA7'
                    />
                  </svg>
                )}
              </div>
              <Typography
                className='DashboardText'
                sx={{ color: Id === 1 ? "#fff" : "#7D8DA7" }}>
                Dashboard
              </Typography>
            </Link>
          </Box>
          <Box mt={2}>
            <Link
              className={Id === 2 ? "DashboardLink1" : "DashboardLink"}
              onClick={() => handelClick(2)}>
              <div>
                {Id === 2 ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M12.89 5.88086H5.10999C3.39999 5.88086 2 7.28084 2 8.99084V20.3509C2 21.8009 3.04 22.4208 4.31 21.7108L8.23999 19.5208C8.65999 19.2908 9.34 19.2908 9.75 19.5208L13.68 21.7108C14.95 22.4208 15.99 21.8009 15.99 20.3509V8.99084C16 7.28084 14.6 5.88086 12.89 5.88086Z'
                      fill='white'
                    />
                    <path
                      d='M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z'
                      fill='#B5F0CA'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M12.89 5.88086H5.10999C3.39999 5.88086 2 7.28084 2 8.99084V20.3509C2 21.8009 3.04 22.4208 4.31 21.7108L8.23999 19.5208C8.65999 19.2908 9.34 19.2908 9.75 19.5208L13.68 21.7108C14.95 22.4208 15.99 21.8009 15.99 20.3509V8.99084C16 7.28084 14.6 5.88086 12.89 5.88086Z'
                      fill='#7D8DA7'
                    />
                    <path
                      d='M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z'
                      fill='#C6CCD8'
                    />
                  </svg>
                )}
              </div>
              <Typography
                className='DashboardText'
                sx={{ color: Id === 2 ? "#fff" : "#7D8DA7" }}>
                My Plans
              </Typography>
            </Link>
          </Box>
          <Box mt={2}>
            <Link
              className={Id === 2 ? "DashboardLink1" : "DashboardLink"}
              onClick={() => handelClick(2)}>
              <div>
                {Id === 2 ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M12.89 5.88086H5.10999C3.39999 5.88086 2 7.28084 2 8.99084V20.3509C2 21.8009 3.04 22.4208 4.31 21.7108L8.23999 19.5208C8.65999 19.2908 9.34 19.2908 9.75 19.5208L13.68 21.7108C14.95 22.4208 15.99 21.8009 15.99 20.3509V8.99084C16 7.28084 14.6 5.88086 12.89 5.88086Z'
                      fill='white'
                    />
                    <path
                      d='M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z'
                      fill='#B5F0CA'
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5002 4C18.2092 4.00001 18.8952 4.25109 19.4367 4.70872C19.9782 5.16636 20.3401 5.80096 20.4582 6.5H4.50023V5C4.50023 4.20435 4.8163 3.44129 5.37891 2.87868C5.94152 2.31607 6.70458 2 7.50023 2H10.0692C10.7373 2.0001 11.3863 2.22323 11.9132 2.634L12.8532 3.366C13.3802 3.77677 14.0291 3.9999 14.6972 4H17.5002ZM21.0262 8H3.97323C3.67497 8.00006 3.38049 8.06683 3.11137 8.19542C2.84225 8.32401 2.6053 8.51116 2.41787 8.74318C2.23044 8.97519 2.09727 9.24619 2.02812 9.53632C1.95898 9.82646 1.95559 10.1284 2.01823 10.42L3.82223 18.838C4.01398 19.733 4.50686 20.5351 5.21862 21.1106C5.93037 21.686 6.81795 21.9999 7.73323 22H17.2662C18.1815 21.9999 19.0691 21.686 19.7808 21.1106C20.4926 20.5351 20.9855 19.733 21.1772 18.838L22.9812 10.419C23.0437 10.1275 23.0402 9.82564 22.971 9.53563C22.9017 9.24562 22.7685 8.97476 22.5811 8.74286C22.3937 8.51097 22.1568 8.32391 21.8878 8.19538C21.6188 8.06685 21.3244 8.00009 21.0262 8ZM9.86423 14.706L11.7192 17.024C11.8129 17.141 11.9317 17.2354 12.0668 17.3003C12.2019 17.3652 12.3499 17.3988 12.4997 17.3988C12.6496 17.3988 12.7976 17.3652 12.9327 17.3003C13.0678 17.2354 13.1865 17.141 13.2802 17.024L15.1342 14.706C15.3712 14.411 15.5002 14.044 15.5002 13.666V13.591C15.5002 13.2763 15.4069 12.9687 15.2321 12.7071C15.0573 12.4455 14.8088 12.2415 14.5181 12.1211C14.2274 12.0007 13.9075 11.9692 13.5988 12.0306C13.2902 12.092 13.0067 12.2435 12.7842 12.466L12.5002 12.75L12.2152 12.466C11.9929 12.2434 11.7094 12.0917 11.4008 12.0302C11.0922 11.9688 10.7723 12.0002 10.4816 12.1207C10.1909 12.2412 9.94244 12.4452 9.76775 12.7069C9.59305 12.9686 9.49995 13.2763 9.50023 13.591V13.666C9.50023 14.044 9.62923 14.411 9.86423 14.706Z" fill="#7D8DA7"/>
                </svg>
                )}
              </div>
              <Typography
                className='DashboardText'
                sx={{ color: Id === 3 ? "#fff" : "#7D8DA7" }}>
           My ❤️ meals
              </Typography>
            </Link>
          </Box>
          <Box mt={2}>
            <Link
              className={Id === 4 ? "DashboardLink1" : "DashboardLink"}
              onClick={() => handelClick(4)}>
              <div>
                {Id === 4 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <g clip-path="url(#clip0_10003_1151)">
                    <path d="M12.5 3.457C12.3011 3.457 12.1103 3.37798 11.9697 3.23733C11.829 3.09668 11.75 2.90591 11.75 2.707V0.75C11.75 0.551088 11.829 0.360322 11.9697 0.21967C12.1103 0.0790176 12.3011 0 12.5 0C12.6989 0 12.8897 0.0790176 13.0303 0.21967C13.171 0.360322 13.25 0.551088 13.25 0.75V2.707C13.25 2.90591 13.171 3.09668 13.0303 3.23733C12.8897 3.37798 12.6989 3.457 12.5 3.457ZM19.071 6.179C18.9226 6.17907 18.7774 6.13508 18.654 6.05261C18.5306 5.97014 18.4344 5.8529 18.3776 5.71573C18.3209 5.57856 18.3061 5.42764 18.3352 5.28207C18.3643 5.1365 18.4359 5.00283 18.541 4.898L19.925 3.514C19.9947 3.44433 20.0774 3.38907 20.1684 3.35137C20.2594 3.31367 20.357 3.29426 20.4555 3.29426C20.554 3.29426 20.6516 3.31367 20.7426 3.35137C20.8336 3.38907 20.9163 3.44433 20.986 3.514C21.0557 3.58367 21.1109 3.66637 21.1486 3.7574C21.1863 3.84842 21.2057 3.94598 21.2057 4.0445C21.2057 4.14302 21.1863 4.24058 21.1486 4.3316C21.1109 4.42263 21.0557 4.50533 20.986 4.575L19.602 5.959C19.4611 6.09975 19.2701 6.17887 19.071 6.179ZM23.75 12.75H21.793C21.5941 12.75 21.4033 12.671 21.2627 12.5303C21.122 12.3897 21.043 12.1989 21.043 12C21.043 11.8011 21.122 11.6103 21.2627 11.4697C21.4033 11.329 21.5941 11.25 21.793 11.25H23.75C23.9489 11.25 24.1397 11.329 24.2803 11.4697C24.421 11.6103 24.5 11.8011 24.5 12C24.5 12.1989 24.421 12.3897 24.2803 12.5303C24.1397 12.671 23.9489 12.75 23.75 12.75ZM20.455 20.705C20.3565 20.7052 20.2589 20.6859 20.1679 20.6482C20.077 20.6104 19.9944 20.5549 19.925 20.485L18.541 19.101C18.4713 19.0313 18.4161 18.9486 18.3784 18.8576C18.3407 18.7666 18.3213 18.669 18.3213 18.5705C18.3213 18.472 18.3407 18.3744 18.3784 18.2834C18.4161 18.1924 18.4713 18.1097 18.541 18.04C18.6107 17.9703 18.6934 17.9151 18.7844 17.8774C18.8754 17.8397 18.973 17.8203 19.0715 17.8203C19.17 17.8203 19.2676 17.8397 19.3586 17.8774C19.4496 17.9151 19.5323 17.9703 19.602 18.04L20.986 19.424C21.0912 19.5289 21.1628 19.6627 21.1919 19.8083C21.2209 19.954 21.2061 20.105 21.1492 20.2422C21.0923 20.3794 20.996 20.4966 20.8724 20.579C20.7488 20.6614 20.6035 20.7053 20.455 20.705ZM4.545 20.705C4.39655 20.7051 4.25143 20.6611 4.128 20.5786C4.00457 20.4961 3.90839 20.3789 3.85163 20.2417C3.79488 20.1046 3.78011 19.9536 3.80919 19.8081C3.83827 19.6625 3.9099 19.5288 4.015 19.424L5.399 18.04C5.46867 17.9703 5.55137 17.9151 5.6424 17.8774C5.73342 17.8397 5.83098 17.8203 5.9295 17.8203C6.02802 17.8203 6.12558 17.8397 6.2166 17.8774C6.30763 17.9151 6.39033 17.9703 6.46 18.04C6.52967 18.1097 6.58493 18.1924 6.62263 18.2834C6.66033 18.3744 6.67974 18.472 6.67974 18.5705C6.67974 18.669 6.66033 18.7666 6.62263 18.8576C6.58493 18.9486 6.52967 19.0313 6.46 19.101L5.076 20.485C5.00637 20.5549 4.92361 20.6103 4.83247 20.648C4.74134 20.6858 4.64364 20.7052 4.545 20.705ZM3.207 12.75H1.25C1.05109 12.75 0.860322 12.671 0.71967 12.5303C0.579018 12.3897 0.5 12.1989 0.5 12C0.5 11.8011 0.579018 11.6103 0.71967 11.4697C0.860322 11.329 1.05109 11.25 1.25 11.25H3.207C3.40591 11.25 3.59668 11.329 3.73733 11.4697C3.87798 11.6103 3.957 11.8011 3.957 12C3.957 12.1989 3.87798 12.3897 3.73733 12.5303C3.59668 12.671 3.40591 12.75 3.207 12.75ZM5.929 6.179C5.83049 6.17924 5.73292 6.15992 5.64194 6.12215C5.55095 6.08439 5.46838 6.02893 5.399 5.959L4.015 4.575C3.94533 4.50533 3.89007 4.42263 3.85237 4.3316C3.81467 4.24058 3.79526 4.14302 3.79526 4.0445C3.79526 3.94598 3.81467 3.84842 3.85237 3.7574C3.89007 3.66637 3.94533 3.58367 4.015 3.514C4.08467 3.44433 4.16737 3.38907 4.2584 3.35137C4.34942 3.31367 4.44698 3.29426 4.5455 3.29426C4.64402 3.29426 4.74158 3.31367 4.8326 3.35137C4.92363 3.38907 5.00633 3.44433 5.076 3.514L6.46 4.898C6.56516 5.00289 6.63681 5.13665 6.66586 5.28231C6.69491 5.42798 6.68005 5.57899 6.62318 5.7162C6.5663 5.8534 6.46996 5.97064 6.34638 6.05303C6.2228 6.13542 6.07753 6.17927 5.929 6.179ZM15.5 21V22.25C15.5 23.21 14.71 24 13.75 24H11.25C10.41 24 9.5 23.36 9.5 21.96V21H15.5ZM16.91 6.56C16.0924 5.89941 15.1369 5.43071 14.1141 5.18841C13.0913 4.94611 12.0271 4.9364 11 5.16C8.35 5.71 6.2 7.87 5.65 10.52C5.09 13.24 6.11 15.94 8.29 17.59C8.88 18.03 9.29 18.71 9.43 19.5V19.51C9.45 19.5 9.48 19.5 9.5 19.5H15.5C15.52 19.5 15.53 19.5 15.55 19.51V19.5C15.69 18.74 16.14 18.04 16.83 17.5C17.6629 16.8457 18.3361 16.0105 18.7987 15.0576C19.2613 14.1048 19.5011 13.0592 19.5 12C19.5 9.88 18.56 7.9 16.91 6.56ZM16.25 12.5C15.84 12.5 15.5 12.16 15.5 11.75C15.5 10.23 14.27 9 12.75 9C12.34 9 12 8.66 12 8.25C12 7.84 12.34 7.5 12.75 7.5C13.8764 7.50264 14.9558 7.95126 15.7523 8.74771C16.5487 9.54417 16.9974 10.6236 17 11.75C17 12.16 16.66 12.5 16.25 12.5Z" fill="#22C55E"/>
                    <path d="M9.42969 19.5H9.49969C9.47969 19.5 9.44969 19.5 9.42969 19.51V19.5ZM15.5497 19.5V19.51C15.5297 19.5 15.5197 19.5 15.4997 19.5H15.5497Z" fill="#7D8DA7"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_10003_1151">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_10052_661)">
                    <path d="M12 3.457C11.8011 3.457 11.6103 3.37798 11.4697 3.23733C11.329 3.09668 11.25 2.90591 11.25 2.707V0.75C11.25 0.551088 11.329 0.360322 11.4697 0.21967C11.6103 0.0790176 11.8011 0 12 0C12.1989 0 12.3897 0.0790176 12.5303 0.21967C12.671 0.360322 12.75 0.551088 12.75 0.75V2.707C12.75 2.90591 12.671 3.09668 12.5303 3.23733C12.3897 3.37798 12.1989 3.457 12 3.457ZM18.571 6.179C18.4226 6.17907 18.2774 6.13508 18.154 6.05261C18.0306 5.97014 17.9344 5.8529 17.8776 5.71573C17.8209 5.57856 17.8061 5.42764 17.8352 5.28207C17.8643 5.1365 17.9359 5.00283 18.041 4.898L19.425 3.514C19.4947 3.44433 19.5774 3.38907 19.6684 3.35137C19.7594 3.31367 19.857 3.29426 19.9555 3.29426C20.054 3.29426 20.1516 3.31367 20.2426 3.35137C20.3336 3.38907 20.4163 3.44433 20.486 3.514C20.5557 3.58367 20.6109 3.66637 20.6486 3.7574C20.6863 3.84842 20.7057 3.94598 20.7057 4.0445C20.7057 4.14302 20.6863 4.24058 20.6486 4.3316C20.6109 4.42263 20.5557 4.50533 20.486 4.575L19.102 5.959C18.9611 6.09975 18.7701 6.17887 18.571 6.179ZM23.25 12.75H21.293C21.0941 12.75 20.9033 12.671 20.7627 12.5303C20.622 12.3897 20.543 12.1989 20.543 12C20.543 11.8011 20.622 11.6103 20.7627 11.4697C20.9033 11.329 21.0941 11.25 21.293 11.25H23.25C23.4489 11.25 23.6397 11.329 23.7803 11.4697C23.921 11.6103 24 11.8011 24 12C24 12.1989 23.921 12.3897 23.7803 12.5303C23.6397 12.671 23.4489 12.75 23.25 12.75ZM19.955 20.705C19.8565 20.7052 19.7589 20.6859 19.6679 20.6482C19.577 20.6104 19.4944 20.5549 19.425 20.485L18.041 19.101C17.9713 19.0313 17.9161 18.9486 17.8784 18.8576C17.8407 18.7666 17.8213 18.669 17.8213 18.5705C17.8213 18.472 17.8407 18.3744 17.8784 18.2834C17.9161 18.1924 17.9713 18.1097 18.041 18.04C18.1107 17.9703 18.1934 17.9151 18.2844 17.8774C18.3754 17.8397 18.473 17.8203 18.5715 17.8203C18.67 17.8203 18.7676 17.8397 18.8586 17.8774C18.9496 17.9151 19.0323 17.9703 19.102 18.04L20.486 19.424C20.5912 19.5289 20.6628 19.6627 20.6919 19.8083C20.7209 19.954 20.7061 20.105 20.6492 20.2422C20.5923 20.3794 20.496 20.4966 20.3724 20.579C20.2488 20.6614 20.1035 20.7053 19.955 20.705ZM4.045 20.705C3.89655 20.7051 3.75143 20.6611 3.628 20.5786C3.50457 20.4961 3.40839 20.3789 3.35163 20.2417C3.29488 20.1046 3.28011 19.9536 3.30919 19.8081C3.33827 19.6625 3.4099 19.5288 3.515 19.424L4.899 18.04C4.96867 17.9703 5.05137 17.9151 5.1424 17.8774C5.23342 17.8397 5.33098 17.8203 5.4295 17.8203C5.52802 17.8203 5.62558 17.8397 5.7166 17.8774C5.80763 17.9151 5.89033 17.9703 5.96 18.04C6.02967 18.1097 6.08493 18.1924 6.12263 18.2834C6.16033 18.3744 6.17974 18.472 6.17974 18.5705C6.17974 18.669 6.16033 18.7666 6.12263 18.8576C6.08493 18.9486 6.02967 19.0313 5.96 19.101L4.576 20.485C4.50637 20.5549 4.42361 20.6103 4.33247 20.648C4.24134 20.6858 4.14364 20.7052 4.045 20.705ZM2.707 12.75H0.75C0.551088 12.75 0.360322 12.671 0.21967 12.5303C0.0790176 12.3897 0 12.1989 0 12C0 11.8011 0.0790176 11.6103 0.21967 11.4697C0.360322 11.329 0.551088 11.25 0.75 11.25H2.707C2.90591 11.25 3.09668 11.329 3.23733 11.4697C3.37798 11.6103 3.457 11.8011 3.457 12C3.457 12.1989 3.37798 12.3897 3.23733 12.5303C3.09668 12.671 2.90591 12.75 2.707 12.75ZM5.429 6.179C5.33049 6.17924 5.23292 6.15992 5.14194 6.12215C5.05095 6.08439 4.96838 6.02893 4.899 5.959L3.515 4.575C3.44533 4.50533 3.39007 4.42263 3.35237 4.3316C3.31467 4.24058 3.29526 4.14302 3.29526 4.0445C3.29526 3.94598 3.31467 3.84842 3.35237 3.7574C3.39007 3.66637 3.44533 3.58367 3.515 3.514C3.58467 3.44433 3.66737 3.38907 3.7584 3.35137C3.84942 3.31367 3.94698 3.29426 4.0455 3.29426C4.14402 3.29426 4.24158 3.31367 4.3326 3.35137C4.42363 3.38907 4.50633 3.44433 4.576 3.514L5.96 4.898C6.06516 5.00289 6.13681 5.13665 6.16586 5.28231C6.19491 5.42798 6.18005 5.57899 6.12318 5.7162C6.0663 5.8534 5.96996 5.97064 5.84638 6.05303C5.7228 6.13542 5.57753 6.17927 5.429 6.179ZM15 21V22.25C15 23.21 14.21 24 13.25 24H10.75C9.91 24 9 23.36 9 21.96V21H15ZM16.41 6.56C15.5924 5.89941 14.6369 5.43071 13.6141 5.18841C12.5913 4.94611 11.5271 4.9364 10.5 5.16C7.85 5.71 5.7 7.87 5.15 10.52C4.59 13.24 5.61 15.94 7.79 17.59C8.38 18.03 8.79 18.71 8.93 19.5V19.51C8.95 19.5 8.98 19.5 9 19.5H15C15.02 19.5 15.03 19.5 15.05 19.51V19.5C15.19 18.74 15.64 18.04 16.33 17.5C17.1629 16.8457 17.8361 16.0105 18.2987 15.0576C18.7613 14.1048 19.0011 13.0592 19 12C19 9.88 18.06 7.9 16.41 6.56ZM15.75 12.5C15.34 12.5 15 12.16 15 11.75C15 10.23 13.77 9 12.25 9C11.84 9 11.5 8.66 11.5 8.25C11.5 7.84 11.84 7.5 12.25 7.5C13.3764 7.50264 14.4558 7.95126 15.2523 8.74771C16.0487 9.54417 16.4974 10.6236 16.5 11.75C16.5 12.16 16.16 12.5 15.75 12.5Z" fill="#7D8DA7"/>
                    <path d="M8.92969 19.5H8.99969C8.97969 19.5 8.94969 19.5 8.92969 19.51V19.5ZM15.0497 19.5V19.51C15.0297 19.5 15.0197 19.5 14.9997 19.5H15.0497Z" fill="#7D8DA7"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_10052_661">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                )}
              </div>
              <Typography
                className='DashboardText'
                sx={{ color: Id === 4 ? "#fff" : "#7D8DA7" }}>
               Foodmatch
              </Typography>
            </Link>
          </Box>
         </Box>
        </Box>
      </Grid>
      <Grid item lg={9.5}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
        expedita vel mollitia nulla a, obcaecati, aut fugiat recusandae sapiente
        blanditiis corrupti. Quae, perspiciatis architecto repellat fugiat
        beatae inventore dolore voluptatum!
      </Grid>
    </Grid>
  );
};

export default Dasboard;
