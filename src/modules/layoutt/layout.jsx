import React from "react";
import { Outlet } from "react-router-dom";
import Narbar from "./Header/navbar";
import Footer from "./footer/footer";
const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="mb-5 pb-5">
        <Narbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
