export const metadata = {
  title: "聯絡棟鑫水電｜24小時水電急修｜雙北快速到府",
  description:
    "棟鑫水電提供雙北24小時水電急修服務，歡迎來電或加入 LINE 詢問，快速安排師傅到府。",
};

export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "60px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        聯絡我們
      </h1>

      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          lineHeight: "2",
        }}
      >
        <h2>棟鑫水電</h2>

        <p>📞 電話：0918-808-209</p>

        <p>
          💬 LINE：
          <a
            href="https://line.me/ti/p/ezn_Ad6UpZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            點我立即詢問
          </a>
        </p>

        <p>📍 服務區域：台北市、新北市</p>

        <p>🕒 24小時全年無休</p>

        <hr style={{ margin: "30px 0" }} />

        <h3>服務項目</h3>

        <ul>
          <li>跳電維修</li>
          <li>漏水處理</li>
          <li>抓漏服務</li>
          <li>水管堵塞疏通</li>
          <li>馬桶不通</li>
          <li>抽水馬達更換</li>
          <li>沈水馬達更換</li>
          <li>室內配線</li>
          <li>衛浴設備安裝</li>
        </ul>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:0918808209"
            style={{
              background: "#ef4444",
              color: "#fff",
              padding: "16px 34px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            📞 立即來電
          </a>

          <a
            href="https://line.me/ti/p/ezn_Ad6UpZ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#06C755",
              color: "#fff",
              padding: "16px 34px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            💬 LINE立即詢問
          </a>
        </div>
      </div>
    </main>
  );
}