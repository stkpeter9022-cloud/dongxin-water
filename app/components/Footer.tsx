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
          gap: "40px",
        }}
      >
        {/* 公司資訊 */}
        <div>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            棟鑫水電
          </h2>

          <p
            style={{
              lineHeight: "34px",
              color: "#cbd5e1",
            }}
          >
            專營：
            <br />
            24小時水電急修、跳電維修、漏水處理、
            <br />
            抓漏服務、室內配線、水管配置、
            <br />
            抽水馬達、沈水馬達、衛浴設備安裝、
            <br />
            水塔檢修、水塔清洗。
          </p>
        </div>

        {/* 聯絡方式 */}
        <div>
          <h3
            style={{
              marginBottom: "20px",
            }}
          >
            聯絡我們
          </h3>

          <p style={{ lineHeight: "36px" }}>
            📞 0918-808-209
            <br />
            📍 服務地區：台北市、新北市
            <br />
            🕒 24小時全年無休
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                background: "#ef4444",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "10px",
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
                padding: "12px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              💬 LINE詢問
            </a>
          </div>
        </div>

        {/* 服務項目 */}
        <div>
          <h3
            style={{
              marginBottom: "20px",
            }}
          >
            熱門服務
          </h3>

          <ul
            style={{
              lineHeight: "36px",
              color: "#cbd5e1",
              paddingLeft: "20px",
            }}
          >
            <li>跳電維修</li>
            <li>漏水處理</li>
            <li>抓漏服務</li>
            <li>水管堵塞疏通</li>
            <li>馬桶不通</li>
            <li>抽水馬達更換</li>
            <li>沈水馬達更換</li>
            <li>室內配線</li>
          </ul>
        </div>
      </div>

      <hr
        style={{
          margin: "50px 0 25px",
          borderColor: "#334155",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 棟鑫水電｜24小時水電急修｜雙北快速到府
      </p>
    </footer>
  );
}