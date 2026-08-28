export default function WhyUs() {
  const items = [
    {
      number: "01",
      icon: "⚡",
      title: "24H 水電急修",
      text: "跳電、漏水、馬桶堵塞、水管異常等緊急狀況，提供全天候到府處理。",
    },
    {
      number: "02",
      icon: "🏠",
      title: "維修・裝修都能做",
      text: "不只處理緊急維修，也承接室內配線、配電、給排水、衛浴及裝修水電工程。",
    },
    {
      number: "03",
      icon: "📋",
      title: "現場確認再報價",
      text: "施工前先了解現場狀況與工程需求，確認施工內容及費用後再進行。",
    },
    {
      number: "04",
      icon: "🛠️",
      title: "專業施工與售後",
      text: "依照工程需求選用合適材料與施工方式，完成後提供完善的售後服務。",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        padding: "100px 20px",
        background: "#111827",
        overflow: "hidden",
      }}
    >
      {/* 背景裝飾 */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-100px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(214,165,44,.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-120px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.03)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* 標題 */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 16px",
              borderRadius: "999px",
              background: "rgba(214,165,44,.12)",
              color: "#e2b84b",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            WHY CHOOSE US
          </div>

          <h2
            style={{
              margin: "0 0 18px",
              color: "#fff",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            為什麼選擇我們？
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            從緊急維修到完整裝修水電工程，
            <br />
            以專業施工、清楚溝通與合理報價，協助您解決水電問題。
          </p>
        </div>

        {/* 四大優勢 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.number}
              style={{
                position: "relative",
                background: "#1f2937",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "18px",
                padding: "32px 28px",
                minHeight: "280px",
                boxShadow: "0 12px 30px rgba(0,0,0,.15)",
              }}
            >
              {/* 編號 */}
              <div
                style={{
                  position: "absolute",
                  top: "22px",
                  right: "24px",
                  color: "rgba(255,255,255,.12)",
                  fontSize: "42px",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: "rgba(214,165,44,.12)",
                  fontSize: "30px",
                  marginBottom: "24px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 14px",
                  color: "#fff",
                  fontSize: "22px",
                  fontWeight: 800,
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#cbd5e1",
                  fontSize: "15px",
                  lineHeight: 1.85,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* 底部強化訊息 */}
        <div
          style={{
            marginTop: "45px",
            padding: "25px 28px",
            borderRadius: "16px",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.08)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#e5e7eb",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: "#e2b84b" }}>
              雙北地區水電工程服務
            </strong>
            {"　"}
            維修｜裝修｜配線｜配電｜給排水｜衛浴工程
          </p>
        </div>
      </div>
    </section>
  );
}