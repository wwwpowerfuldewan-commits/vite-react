import React from "react";
export default function VideoHero({cta,cta2}){
  return (
    <section className="container hero">
      <video src="/assets/hero-video.mp4" autoPlay muted loop playsInline/>
      <div className="overlay">
        <span className="kicker">Content Creator Coach</span>
        <h1>Create Smarter. Work Faster. Grow with MindVibe Works.</h1>
        <p>An AI-powered creative ecosystem for YouTubers, brands and freelancers — scripts, voiceovers, edits and growth tools that just work.</p>
        <div style={{display:"flex",gap:12,marginTop:10}}>
          <a className="btn btn-primary" href={cta?.href || "#"}>{cta?.label || "Launch App"}</a>
          <a className="btn btn-ghost" href={cta2?.href || "#"}>{cta2?.label || "Watch Demo"}</a>
        </div>
      </div>
    </section>
  );
}