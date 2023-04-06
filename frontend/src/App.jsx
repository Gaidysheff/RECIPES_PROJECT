import "./styles/styles.module.scss";

import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import Showset from "./components/showset/Showset";
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
        <Navbar />
        <Showset />
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
