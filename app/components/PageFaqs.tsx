export default function PageFaqs({ items }: { items: { q: string; a: string }[] }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:items.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} /><div className="faq-list">{items.map(f=><details className="faq-item" key={f.q}><summary>{f.q}<span className="faq-marker" aria-hidden="true" /></summary><p>{f.a}</p></details>)}</div></>;
}
