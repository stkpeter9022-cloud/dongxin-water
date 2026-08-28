import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: "⚡",
      title: "水電維修",
      desc: "跳電、漏電、斷電、插座及開關故障，提供快速檢修與處理。",
      link: "/tiao-dian",
    },
    {
      icon: "🏠",
      title: "裝修水電工程",
      desc: "配合室內裝修，提供水電配置、線路規劃、給排水及設備安裝。",
    },
    {
      icon: "🔌",
      title: "室內配線工程",
      desc: "全戶換線、專用迴路、插座開關、配電箱及用電設備配線。",
    },
    {
      icon: "💧",
      title: "給排水工程",
      desc: "冷熱水管、排水管、漏水處理及給排水管路更新工程。",
    },
    {
      icon: "🚿",
      title: "衛浴工程",
      desc: "馬桶、洗手台、龍頭、淋浴設備及衛浴設備安裝更換。",
    },
    {
      icon: "🧰",
      title: "配電工程",
      desc: "配電箱整理、無熔絲開關、迴路配置及用電設備工程。",
    },
    {
      icon: "🔧",
      title: "馬達工程",
      desc: "抽水馬達、加壓馬達、沉水馬達安裝、檢修及設備更換。",
    },
    {
      icon: "🔍",
      title: "漏水抓漏",
      desc: "針對室內漏水、管線滲漏及壁面異常進行檢測與處理。",
    },
    {
      icon: "🚽",
      title: "排水疏通",
      desc: "馬桶、廚房、浴室及排水管堵塞，提供現場疏通處理。",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "100px 20px",
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
            marginBottom: "55px",
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
              marginBottom: "16px",
            }}
          >
            PROFESSIONAL SERVICES
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            水電工程服務
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
            從日常維修到室內裝修，提供完整水電工程服務，
            <br />
            依照現場需求規劃施工，讓水電工程一次處理。
          </p>
        </div>

        {/* 服務卡片 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {services.map((item) => {
            const card = (
              <div
                style={{
                  position: "relative",
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "30px",
                  minHeight: "230px",
                  boxShadow: "0 8px 28px rgba(15,23,42,.07)",
                  border: "1px solid #e5e7eb",
                  transition:
                    "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                  cursor: item.link ? "pointer" : "default",
                }}
              >
                {/* 上方裝飾線 */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "30px",
                    width: "45px",
                    height: "4px",
                    background: "#d6a52c",
                    borderRadius: "0 0 6px 6px",
                  }}
                />

                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: "#f8fafc",
                    fontSize: "30px",
                    marginBottom: "20px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#111827",
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: "15px",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>

                {item.link && (
                  <div
                    style={{
                      marginTop: "18px",
                      color: "#9a6b00",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    了解更多 →
                  </div>
                )}
              </div>
            );

            return item.link ? (
              <Link
                key={item.title}
                href={item.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {card}
              </Link>
            ) : (
              <div key={item.title}>{card}</div>
            );
          })}
        </div>

        {/* 底部 CTA */}
        <div
          style={{
            marginTop: "55px",
            padding: "30px",
            borderRadius: "18px",
            background: "#111827",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              有水電或裝修工程需求？
            </h3>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
                lineHeight: 1.6,
              }}
            >
              維修、翻修、裝修水電皆可諮詢，歡迎提供現場照片或工程需求。
            </p>
          </div>

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
              background: "#d6a52c",
              color: "#111827",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "17px",
            }}
          >
            📞 立即諮詢工程
          </a>
        </div>
      </div>
    </section>
  );
}