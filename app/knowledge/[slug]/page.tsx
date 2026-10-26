import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactActions from "../../components/ContactActions";
import { guides } from "../../lib/knowledge";

export const dynamicParams = false;
export function generateStaticParams() { return guides.map(guide => ({ slug: guide.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) notFound();
  return {
    title: `${guide.title}｜棟鑫水電`, description: guide.summary,
    alternates: { canonical: `https://www.dongxin24.com/knowledge/${slug}` },
    openGraph: { title: guide.title, description: guide.summary, url: `https://www.dongxin24.com/knowledge/${slug}`, type: "article" },
  };
}
export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) notFound();
  return <main id="main-content" className="content-page">
    <Breadcrumbs title={guide.category} path={`/knowledge/${slug}`} parent={{ title: "水電知識", path: "/knowledge" }} />
    <article>
      <header className="page-intro"><div className="site-container"><p className="eyebrow">{guide.category}・棟鑫水電</p><h1>{guide.title}</h1><p>{guide.summary}</p><p className="guide-byline">內容整理：棟鑫水電工程行 · 更新：2026年10月27日</p></div></header>
      <div className="site-section"><div className="site-container prose guide-body">
        <nav className="guide-toc" aria-label="文章目錄"><p><strong>這篇可以幫你了解</strong></p><ol>{guide.sections.map((section, index) => <li key={section.title}><a href={`#topic-${index}`}>{section.title}</a></li>)}</ol></nav>
        {guide.sections.map((section, index) => <section className="guide-section" id={`topic-${index}`} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <section className="scope-note"><h2>聯絡前，準備這些資訊</h2><ul>{guide.prepare.map(item => <li key={item}>{item}</li>)}</ul><p>台北、新北可先說明所在區域與現場狀況；出工費事先說明，材料與施工費另計，現場評估並確認報價後施工。</p><ContactActions /></section>
        <section className="guide-section"><h2>依問題選擇服務</h2><div className="related-links">{guide.services.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div></section>
        {guide.sources && <aside className="guide-sources"><h2>延伸參考</h2><ul>{guide.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></aside>}
        <Link className="text-link" href="/knowledge">← 回到水電知識</Link>
      </div></div>
    </article>
  </main>;
}
