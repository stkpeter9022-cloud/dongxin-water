import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/site-content";
import { projectRecords } from "../lib/project-records";

export default function ServicePhotos({ ids }: { ids: string[] }) {
  return <section className="site-section"><div className="site-container">
    <div className="section-heading"><h2>相關施工照片</h2><p>以下為既有施工照片，說明照片可見的作業內容。</p></div>
    <div className="project-grid">{projects.filter(item => ids.includes(item.id)).map(item => <article className="project-card" key={item.id}>
      <Image src={item.image} alt={projectRecords[item.id].observation} width={600} height={800} sizes="(max-width: 767px) 100vw, 50vw" style={{ width: "100%", height: "auto" }} />
      <div className="project-copy"><h3>{item.title}</h3><p>{projectRecords[item.id].observation}</p><Link className="text-link" href={`/projects#${item.id}`}>查看照片與現場評估說明 →</Link></div>
    </article>)}</div>
  </div></section>;
}
