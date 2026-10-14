import { repairs, engineering, siteUrl, lineUrl } from "../lib/site-content";
export default function Schema() {
  const business={
    "@type":["Plumber","Electrician"], "@id":siteUrl+"/#business",
    name:"棟鑫水電", alternateName:"棟鑫工程行", url:siteUrl+"/", logo:siteUrl+"/icon.png", image:siteUrl+"/icon.png", telephone:"+886918808209",
    description:"台北、新北水電維修與24小時緊急聯絡；裝修水電與較大型配線、給排水工程可洽詢台北、新北、桃園、基隆。",
    areaServed:["台北市","新北市","桃園市","基隆市"].map(name=>({"@type":"City",name})), sameAs:[lineUrl],
    hasOfferCatalog:{"@type":"OfferCatalog",name:"維修與裝修工程",itemListElement:[...repairs,...engineering].map(item=>({"@type":"Offer",itemOffered:{"@type":"Service",name:item.title,url:siteUrl+item.href,areaServed:engineering.includes(item)?["台北市","新北市","桃園市","基隆市"]:["台北市","新北市"]}}))}
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":[business,{"@type":"Organization","@id":siteUrl+"/#organization",name:"棟鑫工程行",alternateName:"棟鑫水電",url:siteUrl+"/",logo:siteUrl+"/icon.png",telephone:"+886918808209",sameAs:[lineUrl],department:{"@id":siteUrl+"/#business"}}]})}} />;
}
