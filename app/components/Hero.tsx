import Image from "next/image";
import Link from "next/link";
import ContactActions from "./ContactActions";
export default function Hero() {
  return <section className="home-hero" aria-labelledby="home-title"><div className="site-container hero-grid">
    <div className="hero-copy"><p className="eyebrow">棟鑫工程行／棟鑫水電</p>
      <h1 id="home-title">雙北水電維修<br /><span>裝修水電工程</span></h1>
      <p className="hero-intro">跳電、漏水、疏通到裝修配線、給排水配管，先了解現場，再規劃合適的處理方式。</p>
      <ContactActions />
      <p className="hero-scope">雙北24小時緊急聯絡・工程可洽詢桃園、基隆</p>
      <div className="hero-entry-links"><Link href="#services">緊急維修入口 <span aria-hidden="true">↓</span></Link><Link href="#engineering">裝修工程入口 <span aria-hidden="true">↓</span></Link></div>
    </div>
    <figure className="hero-photo"><Image src="/case5.jpg" alt="棟鑫工程行師傅進行現場管路配接作業" width={1206} height={1593} sizes="(max-width: 767px) 1px, (max-width: 1200px) 42vw, 480px" loading="lazy" /><figcaption>從管路到設備，依現場條件評估施作。</figcaption></figure>
  </div></section>;
}
