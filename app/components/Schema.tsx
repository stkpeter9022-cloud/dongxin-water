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
      "棟鑫水電提供台北市、新北市水電工程、裝修水電、室內配線、配電工程、給排水工程、衛浴工程及24小時水電緊急維修服務。",

    priceRange: "$$",

    areaServed: [
      {
        "@type": "City",
        name: "台北市",
      },
      {
        "@type": "City",
        name: "新北市",
      },
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
      name: "水電與裝修工程服務",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "水電維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24小時水電急修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "裝修水電工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "室內配線工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "配電工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "給排水工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "衛浴工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "漏水抓漏",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "抽水馬達與加壓馬達工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "水管疏通",
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