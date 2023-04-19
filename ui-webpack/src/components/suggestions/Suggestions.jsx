import { Box, Grid, Link, Stack, Typography, styled } from "@mui/material";

import React from "react";
import breakfast from "../../static/breakfast.jpg";
import dessert from "../../static/dessert.jpg";
import drinks from "../../static/drinks.jpg";
import salad from "../../static/salad.jpg";
import torty from "../../static/torty.jpg";
import vypechka from "../../static/vypechka.jpg";

const Suggestions = () => {
  const SetItems = [
    {
      id: "2",
      name: "Завтраки",
      title: "breakfast",
      image: breakfast,
    },
    {
      id: "7",
      name: "Салаты",
      title: "salad",
      image: salad,
    },
    {
      id: "8",
      name: "Десерты",
      title: "dessert",
      image: dessert,
    },
    {
      id: "1",
      name: "Напитки",
      title: "drinks",
      image: drinks,
    },
    {
      id: "10",
      name: "Выпечка",
      title: "vypechka",
      image: vypechka,
    },
    {
      id: "11",
      name: "Торты",
      title: "torty",
      image: torty,
    },
  ];

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
        <Grid container direction={"row"} columnSpacing={2} rowSpacing={1}>
          {SetItems.map((item) => (
            <Grid item mb={3}>
              <Link
                style={{ textDecoration: "none" }}
                href={`category/${item.id}`}
              >
                <StyledCard
                  sx={{ backgroundImage: `url(${item.image})` }}
                ></StyledCard>
                <StyledTypography>{item.name}</StyledTypography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardBox>
    </Stack>
  );
};

export default Suggestions;
