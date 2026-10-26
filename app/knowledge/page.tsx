import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactActions from "../components/ContactActions";
import { guides } from "../lib/knowledge";

export const metadata: Metadata = {
  title: "水電問題怎麼判斷？跳電、漏水、馬桶與裝修知識｜棟鑫水電",
  description: "棟鑫水電整理跳電與插座沒電、漏水與馬達供水、馬桶排水堵塞、老屋配線與裝潢水電的報修線索，連結雙北相關維修服務。",
  alternates: { canonical: "https://www.dongxin24.com/knowledge" },
  openGraph: { title: "水電報修與裝修知識｜棟鑫水電", description: "從故障現象整理問題，了解評估方向與報修準備。", url: "https://www.dongxin24.com/knowledge" },
};

export default function Knowledge() {
  return <main id="main-content" className="content-page">
    <Breadcrumbs title="水電知識" path="/knowledge" />
    <section className="page-intro"><div className="site-container"><p className="eyebrow">從問題出發</p><h1>水電問題，先整理現象再處理</h1><p>跳電、漏水、沒水或排水不順，原因不一定只有一種。先了解可觀察的線索，讓現場檢查與報價更有方向。</p><ContactActions /></div></section>
    <section className="site-section"><div className="site-container knowledge-grid">{guides.map(guide => <article key={guide.slug} className="knowledge-card"><p className="eyebrow">{guide.category}</p><h2><Link href={`/knowledge/${guide.slug}`}>{guide.title}</Link></h2><p>{guide.summary}</p><Link className="text-link" href={`/knowledge/${guide.slug}`}>閱讀報修與評估重點 →</Link></article>)}</div></section>
  </main>;
}
