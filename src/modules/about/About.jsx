import React, { useState } from "react";
import AboutImg from "../../assets/image/About1.png";

import SkillSet from "./SkillSet";
const About = () => {
 
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex">
          <img className="w-75 m-auto rounded-2 " src={AboutImg} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
          <h1 className="display-1 about_content">Front-end</h1>
          <h1 className="display-1 about_content animate__bounceIn ">
            React JS
          </h1>
          <h5 className="about_content">Based in Phnom Penh , Cambodia</h5>
          <div className="row text-secondary">
            <p className="fs-5">
              Once upon a time, there was a young boy with a big dream to be
              <span className="mx-2 fw-bold">Web</span>
              developer . One day, while sitting in a coffee shop, he met a man
              who was working on his laptop. Curious, the boy asked, "What are
              you doing?" The man replied, "I'm coding." Curious about the man's
              work, the boy asked, "What do you do?" The man smiled and asked,
              "What do you want to be?" The boy said, "I want to build websites.
            </p>
            <p className="fs-5">
              " The man grinned and said, "Then you should start by learning
              HTML, CSS, and JavaScript." Excited, the boy went home and began
              learning exactly what the man had suggested. And now, he is me,
              the boy who dreamed to be
              <span className="mx-2 fw-bold">Web</span> developer.
            </p>
          </div>
        </div>
      </div>
      <SkillSet/>
    </div>
  );
};

export default About;
