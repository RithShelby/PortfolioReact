import React from "react";
import { useParams } from "react-router-dom";
import imagekiloit3 from "../../../assets/image/kiloit4.JPG";
import imagekiloit1 from "../../../assets/image/kiloit2.jpg";
import imagekiloit2 from "../../../assets/image/team.jpg";
import imagekiloit4 from "../../../assets/image/teamKiloIT.jpg";
import imagekiloit5 from "../../../assets/image/kiloit5.jpg";
const Portfolio1 = () => {
  const { id } = useParams();
  return <div>hello port{id}</div>;
};

export default Portfolio1;
