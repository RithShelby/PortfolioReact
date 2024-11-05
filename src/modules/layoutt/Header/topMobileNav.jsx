import React from "react";
import Currentdate from "../CurrentDate/Currentdate";
import { Link } from "react-router-dom";
import {Image} from "react-bootstrap";
import logo from "../../../assets/image/avatar-removebg-preview.png"
const TopMobileNav = () => {
  return (
    <div className="fixed-top bg-dark d-lg-none d-md-flex d-sm-flex text-light justify-content-between align-items-center py-2">
        <Link to="/">
            <Image src={logo} alt="logo" style={{width : "11%"}} className="mt-1"/>
        </Link>
        <div className="float-end mt-3">
            <Currentdate/>
        </div>
    </div>
  );
};

export default TopMobileNav;
