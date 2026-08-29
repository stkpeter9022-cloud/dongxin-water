import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "住宅裝修水電",
    desc: "新屋、老屋翻修及局部裝修，可依空間與設備需求規劃水電配置、給排水、衛浴及相關設備工程。",
    tags: ["裝修水電", "給排水", "衛浴"],
    links: [
      { label: "室內配線", href: "/shi-nei-pei-xian" },
      { label: "衛浴工程", href: "/wei-yu" },
    ],
  },
  {
    number: "02",
    title: "全室配線工程",
    desc: "依住宅用電需求規劃迴路，處理老屋重拉線、全室換線、插座、照明、冷氣專用迴路及相關配線工程。",
    tags: ["室內配線", "迴路配置", "專用迴路"],
    links: [
      { label: "了解室內配線", href: "/shi-nei-pei-xian" },
    ],
  },
  {
    number: "03",
    title: "配電與用電工程",
    desc: "處理配電箱、無熔絲開關、專用迴路及設備用電需求，依現場負載與既有電路狀況評估施工方式。",
    tags: ["配電箱", "無熔絲開關", "用電工程"],
    links: [
      { label: "跳電與配電檢修", href: "/tiao-dian" },
    ],
  },
  {
    number: "04",
    title: "給排水與衛浴工程",
    desc: "包含冷熱水管、排水管、馬桶、洗臉盆、水龍頭及各類衛浴設備施工與管線配置。",
    tags: ["水管工程", "排水", "衛浴"],
    links: [
      { label: "衛浴設備工程", href: "/wei-yu" },
      { label: "漏水處理", href: "/lou-shui" },
    ],
  },
  {
    number: "05",
    title: "設備與馬達工程",
    desc: "抽水馬達、加壓馬達、沈水馬達及污水設備，可依現場供水、排水與設備狀況進行檢查、更換與安裝。",
    tags: ["抽水馬達", "加壓馬達", "沈水馬達"],
    links: [
      { label: "抽水與加壓馬達", href: "/chou-shui-ma-da" },
      { label: "沈水馬達", href: "/shen-shui-ma-da" },
    ],
  },
  {
    number: "06",
    title: "緊急水電維修",
    desc: "跳電、漏水、馬桶堵塞、水管異常及設備故障等緊急狀況，可先電話或 LINE 聯絡，再依地區與現場狀況安排。",
    tags: ["24H 聯絡", "跳電", "漏水"],
    links: [
      { label: "跳電維修", href: "/tiao-dian" },
      { label: "水管疏通", href: "/shui-guan" },
      { label: "馬桶不通", href: "/ma-tong" },
    ],
  },
];

export default function Testimonials() {
  return (
    <section
      id="project-types"
      aria-labelledby="project-types-title"
      style={{
        padding: "110px 20px",
        background: "#f5f6f7",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
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
            PROJECT TYPES
          </div>

          <h2
            id="project-types-title"
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            棟鑫水電承接的工程類型
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            從住宅翻修、室內配線、給排水與衛浴，
            到馬達設備及緊急水電維修，
            依實際現場條件與施工需求安排處理方式。
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "22px",
          }}
        >
          {projects.map((item) => (
            <article
              key={item.number}
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: "18px",
                padding: "32px 28px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 28px rgba(15,23,42,.06)",
                minHeight: "300px",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "22px",
                  right: "24px",
                  fontSize: "42px",
                  fontWeight: 800,
                  color: "#eef0f2",
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>

              <h3
                style={{
                  margin: "0 0 14px",
                  paddingRight: "55px",
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#111827",
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: "0 0 22px",
                  color: "#64748b",
                  fontSize: "15px",
                  lineHeight: 1.85,
                }}
              >
                {item.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "22px",
                }}
              >
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "6px",
                      background: "#f8fafc",
                      border: "1px solid #e5e7eb",
                      color: "#475569",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
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
                {item.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    style={{
                      color: "#9a6b00",
                      fontSize: "14px",
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "55px",
            padding: "35px 30px",
            borderRadius: "18px",
            background: "#111827",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 10px",
              color: "#fff",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            有住宅翻修或水電工程需求？
          </h3>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 22px",
              color: "#cbd5e1",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            可提供現場照片、設備資料、施工圖面或預計施作項目，
            先讓我們了解工程內容，再依現場條件評估。
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
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "190px",
                height: "54px",
                padding: "0 24px",
                borderRadius: "8px",
                background: "#d6a52c",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              📞 電話工程諮詢
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "190px",
                height: "54px",
                padding: "0 24px",
                borderRadius: "8px",
                background: "#06C755",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              💬 LINE 傳照片詢問
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}