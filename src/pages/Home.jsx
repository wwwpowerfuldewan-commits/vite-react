import React from "react";
import Footer from "../components/Footer.jsx";
export default function Home(){
  return (<>
    <div className="container">
      <div className="hero"><img src="/hero.jpg" alt="MindVibe Poster"/></div>
      <div className="spacer"></div>
      <a className="btn btn-whatsapp" href="https://wa.me/923081725317" target="_blank" rel="noreferrer">WhatsApp Us Now!</a>
    </div>
    <Footer/>
  </>);
}