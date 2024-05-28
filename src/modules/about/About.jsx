import React, { useState } from "react";
import AboutImg from "../../assets/image/About1.png";
import { dataSkill } from "../helper/dataSkill";
import RecCourse from "../course/RecCourse";

const About = () => {
  const [filterData, setFilterData] = useState("SkillSet");
  const handleClick = (type) => {
    setFilterData(type);
  };
  const filterSkill = dataSkill.filter((e) => e.type === filterData);
  return (
    <div className="col-lg-12 my-3">
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
              Once upon a time, there was a young boy with a big dream to be
              <span className="mx-2 fw-bold">Web</span>
              developer . One day, while sitting in a coffee shop, he met a man
              who was working on his laptop. Curious, the boy asked, "What are
              you doing?" The man replied, "I'm coding." Curious about the man's
              work, the boy asked, "What do you do?" The man smiled and asked,
              "What do you want to be?" The boy said, "I want to build websites.
            </p>
            <p className="fs-6">
              " The man grinned and said, "Then you should start by learning
              HTML, CSS, and JavaScript." Excited, the boy went home and began
              learning exactly what the man had suggested. And now, he is me,
              the boy who dreamed to be
              <span className="mx-2 fw-bold">Web</span> developer.
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
          <div className="d-flex flex-row justify-content-start align-items-center ms-5">
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
                      width: "25rem",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <img
                      className="card-img-top w-25 m-auto mt-3 px-2"
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
      <RecCourse />
    </div>
  );
};

export default About;
