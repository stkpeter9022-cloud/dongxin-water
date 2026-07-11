export default function Process() {
  const steps = [
    {
      icon: "📞",
      title: "來電預約",
      desc: "電話或 LINE 聯絡我們，說明現場狀況。"
    },
    {
      icon: "🚐",
      title: "快速到府",
      desc: "雙北地區快速安排師傅到場。"
    },
    {
      icon: "📝",
      title: "現場檢查報價",
      desc: "確認問題原因，報價透明，經同意後施工。"
    },
    {
      icon: "🛠",
      title: "專業施工",
      desc: "依照施工標準完成工程，品質有保障。"
    },
    {
      icon: "✅",
      title: "完工保固",
      desc: "完工驗收，依工程內容提供保固服務。"
    }
  ];

  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#f8fafc"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#111827"
        }}
      >
        施工流程
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginBottom: "60px",
          fontSize: "18px"
        }}
      >
        一通電話，快速到府，透明報價，安心施工。
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          maxWidth: "1300px",
          margin: "0 auto"
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              transition: ".3s"
            }}
          >
            <div
              style={{
                fontSize: "55px",
                marginBottom: "20px"
              }}
            >
              {step.icon}
            </div>

            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#111827"
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "30px"
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}