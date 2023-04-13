import { Box, Stack, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";

const Category = () => {
  const [cat, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/category/`)
          .then((res) => {
            setCategory(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100%",
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
      mt={6}
      spacing={3}
      ml={3}
      sx={{ maxWidth: "100%", overflow: "auto" }}
    >
      {cat.map((category) => (
        <CardBox>
          <StyledCard
            sx={{ backgroundImage: `url(${category.image})` }}
          ></StyledCard>
          <StyledTypography
            sx={{ minHeight: "70px", display: "flex", alignItems: "center" }}
          >
            {category.name}
          </StyledTypography>
        </CardBox>
      ))}
    </Stack>
  );
};

export default Category;
