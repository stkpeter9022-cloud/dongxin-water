export default function GoogleReviews() {
  const reviews = [
    {
      name: "王先生",
      stars: "★★★★★",
      text: "半夜跳電打電話後很快就安排師傅到場，處理速度快，施工也很仔細。",
    },
    {
      name: "林小姐",
      stars: "★★★★★",
      text: "浴室漏水到府檢查後很快找到問題，施工過程說明清楚，整體服務很好。",
    },
    {
      name: "陳先生",
      stars: "★★★★★",
      text: "馬桶堵塞很快處理完成，師傅態度很好，現場也會說明處理方式。",
    },
  ];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      style={{
        padding: "110px 20px",
        background: "#111827",
        color: "#fff",
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
            CUSTOMER REVIEWS
          </div>

          <h2
            id="reviews-title"
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            棟鑫水電客戶評價
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            服務台北市、新北市水電維修與工程案件，
            重視現場判斷、施工品質與溝通說明，
            每一次施工都以實際需求與現場狀況為優先。
          </p>
        </div>

        {/* Google 評價摘要 */}
        <div
          style={{
            maxWidth: "440px",
            margin: "0 auto 55px",
            padding: "30px",
            textAlign: "center",
            borderRadius: "18px",
            background: "#1f2937",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div
            aria-label="5 顆星"
            style={{
              fontSize: "28px",
              letterSpacing: "4px",
              marginBottom: "12px",
              color: "#e2b84b",
            }}
          >
            ★★★★★
          </div>

          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 1,
              color: "#e2b84b",
              marginBottom: "10px",
            }}
          >
            5.0
          </div>

          <div
            style={{
              color: "#cbd5e1",
              fontSize: "15px",
            }}
          >
            Google 客戶評價
          </div>
        </div>

        {/* 評價卡片 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {reviews.map((review) => (
            <article
              key={review.name}
              style={{
                background: "#fff",
                color: "#111827",
                borderRadius: "18px",
                padding: "30px",
                minHeight: "230px",
                boxShadow: "0 12px 30px rgba(0,0,0,.18)",
              }}
            >
              <div
                aria-label="5 顆星"
                style={{
                  color: "#d6a52c",
                  fontSize: "20px",
                  letterSpacing: "2px",
                  marginBottom: "18px",
                }}
              >
                {review.stars}
              </div>

              <p
                style={{
                  margin: "0 0 24px",
                  color: "#475569",
                  fontSize: "16px",
                  lineHeight: 1.85,
                }}
              >
                「{review.text}」
              </p>

              <div
                style={{
                  paddingTop: "18px",
                  borderTop: "1px solid #e5e7eb",
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                {review.name}
              </div>
            </article>
          ))}
        </div>

        {/* 信任訊息 */}
        <div
          style={{
            maxWidth: "800px",
            margin: "55px auto 0",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 12px",
              fontSize: "21px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            雙北水電維修與工程服務
          </h3>

          <p
            style={{
              margin: 0,
              color: "#cbd5e1",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            水電維修・跳電處理・漏水抓漏・水管疏通・
            室內配線・馬達設備・給排水・衛浴工程
          </p>
        </div>
      </div>
    </section>
  );
}