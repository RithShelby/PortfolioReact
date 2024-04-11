import React from "react";
import { Outlet } from "react-router-dom";
import Narbar from "./Header/navbar";
const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Narbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
