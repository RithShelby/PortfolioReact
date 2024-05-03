import React, { useState } from "react";
import AboutImg from "../../assets/image/aboutImg.png";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
const About = () => {
  const [showItem1, setShowItem1] = useState(true);
  const [showItem2, setShowItem2] = useState(false);

  const showItemOne = () => {
    setShowItem1(true);
    setShowItem2(false);
  };

  const showItemTwo = () => {
    setShowItem1(false);
    setShowItem2(true);
  };
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex">
          <img className="w-75 m-auto rounded-2" src={AboutImg} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5   ">
          <h1 className="display-1 about_content ">I'm John Rith</h1>
          <h1 className="display-1 about_content">Web</h1>
          <h1 className="display-1 about_content">React JS</h1>
          <h5 className="about_content">Based in Phnom Penh , Cambodia</h5>
          <div className="row text-secondary">
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
      </div>
      <div className="row">
        <div className="d-flex flex-row align-items-center justify-content-start ">
          <span
            style={{ width: "80px", height: "1px" }}
            className="border border-1 border-dark me-3"
          ></span>
          <h1 className=" fs-1 fw-bold">Skills</h1>
        </div>
        <div className="row mx-5 text-center m-auto ">
          <button
            style={{ width: "120px" }}
            className="btn btn-dark me-4 py-2"
            onClick={showItemOne}
          >
            Skill Sets
          </button>
          <button
            style={{ width: "120px" }}
            className="btn btn-secondary"
            onClick={showItemTwo}
          >
            Tools
          </button>
        </div>
        {showItem1 && (
          <div className="row text-center m-auto my-5">
            <div className="col-lg-4 p-3 rounded-5 ">
              <IoLogoHtml5 className="fs-1" />
              <p className="">HTML</p>
            </div>
            <div className="col-lg-4 p-3 rounded-5">
              <FaCss3Alt className="fs-1" />
              <p className="">CSS</p>
            </div>
            <div className="col-lg-4 p-3 rounded-5">
              <IoLogoJavascript className="fs-1" />
              <p className="">JS</p>
            </div>
            <div className="col-lg-4 p-3 rounded-5">
              <BsBootstrapFill className="fs-1" />
              <p className="">BOOSTRAP</p>
            </div>
            <div className="col-lg-4 p-3 rounded-5">
              <SiRedux className="fs-1" />
              <p className="">REDUX</p>
            </div>
            <div className="col-lg-4 p-3 rounded-5">
              <FaReact className="fs-1" />
              <p className="">REACT JS</p>
            </div>
          </div>
        )}
        {showItem2 && <div>Item 2</div>}
      </div>
    </div>
  );
};

export default About;
