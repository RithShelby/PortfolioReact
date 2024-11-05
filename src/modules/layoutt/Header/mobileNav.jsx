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
    <nav className="fixed-bottom bg-dark text-secondary d-lg-none d-md-flex align-items-center pt-4">
      <ul className="d-flex justify-content-between p-0">
        <Link
            onClick={() => handleClick("home")}
            className={`nav-link nav-mobile-hover ${active === "home" ? "text-light fw-bold" : ""}`} to="/">
          <div className="d-flex flex-column align-items-center fs-6">
            <GrHomeRounded  />
            Home
          </div>
        </Link>
        <Link
            onClick={() => handleClick("about")}
            className={`nav-link nav-mobile-hover ${active === "about" ? "text-light fw-bold" : ""}`} to="/about_me">
          <div className="d-flex flex-column align-items-center fs-6">
            <LuFocus />
            About
          </div>
        </Link>
        <Link
            onClick={() => handleClick("project")}
            className={`nav-link nav-mobile-hover ${active === "project" ? "text-light fw-bold" : ""}`} to="/project">
          <div className="d-flex flex-column align-items-center fs-6">
            <MdSpaceDashboard />
            My Project
          </div>
        </Link>
        <Link
            onClick={() => handleClick("team-photo")}
            className={`nav-link nav-mobile-hover ${active === "team-photo" ? "text-light fw-bold" : ""}`} to="/team-photo">
          <div className="d-flex flex-column align-items-center fs-6">
            <IoMdPhotos  />
            Team Photo
          </div>
        </Link>
        <Link
            onClick={() => handleClick("contact-me")}
            className={`nav-link nav-mobile-hover ${active === "contact-me" ? "text-light fw-bold" : ""}`}
            to="/contact-me">
          <div className="d-flex flex-column align-items-center fs-6">
            <FiUser />
            Contact
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default MobileNav;
