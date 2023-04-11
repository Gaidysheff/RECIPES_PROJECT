import "./styles/styles.module.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

import DetailsPage from "./components/detailsPage/DetailsPage";
import Footer from "./components/footer/Footer";
import FrontSection from "./components/frontSection/FrontSection";
import Navbar from "./components/navbar/Navbar";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontSection />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
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