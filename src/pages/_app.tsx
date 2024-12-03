// src/pages/_app.tsx

import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Footer } from "@/components/layout/footer";
import Head from "next/head";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { defaultSEO } from "@/lib/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="i27pz0PBgfFQh7YDh2n3cL6tIND7Fxnmp_YGwankKZs" />
      </Head>

      <DefaultSeo {...defaultSEO} titleTemplate={`%s | Helius`} />

      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Toaster richColors />
      </ThemeProvider>
    </>
  );
}
