import "./styles/styles.module.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CatBasedRecipes from "./components/categories/CatBasedRecipes";
import DetailsPage from "./components/detailsPage/DetailsPage";
import Footer from "./components/footer/Footer";
import FrontSection from "./components/frontSection/FrontSection";
import Navbar from "./components/navbar/Navbar";
import React from "react";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontSection />} />
          <Route path="/details/:slug" element={<DetailsPage />} />
          <Route path="/category/:id" element={<CatBasedRecipes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
