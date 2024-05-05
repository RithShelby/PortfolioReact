import React, { useState } from "react";
import AboutImg from "../../assets/image/aboutImg.png";
import { dataSkill } from "../helper/dataSkill";

const About = () => {
  const [filterData, setFilterData] = useState("SkillSet");
  const handleClick = (type) => {
    setFilterData(type);
  };
  const filterSkill = dataSkill.filter((e) => e.type === filterData);
  return (
    <div className="col-lg-12 my-5">
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
        {/* Skill and Tool */}
        <div className="">
          <div className="d-flex flex-row justify-content-start align-items-cente ms-5">
            <button
              className={`btn me-3 ${
                filterData === "SkillSet" ? "btn-dark" : "btn-light"
              }`}
              onClick={() => handleClick("SkillSet")}
            >
              Skill Set
            </button>
            <button
              className={`btn me-3 ${
                filterData === "Tools" ? "btn-dark" : "btn-light"
              }`}
              onClick={() => handleClick("Tools")}
            >
              Tools
            </button>
          </div>
          <div className="row">
            {filterSkill.map((item) => {
              return (
                <div className="col-md-4 card_hover d-flex justify-content-center my-3">
                  {" "}
                  <div
                    key={item.id}
                    className="card border border-0 rounded-4"
                    style={{
                      width: "18rem",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <img
                      className="card-img-top w-25 m-auto mt-3"
                      src={item.img}
                      alt=""
                    />
                    <p className="card-body m-auto fw-bold">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
