import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Divider, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "24px",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow:
    "0px 3.6213507652282715px 44.361541748046875px 0px rgba(74, 207, 119, 0.13), 0px 3.6213507652282715px 44.361541748046875px 0px rgba(74, 207, 119, 0.13)",
  pt: 2,
  px: 4,
  pb: 3,
};
const IngredientsPopUp = ({ Open, handleClose }) => {
  return (
    <Modal
      open={Open}
      onClose={handleClose}
      aria-labelledby='child-modal-title'
      aria-describedby='child-modal-description'>
      <Box sx={{ ...style,  width: {lg:400,md:400, sm:370,xs:290}  }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ color: "#4C4448", fontSize: "28px", fontWeight: "600" }}>
            Ingredients:
          </Typography>
          <Box onClick={handleClose}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'>
              <g clip-path='url(#clip0_10628_2967)'>
                <path
                  d='M29 7.41714L26.5829 5L17 14.5829L7.41714 5L5 7.41714L14.5829 17L5 26.5829L7.41714 29L17 19.4171L26.5829 29L29 26.5829L19.4171 17L29 7.41714Z'
                  fill='#4C4448'
                />
              </g>
              <defs>
                <clipPath id='clip0_10628_2967'>
                  <rect width='34' height='34' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
        <Divider />
        <Box mt={2}>
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#62585D",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g grilled chicken
            </Typography>
          </Box>{" "}
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#62585D",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g grilled chicken
            </Typography>
          </Box>{" "}
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#62585D",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g grilled chicken
            </Typography>
          </Box>
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#62585D",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g grilled chicken
            </Typography>
          </Box>
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#62585D",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g grilled chicken
            </Typography>
          </Box>
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='17'
              viewBox='0 0 7 17'
              fill='none'>
              <rect
                y='5.96973'
                width='6.76471'
                height='6.76471'
                rx='3.38235'
                fill='url(#paint0_linear_9958_572)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_9958_572'
                  x1='9.67455'
                  y1='5.29578'
                  x2='-1.41777'
                  y2='2.53973'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#8F95B2' />
                  <stop offset='1' stop-color='#CDF4FF' />
                </linearGradient>
              </defs>
            </svg>{" "}
            <Typography
              sx={{
                color: "#62585D",
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "15px",
              }}>
              200g grilled chicken
            </Typography>
          </Box>
          <Box mt={7}>
            <Divider />
            <Box mt={2} textAlign={"end"}>
              <Box>
                <Button
                  sx={{
                    "&:hover": { background: "#F6F4F5" },
                    borderRadius: "9px",
                    background: "#F6F4F5",
                    padding: "6px 20px",
                    textTransform: "capitalize",
                    color: "#888587",
                    fontSize: "16px",
                    fontWeight: 500,
                    marginRight: "18px",
                  }}>
                  copy
                </Button>
                <Button
                  sx={{
                    "&:hover": { background: "#F6F4F5" },
                    borderRadius: "9px",
                    background: "#F6F4F5",
                    padding: "6px 20px",
                    color: "#888587",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}>
                  share
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default IngredientsPopUp;
