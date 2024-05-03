import React from "react";
import { Link } from "react-router-dom";
const Narbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg px-4"
      style={{ backgroundColor: "#F4F4F2" }}
    >
      <Link className="navbar-brand fw-bold" href="#">
        @JohnRith
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end me-5"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about_me">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about_me">
              My Project
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about_me">
              Team Photo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about_me">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Narbar;
