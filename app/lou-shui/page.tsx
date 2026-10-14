import Breadcrumbs from "../components/Breadcrumbs";
import ServiceContext from "../components/ServiceContext";
import PageFaqs from "../components/PageFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北漏水處理｜漏水抓漏與水管漏水維修｜棟鑫水電",

  description:
    "棟鑫水電提供台北、新北雙北漏水處理與漏水抓漏服務，處理室內漏水、牆面滲水、水管漏水、浴室漏水及給排水管線問題，現場檢查後說明處理方式與報價。",

  alternates: {
    canonical: "https://www.dongxin24.com/lou-shui",
  },

  openGraph: {
    title: "台北新北漏水處理｜漏水抓漏｜棟鑫水電",
    description:
      "雙北漏水處理、漏水抓漏、水管漏水與浴室漏水維修，提供現場檢查與工程處理。",
    url: "https://www.dongxin24.com/lou-shui",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "室內漏水",
    text: "天花板、牆面、地面出現水痕、滲水或壁癌，協助檢查可能的漏水來源。",
  },
  {
    title: "水管漏水",
    text: "冷水管、熱水管及給水管線異常漏水，依現場狀況檢查並安排維修。",
  },
  {
    title: "浴室漏水",
    text: "浴室牆面、地面、管線及衛浴設備漏水，協助判斷漏水原因。",
  },
  {
    title: "排水管漏水",
    text: "排水管破損、接管處漏水或排水異常，依現場狀況進行檢查與處理。",
  },
  {
    title: "牆面滲水",
    text: "牆面出現水漬、發霉或壁癌時，協助判斷是否與給排水管線有關。",
  },
  {
    title: "給排水管線檢查",
    text: "針對住宅、店面及其他建築物的給排水管線進行現場檢查。",
  },
];

const faqs = [
  {
    q: "漏水可以直接抓到漏水位置嗎？",
    a: "漏水原因與現場結構不同，通常需要先確認水痕、管線配置及現場狀況，再判斷適合的檢查與處理方式。",
  },
  {
    q: "浴室漏水一定是防水層壞掉嗎？",
    a: "不一定。浴室漏水也可能來自給水管、排水管、衛浴設備接管或其他位置，因此建議先檢查原因再決定施工方式。",
  },
  {
    q: "漏水維修多少錢？",
    a: "漏水原因與施工內容差異很大，需依現場狀況評估。確認問題後會說明處理方式與費用，再由客戶決定是否施工。",
  },
  {
    q: "晚上漏水可以處理嗎？",
    a: "棟鑫水電提供雙北24小時緊急水電服務，若遇到緊急漏水狀況，可以先電話或 LINE 聯絡說明現場情況。",
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
      <Breadcrumbs title="漏水處理" path="/lou-shui" />
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
            雙北水電工程｜漏水處理
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
              漏水處理與抓漏
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
            處理住宅、店面及各類建築漏水問題，
            協助檢查室內漏水、水管漏水、浴室漏水、
            排水管漏水及牆面滲水等狀況。
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
              "室內漏水",
              "水管漏水",
              "浴室漏水",
              "牆面滲水",
              "排水管漏水",
              "給排水檢查",
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
              📞 電話諮詢漏水問題
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
            雙北漏水處理服務
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
            先確認漏水狀況，再依現場條件評估適合的處理方式。
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

      {/* 判斷流程 */}

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
            漏水問題怎麼處理？
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
              ["01", "聯絡我們", "電話或 LINE 說明現場漏水狀況。"],
              ["02", "現場檢查", "了解漏水位置、管線與現場條件。"],
              ["03", "說明方案", "依實際狀況說明可能原因與處理方式。"],
              ["04", "確認後施工", "經客戶確認後，再安排後續工程。"],
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
            漏水處理常見問題
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
          家中正在漏水？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可以先透過電話或 LINE 說明狀況，
          必要時也可以直接傳送現場照片協助了解。
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
    <ServiceContext route="/lou-shui" />
    </main>
  );
}