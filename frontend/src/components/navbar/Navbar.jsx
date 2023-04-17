import {
  AppBar,
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import RecipeSearch from "../search/RecipeSearch";

// import style from "./Navbar.module.scss";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });
  const MenuItems = [
    { Name: "Главная", Link: "" },
    { Name: "Рецепты", Link: "notfound" },
    { Name: "О нас", Link: "about" },
    { Name: "Подписаться", Link: "notfound" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AppBar color="default" position="sticky" elevation={0}>
        <StyledToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <Typography
              variant="h4"
              color={"tomato"}
              sx={{
                fontFamily: "Pacifico , cursive",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Круто & Точка :)
            </Typography>
          </Box>
          <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variant="body1">
                <Link
                  style={{ textDecoration: "none", color: "tomato" }}
                  href={`/${item.Link}`}
                >
                  {item.Name}
                </Link>
              </Typography>
            ))}
          </MenuBox>
          <Box flex={0.5}>
            <RecipeSearch />
            <MenuIcon
              sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </Box>
        </StyledToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
        >
          <List>
            <ListItem>
              {MenuItems.map((item) => (
                <ListItemButton>{item.Name}</ListItemButton>
              ))}
            </ListItem>
          </List>
          <TextField
            sx={{ display: { xs: "flex", md: "none" } }}
            color="warning"
            label="Поиск здесь!"
            variant="outlined"
          />
        </Drawer>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: 2,
        }}
      >
        <Typography align="center" variant="h5" mr={{ xs: 0, md: 1 }}>
          Простые рецепты для тех,
        </Typography>
        <Typography
          variant="h5"
          color={"tomato"}
          align="center"
          sx={{ fontFamily: "Pacifico , cursive" }}
        >
          кто любит вкусно поесть!
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
