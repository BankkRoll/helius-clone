// src\pages\index.tsx
"use client";

import { defaultSEO, getSEO } from "@/lib/seo";

import { CallToAction } from "@/components/sections/call-to-action";
import { FeatureScroll } from "@/components/sections/features";
import HeroSection from "@/components/sections/hero";
import { NextSeo } from "next-seo";
import { SocialCompanies } from "@/components/sections/social-proof";
import { TestimonialCarousel } from "@/components/sections/testimonials";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const seo = getSEO({
    title: "Helius - Solana's Leading RPC & API Platform",
    description:
      "Solana RPCs, APIs, webhooks and infrastructure to build and ship crypto apps, fast. Get started for free in 1 click.",
    canonical: `${defaultSEO.canonical}${router.asPath}`,
    openGraph: {
      url: `${defaultSEO.canonical}${router.asPath}`,
    },
  });

  return (
    <>
      <NextSeo {...seo} />

      <HeroSection />
      <FeatureScroll />
      <TestimonialCarousel />
      <SocialCompanies />
      <CallToAction />
    </>
  );
}
