import { Box, Grid, Link, Typography, styled } from "@mui/material";

import React from "react";
import appetizer from "../../static/appetizer.jpg";
import burger from "../../static/burger1.jpg";
import drinks from "../../static/drinks.jpg";
import meat from "../../static/meat.jpg";

const ShowSetNew = () => {
  const SetItems = [
    {
      id: "20",
      name: "Мясные блюда",
      title: "meat",
      image: meat,
    },
    {
      id: "5",
      name: "Закуски",
      title: "appetizer",
      image: appetizer,
    },
    {
      id: "18",
      name: "Бургеры",
      title: "burger",
      image: burger,
    },
    {
      id: "1",
      name: "Напитки",
      title: "drinks",
      image: drinks,
    },
  ];

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
        {SetItems.map((item) => (
          <Grid item md={3} xs={6}>
            <Link
              style={{ textDecoration: "none" }}
              href={`category/${item.id}`}
            >
              <StyledCard sx={{ backgroundImage: `url(${item.image})` }}>
                <StyledWrapper>
                  <StyledTypography>{item.name}</StyledTypography>
                </StyledWrapper>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ShowSetNew;
