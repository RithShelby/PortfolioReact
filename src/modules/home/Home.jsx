import React from "react";
import Profile from "../../assets/image/profileHome.png";
import HomeImg from "../../assets/image/HomeImage.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="row my-5">
      <div className="col-lg-6 mt-5">
        <main class=" d-flex flex-column text-center justify-content-center align-items-center">
          <h1 className="fw-bold ms-4">Hi,There! Who am I ?✌️</h1>
          <section class="animation fw-bold fs-2 ms-3">
            <div class="first">
              <div className="">Experience on React Js</div>
            </div>
            <div class="second">
              <div>Redux !</div>
            </div>
            <div class="third">
              <div>Need Hiring!</div>
            </div>
          </section>
        </main>
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
