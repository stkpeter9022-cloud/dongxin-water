import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactActions from "../components/ContactActions";
import PageFaqs from "../components/PageFaqs";
export const metadata: Metadata = {
  title: "裝修水電工程｜住宅翻修、配線與配管規劃｜棟鑫水電",
  description: "棟鑫工程行承接住宅、店面與辦公空間裝修水電，整合室內配線、老屋換線、給排水配管及設備位置。較大型工程可洽詢台北、新北、桃園、基隆，依現場條件評估報價。",
  alternates: { canonical: "https://www.dongxin24.com/shui-dian-gong-cheng" },
  openGraph: { title: "裝修水電工程｜棟鑫工程行", description: "依空間、設備與施工階段評估配線與配管。", url: "https://www.dongxin24.com/shui-dian-gong-cheng" },
};
const faqs=[
  {q:"桃園、基隆可以承接裝修水電嗎？",a:"較大型的裝修水電、配線與給排水工程可洽詢台北、新北、桃園、基隆，依工程內容、施工位置與排程評估。一般維修及24小時緊急叫修以雙北為主。"},
  {q:"沒有完整設計圖也能先詢問嗎？",a:"可以先提供空間照片、預計使用方式、設備清單及希望調整的位置。工程範圍較大時，再確認是否需要補充圖面、尺寸或與其他工班協調。"},
  {q:"裝潢已經開始，還能改水電位置嗎？",a:"需先確認已完成的工項、既有線路與管路路徑，以及是否影響木作、泥作或其他工程。變更內容及可能增加的材料與工時，應在施作前重新確認。"},
  {q:"報價包含哪些施工與保固內容？",a:"依現場評估與報價確認工項、材料、施工方式及完工確認內容。不同工程與材料的保固範圍、期限依雙方約定，不以單一條件套用所有案件。"},
];
export default function EngineeringPage(){return <main id="main-content" className="content-page"><Breadcrumbs title="裝修水電工程" path="/shui-dian-gong-cheng" />
  <section className="page-intro"><div className="site-container"><h1>裝修水電工程<br />讓配線、配管配合空間使用</h1><p>住宅翻修、店面與辦公空間，從設備需求、迴路配置到給排水位置，先確認工項與施工條件，再安排施作。</p><ContactActions phoneLabel="工程電話諮詢" /></div></section>
  <section className="site-section"><div className="site-container prose"><h2>什麼時候適合整體評估水電？</h2><p>老屋翻修、格局調整、廚衛移位，或新增冷氣與高耗電設備時，單一插座或管路位置可能牽動其他工項。先整理需求，有助於釐清哪些可保留、哪些需更新，避免在裝潢完成後反覆拆改。</p>
    <h3>電力與設備配置</h3><p>評估配電箱、既有線路、插座照明及設備需求，確認是否需要更新電線或增加專用迴路。詳細工項可參考<Link href="/shi-nei-pei-xian">室內配線與老屋換線</Link>。</p>
    <h3>給排水與衛浴位置</h3><p>確認供水來源、冷熱水需求、排水位置與設備銜接，再評估管線路徑、明管或暗管及施作方式。了解<Link href="/gei-pai-shui">給排水配管工程</Link>與<Link href="/wei-yu">衛浴設備安裝</Link>。</p>
    <h2>工程評估前，準備這些資訊</h2><ul><li>施工所在縣市、空間用途與預計施作範圍。</li><li>現況照片、平面配置、設備位置與可提供的尺寸。</li><li>預計進場時段、其他工班的施工階段，以及是否有人居住或營業。</li></ul>
    <h2>施工流程與工班協調</h2><ol><li><strong>確認需求與現場：</strong>釐清既有管線、設備及可施工路徑。</li><li><strong>確認報價與介面：</strong>列出施作範圍、材料、變更項目，並協調泥作、木作與設備進場順序。</li><li><strong>安排施工與完工確認：</strong>依確認內容施作，核對設備位置、使用功能及雙方約定的測試項目。</li></ol>
    <h2>哪些條件會影響工程費用？</h2><p>迴路與出線點數量、線徑與施工距離、管材與管路長度、明暗管選擇、拆除打鑿、現場保護、進出動線與分階段施工，都可能影響材料及工時。照片可協助初步了解，實際報價仍以現場確認為準。</p>
    <div className="scope-note"><h2>工程服務範圍</h2><p>較大型工程可承接台北、新北、桃園、基隆，依工項與排程評估。一般水電維修與24小時緊急叫修主要服務台北、新北。</p></div>
    <h2>看看現有施工紀錄</h2><p>可參考<Link href="/projects#panel">配電箱線路檢修</Link>與<Link href="/projects#piping">管路配接現場</Link>。照片呈現現有作業內容，個別案件仍需獨立評估。</p>
    <h2>裝修水電常見問題</h2><PageFaqs items={faqs} />
  </div></section></main>;}
