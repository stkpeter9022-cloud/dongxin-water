"use client";

import { useState } from "react";

const faqs = [
  {
    q: "跳電可以立即處理嗎？",
    a: "可以，24小時皆可來電，雙北地區最快一小時內到府（依當下路況及案件安排）。",
  },
  {
    q: "漏水一定要敲牆嗎？",
    a: "不一定，我們會先檢查漏水原因，確認問題後再提出最合適的處理方式，不會任意破壞裝潢。",
  },
  {
    q: "馬桶堵塞可以當天處理嗎？",
    a: "可以，大部分馬桶堵塞、水管堵塞皆可當天安排師傅到府處理。",
  },
  {
    q: "施工完成後有保固嗎？",
    a: "有，依施工項目提供保固，施工完成後也提供完善售後服務。",
  },
  {
    q: "服務哪些地區？",
    a: "目前服務範圍包含台北市、新北市，全區皆可快速到府。",
  },
  {
    q: "可以先提供照片估價嗎？",
    a: "可以，歡迎透過 LINE 傳送照片或影片，我們會先協助初步判斷，再安排現場檢查。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: "100px 20px",
        background: "#f8fafc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        常見問題
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "18px",
          lineHeight: "32px",
          marginBottom: "50px",
        }}
      >
        以下整理客戶最常詢問的問題，
        <br />
        若仍有其他疑問，歡迎立即來電或加入 LINE 詢問。
      </p>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {faqs.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "15px",
              marginBottom: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              style={{
                cursor: "pointer",
                padding: "22px 28px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <span>{item.q}</span>

              <span
                style={{
                  fontSize: "30px",
                  color: "#2563eb",
                }}
              >
                {open === index ? "－" : "+"}
              </span>
            </div>

            {open === index && (
              <div
                style={{
                  padding: "0 28px 24px",
                  color: "#555",
                  fontSize: "17px",
                  lineHeight: "32px",
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}