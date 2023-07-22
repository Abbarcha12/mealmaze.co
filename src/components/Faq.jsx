import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionData } from "./data";
import {
  Grid,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
      <Container maxWidth='lg' textAlign={"center"}>
        <Grid
          pt={10}
          container
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}>
          <Grid item lg={12} xs={12}>
            <Typography className='homeSectionTwoHeading1'>FAQ</Typography>
          </Grid>
          <Grid lg={12} xs={12} pt={3}>
            <Typography
              sx={{ color: "#191A15", fontSize: {lg:"32px",sm:"24px", xs:"18px"} ,lineHeight:{lg:"1.5rem",xs:"1.4rem"
  }, fontWeight: 400 }}>
              Find answers to some common <br /> questions about mealmaze
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Container>
            <Grid container spacing={5} mt={3}>
              {accordionData.map((accordion) => (
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Accordion
                    key={accordion.id}
                    expanded={expanded === accordion.id}
                    onChange={handleAccordionChange(accordion.id)}
                    className={
                      expanded === accordion.id ? "Accordins" : "Accordins1"
                    }>
                    <AccordionSummary
                      expandIcon={
                        expanded === accordion.id ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='41'
                            height='41'
                            viewBox='0 0 41 41'
                            fill='none'>
                            <circle
                              cx='20.5'
                              cy='20.5'
                              r='20.5'
                              transform='rotate(180 20.5 20.5)'
                              fill='#166534'
                            />
                            <path
                              d='M27.1821 23.0166L20.5002 16.3648L13.8182 23.0166'
                              stroke='white'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='73'
                            height='73'
                            viewBox='0 0 73 73'
                            fill='none'>
                            <g filter='url(#filter0_d_10600_37)'>
                              <circle
                                cx='20.5'
                                cy='20.5'
                                r='20.5'
                                transform='matrix(-1 0 0 1 57 11)'
                                fill='white'
                              />
                            </g>
                            <path
                              d='M43.1821 28.9834L36.5002 35.6352L29.8182 28.9834'
                              stroke='#15803D'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <defs>
                              <filter
                                id='filter0_d_10600_37'
                                x='0'
                                y='0'
                                width='73'
                                height='73'
                                filterUnits='userSpaceOnUse'
                                color-interpolation-filters='sRGB'>
                                <feFlood
                                  flood-opacity='0'
                                  result='BackgroundImageFix'
                                />
                                <feColorMatrix
                                  in='SourceAlpha'
                                  type='matrix'
                                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  result='hardAlpha'
                                />
                                <feOffset dy='5' />
                                <feGaussianBlur stdDeviation='8' />
                                <feColorMatrix
                                  type='matrix'
                                  values='0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0'
                                />
                                <feBlend
                                  mode='normal'
                                  in2='BackgroundImageFix'
                                  result='effect1_dropShadow_10600_37'
                                />
                                <feBlend
                                  mode='normal'
                                  in='SourceGraphic'
                                  in2='effect1_dropShadow_10600_37'
                                  result='shape'
                                />
                              </filter>
                            </defs>
                          </svg>
                        )
                      }>
                      <Typography className={expanded===accordion.id?"Faqtitle":"Faqtitle"}>{accordion.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="FaqContent">{accordion.content}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Container>
    </>
  );
};

export default Faq;
