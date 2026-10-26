import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/site-content";
import { projectRecords, caseFields } from "../lib/project-records";
export default function ProjectCards({ items = projects, detailed = false }: { items?: typeof projects; detailed?: boolean }) {
  const Heading = detailed ? "h2" : "h3";
  return <div className={detailed ? "project-grid project-records" : "project-grid"}>{items.map(item=><article className="project-card" key={item.id} id={item.id}>
    <Link href={detailed ? item.href : `/projects#${item.id}`} className="project-image-link" aria-label={`${item.title}：${detailed ? item.service : "查看施工紀錄"}`}><Image src={item.image} alt={item.title} width={600} height={450} sizes={detailed ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 46vw, 568px" : "(max-width: 350px) 90px, (max-width: 767px) 110px, (max-width: 1200px) 30vw, 360px"} loading="lazy" /></Link>
    <div className="project-copy"><Heading>{item.title}</Heading><p>{item.text}</p>{detailed && projectRecords[item.id] && <div className="project-detail"><h3>照片可見的作業</h3><p>{projectRecords[item.id].observation}</p><h3>同類需求，現場會評估什麼？</h3><p>{projectRecords[item.id].assessment}</p><h3>施作前應約定的確認項目</h3><p>{projectRecords[item.id].checks}</p>{Object.entries(caseFields).map(([key,label])=>{const value=projectRecords[item.id].verifiedCase?.[key as keyof typeof caseFields];return value?<p key={key}><strong>{label}：</strong>{value}</p>:null;})}</div>}<Link className="text-link" href={detailed ? item.href : `/projects#${item.id}`}>{detailed ? `了解${item.service}` : "查看施工紀錄"} <span aria-hidden="true">→</span></Link></div>
  </article>)}</div>;
}
