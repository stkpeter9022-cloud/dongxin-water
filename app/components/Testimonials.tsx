export default function Testimonials() {
  const projects = [
    {
      number: "01",
      title: "住宅裝修水電",
      desc: "新屋、老屋翻修及局部裝修，提供水電配置、給排水、衛浴與設備安裝。",
      tags: ["裝修水電", "給排水", "衛浴"],
    },
    {
      number: "02",
      title: "全室配線工程",
      desc: "依照住宅用電需求規劃迴路，處理全室換線、插座、開關及照明配線。",
      tags: ["室內配線", "迴路配置", "插座"],
    },
    {
      number: "03",
      title: "配電與用電工程",
      desc: "配電箱整理、無熔絲開關、專用迴路及設備用電工程，依現場需求規劃。",
      tags: ["配電箱", "專用迴路", "用電工程"],
    },
    {
      number: "04",
      title: "給排水與衛浴工程",
      desc: "冷熱水管、排水管、馬桶、洗手台、龍頭及各類衛浴設備施工。",
      tags: ["水管工程", "排水", "衛浴"],
    },
    {
      number: "05",
      title: "設備與馬達工程",
      desc: "抽水馬達、加壓馬達、沉水馬達等設備安裝、檢修與更換。",
      tags: ["抽水馬達", "加壓馬達", "設備安裝"],
    },
    {
      number: "06",
      title: "24H 緊急水電",
      desc: "跳電、漏水、馬桶堵塞、水管異常等緊急水電問題，提供快速聯繫與處理。",
      tags: ["24H", "跳電", "漏水"],
    },
  ];

  return (
    <section
      style={{
        padding: "110px 20px",
        background: "#f5f6f7",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* 標題 */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 16px",
              borderRadius: "999px",
              background: "#fff4d6",
              color: "#9a6b00",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            PROJECT TYPES
          </div>

          <h2
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            我們承接哪些工程？
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            從單項維修到完整裝修水電，
            <br />
            依照現場條件與工程需求提供合適的施工方式。
          </p>
        </div>

        {/* 工程類型 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "22px",
          }}
        >
          {projects.map((item) => (
            <article
              key={item.number}
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: "18px",
                padding: "32px 28px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 28px rgba(15,23,42,.06)",
                minHeight: "260px",
              }}
            >
              {/* 編號 */}
              <div
                style={{
                  position: "absolute",
                  top: "22px",
                  right: "24px",
                  fontSize: "42px",
                  fontWeight: 800,
                  color: "#eef0f2",
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>

              <h3
                style={{
                  margin: "0 0 14px",
                  paddingRight: "55px",
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#111827",
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: "0 0 22px",
                  color: "#64748b",
                  fontSize: "15px",
                  lineHeight: 1.85,
                }}
              >
                {item.desc}
              </p>

              {/* 標籤 */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "6px",
                      background: "#f8fafc",
                      border: "1px solid #e5e7eb",
                      color: "#475569",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* 底部 CTA */}
        <div
          style={{
            marginTop: "55px",
            padding: "35px 30px",
            borderRadius: "18px",
            background: "#111827",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 10px",
              color: "#fff",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            不確定您的工程適合哪種方案？
          </h3>

          <p
            style={{
              margin: "0 0 22px",
              color: "#cbd5e1",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            歡迎提供現場照片、工程需求或施工圖面，我們可以先了解您的需求。
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "190px",
                height: "54px",
                padding: "0 24px",
                borderRadius: "10px",
                background: "#d6a52c",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              📞 電話工程諮詢
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "190px",
                height: "54px",
                padding: "0 24px",
                borderRadius: "10px",
                background: "#06C755",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              💬 LINE 傳照片詢問
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}