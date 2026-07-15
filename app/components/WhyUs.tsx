export default function WhyUs() {
  const items = [
    {
      icon: "⚡",
      title: "24小時緊急服務",
      text: "全天候待命，雙北快速到府。",
    },
    {
      icon: "🚐",
      title: "最快30~60分鐘到府",
      text: "依照地區快速安排師傅前往。",
    },
    {
      icon: "💰",
      title: "透明報價",
      text: "現場確認問題後報價，同意才施工。",
    },
    {
      icon: "🛠️",
      title: "施工保固",
      text: "使用合格材料，提供完善售後服務。",
    },
  ];

  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(30px,6vw,42px)",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "15px",
            lineHeight: 1.3,
          }}
        >
          為什麼選擇棟鑫水電？
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "45px",
            fontSize: "clamp(16px,4vw,18px)",
            padding: "0 10px",
          }}
        >
          專業、快速、透明，讓您一次解決所有水電問題。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "20px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "18px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  color: "#111827",
                  fontWeight: "bold",
                  marginBottom: "12px",
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "28px",
                  fontSize: "16px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}