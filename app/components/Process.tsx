export default function Process() {
  const steps = [
    {
      number: "01",
      icon: "📞",
      title: "聯繫諮詢",
      desc: "透過電話或 LINE 聯絡，說明維修狀況或工程需求，也可以直接提供現場照片。",
    },
    {
      number: "02",
      icon: "🔍",
      title: "現場勘查",
      desc: "依案件需求安排現場確認，了解空間、管線、電路及施工條件。",
    },
    {
      number: "03",
      icon: "📋",
      title: "規劃與報價",
      desc: "依現場狀況規劃施工方式，確認工程內容、材料及費用後提供報價。",
    },
    {
      number: "04",
      icon: "🛠️",
      title: "專業施工",
      desc: "確認施工內容後進場施工，依工程需求進行水電、裝修及設備工程。",
    },
    {
      number: "05",
      icon: "✓",
      title: "完工驗收",
      desc: "施工完成後確認工程狀況，依實際工程內容提供後續售後與保固服務。",
    },
  ];

  return (
    <section
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
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            從現場評估到完工
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
            無論是緊急維修、住宅翻修或裝修水電工程，
            <br />
            依照實際需求安排專業施工。
          </p>
        </div>

        {/* 流程 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "18px",
          }}
        >
          {steps.map((step) => (
            <div
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
            </div>
          ))}
        </div>

        {/* 緊急維修 CTA */}
        <div
          style={{
            marginTop: "55px",
            padding: "28px 30px",
            borderRadius: "18px",
            background: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 8px",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: 800,
              }}
            >
              緊急水電問題需要立即處理？
            </h3>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              跳電、漏水、馬桶堵塞、水管異常等問題，可直接聯繫我們。
            </p>
          </div>

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
              fontSize: "17px",
            }}
          >
            📞 立即聯絡
          </a>
        </div>
      </div>
    </section>
  );
}