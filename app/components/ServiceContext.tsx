import Link from "next/link";
import { projects } from "../lib/site-content";
const factors: Record<string,string> = {
  "/tiao-dian":"故障位置、檢查範圍、開關與線材、是否需要調整迴路，均會影響工時及材料。",
  "/lou-shui":"漏點是否明確、管材、管徑、施工路徑與拆除復原範圍，會影響修繕方式與費用。",
  "/zhua-lou":"水痕位置、可接近的管路與檢查範圍不同，可能需要分階段確認；檢測與後續修繕工項應分別說明。",
  "/shui-guan":"堵塞位置、管徑與管路長度、可進入的疏通點，以及是否需拆裝設備，均需現場評估。",
  "/ma-tong":"異物、管路狀況、是否需要拆裝馬桶或處理底座，會影響處理方式及工時。",
  "/chou-shui-ma-da":"設備用途、揚程、流量、電壓、管路與控制設備，以及拆裝動線，會影響選型與費用。",
  "/shen-shui-ma-da":"排水用途、設備規格、管路、浮球控制、現場水位與可接近條件，需一併確認。",
  "/shi-nei-pei-xian":"線徑、迴路與出線點數量、施工距離、明暗管、打鑿及其他工班介面，會影響配線工時與材料。",
  "/wei-yu":"設備品牌型號、現有接管位置、拆裝與搬運、周邊管路調整及復原介面，會影響施工內容。",
};
const related: Record<string,string[]> = {
  "/lou-shui":["/zhua-lou","/gei-pai-shui"],"/zhua-lou":["/lou-shui","/gei-pai-shui"],
  "/shui-guan":["/ma-tong","/gei-pai-shui"],"/ma-tong":["/shui-guan","/wei-yu"],
  "/tiao-dian":["/shi-nei-pei-xian","/shui-dian-gong-cheng"],
  "/chou-shui-ma-da":["/shen-shui-ma-da","/gei-pai-shui"],"/shen-shui-ma-da":["/chou-shui-ma-da","/gei-pai-shui"],
  "/shi-nei-pei-xian":["/shui-dian-gong-cheng","/gei-pai-shui"],"/wei-yu":["/gei-pai-shui","/ma-tong"],
};
const names: Record<string,string>={"/lou-shui":"漏水處理","/zhua-lou":"抓漏檢查","/shui-guan":"水管疏通","/ma-tong":"馬桶疏通","/wei-yu":"衛浴設備安裝","/shi-nei-pei-xian":"室內配線","/shui-dian-gong-cheng":"裝修水電工程","/gei-pai-shui":"給排水配管","/shen-shui-ma-da":"沈水與污水馬達","/chou-shui-ma-da":"抽水與加壓馬達"};
export default function ServiceContext({ route }: { route: string }) {
  const project=projects.find(p=>p.href===route) || (route==="/lou-shui"?projects.find(p=>p.id==="leak"):undefined);
  return <section className="site-section service-context"><div className="site-container prose"><h2>現場評估與施工約定</h2><p>{factors[route]}</p><p>施工前確認工項與報價；保固範圍與期限依材料、施工項目及雙方約定為準。</p><div className="scope-note"><h3>服務範圍</h3><p>{route==="/shi-nei-pei-xian" ? "室內配線、老屋換線及較大型裝修工程可洽詢台北、新北、桃園、基隆，依工程內容與排程評估。一般維修與24小時緊急叫修以雙北為主。" : route==="/wei-yu" ? "一般設備安裝與維修以台北、新北為主；配合較大型裝修工程，可洽詢桃園、基隆並依工項與排程評估。" : "本頁一般維修與緊急聯絡主要服務台北市、新北市，實際派工依位置與當日安排確認。桃園、基隆限較大型裝修水電、配線與配管等工程洽詢。"}</p></div><h3>相關服務與施工紀錄</h3><div className="related-links">{(related[route]||[]).map(href=><Link key={href} href={href}>{names[href]}</Link>)}{project&&<Link href={`/projects#${project.id}`}>{project.title}照片</Link>}</div></div></section>;
}
