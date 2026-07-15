export default function Areas() {
  const areas = [
    "台北市",
    "新北市",
    "中和",
    "永和",
    "板橋",
    "土城",
    "新莊",
    "三重",
    "蘆洲",
    "新店",
    "樹林",
    "汐止",
    "內湖",
    "信義",
    "松山",
    "南港",
  ];

  return (
    <section
      id="areas"
      style={{
        padding: "70px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px,6vw,42px)",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "15px",
          }}
        >
          服務地區
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "clamp(16px,4vw,18px)",
            marginBottom: "40px",
          }}
        >
          24 小時提供雙北快速到府水電維修服務
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {areas.map((area) => (
            <div
              key={area}
              style={{
                background: "#eff6ff",
                color: "#2563eb",
                padding: "12px 20px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              📍 {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}