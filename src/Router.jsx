import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './modules/Layout';
import "../src/assets/css/index1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './modules/layoutt/home/Home';
import About from './modules/layoutt/about/About';
import Portfolio from './modules/layoutt/portfolio/Portfolio';
import Portfolio1 from './modules/layoutt/portfolio/Portfolio1';
import Portfolio2 from './modules/layoutt/portfolio/Portfolio2';
import Portfolio3 from './modules/layoutt/portfolio/Portfolio3';
import Portfolio4 from './modules/layoutt/portfolio/Portfolio4';
import Portfolio5 from './modules/layoutt/portfolio/Portfolio5';
import Portfolio6 from './modules/layoutt/portfolio/Portfolio6';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path="/portfolio/1" element={<Portfolio1 />} />
          <Route path="/portfolio/2" element={<Portfolio2 />} />
          <Route path="/portfolio/3" element={<Portfolio3 />} />
          <Route path="/portfolio/4" element={<Portfolio4 />} />
          <Route path="/portfolio/5" element={<Portfolio5 />} />
          <Route path="/portfolio/6" element={<Portfolio6 />} />
        </Route>
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
