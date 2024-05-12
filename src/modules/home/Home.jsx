import React from "react";

import HomeImg from "../../assets/image/HomeImage.png";
const HomePage = () => {
  return (
    <div className="row my-2">
      <div className="col-lg-6 mt-5">
        <div class=" row">
          <div class="text-dark">
            <h1 className="display-4 text-dark text-center fw-bold">
              Who am I ?
            </h1>
            <div class="roller text-center">
              <span class="fs-4 fw-bold text-secondary" id="rolltext">
                Experienced on React Js
                <br />
                Redux Managment State
                <br />
                Need Hiring !
                <br />
                <span class="text-dark" id="spare-time">
                  That's All
                </span>
              </span>
              <br />
            </div>
          </div>
        </div>
        <div className="text-start mt-5 ms-4">
          <h2 className="text-uppercase text-center text-decoration-underline  mb-4">
            let me introduce myself
          </h2>
          <p className="fs-5 lh-lg text-secondary">
            I'm currently interning as a React.js Developer at Kilo IT,
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
