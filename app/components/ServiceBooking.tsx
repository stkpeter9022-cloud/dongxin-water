import ContactActions from "./ContactActions";

export default function ServiceBooking({ leakDetection = false }: { leakDetection?: boolean }) {
  return (
    <section className="site-section section-muted" aria-labelledby="booking-title">
      <div className="site-container prose">
        <h2 id="booking-title">{leakDetection ? "抓漏費用與檢查安排" : "維修收費與派工安排"}</h2>
        {leakDetection ? <>
          <p><strong>基本抓漏 3,000 元。</strong>額外儀器與拆木作由師傅現場評估另報；檢測後若需修繕，也會另行說明工項與費用，經您同意才施工。</p>
          <p>聯絡時請提供滲水位置、何時開始、是否在用水或下雨時出現，以及現場照片。棟鑫工程行先了解狀況，再確認檢查範圍與派工安排。</p>
        </> : <>
          <ol>
            <li><strong>出工費依時段：</strong>聯絡時先確認預約時段及對應出工費。</li>
            <li><strong>材料工資另計：</strong>依檢查範圍、需更換的材料與施工內容評估。</li>
            <li><strong>現場報價：</strong>師傅檢查後說明故障判斷、處理方式與費用。</li>
            <li><strong>同意才施工：</strong>確認報價及工項後再進行維修。</li>
          </ol>
          <p>聯絡時請提供所在行政區、故障發生時間、影響範圍及安全距離拍攝的照片，方便先了解需要的檢查與派工方式。</p>
        </>}
        <p>服務台北市、新北市，包含中和區。24 小時可聯絡；實際能否派工與到場時間，依位置、現場狀況及師傅排程確認。</p>
        <ContactActions phoneLabel="0918-808-209・電話叫修" lineLabel="LINE 傳照片詢問" />
      </div>
    </section>
  );
}
