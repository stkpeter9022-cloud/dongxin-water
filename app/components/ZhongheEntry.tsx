import Link from "next/link";
import ContactActions from "./ContactActions";

export default function ZhongheEntry() {
  return <section id="zhonghe" className="site-section" aria-labelledby="zhonghe-title"><div className="site-container prose">
    <h2 id="zhonghe-title">中和水電叫修：先說明問題，再確認派工</h2>
    <p>在新北市中和區遇到突然跳電、插座沒電、水管漏水或天花板滲水，可聯絡棟鑫工程行。首頁提供雙北 24 小時水電聯絡，以下依故障狀況選擇服務。</p>
    <div className="related-links"><Link href="/tiao-dian">中和跳電、漏電與配電箱檢查 →</Link><Link href="/zhua-lou">中和抓漏與漏水原因檢查 →</Link><Link href="/lou-shui">已知水管漏點的修繕評估 →</Link></div>
    <h3>中和地區如何安排師傅？</h3>
    <p>請先告知所在區域、故障現象、發生時間與目前影響範圍，可透過 LINE 傳現場照片。確認服務需求與出工時段後，再依師傅排程回覆派工及到場安排。</p>
    <h3>叫修費用如何確認？</h3>
    <p>維修出工費依時段先說明，材料工資另計；師傅現場檢查報價，經您同意才施工。基本抓漏 3,000 元，額外儀器與拆木作由師傅現場評估另報。</p>
    <ContactActions phoneLabel="中和叫修・0918-808-209" lineLabel="LINE 說明故障狀況" />
  </div></section>;
}
