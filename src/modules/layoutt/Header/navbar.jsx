import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Currentdate from "../CurrentDate/Currentdate";
import { FaBarsProgress } from "react-icons/fa6";
import MobileNav from "./mobileNav";
import TopMobileNav from "./topMobileNav";
const Narbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };
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
    <div>
      <nav style={{ height: "80px" }} className={`navbar navbar-expand-md px-4 fixed-top d-none d-lg-flex border border-1 ${
          !top ? "navbar-blur" : ""
        }`}
      >
        <Link
          onClick={() => handleClick("me")}
          className="fw-bold animate__animated animate__jello nav-link d-flex flex-column m-0 p-0"
          to="/"
        >
          <p className="m-0">{"</>"}I'm-Rith</p>
          <Currentdate />
        </Link>

        <div className="collapse navbar-collapse justify-content-center me-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={() => handleClick("home")}
                className={`nav-link nav-link-hover ${
                  activeLink === "home" ? "text-decoration-underline" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => handleClick("about_me")}
                className={`nav-link nav-link-hover ${
                  activeLink === "about_me" ? "text-decoration-underline" : ""
                }`}
                to="/about_me"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => handleClick("project")}
                className={`nav-link nav-link-hover ${
                  activeLink === "project" ? "text-decoration-underline" : ""
                }`}
                to="/project"
              >
                My Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => handleClick("team-photo")}
                className={`nav-link nav-link-hover ${
                  activeLink === "team-photo" ? "text-decoration-underline" : ""
                }`}
                to="/team-photo"
              >
                Team Photo
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item rounded-5 btn btn-light">
            <Link
              onClick={() => handleClick("contact-me")}
              className={`nav-link nav-link-hover ${
                activeLink === "contact-me" ? "text-decoration-underline" : ""
              }`}
              to="/contact-me"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      <TopMobileNav />
      <MobileNav />
    </div>
  );
};

export default Narbar;
