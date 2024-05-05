import React from "react";
import Footer from "../layoutt/footer/footer";
import { dataProject, dataSkill } from "../helper/dataSkill";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <div className="col-lg-12 mt-5 text-center">
      <div className="row mt-5">
        {" "}
        <h1 className="fw-bold">My Recent Projects</h1>
        <p className="text-secondary">
          Here are few projects, you can demo and take a source code.
        </p>
      </div>
      <div className="row mx-3">
        {" "}
        {dataProject.map((item) => {
          return (
            <div className="col-md-6 my-2">
              <div
                className="card p-3 border border-2 border-dark rounded-0 card_bg overflow-hidden "
                key={item.id}
              >
                <img
                  style={{ height: "200px" }}
                  className="img-fluid card-img-top w-100 m-auto card_img"
                  src={item.img}
                  alt=""
                />
                <div className="card-body text-start text-secondary">
                  <p className="fs-6 fw-bold ">{item.desc}</p>
                  <hr />
                  <div className="d-flex justify-content-start align-items-center m-auto text-center">
                    <p className="mt-3">{item.date}</p>
                    <Link to={item.demo} className="btn btn-light mx-4 d-flex">
                      <CgWebsite className="fs-5 m-auto me-2" />
                      Demo
                    </Link>
                    <Link to={item.github} className="btn btn-dark">
                      <FaGithub className="fs-5 m-auto me-2" />
                      Git hub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
