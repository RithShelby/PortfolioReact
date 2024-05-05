import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="row text-light text-dark text-center">
      <div className="col-sm-4">
        <p className="">Designed and Developed by JohnRith</p>
      </div>
      <div className="col-sm-4">
        {" "}
        <p>copyright © 2024 JR</p>
      </div>
      <div className="col-sm-4">
        <FaGithub />
        <FaLinkedin />
        <FaTelegram />
        <FaFacebook />
      </div>
    </div>
  );
};

export default Footer;
