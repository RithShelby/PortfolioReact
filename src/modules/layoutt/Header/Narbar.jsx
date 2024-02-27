import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/image/dynamic.png";
const Narbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 top-0 position-sticky">
    <img src={logoImg} alt="" className="logo_nav me-3" />
    <Link className="navbar-brand" href to="/home">
      John_Rith
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-dark fs-5" href to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark fs-5" href to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark fs-5" href to="/portfolio">
            Portflio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark fs-5" href to="/skill">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-dark fs-5"
            href
            to="/testmonials"
          >
            Testmonials
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark fs-5" href to="#">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  
</nav>
  );
};

export default Narbar;
