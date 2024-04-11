import React from "react";
import img_content from "../../assets/image/pro1.JPG";
import img_team from "../../assets/image/team.jpg";
const About = () => {
  return (
    <div className="col-lg-12 about_bg">
      <div className="row mt-5">
        <div className="col-lg-4 col-md-12 col-sm-12 mb-5 pb-5 ">
          <div className="img_content position-relative px-5">
            <div className="position-absolute border_content"></div>
            <img
              className="w-100 ms-5 rounded-2 img_about"
              src={img_content}
              alt=""
            />
            <div className="box_content position-absolute rounded-3 w-100"></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mt-5 pt-3">
          <p className="fw-bold fs-4 ms-4 mt-5">About Me</p>
          <h1 className="display-1 about_content">I'm John Rith</h1>
          <h1 className="display-1 about_content">Web</h1>
          <h1 className="display-1 about_content">React JS</h1>
          <h5 className="about_content">Based in Phnom Penh , Cambodia</h5>
          <div className="row">
            <p className="fs-6">
              Once upon a time, there was a young boy who had a big dream of
              becoming a web developer. One day, he was sitting in a coffee shop
              when he met a man who worked as a mobile developer.The boy was
              curious about what the man was doing on his laptop, so he asked,
              "What's that?" The man replied, "I'm Coding."
            </p>
            <p>
              Then he asked the boy, "What do you want to be?" The boy replied,
              "I want to be a web developer." The man smiled and said, "In that
              case, you should start learning HTML, CSS, and JavaScript."
              Feeling excited, the boy went home and started learning what the
              man had suggested. And now, he is me, the boy who dreamed of
              becoming a web developer.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="img_content position-relative px-5">
            <div className="position-absolute border_content_1"></div>
            <img
              className="w-100 ms-5 rounded-2 img_about"
              src={img_team}
              alt=""
            />
            <div className="box_content1 position-absolute rounded-3  w-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
