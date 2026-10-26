import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於棟鑫水電｜台北新北水電工程與24小時維修",

  description:
    "棟鑫水電服務台北市、新北市，提供水電工程、室內配線、給排水、衛浴工程，以及24小時緊急水電維修，處理跳電、漏水、抓漏、通管、馬桶及各類馬達問題。",

  alternates: {
    canonical: "https://www.dongxin24.com/about",
  },

  openGraph: {
    title: "關於棟鑫水電｜雙北水電工程與緊急維修",
    description:
      "棟鑫水電提供台北、新北水電工程、裝修水電及24小時緊急維修服務。",
    url: "https://www.dongxin24.com/about",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "跳電維修",
    description: "跳電、漏電、配電箱及電路異常檢查。",
    href: "/tiao-dian",
  },
  {
    title: "漏水處理",
    description: "水管、浴室及室內漏水問題處理。",
    href: "/lou-shui",
  },
  {
    title: "抓漏服務",
    description: "牆面、天花板及不明漏水來源檢查。",
    href: "/zhua-lou",
  },
  {
    title: "水管疏通",
    description: "廚房、浴室、地排及排水管堵塞處理。",
    href: "/shui-guan",
  },
  {
    title: "馬桶疏通",
    description: "馬桶不通、堵塞、排水緩慢及相關問題。",
    href: "/ma-tong",
  },
  {
    title: "抽水馬達",
    description: "抽水馬達、加壓馬達及供水設備服務。",
    href: "/chou-shui-ma-da",
  },
  {
    title: "沈水馬達",
    description: "沈水馬達、污水馬達及排水設備服務。",
    href: "/shen-shui-ma-da",
  },
  {
    title: "室內配線",
    description: "老屋重拉線、專用迴路及裝修配線工程。",
    href: "/shi-nei-pei-xian",
  },
  {
    title: "衛浴設備",
    description: "馬桶、面盆、龍頭及浴室水電工程。",
    href: "/wei-yu",
  },
];

const strengths = [
  {
    title: "乙級室內配線技術士",
    text: "師傅持有乙級室內配線技術士證照。配線、迴路與配電箱工程，先確認用電需求及現場條件，再規劃施工內容。",
  },
  {
    title: "雙北到府服務",
    text: "主要服務台北市與新北市，依地區、案件與現場狀況安排師傅。",
  },
  {
    title: "維修與工程皆可處理",
    text: "從一般住宅水電故障，到室內配線、給排水及衛浴等工程需求皆可評估。",
  },
  {
    title: "現場評估再施工",
    text: "依設備、管線及施工條件確認問題，說明處理方式與工程內容後再進行施工。",
  },
  {
    title: "24小時緊急聯絡",
    text: "遇到跳電、漏水、排水堵塞、馬達故障等緊急狀況，可透過電話或 LINE 聯絡。",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content"
      style={{
        background: "#f8fafc",
        color: "#111827",
      }}
    >
      <Breadcrumbs title="關於棟鑫工程行" path="/about" />
      {/* Hero */}
      <section
        style={{
          padding: "120px 20px 85px",
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 60%, #111827 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
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
            台北・新北｜專業水電工程
          </div>

          <h1
            style={{
              fontSize: "clamp(40px,6vw,64px)",
              lineHeight: 1.2,
              margin: "0 0 24px",
              fontWeight: 800,
            }}
          >
            關於
            <span style={{ color: "#F5B942" }}> 棟鑫水電</span>
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "clamp(17px,3vw,21px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,.85)",
              marginBottom: "32px",
            }}
          >
            棟鑫水電服務台北市、新北市，提供住宅、店面、
            辦公空間等水電維修與工程服務。
            從緊急跳電、漏水、排水堵塞，到室內配線、
            給排水、馬達及衛浴工程，依現場需求評估適合的施工方式。
          </p>

          <div
            style={{
              display: "flex",
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
              📞 立即來電
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

      {/* 品牌介紹 */}
      <section style={{ padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "4px",
                background: "#F5B942",
                marginBottom: "20px",
              }}
            />

            <h2
              style={{
                fontSize: "clamp(30px,5vw,42px)",
                marginBottom: "20px",
              }}
            >
              不只處理緊急水電
              <br />
              也承接各類水電工程
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 2,
                fontSize: "17px",
              }}
            >
              棟鑫水電的服務包含一般水電故障維修、
              24小時緊急水電需求，以及室內配線、給排水、
              衛浴設備與裝修相關水電工程。
              不同案件會依設備規格、管線配置、施工環境與現場條件進行評估。
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%, 220px), 1fr))",
              gap: "18px",
            }}
          >
            {strengths.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "27px",
                  boxShadow: "0 8px 25px rgba(0,0,0,.04)",
                }}
              >
                <div
                  style={{
                    color: "#F5B942",
                    fontSize: "24px",
                    marginBottom: "14px",
                  }}
                >
                  ◆
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 服務項目 + SEO 內部連結 */}
      <section
        style={{
          padding: "80px 20px",
          background: "#111827",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "15px",
            }}
          >
            棟鑫水電服務項目
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 45px",
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.8,
            }}
          >
            水電維修、緊急搶修與各類水電工程，
            點選服務項目可查看詳細內容。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%, 250px), 1fr))",
              gap: "15px",
            }}
          >
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                style={{
                  display: "block",
                  padding: "24px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,.13)",
                  background: "rgba(255,255,255,.05)",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 9px",
                    fontSize: "19px",
                  }}
                >
                  <span style={{ color: "#F5B942" }}>→ </span>
                  {service.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,.65)",
                    lineHeight: 1.7,
                    fontSize: "14px",
                  }}
                >
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 服務區域 */}
      <section style={{ padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "20px",
            }}
          >
            台北・新北水電服務
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 2,
            }}
          >
            棟鑫工程行以「棟鑫水電」提供服務。一般維修與24小時緊急叫修，主要服務台北市、新北市。
            較大型裝修水電、室內配線、老屋換線與給排水工程，可洽詢台北、新北、桃園、基隆，依工程內容與排程評估。
            緊急跳電、漏水、排水堵塞及設備故障等問題，
            可透過電話或 LINE 聯絡並說明現場狀況。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "70px 20px 120px",
          background: "#f1f5f9",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px,5vw,40px)",
            marginBottom: "15px",
          }}
        >
          水電維修或工程需求
          <br />
          歡迎聯絡棟鑫水電
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可先透過 LINE 提供現場照片與需求，
          或直接來電說明目前狀況。
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
          📞 0918-808-209
        </a>
      </section>
    </main>
  );
}
