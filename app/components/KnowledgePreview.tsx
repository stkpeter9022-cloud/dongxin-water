import Link from "next/link";
import { guides } from "../lib/knowledge";

export default function KnowledgePreview() {
  return <section id="knowledge" className="site-section section-muted"><div className="site-container"><div className="section-heading heading-with-link"><div><p className="eyebrow">先看現象，再找方向</p><h2>報修前，先了解常見水電問題</h2><p>從跳電、漏水到裝潢配線，整理觀察重點與現場評估方向。</p></div><Link className="text-link" href="/knowledge">全部水電知識 →</Link></div><div className="knowledge-grid">{guides.slice(0,2).map(guide=><article className="knowledge-card" key={guide.slug}><p className="eyebrow">{guide.category}</p><h3><Link href={`/knowledge/${guide.slug}`}>{guide.title}</Link></h3><p>{guide.summary}</p><Link className="text-link" href={`/knowledge/${guide.slug}`}>查看判斷與報修線索 →</Link></article>)}</div></div></section>;
}
