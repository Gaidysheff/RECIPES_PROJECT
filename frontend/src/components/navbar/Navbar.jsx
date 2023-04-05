import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";

import React from "react";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return (
    <AppBar color="default" position="sticky" elevation={0}>
      <StyledToolbar>
        <Box>
          <Typography
            variant="h4"
            color={"tomato"}
            sx={{
              fontFamily: "Splash , cursive",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Крутое Меню и Точка :)
          </Typography>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
