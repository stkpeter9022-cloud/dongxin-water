import Image from "next/image";

const cases = [
  {
    image: "/case5.jpg",
    title: "水管配置",
    desc: "冷熱水管重新配置、更新施工。",
  },
  {
    image: "/case7.jpg",
    title: "沈水馬達更換",
    desc: "沈水抽水馬達更換、安裝與故障排除。",
  },
  {
    image: "/case2.jpg",
    title: "衛浴設備安裝",
    desc: "洗手台、龍頭、馬桶安裝施工。",
  },
  {
    image: "/case3.jpg",
    title: "配電箱維修",
    desc: "跳電、漏電、配電箱檢修。",
  },
  {
    image: "/case8.jpg",
    title: "電表底座燒熔更換",
    desc: "更換燒毀電表底座，恢復安全供電。",
  },
  {
    image: "/case6.jpg",
    title: "抽水馬達更換",
    desc: "抽水馬達安裝、更換及維修服務。",
  },
  {
    image: "/case4.jpg",
    title: "漏水抓漏",
    desc: "快速找出漏水原因並完成修復。",
  },
  {
    image: "/case10.jpg",
    title: "無熔絲開關燒熔更換",
    desc: "更換燒毀無熔絲開關，排除跳電故障。",
  },
  {
    image: "/case1.jpg",
    title: "排水管疏通",
    desc: "專業疏通廚房、浴室及排水管堵塞。",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "70px 20px",
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
            fontSize: "clamp(30px,6vw,42px)",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "15px",
            lineHeight: 1.3,
          }}
        >
          工程案例
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "45px",
            fontSize: "clamp(16px,4vw,18px)",
          }}
        >
          真實施工案例，品質看得見。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {cases.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                height: "100%",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "22px",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#111827",
                    marginBottom: "10px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "16px",
                    lineHeight: "28px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}