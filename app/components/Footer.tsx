export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#fff",
        padding: "70px 20px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "35px",
        }}
      >
        {/* 公司資訊 */}
        <div>
          <h2
            style={{
              fontSize: "clamp(28px,6vw,34px)",
              marginBottom: "18px",
              fontWeight: "bold",
            }}
          >
            ⚡ 棟鑫水電
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "30px",
              fontSize: "16px",
            }}
          >
            24小時水電急修、跳電維修、漏水處理、抓漏服務、
            室內配線、水管配置、抽水馬達、沈水馬達、
            衛浴設備安裝、水塔檢修、水塔清洗。
          </p>
        </div>

        {/* 聯絡資訊 */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              marginBottom: "18px",
            }}
          >
            聯絡我們
          </h3>

          <p
            style={{
              lineHeight: "32px",
              color: "#cbd5e1",
              fontSize: "16px",
            }}
          >
            📞 0918-808-209
            <br />
            📍 台北市・新北市
            <br />
            🕒 24小時全年無休
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                background: "#ef4444",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: "10px",
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
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              💬 LINE詢問
            </a>
          </div>
        </div>

        {/* 熱門服務 */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              marginBottom: "18px",
            }}
          >
            熱門服務
          </h3>

          <ul
            style={{
              color: "#cbd5e1",
              lineHeight: "30px",
              paddingLeft: "20px",
              fontSize: "16px",
            }}
          >
            <li>跳電維修</li>
            <li>漏水處理</li>
            <li>抓漏服務</li>
            <li>馬桶不通</li>
            <li>水管疏通</li>
            <li>抽水馬達更換</li>
            <li>沈水馬達更換</li>
            <li>室內配線</li>
          </ul>
        </div>
      </div>

      <hr
        style={{
          margin: "45px 0 20px",
          borderColor: "#334155",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "15px",
          lineHeight: "26px",
        }}
      >
        © 2026 棟鑫水電｜雙北24小時水電急修｜快速到府
      </p>
    </footer>
  );
}