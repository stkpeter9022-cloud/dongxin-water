"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "24小時都有服務嗎？",
      a: "是的，我們提供雙北地區 24 小時緊急水電維修服務。"
    },
    {
      q: "多久可以到府？",
      a: "依照距離及交通狀況，通常約 30～60 分鐘內到府。"
    },
    {
      q: "會先報價嗎？",
      a: "會，現場檢查後會先說明問題與費用，經您同意後才開始施工。"
    },
    {
      q: "施工後有保固嗎？",
      a: "有，依照工程項目提供保固，讓您更安心。"
    }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "70px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
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
          常見問題
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            fontSize: "clamp(16px,4vw,18px)",
            marginBottom: "45px",
          }}
        >
          常見問題整理，快速了解棟鑫水電服務。
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "16px",
              marginBottom: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              style={{
                width: "100%",
                background: "#fff",
                border: "none",
                cursor: "pointer",
                padding: "22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#111827",
              }}
            >
              {faq.q}

              <span
                style={{
                  fontSize: "24px",
                  color: "#2563eb",
                }}
              >
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div
                style={{
                  padding: "0 22px 22px",
                  color: "#64748b",
                  lineHeight: "30px",
                  fontSize: "16px",
                }}
              >
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}