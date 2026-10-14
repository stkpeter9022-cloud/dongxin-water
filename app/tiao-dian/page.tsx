import Breadcrumbs from "../components/Breadcrumbs";
import ServiceContext from "../components/ServiceContext";
import PageFaqs from "../components/PageFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北跳電維修｜漏電檢查與配電箱維修｜棟鑫水電",

  description:
    "棟鑫水電提供台北、新北雙北24小時跳電維修與漏電檢查服務，處理住宅、店面、工廠跳電、配電箱、無熔絲開關及電路異常，現場檢查後說明處理方式與報價。",

  alternates: {
    canonical: "https://www.dongxin24.com/tiao-dian",
  },

  openGraph: {
    title: "台北新北跳電維修｜漏電與配電箱檢修｜棟鑫水電",
    description:
      "雙北24小時跳電維修，處理漏電、配電箱、無熔絲開關及電路異常。",
    url: "https://www.dongxin24.com/tiao-dian",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "住宅跳電",
    text: "家中突然跳電、部分迴路無電或無熔絲開關反覆跳脫，可協助檢查可能的電路異常。",
  },
  {
    title: "漏電檢查",
    text: "針對漏電、設備異常或迴路問題進行現場檢查，協助判斷故障來源。",
  },
  {
    title: "配電箱檢修",
    text: "檢查配電箱、無熔絲開關、端子及迴路狀況，依現場問題安排維修。",
  },
  {
    title: "無熔絲開關故障",
    text: "處理無熔絲開關燒熔、老化、異常跳脫或接點問題。",
  },
  {
    title: "插座與迴路異常",
    text: "插座無電、特定迴路故障或用電設備造成跳電，可依現場狀況檢查。",
  },
  {
    title: "店面與工廠電力問題",
    text: "提供店面、辦公空間及工廠常見跳電、配電與用電異常檢查。",
  },
];

const faqs = [
  {
    q: "家裡一直跳電是什麼原因？",
    a: "常見原因包含用電量過大、設備故障、漏電、迴路異常、無熔絲開關老化或配電箱接點問題。實際原因需要依現場狀況檢查。",
  },
  {
    q: "跳電後可以自己把開關一直推上去嗎？",
    a: "若無熔絲開關反覆跳脫，不建議持續強制復歸。應先關閉可能有問題的設備，若仍持續跳電，建議安排檢查。",
  },
  {
    q: "漏電一定要換線嗎？",
    a: "不一定。漏電可能來自設備、插座、接線、管線或局部迴路異常，應先確認原因，再決定是否需要更換線路或其他設備。",
  },
  {
    q: "半夜跳電可以處理嗎？",
    a: "棟鑫水電提供雙北24小時緊急水電聯絡服務，若遇到跳電、漏電或配電箱異常，可先電話或 LINE 說明現場狀況。",
  },
];

export default function Page() {
  return (
    <main id="main-content"
      style={{
        background: "#f8fafc",
        color: "#111827",
      }}
    >
      <Breadcrumbs title="跳電維修" path="/tiao-dian" />
      {/* Hero */}
      <section
        style={{
          padding: "120px 20px 80px",
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
            雙北水電維修｜電路故障處理
          </div>

          <h1
            style={{
              fontSize: "clamp(38px,6vw,64px)",
              lineHeight: 1.2,
              margin: "0 0 24px",
              fontWeight: 800,
            }}
          >
            台北・新北
            <br />
            <span style={{ color: "#F5B942" }}>
              跳電維修與漏電檢查
            </span>
          </h1>

          <p
            style={{
              maxWidth: "760px",
              fontSize: "clamp(17px,3vw,22px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,.88)",
              marginBottom: "32px",
            }}
          >
            處理住宅、店面、辦公空間及工廠常見跳電問題，
            包含漏電、配電箱、無熔絲開關、插座與電路異常。
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "34px",
            }}
          >
            {[
              "住宅跳電",
              "漏電檢查",
              "配電箱檢修",
              "無熔絲開關",
              "插座異常",
              "電路故障",
            ].map((item) => (
              <span
                key={item}
                style={{
                  padding: "9px 14px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "rgba(255,255,255,.08)",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            ))}
          </div>

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
                padding: "0 28px",
                background: "#F5B942",
                color: "#111827",
                borderRadius: "7px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              📞 電話諮詢跳電問題
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
                padding: "0 28px",
                background: "#06C755",
                color: "#fff",
                borderRadius: "7px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              LINE 傳照片詢問
            </a>
          </div>
        </div>
      </section>

      {/* 服務內容 */}
      <section
        style={{
          padding: "75px 20px",
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
            雙北跳電與電路維修服務
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.8,
              marginBottom: "45px",
            }}
          >
            先確認跳電原因，再依現場狀況評估適合的維修方式。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%, 280px), 1fr))",
              gap: "20px",
            }}
          >
            {services.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 8px 25px rgba(0,0,0,.05)",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "4px",
                    background: "#F5B942",
                    marginBottom: "20px",
                  }}
                />

                <h3
                  style={{
                    fontSize: "22px",
                    marginBottom: "12px",
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

      {/* 處理流程 */}
      <section
        style={{
          padding: "75px 20px",
          background: "#111827",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "45px",
            }}
          >
            跳電問題處理流程
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%, 220px), 1fr))",
              gap: "18px",
            }}
          >
            {[
              ["01", "說明狀況", "電話或 LINE 說明跳電、漏電或電路異常情形。"],
              ["02", "現場檢查", "確認配電箱、迴路、設備及相關電路狀況。"],
              ["03", "說明原因", "依檢查結果說明問題與可能處理方式。"],
              ["04", "確認後維修", "經客戶確認後，再安排後續維修或工程。"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                style={{
                  padding: "25px",
                  border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(255,255,255,.05)",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    color: "#F5B942",
                    fontSize: "14px",
                    fontWeight: 800,
                    marginBottom: "12px",
                  }}
                >
                  {number}
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,.7)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "75px 20px",
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
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "45px",
            }}
          >
            跳電維修常見問題
          </h2>

          <PageFaqs items={faqs} />
        </div>
      </section>

      {/* CTA */}
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
          家中正在跳電或漏電？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可以先透過電話或 LINE 說明現場狀況，
          如有配電箱或開關異常，也可以直接傳照片協助了解。
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
    <ServiceContext route="/tiao-dian" />
    </main>
  );
}