import { Box, Container, Grid, Typography, styled } from "@mui/material";

import appetizer from "../../static/appetizer.jpg";
import burger from "../../static/burger1.jpg";
import drinks from "../../static/drinks.jpg";
import meat from "../../static/meat.jpg";

// import Category from "../categoryList/Category";

const ShowSet = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("md")]: {
      height: 200,
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
    color: "white",
    background: "tomato",
    fontSize: 20,
  });

  const StyledWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingTop: "140%",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "40%",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: "60%",
    },

    width: "80%",
  }));

  return (
    <>
      <Grid container direction={"row"} columnSpacing={1} rowSpacing={1}>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${meat})` }}>
            <StyledWrapper>
              <StyledTypography>Мясные блюда</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${appetizer})` }}>
            <StyledWrapper>
              <StyledTypography>Закуски</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
            <StyledWrapper>
              <StyledTypography>Бургеры</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${drinks})` }}>
            <StyledWrapper>
              <StyledTypography>Напитки</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowSet;
