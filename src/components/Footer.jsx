import React from "react";
export default function Footer(){
  const socials=[
    {name:"YouTube", href:"#"},
    {name:"TikTok", href:"#"},
    {name:"Facebook", href:"#"},
    {name:"Instagram", href:"#"},
    {name:"LinkedIn", href:"#"},
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="neon-title">Follow us</div>
        <div className="socials">
          {socials.map(s => <a className="social" key={s.name} href={s.href} target="_blank" rel="noreferrer">{s.name}</a>)}
        </div>
        <div className="brand-block">
          <div>✉ mindvibeworks@gmail.com</div>
          <div style={{marginTop:6}}><strong>⚡ MindVibe Works</strong><br/>“Content Creator Coach”</div>
          <div className="muted" style={{marginTop:6}}>© {new Date().getFullYear()} MindVibe Works — All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}