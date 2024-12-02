import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  title: "Helius - Solana's Leading RPC & API Platform",
  description:
    "Solana RPCs, APIs, webhooks and infrastructure to build and ship crypto apps, fast. Get started for free in 1 click.",
  canonical: "https://helius-cloned-bankk.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://helius-cloned-bankk.vercel.app/",
    siteName: "Helius",
    images: [
      {
        url: "https://helius-cloned-bankk.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Helius",
      },
    ],
  },
  twitter: {
    handle: "@heliuslabs",
    site: "@heliuslabs",
    cardType: "summary_large_image",
  },
};

export const getSEO = (pageSEO?: DefaultSeoProps): DefaultSeoProps => {
  return {
    ...defaultSEO,
    ...pageSEO,
    openGraph: {
      ...defaultSEO.openGraph,
      ...pageSEO?.openGraph,
    },
    twitter: {
      ...defaultSEO.twitter,
      ...pageSEO?.twitter,
    },
  };
};
