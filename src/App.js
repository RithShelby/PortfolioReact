import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./modules/layoutt/layout";
import HomePage from "./modules/home/Home";
import About from "./modules/about/About";
import "../src/assets/css/index1.css";
import Project from "./modules/project/Project";
import TeamPhoto from "./modules/teamphoto/TeamPhoto";
import Contact from "./modules/contact/Contact";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogPage from "./modules/Blog/BlogPage";
import SoonPage from "./modules/SoonPage/SoonPage";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about_me" element={<About />} />
              <Route path="/blog" element={<BlogPage />} />
            <Route path="/project" element={<Project />} />
            {/*<Route path="/resume" element={<Resume />} />*/}
            <Route path="/team-photo" element={<SoonPage />} />
            <Route path="/contact-me" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
