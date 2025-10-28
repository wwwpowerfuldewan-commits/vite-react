import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="nav container">
      <Link to="/"><strong>MindVibe Works</strong></Link>
      <nav className="links">
        <Link to="/features">Features</Link>
        <Link to="/creative">Assets</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/community">Community</Link>
        <Link to="/help">Help</Link>
        <a className="btn btn-primary" href="#" title="App link can be updated later">Launch App</a>
      </nav>
    </header>
  );
}