const faqs = [
  {
    q: "有提供 24 小時水電維修嗎？",
    a: "有，棟鑫水電提供台北市、新北市雙北地區 24 小時緊急水電聯絡服務。跳電、漏水、馬桶堵塞、水管異常、馬達故障等緊急狀況，都可以先電話或 LINE 聯繫，實際派工時間依地區、案件狀況與當日安排為準。",
  },
  {
    q: "除了水電維修，也有承接裝修工程嗎？",
    a: "有。除了緊急水電維修，也承接裝修水電、室內配線、老屋重拉線、專用迴路、配電工程、給排水工程、衛浴工程及相關設備安裝。",
  },
  {
    q: "裝修水電工程可以先估價嗎？",
    a: "可以先透過電話或 LINE 說明工程需求，也可以提供現場照片、尺寸或施工圖面。較大型或較複雜的工程，仍需依現場管線、設備及施工條件確認實際內容與費用。",
  },
  {
    q: "水電維修會先報價嗎？",
    a: "師傅到場後會先確認現場問題與預計施工內容，再依實際狀況說明費用。若現場檢查後發現需要追加材料、拆除或其他工程，也會再說明處理方式。",
  },
  {
    q: "可以直接傳照片給你們看嗎？",
    a: "可以。漏水、跳電、馬桶、水管、配電箱、馬達或衛浴設備問題，都可以先透過 LINE 提供現場照片、設備品牌型號與問題說明，方便先了解狀況。",
  },
  {
    q: "雙北哪些地區有服務？",
    a: "主要服務台北市及新北市。不同地區的實際派工及施工時間，會依案件位置、交通、工程內容與當日師傅安排為準。",
  },
  {
    q: "施工完成後有保固嗎？",
    a: "不同工程項目、材料與施工內容的保固方式可能不同，實際保固範圍與期限會依報價、施工項目及雙方約定內容為準。",
  },
  {
    q: "大型水電或住宅翻修工程也可以詢問嗎？",
    a: "可以。住宅翻修、店面裝修、室內配線、配電、給排水、衛浴及其他裝修水電工程都可以洽詢，可先提供工程需求、照片或圖面協助初步了解。",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      style={{
        padding: "110px 20px",
        background: "#ffffff",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div
        style={{
          maxWidth: "900px",
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
              background: "#fff4d6",
              color: "#9a6b00",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            FAQ
          </div>

          <h2
            id="faq-title"
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            雙北水電常見問題
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            水電維修、裝修工程、報價、派工及到府服務常見問題，
            讓您在聯絡前先快速了解棟鑫水電的服務方式。
          </p>
        </div>

        {/* FAQ */}
        <div>
          {faqs.map((faq, index) => {
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <details
                key={faq.q}
                className="faq-item"
                name="dongxin-faq"
                open={index === 0}
                style={{
                  marginBottom: "14px",
                  borderRadius: "14px",
                  background: "#fff",
                  overflow: "hidden",
                  transition: "all .2s ease",
                }}
              >
                <summary
                  id={buttonId}
                  aria-controls={answerId}
                  style={{
                    width: "100%",
                    padding: "22px 24px",
                    border: "none",
                    background: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    textAlign: "left",
                    color: "#111827",
                    fontSize: "17px",
                    fontWeight: 700,
                    lineHeight: 1.5,
                  }}
                >
                  <span>{faq.q}</span>

                  <span
                    className="faq-indicator"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      fontSize: "20px",
                      fontWeight: 400,
                    }}
                  >
                    <span className="faq-plus">+</span>
                    <span className="faq-minus">−</span>
                  </span>
                </summary>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    style={{
                      padding: "0 24px 24px",
                      color: "#64748b",
                      fontSize: "15px",
                      lineHeight: 1.9,
                    }}
                  >
                    {faq.a}
                  </div>
              </details>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "55px",
            padding: "35px 28px",
            borderRadius: "18px",
            background: "#111827",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 10px",
              color: "#fff",
              fontSize: "23px",
              fontWeight: 800,
            }}
          >
            還有水電或工程問題需要確認？
          </h3>

          <p
            style={{
              margin: "0 0 22px",
              color: "#cbd5e1",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            可提供現場照片、設備型號、工程需求或施工圖面，
            讓我們先了解目前狀況。
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                minWidth: "190px",
                height: "54px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                background: "#d6a52c",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              📞 立即電話諮詢
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minWidth: "190px",
                height: "54px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
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
