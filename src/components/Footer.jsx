import React from "react";
export default function Footer(){
  const socials=[
    {name:"YouTube", href:"#"},
    {name:"TikTok", href:"#"},
    {name:"Facebook", href:"#"},
    {name:"Instagram", href:"#"},
    {name:"LinkedIn", href:"#"},
    {name:"Email", href:"mailto:mindvibeworks@gmail.com"},
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-3">
          <div>
            <div className="kicker">Brand</div>
            <h3>MindVibe Works</h3>
            <p>Empowering Creators Through AI.</p>
          </div>
          <div>
            <div className="kicker">Links</div>
            <div className="socials">
              {socials.map(s => <a key={s.name} className="badge" href={s.href} target="_blank" rel="noreferrer">{s.name}</a>)}
            </div>
          </div>
          <div>
            <div className="kicker">Contact</div>
            <p>mindvibeworks@gmail.com</p>
          </div>
        </div>
        <p style={{marginTop:16,color:"#9aa6b2"}}>© {new Date().getFullYear()} MindVibe Works — All Rights Reserved</p>
      </div>
    </footer>
  );
}