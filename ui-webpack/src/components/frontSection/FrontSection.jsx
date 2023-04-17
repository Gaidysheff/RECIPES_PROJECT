import { Box, Container, Stack } from "@mui/material";

import Category from "../categories/Category";
import Posts from "../posts/Posts";
import React from "react";
import RightBar from "../rightBar/RightBar";
import ShowSetNew from "../showSet/ShowSetNew";

const FrontSection = () => {
  return (
    <>
      <Container>
        <ShowSetNew />
        <Category />
        <Stack direction={"row"} spacing={1} mt={3}>
          <Box flex={3}>
            <Posts />
          </Box>
          <Box flex={1} display={{ xs: "none", sm: "block" }}>
            <RightBar />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default FrontSection;
