import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
  return (
    <nav className="container nav">
      <Link to="/"><strong>MindVibe Works</strong></Link>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/community">Community</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/app" className="btn btn-whatsapp">Launch App</Link>
      </div>
    </nav>
  );
}