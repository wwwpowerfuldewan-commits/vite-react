import React from "react";
export default function HelpPage(){
  const faqs=[
    {q:"Can I use the free plan?", a:"Yes. Free plan includes basic scripts and limited voiceovers with ads."},
    {q:"Where do ads show?", a:"On Blog (AdSense) and inside the free App (AdMob). Paid plans are ad-free."},
    {q:"How do I contact support?", a:"Email mindvibeworks@gmail.com or WhatsApp via the site footer."},
  ];
  return (
    <section className="container">
      <h1 className="section-title">Help Center</h1>
      <div className="grid">
        {faqs.map(f => (
          <div className="card" key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}