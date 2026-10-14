import Breadcrumbs from "../components/Breadcrumbs";
import ServiceContext from "../components/ServiceContext";
import PageFaqs from "../components/PageFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北抽水馬達更換｜加壓馬達與抽水泵浦維修｜棟鑫水電",

  description:
    "棟鑫水電提供台北、新北雙北抽水馬達更換與維修，處理抽水馬達不運轉、不出水、異音、加壓馬達故障、水壓異常及抽水泵浦問題，依現場設備與管路狀況評估。",

  alternates: {
    canonical: "https://www.dongxin24.com/chou-shui-ma-da",
  },

  openGraph: {
    title: "台北新北抽水馬達更換｜加壓馬達維修｜棟鑫水電",
    description:
      "雙北抽水馬達與加壓馬達維修更換，處理馬達不運轉、不出水、水壓異常及抽水設備問題。",
    url: "https://www.dongxin24.com/chou-shui-ma-da",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "抽水馬達故障",
    text: "抽水馬達無法啟動、運轉異常或無法正常抽水，可協助檢查馬達、電源及相關管路狀況。",
  },
  {
    title: "抽水馬達更換",
    text: "既有馬達老化、故障或無法正常使用，可依現場用途、設備規格及管路條件評估更換。",
  },
  {
    title: "加壓馬達維修",
    text: "住宅水壓不足、加壓馬達不啟動、頻繁啟停或運轉異常，可依設備狀況進行檢查。",
  },
  {
    title: "加壓馬達更換",
    text: "依住宅用水需求、樓層、管路配置及既有設備規格，評估適合的加壓馬達。",
  },
  {
    title: "馬達不出水",
    text: "馬達有運轉但沒有正常出水，可能與進水、管路、設備本體或其他相關問題有關，需要現場判斷。",
  },
  {
    title: "馬達異音與異常啟停",
    text: "馬達出現異常聲音、持續運轉或頻繁啟停，可檢查設備及相關控制與供水狀況。",
  },
];

const faqs = [
  {
    q: "抽水馬達不會動一定是馬達壞掉嗎？",
    a: "不一定。除了馬達本體，也可能與電源、控制設備、供水狀況或其他零件有關，需要依現場設備狀況檢查。",
  },
  {
    q: "抽水馬達有運轉但抽不到水是什麼原因？",
    a: "可能與進水狀況、管路、設備本體或其他相關問題有關。若持續空轉，建議先停止使用並安排檢查。",
  },
  {
    q: "抽水馬達和加壓馬達有什麼不同？",
    a: "抽水馬達主要用於將水輸送至水塔或其他位置；加壓馬達主要用於改善用水端水壓。實際設備配置仍需依建築與供水方式判斷。",
  },
  {
    q: "馬達一直啟動又停止正常嗎？",
    a: "若短時間內頻繁啟停，可能與設備控制、用水狀況、壓力或其他因素有關，建議進一步檢查。",
  },
  {
    q: "抽水馬達可以直接換更大台嗎？",
    a: "不建議只以馬力大小決定。需要考量揚程、流量、管徑、電源及現場供水條件，才能選擇適合的設備。",
  },
  {
    q: "晚上突然沒水可以處理嗎？",
    a: "棟鑫水電提供雙北24小時緊急水電聯絡服務。若遇到抽水設備故障導致無法正常供水，可先電話或 LINE 說明現場狀況。",
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
      <Breadcrumbs title="抽水與加壓馬達" path="/chou-shui-ma-da" />
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
            雙北水電工程｜抽水設備
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
              抽水馬達更換與維修
            </span>
          </h1>

          <p
            style={{
              maxWidth: "780px",
              fontSize: "clamp(17px,3vw,22px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,.88)",
              marginBottom: "32px",
            }}
          >
            提供住宅、大樓、店面抽水與加壓設備服務，
            處理抽水馬達不運轉、不出水、異音、
            加壓馬達故障、水壓異常及相關抽水設備問題。
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
              "抽水馬達",
              "加壓馬達",
              "馬達更換",
              "馬達不出水",
              "水壓異常",
              "抽水泵浦",
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
              📞 電話諮詢馬達問題
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
              LINE 傳設備照片
            </a>
          </div>
        </div>
      </section>

      {/* 服務項目 */}
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
            雙北抽水馬達與加壓設備服務
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
            依馬達用途、供水方式、管路配置及設備狀況，
            評估維修或更換方式。
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
            抽水馬達處理流程
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
                "說明故障狀況",
                "告知目前是否沒水、馬達是否運轉及有無異常聲音。",
              ],
              [
                "02",
                "現場檢查",
                "確認馬達、電源、供水及相關管路與設備狀況。",
              ],
              [
                "03",
                "評估處理方式",
                "依故障原因及設備規格說明維修或更換方式。",
              ],
              [
                "04",
                "確認後施工",
                "確認工程內容後施工，完成後確認設備運轉及供水狀況。",
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
            抽水馬達常見問題
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
          抽水馬達故障、沒水或水壓異常？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可先提供馬達照片、品牌型號及現場狀況，
          再依設備與管路條件協助評估。
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
    <ServiceContext route="/chou-shui-ma-da" />
    </main>
  );
}