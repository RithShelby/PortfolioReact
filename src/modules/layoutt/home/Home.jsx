import React from "react";
const Home = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="row d-flex justify-content-center align-items-center">
          <main class="col-lg-12 container-text d-flex flex-column justify-content-center text-center mt-5 pt-5">
            <p className=" fw-bold display-5">What's Up Visitor 👋 , I'm Rith.</p> 
            <section class="animation fw-bold">
              <div class="first">
                <div className="">Web Designer</div>
              </div>
              <div class="second">
                <div>Front end developer</div>
              </div>
              <div class="third">
                <div>React JS</div>
              </div>
            </section>
          </main>
          {/* <div className="col-md-12 img-banner position-absolute d-flex justify-content-center align-items-center">
            <img className="img-banner mt-5 pt-5 m-auto"src={imgHome} alt="" />
            <div className="position-absolute button_home mt-3">
              <button className="btn text-white ms-5 px-5 fs-5">
                Resume
              </button>
              <button className="btn text-white me-5 px-5 fs-5">
                Portfolio
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
