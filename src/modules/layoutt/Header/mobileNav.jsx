import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { IoMdPhotos } from "react-icons/io";
import { LuFocus } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { PiUserFocusLight } from "react-icons/pi";
import { TbLibraryPhoto } from "react-icons/tb";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div class="fixed-bottom bg-dark d-lg-none d-md-flex">
      <ul className="d-flex justify-content-between align-items-center w-100 m-0 p-0 p-3">
        <li>
          <Link className="nav-link text-light " to="/">
            <div className="d-flex flex-column align-items-center">
              <GrHomeRounded className="fs-3" />
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link className="nav-link text-light " to="/about_me">
            <div className="d-flex flex-column align-items-center">
              <LuFocus className="fs-3" />
              About
            </div>
          </Link>
        </li>
        <li>
          <Link className="nav-link text-light" to="/project">
            <div className="d-flex flex-column align-items-center">
              <MdSpaceDashboard className="fs-3" />
              My Project
            </div>
          </Link>
        </li>
        <li>
          <Link className="nav-link text-light " to="/team-photo">
            <div className="d-flex flex-column align-items-center">
              <IoMdPhotos className="fs-3" />
              Team Photo
            </div>
          </Link>
        </li>
        <li>
          <Link className="nav-link text-light " to="/contact-me">
            <div className="d-flex flex-column align-items-center">
              <FiUser className="fs-3" />
              Contact
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
