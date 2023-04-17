import { Box, Container, Stack, Typography, styled } from "@mui/material";

import { Link } from "@mui/material";
import React from "react";

const Footer = () => {
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
  return (
    <Box sx={{ bgcolor: "tomato", height: "200px" }}>
      <Container>
        <Stack direction={"row"}>
          <MenuBox flex={2} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variant="body1">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  href={`/${item.Link}`}
                >
                  {item.Name}
                </Link>
              </Typography>
            ))}
          </MenuBox>
          <Box flex={1} color={"white"} mt={1}>
            <Typography variant="body1">
              ©2023 Евгений Гайдышев <br /> Тестируем MUI (https://mui.com/)
            </Typography>
          </Box>
        </Stack>
        <Typography variant="h4" align="center" mt={8} color={"white"}>
          Всегда кушай вовремя, но не забывай учиться ... всю жизнь!
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

