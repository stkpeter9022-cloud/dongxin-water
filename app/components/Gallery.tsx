import Image from "next/image";

const cases = [
  {
    image: "/case5.jpg",
    category: "給排水工程",
    title: "冷熱水管重新配置",
    desc: "依照現場需求重新規劃冷熱水管路，完成管線配置與更新施工。",
  },
  {
    image: "/case7.jpg",
    category: "馬達設備工程",
    title: "沉水馬達更換",
    desc: "沉水抽水馬達更換、安裝及故障排除，改善抽水設備運作問題。",
  },
  {
    image: "/case2.jpg",
    category: "衛浴工程",
    title: "衛浴設備安裝",
    desc: "洗手台、龍頭、馬桶等衛浴設備安裝與更換施工。",
  },
  {
    image: "/case3.jpg",
    category: "配電工程",
    title: "配電箱檢修",
    desc: "針對跳電、漏電及配電箱異常進行現場檢查與維修。",
  },
  {
    image: "/case8.jpg",
    category: "電力工程",
    title: "電表底座更換",
    desc: "針對燒熔損壞的電表底座進行更換，恢復正常供電。",
  },
  {
    image: "/case6.jpg",
    category: "馬達設備工程",
    title: "抽水馬達更換",
    desc: "抽水馬達檢修、更換及安裝，依照現場設備需求進行處理。",
  },
  {
    image: "/case4.jpg",
    category: "漏水工程",
    title: "漏水檢測與修復",
    desc: "針對現場漏水狀況進行檢查，確認原因後安排修復工程。",
  },
  {
    image: "/case10.jpg",
    category: "配電工程",
    title: "無熔絲開關更換",
    desc: "針對燒熔損壞的無熔絲開關進行更換，排除用電異常。",
  },
  {
    image: "/case1.jpg",
    category: "排水工程",
    title: "排水管疏通",
    desc: "處理廚房、浴室及排水管堵塞問題，恢復排水順暢。",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
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
        {/* 標題 */}
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
            PROJECTS
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
            工程實績
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            從日常水電維修到完整工程施工，
            <br />
            透過實際案例了解我們的施工內容與服務範圍。
          </p>
        </div>

        {/* 案例 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "26px",
          }}
        >
          {cases.map((item) => (
            <article
              key={item.title}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(15,23,42,.07)",
              }}
            >
              {/* 圖片 */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                  overflow: "hidden",
                  background: "#e5e7eb",
                }}
              >
                <Image
                  src={item.image}
                  alt={`${item.title}｜雙北水電工程案例`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />

                {/* 類別 */}
                <div
                  style={{
                    position: "absolute",
                    left: "18px",
                    bottom: "18px",
                    padding: "7px 12px",
                    borderRadius: "7px",
                    background: "rgba(17,24,39,.88)",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 700,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {item.category}
                </div>
              </div>

              {/* 文字 */}
              <div
                style={{
                  padding: "25px 24px 28px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "#111827",
                    fontSize: "21px",
                    fontWeight: 800,
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#64748b",
                    fontSize: "15px",
                    lineHeight: 1.85,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 底部 CTA */}
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            有水電、裝修或工程需求？歡迎提供現場照片與需求內容。
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
                borderRadius: "10px",
                background: "#111827",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              📞 電話諮詢工程
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
                borderRadius: "10px",
                background: "#06C755",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              💬 LINE 工程諮詢
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}