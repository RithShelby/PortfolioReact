import React from "react";
import HomeImg from "../../assets/image/HomeImage.png"
import {Link} from "react-router-dom";
import SkillSet from "../about/SkillSet";
import BlogPage from "../Blog/BlogPage";
import Contact from "../contact/Contact";
const HomePage = () => {
  return (
    <div className="row my-2 animate__animated  animate__zoomInDown px-2">
      <div className="col-lg-6 my-5">
          <div className="text-dark">
            <p className="fs-5">Hello Web from <span className="fw-bold">Scratch 👋</span></p>
            <h1 className="display-1 about_content animate__bounceIn">
              I'm Rith
            </h1>
            <p className="fs-5 lh-lg text-secondary">
              I'm currently Junior Front-End Web Developer,
              specializing in front-end development. My main focus is on making the website to be dynamic that user
              enjoy. By the way , I currently improve myself on Integrate with API and use Redux for state management.
            </p>
          </div>
          <div className="d-flex">
              <Link to="/contact-me" className="btn btn-dark me-3">Get in touch</Link>
              <Link to="/project" className="btn btn-outline-dark">See my project</Link>
          </div>
      </div>
      <div className="col-lg-6">
        <img src={HomeImg} className="w-100 m-auto" alt="" />
      </div>
      <SkillSet />
      <BlogPage />
      <Contact/>
    </div>
  );
};

export default HomePage;
