import React, { useState } from 'react';
import { dataSkill } from "../helper/dataSkill";
const SkillSet = () => {
     const [filterData, setFilterData] = useState("SkillSet");
  const handleClick = (type) => {
    setFilterData(type);
  };
  const filterSkill = dataSkill.filter((e) => e.type === filterData);
    return (
           <div className="row">
        <div className="d-flex flex-row align-items-center justify-content-start ">
          <span
            style={{ width: "80px", height: "1px" }}
            className="border border-1 border-dark me-3"
          ></span>
          <h1 className=" fs-1 fw-bold">Skills</h1>
        </div>
        {/* Skill and Tool */}
        <div>
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
                <div  className="col-md-4 card_hover d-flex justify-content-center my-3">
                  {" "}
                  <div data-aos="fade-up"
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
    );
}

export default SkillSet;
