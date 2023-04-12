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
            <Route path="/details/:slug" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
