import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import PostCard from "./PostCard";
import axios from "axios";

const Posts = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/recipes/"
          // `${process.env.REACT_APP_API_URL}/api/recipe/`
        );
        setRecipe(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          {" "}
          Свежие рецепты{" "}
        </Typography>
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 1, md: 1 }}
          direction={"column"}
        >
          <Grid item xs>
            <PostCard myDirection={"flex"} />
          </Grid>
          <Grid item xs>
            <PostCard myDirection={"flex"} />
          </Grid>
          <Grid item xs>
            <PostCard myDirection={"flex"} />
          </Grid>
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
          <Grid item xd={6} sm={6}>
            <PostCard myDirection={"block"} />
          </Grid>
          <Grid item xd={6} sm={6}>
            <PostCard myDirection={"block"} />
          </Grid>
          <Grid item xd={6} sm={6}>
            <PostCard myDirection={"block"} />
          </Grid>
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
      </Box>
    </>
  );
};

export default Posts;
