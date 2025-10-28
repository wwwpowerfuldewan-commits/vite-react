import React from "react";
export default function PricingPage(){
  const plans=[
    {name:"Free", price:"$0", points:["Basic scripts","5 voiceovers/day","Watermarked exports"], cta:"Start Free"},
    {name:"Pro", price:"$9/mo", points:["Full AI suite","Ad-free","HD exports"], cta:"Go Pro"},
    {name:"Business", price:"$49/mo", points:["Unlimited tools","Team seats","Growth analytics"], cta:"Contact Sales"},
  ];
  return (
    <section className="container">
      <h1 className="section-title">Pricing</h1>
      <div className="grid grid-3">
        {plans.map(p => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <h2 style={{margin:"6px 0"}}>{p.price}</h2>
            <ul>{p.points.map(pp => <li key={pp} style={{marginBottom:6}}>{pp}</li>)}</ul>
            <a className="btn btn-primary" href="#">{p.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}