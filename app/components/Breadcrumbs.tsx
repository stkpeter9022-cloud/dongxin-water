import Link from "next/link";
import { siteUrl } from "../lib/site-content";
export default function Breadcrumbs({ title, path }: { title: string; path: string }) {
  return <div className="site-container breadcrumbs"><nav aria-label="麵包屑導覽"><ol><li><Link href="/">首頁</Link></li><li aria-current="page">{title}</li></ol></nav><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"首頁",item:siteUrl+"/"},{"@type":"ListItem",position:2,name:title,item:siteUrl+path}]})}} /></div>;
}
