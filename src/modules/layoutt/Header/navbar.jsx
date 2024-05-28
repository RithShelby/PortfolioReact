import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Currentdate from "../CurrentDate/Currentdate";
import { FaBarsProgress } from "react-icons/fa6";
import MobileNav from "./mobileNav";
import TopMobileNav from "./topMobileNav";
const Narbar = () => {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 20 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);
  return (
    <div className="my-5">
      {" "}
      <nav
        style={{ height: "80px" }}
        className={`navbar navbar-expand-md px-4 fixed-top d-none d-lg-flex border border-1 ${
          !top ? "navbar-blur" : ""
        }`}
      >
        <Link className="navbar-brand fw-bold " href="#">
          @JohnRith
          <Currentdate />
        </Link>
        <button
          className="navbar-toggler align-items-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBarsProgress className=" fs-1" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-center me-5"
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
              <Link className="nav-link" to="/project">
                My Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team-photo">
                Team Photo
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item rounded-5 btn btn-light">
            <Link className="nav-link" to="/contact-me">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      {/* mobilr nav */}
      <TopMobileNav />
      <MobileNav />
    </div>
  );
};

export default Narbar;
