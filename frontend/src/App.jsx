import "./styles/styles.module.scss";

import React, { Component } from "react";

import Category from "./components/categories/Category";
import { Container } from "@mui/material";
import FrontSection from "./components/front-section/FrontSection";
import Navbar from "./components/navbar/Navbar";
import ShowSet from "./components/show-set/Showset";
import axios from "axios";

class App extends Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000")
      .then((res) => {
        data = res.data;
        this.setState({ details: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Container>
          <Navbar />
          <ShowSet />
          <Category />
          <FrontSection />
        </Container>
        <header>Данные из DJANGO</header>
        <hr /> <hr />
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.title}</h2>
              <p>{output.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default App;
