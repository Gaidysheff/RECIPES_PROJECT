import { Box, Grid, Typography } from "@mui/material";

import PostCard from "./PostCard";
import React from "react";

const Posts = () => {
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
            <PostCard />
          </Grid>
          <Grid item xs>
            <PostCard />
          </Grid>
          <Grid item xs>
            <PostCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Posts;
