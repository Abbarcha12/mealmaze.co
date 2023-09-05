import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Divider, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useDispatch, useSelector } from "react-redux";
import { handleClosePopUp } from "../../Redux/actions/CreateMealAction";

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
const PurchaseFoodmatchpopUp = () => {
  const initialState = useSelector(
    (state) => state.rootReducer.hanldeCreateMealPopUp
  );

  const dispatch = useDispatch();
  return (
    <Modal
      open={initialState}
      onClose={handleClosePopUp}
      aria-labelledby='child-modal-title'
      aria-describedby='child-modal-description'>
      <Box sx={{ ...style, width: {lg:600,sm:430,xs:300} }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" ,alignItems:"center" }}>
          <Typography
            sx={{ color: "#4C4448", fontSize: {lg:"30px",sm:"20px",xs:"16px"}, fontWeight: "600" }}>
            Purchase Foodmatch to add
          </Typography>
          <Box
            onClick={() => dispatch(handleClosePopUp())}
            sx={{ cursor: "pointer" }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='49'
              height='49'
              viewBox='0 0 49 49'
              fill='none'>
              <g clip-path='url(#clip0_10070_1880)'>
                <path
                  d='M38.7904 13.0858L35.9116 10.207L24.4987 21.6199L13.0858 10.207L10.207 13.0858L21.6199 24.4987L10.207 35.9116L13.0858 38.7904L24.4987 27.3774L35.9116 38.7904L38.7904 35.9116L27.3774 24.4987L38.7904 13.0858Z'
                  fill='#4C4448'
                />
              </g>
              <defs>
                <clipPath id='clip0_10070_1880'>
                  <rect width='49' height='49' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
        <Divider />
        <Link className='BuyBtn'>
          <Box
            mt={4}
            sx={{
              padding: {lg:"15px 26px",sm:"10px 16px",xs:"10px 16px"},
              display: "flex",
              justifyContent: "space-between",
              alignItems:"center",
              borderRadius: "24px",
              border: "2px solid #F0EDEE",
            }}>
            <Box>
              <Typography
                className='Money'
                sx={{ color: "#2C2126", fontWeight: 500, fontSize: {lg:"32px",sm:"18px",xs:"18px"} }}>
                $1.99
              </Typography>
              <Typography
                className='Money'
                sx={{display:"flex",justifyItems:"center", color: "#2C2126", fontWeight: 500, fontSize: {lg:"18px",sm:"12px",xs:"12px"} }}>
                <div><TaskAltIcon  sx={{ fontSize:{lg:"18px",sm:"14px",xs:"14px"},marginTop:{lg:"4px",xs:"2px"}}}/></div> <div>&nbsp; 10 Foodmatch searches</div>
              </Typography>
            </Box>
            <Button
              sx={{
              padding: {lg:"15px 26px",sm:"10px 16px",xs:"10px 16px"},

                borderRadius: "13px",
                width: {lg:"35%",sm:"30%",xs:"25%"},
                color: "#22C55E",
                backgroundColor: "#DCFCE7",
                fontSize: {lg:"18px",sm:"12px",xs:"12px"},
                fontWeight: 700,
              }}>
              Buy
            </Button>
          </Box>
        </Link>
        <Link className='BuyBtn'>
          <Box
            mt={4}
            sx={{
              padding: {lg:"15px 26px",sm:"10px 16px",xs:"10px 16px"},
              display: "flex",
              justifyContent: "space-between",
              alignItems:"center",
              borderRadius: "24px",
              border: "2px solid #F0EDEE",
            }}>
            <Box>
              <Typography
                className='Money'
                sx={{ color: "#2C2126", fontWeight: 500, fontSize: {lg:"32px",sm:"18px",xs:"18px"} }}>
                $2.99
              </Typography>
              <Typography
                className='Money'
                sx={{display:"flex",justifyItems:"center", color: "#2C2126", fontWeight: 500, fontSize: {lg:"18px",sm:"12px",xs:"12px"} }}>
                <div><TaskAltIcon  sx={{ fontSize:{lg:"18px",sm:"14px",xs:"14px"},marginTop:{lg:"4px",xs:"2px"}}}/></div> <div>&nbsp; 10 Foodmatch searches</div>
              </Typography>
            </Box>
            <Button
              sx={{
              padding: {lg:"15px 26px",sm:"10px 16px",xs:"10px 16px"},

                borderRadius: "13px",
                width: {lg:"35%",sm:"30%",xs:"25%"},
                color: "#22C55E",
                backgroundColor: "#DCFCE7",
                fontSize: {lg:"18px",sm:"12px",xs:"12px"},
                fontWeight: 700,
              }}>
              Buy
            </Button>
          </Box>
        </Link>
        <Link className='BuyBtn'>
          <Box
            mt={4}
            sx={{
              padding: {lg:"15px 26px",sm:"10px 16px",xs:"10px 16px"},
              display: "flex",
              justifyContent: "space-between",
              alignItems:"center",
              borderRadius: "24px",
              border: "2px solid #F0EDEE",
            }}>
            <Box>
              <Typography
                className='Money'
                sx={{ color: "#2C2126", fontWeight: 500, fontSize: {lg:"32px",sm:"18px",xs:"18px"} }}>
                $4.99
              </Typography>
              <Typography
                className='Money'
                sx={{display:"flex",justifyItems:"center", color: "#2C2126", fontWeight: 500, fontSize: {lg:"18px",sm:"12px",xs:"12px"} }}>
                <div><TaskAltIcon  sx={{ fontSize:{lg:"18px",sm:"14px",xs:"14px"},marginTop:{lg:"4px",xs:"2px"}}}/></div> <div>&nbsp; 10 Foodmatch searches</div>
              </Typography>
            </Box>
            <Button
              sx={{
              padding: {lg:"15px 26px",sm:"10px 16px",xs:"10px 16px"},

                borderRadius: "13px",
                width: {lg:"35%",sm:"30%",xs:"25%"},
                color: "#22C55E",
                backgroundColor: "#DCFCE7",
                fontSize: {lg:"18px",sm:"12px",xs:"12px"},
                fontWeight: 700,
              }}>
              Buy
            </Button>
          </Box>
        </Link>
      </Box>
    </Modal>
  );
};

export default PurchaseFoodmatchpopUp;
