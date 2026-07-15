export default function GoogleReviews() {
  const reviews = [
    {
      name: "王先生",
      stars: "★★★★★",
      text: "半夜跳電打電話不到一小時就到，師傅很專業，價格也很透明。",
    },
    {
      name: "林小姐",
      stars: "★★★★★",
      text: "浴室漏水很快就找到原因，施工乾淨，值得推薦。",
    },
    {
      name: "陳先生",
      stars: "★★★★★",
      text: "馬桶堵塞處理速度非常快，服務態度很好，下次還會找棟鑫。",
    },
  ];

  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "70px 20px",
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
          Google 五星好評
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "20px",
            fontSize: "clamp(16px,4vw,18px)",
          }}
        >
          客戶真實回饋，安心選擇棟鑫水電
        </p>

        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              fontSize: "clamp(38px,8vw,60px)",
              lineHeight: 1,
            }}
          >
            ⭐⭐⭐⭐⭐
          </div>

          <h3
            style={{
              fontSize: "clamp(34px,8vw,48px)",
              margin: "12px 0",
              color: "#2563eb",
              fontWeight: "bold",
            }}
          >
            5.0
          </h3>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            Google 使用者推薦
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  color: "#f59e0b",
                  marginBottom: "12px",
                }}
              >
                {review.stars}
              </div>

              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                {review.name}
              </h4>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: "28px",
                }}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}