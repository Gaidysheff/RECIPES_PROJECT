import { Box, Stack, Typography, styled } from "@mui/material";

import React from "react";
import breakfast from "../../static/breakfast2.jpg";
import dessert from "../../static/dessert.jpg";
import dinner from "../../static/dinner.jpg";
import drinks from "../../static/drinks.jpg";
import salad from "../../static/salad.jpg";

const Suggestions = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // borderRadius: "100%",
    overflow: "hidden",
    width: "100px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
    "&:hover": {
      opacity: 0.6,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));
  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontSize: 20,
  });
  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  return (
    <Stack
      container
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      mt={4}
      spacing={3}
      ml={3}
      sx={{ maxWidth: "100%", overflow: "auto" }}
    >
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${dessert})` }} />
        <StyledTypography>Dessert</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${drinks})` }} />
        <StyledTypography>Drinks</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${dinner})` }} />
        <StyledTypography>Dinner</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${breakfast})` }} />
        <StyledTypography>Breakfast</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${salad})` }} />
        <StyledTypography>Salad</StyledTypography>
      </CardBox>
    </Stack>
  );
};

export default Suggestions;
