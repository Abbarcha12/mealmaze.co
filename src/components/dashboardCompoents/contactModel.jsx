import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  InputLabel,
  FormControl,
  Button,
  Divider,
  Typography,
  Input,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import "./overview.css";
import DeleteAccount from "./DeleteAccount";
import { contactClose } from "../../Redux/actions/CreateMealAction";
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

const ContactModel = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.rootReducer.contactModel);

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
      <Modal
        open={initialState}
        onClose={() => dispatch(contactClose())}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'>
        <Box sx={{ ...style, width: { lg: 600, sm: 400, xs: 350 } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ color: "#4C4448", fontSize: "30px", fontWeight: "600" }}>
              Contact
            </Typography>
            <Box
              onClick={() => dispatch(contactClose())}
              sx={{ cursor: "pointer" }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='39'
                height='39'
                viewBox='0 0 49 49'
                fill='none'>
                <g clip-path='url(#clip0_10242_3262)'>
                  <path
                    d='M38.7904 13.0868L35.9116 10.208L24.4987 21.6209L13.0858 10.208L10.207 13.0868L21.6199 24.4997L10.207 35.9126L13.0858 38.7913L24.4987 27.3784L35.9116 38.7913L38.7904 35.9126L27.3774 24.4997L38.7904 13.0868Z'
                    fill='#4C4448'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_10242_3262'>
                    <rect width='49' height='49' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </Box>
          </Box>
          <Divider />
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
          <Box textAlign={"end"} mt={2}>
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
                padding: "12px 10px",
              }}>
              send
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ContactModel;
