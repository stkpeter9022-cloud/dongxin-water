export default function Process() {
  const steps = [
    {
      number: "01",
      icon: "📞",
      title: "聯繫與需求確認",
      desc: "可透過電話或 LINE 說明水電問題、工程需求，也可以先提供現場照片、設備型號或施工圖面。",
    },
    {
      number: "02",
      icon: "🔍",
      title: "現場檢查與評估",
      desc: "依案件需求安排到場確認，檢查現場空間、既有管線、電路、設備及實際施工條件。",
    },
    {
      number: "03",
      icon: "📋",
      title: "施工方式與報價",
      desc: "依現場實際狀況說明建議的處理方式、施工內容與相關費用；較大型工程則依項目及材料內容進行估價。",
    },
    {
      number: "04",
      icon: "🛠️",
      title: "安排專業施工",
      desc: "確認施工內容後安排進場，依案件需求進行水電維修、室內配線、給排水、衛浴或相關設備工程。",
    },
    {
      number: "05",
      icon: "✓",
      title: "完工確認",
      desc: "施工完成後確認處理項目與現場狀況，不同工程依施工內容、材料及約定提供相應的售後服務。",
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      style={{
        padding: "100px 20px",
        background: "#ffffff",
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
            HOW WE WORK
          </div>

          <h2
            id="process-title"
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            雙北水電工程服務流程
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            從緊急水電維修、設備故障到住宅翻修與裝修水電工程，
            依現場狀況確認需求，再安排適合的施工方式。
          </p>
        </div>

        {/* 流程 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "18px",
          }}
        >
          {steps.map((step) => (
            <article
              key={step.number}
              style={{
                position: "relative",
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                padding: "32px 24px",
                minHeight: "285px",
              }}
            >
              {/* 編號 */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "22px",
                  color: "#e5e7eb",
                  fontSize: "40px",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                aria-hidden="true"
                style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  fontSize: "30px",
                  marginBottom: "25px",
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 14px",
                  fontSize: "21px",
                  fontWeight: 800,
                  color: "#111827",
                  lineHeight: 1.4,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: "15px",
                  lineHeight: 1.85,
                }}
              >
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "55px",
            padding: "30px",
            borderRadius: "18px",
            background: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 420px",
            }}
          >
            <h3
              style={{
                margin: "0 0 8px",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: 800,
              }}
            >
              有水電問題或工程需求？
            </h3>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
                fontSize: "15px",
                lineHeight: 1.75,
              }}
            >
              跳電、漏水、馬桶、水管、馬達、配線及裝修水電需求，
              可先來電或透過 LINE 提供現場資料。
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "175px",
                height: "52px",
                padding: "0 22px",
                borderRadius: "8px",
                background: "#d6a52c",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              📞 立即來電
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "175px",
                height: "52px",
                padding: "0 22px",
                borderRadius: "8px",
                background: "#06C755",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              💬 LINE 傳照片
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}