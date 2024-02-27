import React from 'react';
import {Outlet } from 'react-router-dom';
import Narbar from './layoutt/Header/Narbar';

const Layout = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <Narbar/>
    <Outlet />
      </div>
    </div>
   
    </>
  );
};

export default Layout;
