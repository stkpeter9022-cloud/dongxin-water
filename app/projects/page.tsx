import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import ProjectCards from "../components/ProjectCards";
import ContactActions from "../components/ContactActions";
import { projects, siteUrl } from "../lib/site-content";
import { projectRecords } from "../lib/project-records";
export const metadata: Metadata = {
  title: "水電施工紀錄｜配電、配管與馬達作業照片｜棟鑫水電",
  description: "棟鑫工程行現有施工照片，包含配電箱、給排水管路、沈水與抽水馬達、衛浴及疏通作業，連結相關服務與現場評估方式。",
  alternates: { canonical: "https://www.dongxin24.com/projects" },
  openGraph: { title: "棟鑫水電施工紀錄", description: "配電、配管、馬達與衛浴現場作業照片。", url: "https://www.dongxin24.com/projects" },
};
export default function Projects(){return <main id="main-content" className="content-page"><Breadcrumbs title="施工紀錄" path="/projects" /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:"棟鑫水電施工紀錄",url:siteUrl+"/projects",mainEntity:{"@type":"ItemList",itemListElement:projects.map((project,index)=>({"@type":"ListItem",position:index+1,name:project.title,url:siteUrl+"/projects#"+project.id,item:{"@type":"ImageObject",contentUrl:siteUrl+project.image,caption:projectRecords[project.id].observation}}))}})}} /><section className="page-intro"><div className="site-container"><h1>水電施工紀錄</h1><p>從配電箱、管路到馬達與衛浴，看看棟鑫現有施工照片，以及同類需求的評估與確認重點。</p><p>照片呈現現場作業；各組附上同類需求的評估方向，實際診斷、材料與完工確認仍依個案條件決定。</p><ContactActions /></div></section><section className="site-section"><div className="site-container"><nav className="project-index" aria-label="依工項查看施工照片"><details><summary>依工項快速查看施工照片</summary><ul>{projects.map(project=><li key={project.id}><a href={`#${project.id}`}>{project.title}</a></li>)}</ul></details></nav><ProjectCards detailed /><div className="scope-note"><h2>有類似的現場需求？</h2><p>可提供現場照片與問題說明。施工方式、材料、費用與完工確認項目，均需依現場條件與報價內容確認。</p><ContactActions /></div></div></section></main>;}
