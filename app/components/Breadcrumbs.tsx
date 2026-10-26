import Link from "next/link";
import { siteUrl } from "../lib/site-content";
export default function Breadcrumbs({ title, path, parent }: { title: string; path: string; parent?: { title: string; path: string } }) {
  const items = [{ name: "首頁", path: "/" }, ...(parent ? [{ name: parent.title, path: parent.path }] : []), { name: title, path }];
  return <div className="site-container breadcrumbs"><nav aria-label="麵包屑導覽"><ol>{items.map((item, index) => <li key={item.path} aria-current={index === items.length - 1 ? "page" : undefined}>{index === items.length - 1 ? item.name : <Link href={item.path}>{item.name}</Link>}</li>)}</ol></nav><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.name,item:siteUrl+item.path}))})}} /></div>;
}
