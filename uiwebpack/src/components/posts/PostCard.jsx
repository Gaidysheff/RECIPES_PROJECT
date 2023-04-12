import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

import React from "react";

const PostCard = ({ myDirection, recipeHref, title, excerpt, image }) => {
  return (
    <Box mt={3}>
      <Link href={recipeHref} sx={{ textDecoration: "none" }}>
        <Card>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: `${myDirection}`,
                md: `${myDirection}`,
              },
              flexDirection: "row",
            }}
          >
            <CardMedia
              component={"img"}
              height="300px"
              image={image}
              alt="recipe_image"
              sx={{
                width: "350px",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.6,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.50s ease`,
                },
              }}
            />
            <CardContent sx={{ minHeight: "260px" }}>
              <Typography gutterBottom variant="h5" align="center">
                {title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {excerpt}
              </Typography>
              <CardActions>
                <Button sx={{ color: "tomato" }} size="large">
                  Поделиться
                </Button>
                <Button sx={{ color: "tomato" }} size="large">
                  Узнать больше
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default PostCard;
