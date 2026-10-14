import Link from "next/link";
import ProjectCards from "./ProjectCards";
import { projects } from "../lib/site-content";
export default function Gallery() {
  return <section id="gallery" className="site-section" aria-labelledby="gallery-title"><div className="site-container">
    <div className="section-heading heading-with-link"><div><p className="eyebrow">現場施工紀錄</p><h2 id="gallery-title">從設備到管線的施工現場</h2><p>精選現有施工照片，了解不同工項的作業內容。</p></div><Link className="text-link" href="/projects">查看全部施工紀錄 →</Link></div>
    <ProjectCards items={projects.slice(0,3)} />
  </div></section>;
}
