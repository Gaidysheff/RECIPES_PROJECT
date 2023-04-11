import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { Component } from "react";

import PostCard from "./PostCard";
import axios from "axios";

class Posts extends Component {
  recipe = { details: [] };
  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000/api/recipes")
      .then((res) => {
        data = res.data;
        this.setState({ details: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
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
            {/* {this.recipe.map((post) => (
              <Grid item xs>
                <PostCard
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  blogHref={`/details/${post.slug}`}
                  myDirection={"flex"}
                />
              </Grid>
            ))} */}
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
  }
}

export default Posts;
