import React from "react";
import { Link, useParams } from "react-router-dom";
import imagekiloit3 from "../../../assets/image/kiloit4.JPG";
import imagekiloit1 from "../../../assets/image/kiloit2.jpg";
import imagekiloit2 from "../../../assets/image/team.jpg";
import haircut from "../../../assets/image/haircut.png";
import portfolio from "../../../assets/image/portfolio.png";
import amado from "../../../assets/image/Amado.png";

const dataPortfolio = [
  {
    id: 1,
    image: imagekiloit1,
    desc: "sometexthere",
    button: "See more",
  },
  {
    id: 2,
    image: imagekiloit2,
    desc: "sometexthere",
    button: "See more",
  },
  {
    id: 3,
    image: imagekiloit3,
    desc: "sometexthere",
    button: "See more",
  },
  {
    id: 4,
    image: haircut,
    desc: "sometexthere",
    button: "See more",
  },
  {
    id: 5,
    image: portfolio,
    desc: "sometexthere",
    button: "See more",
  },
  {
    id: 6,
    image: amado,
    desc: "sometexthere",
    button: "See more",
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
              <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                <Link to={`/portfolio/${item.id}`}>
                  {" "}
                  {/* Pass project ID here */}
                  <img className="w-75 rounded-4" src={item.image} alt="" />
                </Link>
                <p className="text-dark">{item.desc}</p>
                <button className="btn btn-success">{item.button}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
