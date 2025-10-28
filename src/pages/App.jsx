import React from "react";
import Footer from "../components/Footer.jsx";
export default function AppPage(){
  return (<>
    <div className="container">
      <h1 className="section-title">Content Creator Coach (App)</h1>
      {/* AdMob Placeholder: Integrate SDK/JS once IDs are ready */}
      <div className="card">
        <p>Login & tools are coming soon. Free tier will include ads; Premium removes ads and unlocks advanced features.</p>
      </div>
    </div>
    <Footer/>
  </>);
}