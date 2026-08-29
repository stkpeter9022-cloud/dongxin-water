export default function WhyUs() {
  const items = [
    {
      number: "01",
      icon: "⚡",
      title: "24H 緊急水電聯絡",
      text: "跳電、漏水、馬桶堵塞、水管異常及設備故障等緊急狀況，可隨時聯絡，依案件位置與當日派工狀況安排處理。",
    },
    {
      number: "02",
      icon: "🏠",
      title: "維修・工程都能處理",
      text: "不只處理日常水電維修，也承接室內配線、配電、給排水、衛浴及住宅裝修水電工程。",
    },
    {
      number: "03",
      icon: "📋",
      title: "依現場狀況評估",
      text: "先了解現場問題、設備與施工條件，再說明建議處理方式及相關費用，較大型工程依實際項目進行估價。",
    },
    {
      number: "04",
      icon: "🛠️",
      title: "施工與後續服務",
      text: "依工程內容與現場條件安排施工方式，不同工程項目依材料、施工內容及約定提供相應的後續服務。",
    },
  ];

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-title"
      style={{
        position: "relative",
        padding: "100px 20px",
        background: "#111827",
        overflow: "hidden",
      }}
    >
      {/* 背景裝飾 */}
      <div
        aria-hidden="true"
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
        aria-hidden="true"
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
            id="why-us-title"
            style={{
              margin: "0 0 18px",
              color: "#fff",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            為什麼選擇棟鑫水電？
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            服務台北市、新北市，從緊急水電維修到住宅裝修工程，
            依現場狀況確認需求、施工內容與處理方式。
          </p>
        </div>

        {/* 四大特色 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {items.map((item) => (
            <article
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
                aria-hidden="true"
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
                aria-hidden="true"
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
            </article>
          ))}
        </div>

        {/* 底部資訊 */}
        <div
          style={{
            marginTop: "45px",
            padding: "26px 28px",
            borderRadius: "16px",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.08)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 10px",
              color: "#e2b84b",
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            台北・新北水電維修與工程服務
          </h3>

          <p
            style={{
              margin: 0,
              color: "#e5e7eb",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            緊急維修・室內配線・配電工程・給排水工程・
            衛浴工程・馬達設備・裝修水電
          </p>
        </div>
      </div>
    </section>
  );
}