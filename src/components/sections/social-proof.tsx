"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Marquee } from "../ui/marquee";

const companies = [
  "/companies/jupiter.webp",
  "/companies/shopify.webp",
  "/companies/drip.webp",
  "/companies/coinbase.webp",
  "/companies/me.webp",
  "/companies/raydium.webp",
  "/companies/Vector.webp",
  "/companies/hivemapper.webp",
  "/companies/drift.webp",
  "/companies/zeta.webp",
  "/companies/6lukka.webp",
  "/companies/tensor.webp",
  "/companies/backpack.webp",
  "/companies/squads.webp",
  "/companies/crossmint.webp",
  "/companies/discord.webp",
  "/companies/ledger.webp",
  "/companies/solana.webp",
  "/companies/solflare.webp",
  "/companies/exodus.webp",
  "/companies/trezor.webp",
  "/companies/orca.webp",
  "/companies/dexscreener.webp",
  "/companies/pumpdotfun.webp",
];

const splitCompanies = (arr: string[], numGroups: number) => {
  const groupSize = Math.ceil(arr.length / numGroups);
  return Array.from({ length: numGroups }, (_, i) =>
    arr.slice(i * groupSize, i * groupSize + groupSize),
  );
};

const [group1, group2, group3] = splitCompanies(companies, 3);

const splitIntoColumns = (arr: string[], numColumns: number) => {
  const result: string[][] = Array.from({ length: numColumns }, () => []);
  arr.forEach((item, index) => {
    result[index % numColumns].push(item);
  });
  return result;
};

const columns = splitIntoColumns(companies, 6);

export function SocialCompanies() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="companies" ref={containerRef}>
      <div className="hidden lg:block py-36">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative mt-6">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid grid-cols-6 place-items-center gap-2 lg:gap-12"
            >
              {columns.map((column, colIndex) => (
                <motion.div
                  key={colIndex}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        staggerChildren: 0.1,
                        delayChildren: colIndex * 0.1,
                      },
                    },
                  }}
                  className="flex flex-col items-center space-y-8 gap-6"
                >
                  {column.map((logo, idx) => (
                    <motion.img
                      key={idx}
                      src={logo}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 0.53, scale: 1 },
                      }}
                      className="opacity-[0.53] h-10 w-auto px-2 dark:brightness-0 dark:invert"
                      alt={`Company logo ${colIndex * column.length + idx}`}
                    />
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative space-y-6 py-4">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 0.53,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <Marquee className="max-w-full [--duration:90s]">
                {group1.map((logo, idx) => (
                  <motion.img
                    key={idx}
                    src={logo}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 0.53, scale: 1 },
                    }}
                    className="opacity-[0.53] h-12 md:h-20 w-auto px-2 dark:brightness-0 dark:invert"
                    alt={`Group 1 logo ${idx}`}
                  />
                ))}
              </Marquee>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 0.53,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <Marquee reverse className="max-w-full [--duration:90s]">
                {group2.map((logo, idx) => (
                  <motion.img
                    key={idx}
                    src={logo}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 0.53, scale: 1 },
                    }}
                    className="opacity-[0.53] h-12 md:h-20 w-auto px-2 dark:brightness-0 dark:invert"
                    alt={`Group 2 logo ${idx}`}
                  />
                ))}
              </Marquee>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 0.53,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <Marquee className="max-w-full [--duration:90s]">
                {group3.map((logo, idx) => (
                  <motion.img
                    key={idx}
                    src={logo}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 0.53, scale: 1 },
                    }}
                    className="opacity-[0.53] h-12 md:h-20 w-auto px-2 dark:brightness-0 dark:invert"
                    alt={`Group 3 logo ${idx}`}
                  />
                ))}
              </Marquee>
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
