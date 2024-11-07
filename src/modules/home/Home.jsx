import React from "react";

import HomeImg from "../../assets/image/HomeImage.png";
import Swiper from "../swiper/swiper";
const HomePage = () => {
  return (
    <div className="row my-2 animate__animated  animate__zoomInDown">
      <div className="col-lg-6">
        <div className=" row">
          <div className="text-dark">
            <h1 className="display-4 text-dark text-center fw-bold  animate__bounce">
              Who am I ?
            </h1>
            <div className="roller text-center">
              <span className="fs-4 fw-bold text-secondary" id="rolltext">
                Experienced on React Js
                <br />
                Redux Management State
                <br />
                Contact me if you interested!
                <br />
                <span className="text-dark" id="spare-time">
                  That's All
                </span>
              </span>
              <br />
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <h2 className="text-uppercase text-center text-decoration-underline mb-4 fw-bold">
            let me introduce myself
          </h2>
          <p className="fs-5 lh-lg text-secondary">
            I'm currently Intern's Front-end Developer at Kilo IT,
            specializing in front-end development. My focus is on utilizing
            Axios for API integration and Redux for state management. This
            internship is enhancing my skills in creating responsive user
            interfaces and dynamic web applications using modern JavaScript
            frameworks.
          </p>
        </div>
      </div>
      <div className="col-lg-6 d-flex">
        <img src={HomeImg} className="w-100 m-auto" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
