import React from "react";
import Footer from "../components/Footer.jsx";
export default function About(){
  return (<>
    <div className="container">
      <h1 className="section-title">About</h1>
      <div className="card" style={{display:"flex",gap:18,alignItems:"center",flexWrap:"wrap"}}>
        <img src="/founder.jpeg" alt="Founder" style={{width:140,height:140,objectFit:"cover",borderRadius:16}}/>
        <div>
          <h3>Imran Ahmad — Founder & Creative Director</h3>
          <p className="muted">Empowering creators with AI & Automation. Urdu + English support.</p>
          <a className="btn btn-whatsapp" href="https://wa.me/923081725317" target="_blank" rel="noreferrer">Contact Founder</a>
        </div>
      </div>
    </div>
    <Footer/>
  </>);
}