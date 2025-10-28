import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import Footer from "../components/Footer.jsx";
export default function Services(){
  return (<>
    <div className="container">
      <h1 className="section-title">Our Services</h1>
      <div className="grid grid-3">
        <ServiceCard title="YouTube Automation" text="Complete channel handling till monetization."/>
        <ServiceCard title="Content Creator Coach App" text="AI tools and prompts for creators."/>
        <ServiceCard title="Social Media Management" text="We do everything from writing to posting."/>
      </div>
    </div>
    <Footer/>
  </>);
}