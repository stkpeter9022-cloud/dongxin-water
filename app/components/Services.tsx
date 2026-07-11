import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: "⚡",
      title: "跳電維修",
      desc: "快速檢修跳電、漏電及配電問題",
      link: "/tiao-dian",
    },
    {
      icon: "💧",
      title: "漏水處理",
      desc: "室內外漏水、壁癌、管線漏水",
    },
    {
      icon: "🔍",
      title: "抓漏服務",
      desc: "專業儀器檢測，快速找出漏水點",
    },
    {
      icon: "🚽",
      title: "馬桶不通",
      desc: "馬桶堵塞、排水不順快速處理",
    },
    {
      icon: "🚰",
      title: "水管堵塞",
      desc: "排水管、廚房、浴室疏通",
    },
    {
      icon: "🔧",
      title: "馬達安裝維修",
      desc: "抽水馬達、加壓馬達安裝維修",
    },
    {
      icon: "🏠",
      title: "室內配線",
      desc: "全戶換線、插座、開關更新",
    },
    {
      icon: "🛁",
      title: "衛浴設備",
      desc: "馬桶、洗手台、龍頭安裝更換",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "100px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          我們的服務
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "60px",
            fontSize: "18px",
          }}
        >
          提供雙北地區24小時水電急修服務
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {services.map((item) => {
            const card = (
              <div
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "35px",
                  boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                  transition: ".3s",
                  cursor: item.link ? "pointer" : "default",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: "46px",
                    marginBottom: "20px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "12px",
                    color: "#111827",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "28px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );

            return item.link ? (
              <Link
                key={item.title}
                href={item.link}
                style={{ textDecoration: "none" }}
              >
                {card}
              </Link>
            ) : (
              <div key={item.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}