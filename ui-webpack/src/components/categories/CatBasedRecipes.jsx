import { Container, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import PostCard from "../posts/PostCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const CatBasedRecipes = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/categoryBasedRecipes/${id}`
        );
        setRecipe(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        {recipe.map((post) => (
          <Grid item xs>
            <PostCard
              title={post.title}
              excerpt={post.excerpt}
              image={`${process.env.REACT_APP_API_URL}${post.image}`}
              recipeHref={`/categoryBasedRecipes/${id}`}
              myDirection={"flex"}
            />
          </Grid>
        ))}
      </Grid>
      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent="center"
        alignItems={"center"}
      >
        <Pagination count={10} color={"warning"} />
      </Stack>
    </Container>
  );
};

export default CatBasedRecipes;

