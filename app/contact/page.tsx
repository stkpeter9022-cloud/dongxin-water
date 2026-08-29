import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "聯絡棟鑫水電｜台北新北水電工程與24小時急修",

  description:
    "聯絡棟鑫水電，提供台北市、新北市水電工程與24小時緊急水電服務。跳電、漏水、抓漏、通管、馬桶、馬達、室內配線及衛浴工程，可電話或 LINE 諮詢。",

  alternates: {
    canonical: "https://www.dongxin24.com/contact",
  },

  openGraph: {
    title: "聯絡棟鑫水電｜雙北水電工程與緊急維修",
    description:
      "台北、新北水電工程與24小時緊急服務，可透過電話或 LINE 聯絡棟鑫水電。",
    url: "https://www.dongxin24.com/contact",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "跳電維修",
    href: "/tiao-dian",
  },
  {
    title: "漏水處理",
    href: "/lou-shui",
  },
  {
    title: "抓漏服務",
    href: "/zhua-lou",
  },
  {
    title: "水管疏通",
    href: "/shui-guan",
  },
  {
    title: "馬桶不通",
    href: "/ma-tong",
  },
  {
    title: "沈水馬達",
    href: "/shen-shui-ma-da",
  },
  {
    title: "室內配線",
    href: "/shi-nei-pei-xian",
  },
  {
    title: "衛浴設備安裝",
    href: "/wei-yu",
  },
];

export default function ContactPage() {
  return (
    <main
      style={{
        background: "#f8fafc",
        color: "#111827",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <section
        style={{
          padding: "120px 20px 70px",
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 60%, #111827 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              marginBottom: "20px",
              borderLeft: "3px solid #F5B942",
              background: "rgba(255,255,255,.08)",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            台北・新北｜水電工程與緊急服務
          </div>

          <h1
            style={{
              fontSize: "clamp(38px,6vw,60px)",
              lineHeight: 1.2,
              margin: "0 0 20px",
              fontWeight: 800,
            }}
          >
            聯絡
            <span style={{ color: "#F5B942" }}> 棟鑫水電</span>
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 32px",
              color: "rgba(255,255,255,.82)",
              fontSize: "clamp(17px,3vw,21px)",
              lineHeight: 1.8,
            }}
          >
            水電急修、漏水、跳電、排水堵塞、馬達故障，
            或室內配線、衛浴及裝修水電工程，
            都可以先透過電話或 LINE 說明現場狀況。
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "58px",
                padding: "0 30px",
                background: "#F5B942",
                color: "#111827",
                borderRadius: "7px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              📞 0918-808-209
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "58px",
                padding: "0 30px",
                background: "#06C755",
                color: "#fff",
                borderRadius: "7px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              💬 LINE 立即詢問
            </a>
          </div>
        </div>
      </section>

      {/* 聯絡資訊 */}
      <section style={{ padding: "70px 20px" }}>
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "14px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 25px rgba(0,0,0,.04)",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "15px" }}>
                📞
              </div>

              <h2
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                電話聯絡
              </h2>

              <a
                href="tel:0918808209"
                style={{
                  color: "#111827",
                  fontSize: "21px",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                0918-808-209
              </a>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "14px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 25px rgba(0,0,0,.04)",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "15px" }}>
                📍
              </div>

              <h2
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                服務區域
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  lineHeight: 1.8,
                }}
              >
                台北市・新北市
                <br />
                雙北地區到府服務
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "14px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 25px rgba(0,0,0,.04)",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "15px" }}>
                🕒
              </div>

              <h2
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                緊急水電服務
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  lineHeight: 1.8,
                }}
              >
                24小時可聯絡
                <br />
                依地區與現場狀況安排
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LINE 詢問 */}
      <section
        style={{
          padding: "0 20px 70px",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "16px",
            padding: "35px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(26px,4vw,34px)",
              marginBottom: "15px",
            }}
          >
            LINE 詢問時可以先提供
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: 1.9,
              marginBottom: "22px",
            }}
          >
            建議提供現場照片、所在區域、問題狀況及希望處理的時間。
            若是設備更換，也可以提供品牌、型號或設備照片，
            讓我們先了解現場需求。
          </p>

          <a
            href="https://line.me/ti/p/ezn_Ad6UpZ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              minHeight: "54px",
              padding: "0 26px",
              alignItems: "center",
              justifyContent: "center",
              background: "#06C755",
              color: "#fff",
              borderRadius: "7px",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            💬 加入 LINE 傳照片
          </a>
        </div>
      </section>

      {/* 服務內部連結 */}
      <section
        style={{
          padding: "70px 20px",
          background: "#111827",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,40px)",
              marginBottom: "15px",
            }}
          >
            棟鑫水電服務項目
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            點選服務項目可查看相關工程與處理內容
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(210px,1fr))",
              gap: "14px",
            }}
          >
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                style={{
                  display: "block",
                  padding: "20px",
                  borderRadius: "9px",
                  border: "1px solid rgba(255,255,255,.13)",
                  background: "rgba(255,255,255,.05)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                <span style={{ color: "#F5B942" }}>→ </span>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 最終 CTA */}
      <section
        style={{
          padding: "70px 20px 120px",
          textAlign: "center",
          background: "#f1f5f9",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px,5vw,40px)",
            marginBottom: "15px",
          }}
        >
          有水電問題需要處理？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          台北、新北水電維修與工程需求，
          可直接來電或透過 LINE 說明現場狀況。
        </p>

        <a
          href="tel:0918808209"
          style={{
            display: "inline-flex",
            minHeight: "58px",
            padding: "0 32px",
            alignItems: "center",
            justifyContent: "center",
            background: "#111827",
            color: "#fff",
            borderRadius: "7px",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "18px",
          }}
        >
          📞 立即聯絡棟鑫水電
        </a>
      </section>
    </main>
  );
}