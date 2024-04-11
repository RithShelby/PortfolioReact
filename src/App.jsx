import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./modules/layoutt/layout";
import HomePage from "./modules/home/Home";
import About from "./modules/about/About";
import "../src/assets/css/index1.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about_me" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
