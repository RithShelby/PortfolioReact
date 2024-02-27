import React from 'react'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Layout from './modules/Layout';
import "../src/assets/css/index1.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './modules/layoutt/home/Home';
import About from './modules/layoutt/about/About';
import Portfolio from './modules/layoutt/portfolio/Portfolio';
const Router = () => {
  return (
       <BrowserRouter>
    <Routes>
      <Route  element={<Layout/>}>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/portfolio' element = {<Portfolio/>}/>
      </Route>
      <Route path='*' element = {<Navigate to = '/home'/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
