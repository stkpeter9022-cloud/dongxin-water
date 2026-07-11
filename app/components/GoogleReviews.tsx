export default function GoogleReviews() {
  const reviews = [
    {
      name: "王先生",
      stars: "★★★★★",
      text: "半夜跳電打電話不到一小時就到，師傅很專業，價格也很透明。"
    },
    {
      name: "林小姐",
      stars: "★★★★★",
      text: "浴室漏水很快就找到原因，施工乾淨，值得推薦。"
    },
    {
      name: "陳先生",
      stars: "★★★★★",
      text: "馬桶堵塞處理速度非常快，服務態度很好，下次還會找棟鑫。"
    }
  ];

  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "100px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "15px"
          }}
        >
          Google 五星好評
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "20px",
            fontSize: "20px"
          }}
        >
          客戶真實回饋，安心選擇棟鑫水電
        </p>

        <div
          style={{
            textAlign: "center",
            marginBottom: "50px"
          }}
        >
          <div
            style={{
              fontSize: "60px"
            }}
          >
            ⭐⭐⭐⭐⭐
          </div>

          <h3
            style={{
              fontSize: "48px",
              margin: "10px 0",
              color: "#2563eb"
            }}
          >
            5.0
          </h3>

          <p
            style={{
              color: "#6b7280"
            }}
          >
            Google 使用者推薦
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px"
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)"
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  marginBottom: "10px"
                }}
              >
                {review.stars}
              </div>

              <h4
                style={{
                  marginBottom: "15px",
                  fontSize: "22px"
                }}
              >
                {review.name}
              </h4>

              <p
                style={{
                  color: "#4b5563",
                  lineHeight: "30px"
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