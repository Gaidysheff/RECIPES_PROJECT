import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import PostCard from "./PostCard";
import axios from "axios";

const Posts = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/recipes/`)
          .then((res) => {
            setRecipe(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/PopularPostsApiView/`)
          .then((res) => {
            setPopular(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const [page, setPage] = useState(1);

  // const handleChange = (e, p) => {
  //   setPage(p);
  // };

  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          Свежие рецепты
        </Typography>
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
                image={post.image}
                recipeHref={`/details/${post.slug}`}
                myDirection={"flex"}
              />
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h4"
          bgcolor={"black"}
          color="white"
          align="center"
          mt={4}
          mb={4}
        >
          Самое Популярное
        </Typography>
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 1, md: 1 }}
          direction={"row"}
        >
          {popular.map((popular) => (
            <Grid item md={6} xs={6}>
              <PostCard
                title={popular.title}
                excerpt={popular.excerpt}
                image={`${process.env.REACT_APP_API_URL}${popular.image}`}
                recipeHref={`/details/${popular.slug}`}
                myDirection={"block"}
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
          {/* <Typography variant="h5" align="center" mt={2} mb={2}>
            Текущая страница: {page}
          </Typography> */}
          <Pagination
            count={5}
            color={"warning"}
            //  onChange={handleChange}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Posts;
