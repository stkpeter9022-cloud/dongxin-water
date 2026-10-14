import Link from "next/link";
import { repairs, engineering } from "../lib/site-content";
export default function Services() {
  return <>
    <section id="services" className="site-section" aria-labelledby="services-title"><div className="site-container">
      <div className="section-heading"><p className="eyebrow">維修與緊急叫修</p><h2 id="services-title">台北・新北水電維修</h2><p>找跳電、漏水或堵塞處理？先選擇問題類型。緊急狀況可直接來電，派工依位置與當日安排確認。</p></div>
      <div className="service-grid">{repairs.map(item=><Link className="service-card" key={item.href} href={item.href}><h3>{item.title}<span aria-hidden="true">↗</span></h3><p>{item.desc}</p></Link>)}</div>
    </div></section>
    <section id="engineering" className="site-section section-muted" aria-labelledby="engineering-title"><div className="site-container">
      <div className="section-heading"><p className="eyebrow">裝修與較大型工程</p><h2 id="engineering-title">配線、配管與裝修水電</h2><p>住宅翻修、店面與辦公空間，依設備位置、使用需求及施工階段安排。工程範圍可洽詢台北、新北、桃園、基隆。</p></div>
      <div className="engineering-grid">{engineering.map(item=><Link className="service-card" key={item.href} href={item.href}><h3>{item.title}<span aria-hidden="true">↗</span></h3><p>{item.desc}</p></Link>)}</div>
    </div></section>
  </>;
}
