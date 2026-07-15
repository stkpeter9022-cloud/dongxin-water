export default function Testimonials() {
  const testimonials = [
    {
      name: "王先生",
      area: "新北市・中和",
      text: "半夜突然跳電，打電話不到一小時師傅就到，快速找到漏電原因，價格透明，真的很放心。"
    },
    {
      name: "林小姐",
      area: "台北市・信義",
      text: "浴室漏水困擾很久，終於找到真正原因，施工仔細又乾淨，非常推薦棟鑫水電。"
    },
    {
      name: "陳先生",
      area: "新北市・板橋",
      text: "抽水馬達故障，當天就完成更換，服務態度很好，也有保固，值得推薦。"
    }
  ];

  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#ffffff",
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
          }}
        >
          客戶見證
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            fontSize: "clamp(16px,4vw,18px)",
            marginBottom: "45px",
          }}
        >
          真實施工經驗分享，讓您更安心選擇棟鑫水電。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                border: "1px solid #e5e7eb",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  color: "#f59e0b",
                  marginBottom: "10px",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "4px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "#2563eb",
                  fontSize: "15px",
                  marginBottom: "16px",
                }}
              >
                {item.area}
              </p>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: "28px",
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