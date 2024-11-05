import React, {useState} from "react";
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
const [active , setActive] = useState("");
const handleClick = (link) =>{
  setActive(link);
}
  return (
    <div className="fixed-bottom bg-light text-secondary d-lg-none d-md-flex">
      <ul className="d-flex justify-content-between align-items-center w-100 m-0 p-0 p-3">
        <Link
            onClick={() => handleClick("home")}
            className={`nav-link nav-mobile-hover ${active === "home" ? "text-dark fw-bold" : ""}`} to="/">
          <div className="d-flex flex-column align-items-center">
            <GrHomeRounded className="fs-3" />
            Home
          </div>
        </Link>
        <Link
            onClick={() => handleClick("about")}
            className={`nav-link nav-mobile-hover ${active === "about" ? "text-dark fw-bold" : ""}`} to="/about_me">
          <div className="d-flex flex-column align-items-center">
            <LuFocus className="fs-3" />
            About
          </div>
        </Link>
        <Link
            onClick={() => handleClick("project")}
            className={`nav-link nav-mobile-hover ${active === "project" ? "text-dark fw-bold" : ""}`} to="/project">
          <div className="d-flex flex-column align-items-center">
            <MdSpaceDashboard className="fs-3" />
            My Project
          </div>
        </Link>
        <Link
            onClick={() => handleClick("team-photo")}
            className={`nav-link nav-mobile-hover ${active === "team-photo" ? "text-dark fw-bold" : ""}`} to="/team-photo">
          <div className="d-flex flex-column align-items-center">
            <IoMdPhotos className="fs-3" />
            Team Photo
          </div>
        </Link>
        <Link
            onClick={() => handleClick("contact-me")}
            className={`nav-link nav-mobile-hover ${active === "contact-me" ? "text-dark fw-bold" : ""}`}
            to="/contact-me">
          <div className="d-flex flex-column align-items-center">
            <FiUser className="fs-3" />
            Contact
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNav;
