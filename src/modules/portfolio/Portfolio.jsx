import React from "react";
import { Link, useParams } from "react-router-dom";
import haircut from "../../../assets/image/hair1.png";
import portfolio from "../../../assets/image/devPort.png";
import amado from "../../../assets/image/amado1.png";

const dataPortfolio = [
  {
    id: 1,
    image: haircut,
    desc: "haircut project's team template using html,css and boostrap only. Check it out now! ...",
    language: "Boostrap",
  },
  {
    id: 2,
    image: portfolio,
    desc: "basic portfolio's team template using html,css and boostrap. Enjoy it ... ",
    language: "Boostrap",
  },
  {
    id: 3,
    image: amado,
    desc: "Basic ecommerce template using react js with boostrap . My first react project...!!",
    language: "React JS",
  },
];
const Portfolio = () => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 text-center bg_portfolio rounded">
      <div className="row portfolio_route position-relative text-black mt-5 ">
        <h5>Selected works</h5>
        <h1>Check my portfolio</h1>
        <div className="row img_portfolio m-auto py-5 mt-5">
          {dataPortfolio.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 my-3 ">
                <div className="m-auto border border-1 border-dark w-75 rounded-4 ">
                  <Link className="" to={`/portfolio/${item.id}`}>
                    {" "}
                    {/* Pass project ID here */}
                    <img
                      style={{ height: "250px" }}
                      className="w-100 rounded-4 "
                      src={item.image}
                      alt=""
                    />
                  </Link>
                  <p className="text-dark fs-6 opacity-75 px-3">{item.desc}</p>
                  <div className="d-flex justify-content-between">
                    <p className="text-start ms-3 btn btn-dark">{item.language}</p>
                    <div className="mt-2 me-3">
                      <i class="fa-regular fa-star "></i>
                      <i class="fa-regular fa-star "></i>
                      <i class="fa-regular fa-star "></i>
                    </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
