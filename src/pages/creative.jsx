import React from "react";
export default function CreativePage(){
  const items=[
    {title:"YouTube Intro Pack", desc:"Animated intros & lower-thirds.", btn:"Download"},
    {title:"Thumbnail Prompt Kit", desc:"Prompts that convert views to clicks.", btn:"Get Pack"},
    {title:"Sound FX Essentials", desc:"Whooshes, risers and transitions.", btn:"Download"},
  ];
  return (
    <section className="container">
      <h1 className="section-title">Creative Assets</h1>
      <div className="grid grid-3">
        {items.map(i => (
          <div className="card" key={i.title}>
            <h3>{i.title}</h3>
            <p>{i.desc}</p>
            <a className="btn" href="#">{i.btn}</a>
          </div>
        ))}
      </div>
    </section>
  );
}