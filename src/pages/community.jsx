import React from "react";
export default function CommunityPage(){
  const posts=[
    {title:"Looking for Urdu Voice Artist", by:"@creator_ali", likes:12},
    {title:"Thumbnail Feedback Thread", by:"@design_hub", likes:19},
    {title:"AI Tool Requests", by:"@team", likes:7},
  ];
  return (
    <section className="container">
      <h1 className="section-title">Community & Profit Share</h1>
      <p>Join creators, share feedback and shape the next tools. Login required to post. (Phase-2)</p>
      <div className="grid grid-3">
        {posts.map(p => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p className="muted">by {p.by} · ❤️ {p.likes}</p>
            <a className="btn" href="#">Open</a>
          </div>
        ))}
      </div>
    </section>
  );
}