import React from "react";
import { dataProject } from "../helper/dataSkill";
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
      <div className="row mx-1 ">
        {" "}
        {dataProject.map((item) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 py-4">
              <div
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                className="card border border-0 rounded-4 w-100 overflow-hidden card_hover h-100"
                key={item.id}
              >
                <img
                  className="img-fluid card-img-top rounded-4  "
                  src={item.img}
                  alt=""
                />
                <div className="card-body text-start text-secondary">
                    <h5 className="fw-bold">{item.title}</h5>
                  <p className="fs-6">{item.desc}</p>
                  <hr />
                  <div className="d-flex justify-content-start align-items-center m-auto text-center">
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
