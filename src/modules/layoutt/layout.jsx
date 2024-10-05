import React from "react";
import { Outlet } from "react-router-dom";
import Narbar from "./Header/navbar";
import Currentdate from "./CurrentDate/Currentdate";
const Layout = () => {
  return (
    <div className="container-fluid">
      <div className={"my-5"}>
        <Narbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
