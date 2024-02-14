/*
What is React Router ?
React Router is a standard library for routing in React. It enables the navigation among 
views of various components in a React Application, allows changing the browser URL, 
and keeps the UI in sync with the URL. 

Create React App doesn't include page routing.

React Router is the most popular solution

npm i react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";


*/

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PNF from './pages/PNF'
import Header from './component/Header'
import Footer from './component/Footer'

function App_main() {
  return (
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<><Header/><Home/><Footer/></>}></Route>
            <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
            <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
            <Route path="*" element={<><PNF/></>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App_main