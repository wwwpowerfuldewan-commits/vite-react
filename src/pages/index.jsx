import React from "react";
import VideoHero from "../components/VideoHero.jsx";

export default function Home(){
  return (<>
    <VideoHero cta={{label:"Launch App", href:"#"}} cta2={{label:"Watch Demo", href:"https://www.youtube.com/watch?v=QPRYvghRTQ8"}}/>
    <section className="container">
      <h2 className="section-title">AI Tools that power every creator</h2>
      <div className="grid grid-3">
        <div className="card"><h3>AI Video Generator</h3><p>Turn ideas into ready-to-publish videos: script → voice → visuals.</p></div>
        <div className="card"><h3>Script Writer</h3><p>Viral, niche-focused scripts in seconds — Urdu & English.</p></div>
        <div className="card"><h3>Voice Studio</h3><p>Realistic voiceovers in your tone — powered by advanced TTS.</p></div>
      </div>
    </section>
    <section className="container">
      <h2 className="section-title">Why MindVibe Works</h2>
      <div className="grid grid-3">
        <div className="card"><h3>Faster</h3><p>Automations save hours per video.</p></div>
        <div className="card"><h3>Smarter</h3><p>AI suggestions improve retention & CTR.</p></div>
        <div className="card"><h3>Scalable</h3><p>From one channel to a studio — same stack.</p></div>
      </div>
    </section>
  </>);
}