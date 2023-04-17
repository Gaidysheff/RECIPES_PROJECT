import { Container, Typography } from "@mui/material";

import Eugene from "../../assets/Eugene-paint-5.jpg";
import React from "react";

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
        Немного о себе:
      </Typography>
      <Typography mb={3}>
        <img src={Eugene} alt="Author of the site" />
      </Typography>
    </Container>
  );
};

export default About;
