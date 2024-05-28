import React from "react";
import Currentdate from "../CurrentDate/Currentdate";
import { Link } from "react-router-dom";

const TopMobileNav = () => {
  return (
    <div className="fixed-top bg-dark d-lg-none d-md-flex">
      <Link
        className="navbar-brand fw-bold text-light d-flex justify-content-evenly align-items-center"
        href="#"
      >
        <p className="fs-4">@JohnRith</p>

        <Currentdate />
      </Link>
    </div>
  );
};

export default TopMobileNav;
