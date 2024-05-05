import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Currentdate from "../CurrentDate/Currentdate";
import { FaBarsProgress } from "react-icons/fa6";
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
    <div>
      {" "}
      <nav
        className={`navbar navbar-expand-lg px-4 fixed-top d-none d-lg-flex  ${
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
              <Link className="nav-link" to="/project">
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
      {/* mobilr nav */}
      <nav class="navbar bg-body-tertiary fixed-top d-lg-none d-md-flex">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Offcanvas navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start w-75"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Narbar;
