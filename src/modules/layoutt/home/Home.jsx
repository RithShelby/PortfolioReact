import React from "react";
import imgHome from "../../../assets/image/pro2.png";
const Home = () => {
  return (
    <>
      <div className="col-lg-12 ">
        <div className="row home_content d-flex justify-content-center">
          <h1 className="text-uppercase display-1 text_home text-center ">webdesigner</h1>
          <h1 className="text-uppercase display-1 text_outline text-center  ">
            &Front end React JS
          </h1>
          <div className="position-absolute img-banner d-flex justify-content-center">
            <img className="img-banner mt-5 pt-5 m-auto"src={imgHome} alt="" />
            <div className="position-absolute button_home mt-3">
              <button className="btn text-white ms-5 px-5 fs-5">
                Resume
              </button>
              <button className="btn text-white me-5 px-5 fs-5">
                Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
