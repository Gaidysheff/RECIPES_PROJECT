import { Container, Link, Typography } from "@mui/material";

import React from "react";
import construction from "../../assets/Page_Under_Construction.jpg";

const Advice = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        color={"tomato"}
        sx={{
          fontFamily: "Pacifico , cursive",
          textAlign: { xs: "center", md: "left" },
        }}
        m={10}
      >
        К сожалению, пока на этой странице ничего не найдено. Перейдите на{" "}
        <Link href="/">Home</Link>
      </Typography>
      <Typography mb={3}>
        <img src={construction} alt="Under Construction" />
      </Typography>
    </Container>
  );
};

export default Advice;
