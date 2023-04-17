import "./styles/styles.module.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/about/About";
import Advice from "./components/advice/Advice";
import CatBasedRecipes from "./components/categories/CatBasedRecipes";
import DetailsPage from "./components/detailsPage/DetailsPage";
import Footer from "./components/footer/Footer";
import FrontSection from "./components/frontSection/FrontSection";
import Navbar from "./components/navbar/Navbar";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
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
          <Route path="/about" element={<About />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
