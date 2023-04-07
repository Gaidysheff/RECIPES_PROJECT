import { Box, Container, Stack } from "@mui/material";

import Posts from "../posts/Posts";
import RightBar from "../rightbar/RightBar";

const FrontSection = () => {
  return (
    <>
      <Stack direction={"row"} spacing={1} mt={3}>
        <Box flex={3}>
          <Posts />
        </Box>
        <Box flex={1} display={{ xs: "none", sm: "block" }}>
          <RightBar />
        </Box>
      </Stack>
    </>
  );
};

export default FrontSection;
