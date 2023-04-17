import { Container, Typography } from "@mui/material";

import React from "react";
import construction from "../../assets/Page_Under_Construction.jpg";

const About = () => {
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
        m={5}
      >
        Немного информации о нас:
      </Typography>
      <Typography mb={3}>
        <img src={construction} alt="Under Construction" />
      </Typography>
    </Container>
  );
};

export default About;
