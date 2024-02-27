import React from "react";
import { Link } from "react-router-dom";
import imagekiloit3 from "../../../assets/image/kiloit4.JPG";
import imagekiloit1 from "../../../assets/image/kiloit2.jpg";
import imagekiloit2 from "../../../assets/image/team.jpg";
import haircut from "../../../assets/image/haircut.png";
import portfolio from "../../../assets/image/portfolio.png";
import amado from "../../../assets/image/Amado.png";
import { useState } from "react";
const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <div className="col-lg-12 p-5 text-center portfolio_route ">
      <div className="row mb-5 ">
        <h5>Selected works</h5>
        <h1>Check my portfolio</h1>
        <ul className="navbar-nav d-flex flex-row justify-content-center ms-4">
          <li className="nav-item">
            <Link
              className={`nav-link me-4 fs-6 ${
                filter === "all" ? "active" : ""
              }`}
              href
              to="#"
              onClick={() => handleFilterChange("all")}
            >
              All
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link me-4 fs-6 ${
                filter === "website" ? "active" : ""
              }`}
              href
              to="#"
              onClick={() => handleFilterChange("website")}
            >
              Website
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link fs-6 ${filter === "image" ? "active" : ""}`}
              href
              to="#"
              onClick={() => handleFilterChange("image")}
            >
              Image
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className={`col-md-12   ${filter !== "all" ? "d-none" : ""}`}>
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
              <Link href to="#">
                <img className="image_portfolio " src={imagekiloit1} alt="" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
              <Link href to="#">
                <img className="image_portfolio" src={imagekiloit2} alt="" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <Link href to="#">
                <img className="image_portfolio" src={imagekiloit3} alt="" />
              </Link>
            </div>
          </div>
        </div>
        {/* Website content */}
        <div
          className={`col-md-12 ${
            filter !== "all" && filter !== "website" ? "d-none" : ""
          }`}
        >
          <div className="row d-flex justify-content-center py-5 ">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
              <Link href to="#">
                <img className="image_portfolio" src={amado} alt="" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
              <Link href to="#">
                <img className="image_portfolio" src={haircut} alt="" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Link href to="#">
                <img className="image_portfolio" src={portfolio} alt="" />
              </Link>
            </div>
          </div>
        </div>
        {/* Image content */}
        <div
          className={`col-md-12 ${
            filter !== "all" && filter !== "image" ? "d-none" : ""
          }`}
        >
          <div className="row d-flex justify-content-center py-5 ">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4 ">
              <Link href to="#">
                <img className="image_portfolio" src={imagekiloit1} alt="" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
              <Link href to="#">
                <img className="image_portfolio" src={imagekiloit2} alt="" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Link href to="#">
                <img className="image_portfolio" src={imagekiloit3} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
