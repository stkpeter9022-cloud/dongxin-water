"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "有提供 24 小時水電維修嗎？",
      a: "有，提供雙北地區 24 小時緊急水電維修服務。跳電、漏水、馬桶堵塞、水管異常等緊急狀況，都可以直接聯繫我們。",
    },
    {
      q: "除了水電維修，也有承接裝修工程嗎？",
      a: "有。除了緊急維修，也承接裝修水電、室內配線、配電工程、給排水工程、衛浴工程及相關設備安裝。",
    },
    {
      q: "裝修水電工程可以先估價嗎？",
      a: "可以。可以先透過電話或 LINE 說明工程需求，也可以提供現場照片或施工圖面；實際工程內容與費用仍需依現場條件確認。",
    },
    {
      q: "水電維修會先報價嗎？",
      a: "會。到場後會先確認現場問題與施工內容，再說明相關費用；確認施工內容與報價後再進行施工。",
    },
    {
      q: "可以直接傳照片給你們看嗎？",
      a: "可以。若是漏水、跳電、馬桶、水管、配電箱或設備故障，可以先透過 LINE 提供現場照片與問題說明，方便我們初步了解狀況。",
    },
    {
      q: "雙北哪些地區有服務？",
      a: "提供台北市及新北市地區服務，實際是否能安排到府及施工時間，會依案件位置、交通與當日派工狀況安排。",
    },
    {
      q: "施工完成後有保固嗎？",
      a: "依不同工程項目及施工內容提供相應的售後與保固服務，實際保固內容會依報價及工程約定為準。",
    },
    {
      q: "大型水電或住宅翻修工程也可以詢問嗎？",
      a: "可以。住宅翻修、室內配線、配電、給排水、衛浴及裝修水電工程都可以洽詢，歡迎提供工程需求與現場資料。",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: "110px 20px",
        background: "#ffffff",
      }}
    >
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
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            常見問題
          </h2>

          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            水電維修、裝修工程及到府服務常見問題，
            <br />
            讓您在聯繫前先快速了解服務方式。
          </p>
        </div>

        {/* FAQ */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.q}
                style={{
                  marginBottom: "14px",
                  borderRadius: "14px",
                  border: isOpen
                    ? "1px solid #d6a52c"
                    : "1px solid #e5e7eb",
                  background: "#fff",
                  overflow: "hidden",
                  boxShadow: isOpen
                    ? "0 8px 24px rgba(15,23,42,.06)"
                    : "0 5px 18px rgba(15,23,42,.04)",
                  transition: "all .2s ease",
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
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
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: isOpen
                        ? "#111827"
                        : "#f1f5f9",
                      color: isOpen
                        ? "#fff"
                        : "#475569",
                      fontSize: "20px",
                      fontWeight: 400,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 24px",
                      color: "#64748b",
                      fontSize: "15px",
                      lineHeight: 1.9,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
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
            還有工程問題需要確認？
          </h3>

          <p
            style={{
              margin: "0 0 22px",
              color: "#cbd5e1",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            歡迎提供現場照片、工程需求或施工圖面，
            讓我們先了解您的需求。
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