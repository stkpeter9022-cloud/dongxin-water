import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactActions from "../components/ContactActions";
import PageFaqs from "../components/PageFaqs";
export const metadata: Metadata = {
  title: "給排水配管工程｜冷熱水新設、改管與設備銜接｜棟鑫水電",
  description: "棟鑫工程行提供裝修給排水配管、冷熱水管新設與改管、排水路徑及設備接管評估。較大型工程可洽詢台北、新北、桃園、基隆；依管材、距離、拆除與現場條件報價。",
  alternates: { canonical: "https://www.dongxin24.com/gei-pai-shui" },
  openGraph: { title: "給排水配管工程｜棟鑫工程行", description: "依供水、排水與設備位置評估配管方式。", url: "https://www.dongxin24.com/gei-pai-shui" },
};
const faqs=[
  {q:"給排水工程與通水管有什麼不同？",a:"給排水工程著重管線新設、改管與設備銜接；排水緩慢或堵塞則需先評估疏通。若檢查發現管路破損或配置問題，再討論是否需要更換或調整管線。"},
  {q:"廚房或浴室可以移動排水位置嗎？",a:"要確認既有排水點、管路路徑、樓板及現場空間，並評估是否影響其他設備或住戶。不是只看新設備放得下，就能確定管線可直接移動。"},
  {q:"老舊管線需要全部換新嗎？",a:"需依材質、接頭狀況、滲漏位置及預計裝修範圍判斷，可先評估局部修繕或分段更新，不預設每個案件都需全面更換。"},
  {q:"怎麼確認施工內容與售後範圍？",a:"報價時確認管材、長度、設備接點、拆除與復原介面，以及完工檢查項目。保固範圍與期限依材料、施工項目及雙方約定為準。"},
];
export default function PipingPage(){return <main id="main-content" className="content-page"><Breadcrumbs title="給排水配管工程" path="/gei-pai-shui" />
  <section className="page-intro"><div className="site-container"><h1>給排水配管工程<br />從管線路徑到設備銜接</h1><p>冷熱水新設、老舊管線更新、廚衛改管與排水設備配接，依現場供排水條件安排施作。</p><ContactActions phoneLabel="配管工程諮詢" /></div></section>
  <section className="site-section"><div className="site-container prose"><h2>哪些需求適合配管工程？</h2><ul><li><strong>裝修新增用水點：</strong>配合廚房、洗臉盆、衛浴及相關設備配置供水與排水接點。</li><li><strong>管路更新或改道：</strong>依現有管材、路徑與裝修範圍評估保留、分段更新或改管。</li><li><strong>馬達與設備配接：</strong>確認設備規格、進出水方向與管路銜接空間，配合現場條件處理。</li></ul>
    <h2>現場需要看哪些條件？</h2><h3>供水、管材與使用需求</h3><p>先了解供水來源、冷熱水需求、既有管材與設備規格，再討論適合的管路與接點。不同設備與使用方式需要分別評估，不能只憑照片決定所有材料。</p>
    <h3>排水路徑與施工介面</h3><p>排水需考慮既有接管位置、可用高差、管線路徑及檢修空間。暗管、地坪或牆內施工，也需確認拆除、泥作與復原由哪些工項負責，避免報價範圍不清。</p>
    <h2>配管工程如何進行？</h2><ol><li>提供現場照片、用水設備清單、預計新增或移動的位置。</li><li>現場確認管路與可施工路徑，討論材料、管線配置及施工介面。</li><li>確認報價後安排施作，完工依工項核對接點、用水與排水情形；具體測試項目事先約定。</li></ol>
    <h2>配管費用的評估因素</h2><p>管材、口徑、配接數量、施工距離、明暗管、拆除打鑿、設備拆裝與現場進出動線，會影響材料與工時。若需分階段進場或配合其他工班，也應在評估時一併說明。</p>
    <div className="scope-note"><h2>配管與裝修工程服務區域</h2><p>較大型工程可洽詢台北、新北、桃園、基隆，依工程範圍與排程確認。雙北的局部漏水維修與緊急需求，請參考<Link href="/lou-shui">漏水處理</Link>；堵塞問題可參考<Link href="/shui-guan">水管疏通</Link>。</p></div>
    <h2>管路與設備施工照片</h2><p>參考<Link href="/projects#piping">戶外管路配接</Link>及<Link href="/projects#pump">馬達配管作業</Link>。若屬整體翻修，可一併了解<Link href="/shui-dian-gong-cheng">裝修水電工程</Link>。</p>
    <h2>給排水配管常見問題</h2><PageFaqs items={faqs} />
  </div></section></main>;}
