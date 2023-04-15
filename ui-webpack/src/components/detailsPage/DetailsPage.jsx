import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import Category from "../categories/Category";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import React from "react";
import Suggestions from "../suggestions/Suggestions";
import axios from "axios";
import { useParams } from "react-router";

const DetailsPage = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState("");
  let { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/recipes/${slug}`)
          .then((res) => {
            setRecipeDetails(res.data);
            setRecipeIngredients(res.data.ingredients);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Container>
      <Category />
      <Typography variant="h3" align="center" mt={4}>
        {recipeDetails.title}
      </Typography>
      <Typography variant="body2" align="center" color={"GrayText"} p={4}>
        эти рецепты могут содержать партнерские ссылки. Пожалуйста, ознакомьтесь
        с моей политикой раскрытия информации.
      </Typography>
      <Typography variant="h5" align="center" m={2}>
        {recipeDetails.excerpt}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={recipeDetails.image}
          alt="burger"
        />
      </Box>
      <Typography variant="body1" align="center" m={2}>
        {recipeDetails.content}
      </Typography>
      <Typography variant="h3" align="center" mt={4}>
        Ингредиенты:
      </Typography>
      <List>
        {recipeIngredients.split(",").map((ingredients) => (
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={ingredients} />
          </ListItemButton>
        ))}
      </List>
      <Typography variant="body1" align="center" m={2}>
        {recipeDetails.contentTwo}
      </Typography>

      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        Вам может ещё понравиться:
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;
