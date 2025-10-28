import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Community from "./pages/Community.jsx";
import Contact from "./pages/Contact.jsx";
import AppPage from "./pages/App.jsx";
import Assistant from "./pages/Assistant.jsx";

export default function App(){
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/app" element={<AppPage/>}/>
      <Route path="/assistant" element={<Assistant/>}/>
      <Route path="*" element={<div className="container"><h1>Not Found</h1></div>}/>
    </Routes>
  </>);
}