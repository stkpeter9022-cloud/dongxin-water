import Link from "next/link";
import { repairs, engineering } from "../lib/site-content";
export default function Services() {
  return <>
    <section id="services" className="site-section" aria-labelledby="services-title"><div className="site-container">
      <div className="section-heading"><p className="eyebrow">維修與緊急叫修</p><h2 id="services-title">台北・新北24小時水電維修</h2><p>找跳電、漏水或堵塞處理？先選擇問題類型。緊急狀況可直接來電，派工依位置與當日安排確認。</p></div>
      <div className="service-grid">{repairs.map(item=><Link className="service-card" key={item.href} href={item.href}><h3>{item.title}<span aria-hidden="true">↗</span></h3><p>{item.desc}</p></Link>)}</div>
    </div></section>
    <section id="engineering" className="site-section section-muted" aria-labelledby="engineering-title"><div className="site-container">
      <div className="section-heading"><p className="eyebrow">裝修與較大型工程</p><h2 id="engineering-title">水電工程・水電裝潢與配線配管</h2><p>住宅翻修、店面與辦公空間，依設備位置、使用需求及施工階段安排。台北、新北水電工程可先提供現場照片或圖面，依工項與排程評估。</p></div>
      <div className="engineering-grid">{engineering.map(item=><Link className="service-card" key={item.href} href={item.href}><h3>{item.title}<span aria-hidden="true">↗</span></h3><p>{item.desc}</p></Link>)}</div>
    </div></section>
  </>;
}
