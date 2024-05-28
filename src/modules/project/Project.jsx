import React from "react";
import Footer from "../layoutt/footer/footer";
import { dataProject, dataSkill } from "../helper/dataSkill";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <div className="col-lg-12 text-center">
      <div className="row">
        {" "}
        <h1 className="fw-bold">My Recent Projects</h1>
        <p className="text-secondary">
          Here are few projects, you can demo and take a source code.
        </p>
      </div>
      <div className="row">
        {" "}
        {dataProject.map((item) => {
          return (
            <div className="col-md-4 my-2">
              <div
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                className="card p-3 w-100 border border-0 rounded-5 card_bg overflow-hidden "
                key={item.id}
              >
                <img
                  style={{ height: "200px" }}
                  className="img-fluid card-img-top rounded-5 w-100 m-auto card_img"
                  src={item.img}
                  alt=""
                />
                <div className="card-body text-start text-secondary">
                  <p className="fs-6 fw-bold ">{item.desc}</p>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center m-auto text-center">
                    <p className="mt-3">{item.date}</p>
                    <Link to={item.demo} className="btn btn-light d-flex">
                      <CgWebsite className="fs-5 m-auto me-2" />
                      Demo
                    </Link>
                    <Link to={item.github} className="btn btn-dark d-flex ">
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
