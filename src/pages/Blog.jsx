import React from "react";
import BlogCard from "../components/BlogCard.jsx";
import Footer from "../components/Footer.jsx";
export default function Blog(){
  const posts=[
    {slug:"ai-youtube-automation", title:"AI + YouTube Automation: Quick Start", excerpt:"How to scale content with AI tools."},
    {slug:"viral-thumbnails", title:"Winning Thumbnails in 10 Minutes", excerpt:"Design system that converts views to clicks."},
    {slug:"script-to-video", title:"From Script to Video — Fast", excerpt:"A simple pipeline to publish daily."},
  ];
  return (<>
    <div className="container">
      <h1 className="section-title">Blog</h1>
      {/* AdSense Placeholder: add your AdSense script in index.html when approved */}
      <div className="grid grid-3">{posts.map(p => <BlogCard key={p.slug} {...p}/>)}</div>
    </div>
    <Footer/>
  </>);
}