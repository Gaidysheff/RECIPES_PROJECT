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
  let { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(
            // `http://127.0.0.1:8000/api/recipes/${slug}`
            `${process.env.REACT_APP_API_URL}/api/recipes/${slug}`
          )
          .then((res) => {
            console.log(res);
            setRecipeDetails(res.data);
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
        {slug}
      </Typography>
      <Typography variant="body2" align="center" color={"GrayText"} p={4}>
        эти рецепты могут содержать партнерские ссылки. Пожалуйста, ознакомьтесь
        с моей политикой раскрытия информации.
      </Typography>
      <Typography variant="body1" align="center" m={2}>
        {recipeDetails.content}
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
        {recipeDetails.contentTwo}
      </Typography>
      <Typography variant="h3" align="center" mt={4}>
        Ингредиенты
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Мясо" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Xлеб" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Лук" />
        </ListItemButton>
      </List>
      <Typography variant="body1" align="center" m={2}>
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Текста, обеспечивает скатился правилами букв они раз! От
        всех жизни составитель ручеек букв собрал раз необходимыми одна, над
        имеет lorem, маленький залетают которое мир семантика языком гор свой
        однажды строчка. Диких грамматики, безорфографичный ее однажды путь свое
        взгляд подзаголовок мир.
      </Typography>

      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        Вам может ещё понравиться:
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;
