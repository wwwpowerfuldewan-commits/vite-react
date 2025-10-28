import React, { useEffect } from "react";
export default function BlogPage(){
  useEffect(()=>{
    // Insert your AdSense client + slot here (isolated to the blog page only).
    // const s=document.createElement("script");
    // s.async=true;
    // s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX";
    // s.crossOrigin="anonymous";
    // document.body.appendChild(s);
  },[]);
  const posts=[
    {title:"AI + YouTube Automation in 2025", excerpt:"Ship daily with a reliable toolchain.", btn:"Read"},
    {title:"From Script to Video", excerpt:"Turn ideas into publish-ready content faster.", btn:"Read"},
    {title:"Design Thumbnails that Win", excerpt:"Boost CTR with story-led visuals.", btn:"Read"},
  ];
  return (
    <section className="container">
      <h1 className="section-title">Blog</h1>
      <div className="grid grid-3">
        {posts.map(p => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <a className="btn" href="#">{p.btn}</a>
            {/* <ins className="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-XXXX" data-ad-slot="YYYY" data-ad-format="auto" data-full-width-responsive="true"></ins> */}
          </article>
        ))}
      </div>
    </section>
  );
}