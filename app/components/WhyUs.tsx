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
        padding: "90px 20px",
        background: "#f8fafc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        為什麼選擇棟鑫水電？
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "55px",
          fontSize: "18px",
        }}
      >
        專業、快速、透明，讓您一次解決所有水電問題。
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "30px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}