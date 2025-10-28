import React from "react";
export default function FeaturesPage(){
  const tools=[
    {title:"AI Video Generator", desc:"Idea → Script → Voice → Visuals → Export.", cta:"Try Now"},
    {title:"Script Writer", desc:"Hook, outline and punchy lines in seconds.", cta:"Generate Script"},
    {title:"Voice Studio", desc:"Human-like voiceovers in Urdu & English.", cta:"Create Voice"},
    {title:"Smart Editor", desc:"Auto-cut, reframe and beat sync.", cta:"Open Editor"},
    {title:"Channel Manager", desc:"Plan uploads, track analytics & growth.", cta:"Open Manager"},
  ];
  return (
    <section className="container">
      <h1 className="section-title">AI Suite by MindVibe Works</h1>
      <div className="grid grid-3">
        {tools.map(t => (
          <div className="card" key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <a className="btn btn-primary" href="#">{t.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}