import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/index.jsx";
import FeaturesPage from "./pages/features.jsx";
import CreativePage from "./pages/creative.jsx";
import PricingPage from "./pages/pricing.jsx";
import BlogPage from "./pages/blog.jsx";
import CommunityPage from "./pages/community.jsx";
import HelpPage from "./pages/help.jsx";

export default function App(){
  return (<>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/features" element={<FeaturesPage/>}/>
      <Route path="/creative" element={<CreativePage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/help" element={<HelpPage/>}/>
      <Route path="*" element={<div className="container"><h1>Not Found</h1></div>}/>
    </Routes>
    <Footer/>
  </>);
}