import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/site-content";
export default function ProjectCards({ items = projects, detailed = false }: { items?: typeof projects; detailed?: boolean }) {
  const Heading = detailed ? "h2" : "h3";
  return <div className="project-grid">{items.map(item=><article className="project-card" key={item.id} id={item.id}>
    <Link href={detailed ? item.href : `/projects#${item.id}`} className="project-image-link" aria-label={`${item.title}：${detailed ? item.service : "查看施工紀錄"}`}><Image src={item.image} alt={item.title} width={600} height={450} sizes="(max-width: 350px) 90px, (max-width: 767px) 110px, (max-width: 1200px) 30vw, 360px" loading="lazy" /></Link>
    <div className="project-copy"><Heading>{item.title}</Heading><p>{item.text}</p>{detailed && <p>評估與處理方式依現場條件確認，相關服務頁說明可處理的範圍。</p>}<Link className="text-link" href={detailed ? item.href : `/projects#${item.id}`}>{detailed ? `了解${item.service}` : "查看施工紀錄"} <span aria-hidden="true">→</span></Link></div>
  </article>)}</div>;
}
