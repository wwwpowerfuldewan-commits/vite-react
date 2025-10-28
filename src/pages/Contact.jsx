import React from "react";
import Footer from "../components/Footer.jsx";
export default function Contact(){
  return (<>
    <div className="container">
      <h1 className="section-title">Contact</h1>
      <div className="card">
        <p>Email: <a href="mailto:mindvibeworks@gmail.com">mindvibeworks@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/923081725317" target="_blank" rel="noreferrer">+92 308 1725317</a></p>
      </div>
    </div>
    <Footer/>
  </>);
}