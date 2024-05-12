import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./modules/layoutt/layout";
import HomePage from "./modules/home/Home";
import About from "./modules/about/About";
import "../src/assets/css/index1.css";
import Project from "./modules/project/Project";
import TeamPhoto from "./modules/teamphoto/TeamPhoto";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./modules/contact/Contact";
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about_me" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/team-photo" element={<TeamPhoto />} />
            <Route path="/contact-me" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
