export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",

    name: "棟鑫水電",

    url: "https://dongxin24.com",

    image: "https://dongxin24.com/icon.png",

    logo: "https://dongxin24.com/icon.png",

    telephone: "+886918808209",

    description:
      "棟鑫水電提供雙北24小時水電急修，專業處理跳電維修、漏水抓漏、水管疏通、馬桶不通、抽水馬達、沈水馬達、配電箱維修及室內配線。",

    priceRange: "$$",

    areaServed: [
      "台北市",
      "新北市",
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "TW",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "水電服務",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "跳電維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "漏水處理",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "抓漏服務",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "馬桶不通",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "水管疏通",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "抽水馬達",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "沈水馬達",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "室內配線",
          },
        },
      ],
    },

    sameAs: [
      "https://line.me/ti/p/ezn_Ad6UpZ",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}