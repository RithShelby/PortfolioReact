import React from "react";
import { Link, useParams } from "react-router-dom";
import imagekiloit1 from "../../../assets/image/kiloit2.jpg";
import imagekiloit2 from "../../../assets/image/team.jpg";
import imagekiloit4 from "../../../assets/image/teamKiloIT.jpg";
import imagekiloit5 from "../../../assets/image/kiloit5.jpg";
const dataTeam = [
  {
    id: 1,
    image: imagekiloit2,
    desc: "descrition1",
  },
  {
    id: 2,
    image: imagekiloit5,
    desc: "descrition1",
  },
  {
    id: 3,
    image: imagekiloit4,
    desc: "descrition1",
  },
];
const TeamPhoto = () => {
  return (
    <div className="col-lg-12">
      <div className="row mt-5">
        <div className="col-lg-6 text-center">
          <img className="w-75 rounded-4" src={imagekiloit1} alt="" />
          <p>Kilo IT's member celebrated Christmas together</p>
          <p className="opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            veniam unde nulla minus nisi ducimus soluta laudantium blanditiis
            animi voluptate......
          </p>
        </div>
        <div className="col-lg-6">
          {dataTeam.map((item) => {
            return (
              <div className="row ">
                <div className="col-lg-12 col-md-12 col-sm-12 d-flex align-items-center">
                  <img
                    className="img_port1  rounded-4"
                    src={item.image}
                    alt=""
                  />
                  <p className="px-4">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamPhoto;
