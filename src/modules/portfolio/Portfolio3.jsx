import React from "react";
import { useParams } from "react-router-dom";
const Portfolio3 = () => {
  const { id } = useParams();
  return <div>hello port {id}</div>;
};

export default Portfolio3;
