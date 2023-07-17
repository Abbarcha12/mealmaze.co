import React,{useState} from "react";
import Card from "../../components/Cards";
import { Grid, Typography, Box } from "@mui/material";
import Logo from "../../assest/logo.png";
import cardData from "./data";
import "./pricing.css"
const PricingCard = () => {
  const[backgroundColor,SetbackgroundColor] =useState("#FFF")
  const[TextColor,setTextColor] =useState("#2C2126")
const [cardId,setCardId]= useState(3)
  const handleClick =(id)=>{
    setCardId(id)
    console.log(id)
   }
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12} sm={12} m={2.5}>
          <img src={Logo} alt='logo' className='Logo' />
        </Grid>
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        textAlign="center"
        mt={2}
        p={1}
        >
        <Typography variant='h1' className='cardPageMainHeading'>
          Choose the Right Plan for your meals
        </Typography>
        <Typography variant='h3' className='cardSubPageMainHeading' mt={.8}>
          Simple and transparent pricing
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid lg={10} md={11} sm={12} xs={12}>
          <Box  sx={{display:"flex",flexWrap: 'wrap' ,justifyContent: 'space-around' ,alignItems:"center"}} >
            {cardData.map((item) => {
              return (
                <>
                  <Box  mt={2} className={`card ${cardId===item.id?"scale-animation":""}`} sx={{backgroundColor:cardId===item.id?"#166534":"#fff"}} >
                    <Card
                      key={item.id}
                      item={item}
                      handleClick={handleClick}
                      cardId={cardId}
                   
                    />
                  </Box>
                </>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PricingCard;
