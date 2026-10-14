import Breadcrumbs from "../components/Breadcrumbs";
import ServiceContext from "../components/ServiceContext";
import PageFaqs from "../components/PageFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北馬桶不通｜馬桶疏通與堵塞處理｜棟鑫水電",

  description:
    "棟鑫水電提供台北、新北雙北馬桶疏通與馬桶不通處理，協助處理馬桶堵塞、沖水不順、排水緩慢、異物堵塞及馬桶拆裝等問題，依現場狀況評估處理方式。",

  alternates: {
    canonical: "https://www.dongxin24.com/ma-tong",
  },

  openGraph: {
    title: "台北新北馬桶不通｜馬桶疏通｜棟鑫水電",
    description:
      "雙北馬桶疏通與堵塞處理，協助處理馬桶不通、沖水不順、異物堵塞及相關排水問題。",
    url: "https://www.dongxin24.com/ma-tong",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "馬桶堵塞",
    text: "馬桶無法正常排水、沖水後水位升高或完全堵住，可依堵塞狀況評估疏通方式。",
  },
  {
    title: "馬桶排水緩慢",
    text: "沖水後退水速度變慢、需要多次沖水，可能是馬桶或後端排水管線已有部分堵塞。",
  },
  {
    title: "馬桶異物堵塞",
    text: "衛生紙以外的物品、清潔用品或其他異物掉入馬桶，需依異物位置與現場狀況處理。",
  },
  {
    title: "馬桶反覆堵塞",
    text: "若馬桶疏通後仍經常堵塞，可能與排水管線、馬桶本體或管路配置有關，可進一步檢查。",
  },
  {
    title: "馬桶拆裝",
    text: "若堵塞位置無法直接處理，部分現場可能需要拆卸馬桶後才能檢查或進行後續施工。",
  },
  {
    title: "馬桶與排水管檢查",
    text: "若不只馬桶異常，其他排水口也有回堵或排水變慢，可進一步判斷是否為共用排水管問題。",
  },
];

const faqs = [
  {
    q: "馬桶堵住可以自己一直沖水嗎？",
    a: "不建議。若馬桶已經明顯堵塞，持續沖水可能造成水位升高甚至溢出。可以先停止使用，再確認是否需要安排疏通。",
  },
  {
    q: "為什麼馬桶通完沒多久又堵住？",
    a: "可能是異物沒有完全排除、後端排水管仍有阻塞，也可能與馬桶本體或管線配置有關。如果反覆發生，建議進一步檢查。",
  },
  {
    q: "馬桶不通一定要拆馬桶嗎？",
    a: "不一定。是否需要拆卸要依堵塞位置、異物種類、馬桶形式及現場管線狀況判斷，能直接疏通的情況通常不需要拆卸。",
  },
  {
    q: "拆馬桶會不會有損壞風險？",
    a: "拆卸既有馬桶仍可能因使用年限、固定方式、陶瓷狀況或現場施工條件而有損壞風險，若現場判斷需要拆卸，施工前會先說明。",
  },
  {
    q: "半夜馬桶堵塞可以處理嗎？",
    a: "棟鑫水電提供雙北24小時緊急水電聯絡服務，若馬桶完全無法使用、嚴重回堵或有溢水情況，可先電話或 LINE 說明現場狀況。",
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
      <Breadcrumbs title="馬桶疏通" path="/ma-tong" />
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
            雙北水電服務｜馬桶疏通
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
              馬桶不通與疏通處理
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
            處理住宅、店面常見馬桶堵塞問題，
            包含馬桶不通、排水緩慢、異物堵塞、
            反覆堵塞及相關排水管線問題。
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
              "馬桶不通",
              "馬桶堵塞",
              "馬桶疏通",
              "排水緩慢",
              "異物堵塞",
              "馬桶拆裝",
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
              📞 電話諮詢馬桶問題
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
      <section style={{ padding: "75px 20px" }}>
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
            雙北馬桶疏通服務
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
            依馬桶形式、堵塞位置及排水管線狀況，
            評估適合的處理方式。
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
            馬桶堵塞處理流程
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
              [
                "01",
                "說明狀況",
                "告知馬桶堵塞、排水速度及是否有異物掉入。",
              ],
              [
                "02",
                "現場判斷",
                "確認馬桶形式、堵塞程度與排水管線狀況。",
              ],
              [
                "03",
                "說明方式",
                "依現場狀況說明疏通、檢查或拆卸等處理方式。",
              ],
              [
                "04",
                "確認後施工",
                "經客戶確認後施工，並確認馬桶排水狀況。",
              ],
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
      <section style={{ padding: "75px 20px" }}>
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
            馬桶不通常見問題
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
          馬桶堵住無法正常使用？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可以先電話或 LINE 說明堵塞狀況，
          若有特殊馬桶型式，也可以先傳照片協助了解。
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
    <ServiceContext route="/ma-tong" />
    </main>
  );
}