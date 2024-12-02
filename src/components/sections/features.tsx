"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";

interface FeatureScrollProps {
  direction: "ltr" | "rtl";
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  learnMore: string;
  topPosition?: string;
}

const FeatureScrollContainer: React.FC<FeatureScrollProps> = ({
  direction,
  title,
  description,
  imageSrc,
  buttonText = "Learn More",
  learnMore,
  topPosition = "10%",
}) => {
  const isLTR = direction === "ltr";

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="lg:hidden flex flex-col p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5 }}
          className="w-full order-1"
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full max-w-[300px] mx-auto mb-4 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`flex flex-col gap-4 text-center ${
            isLTR ? "order-2" : "order-1"
          }`}
        >
          <motion.h2
            variants={childVariants}
            className="text-3xl font-bold text-white"
          >
            {title}
          </motion.h2>
          <motion.p variants={childVariants} className="text-gray-400">
            {description}
          </motion.p>
          <motion.div variants={childVariants}>
            <a href={learnMore} target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="bg-orange-600/10 hover:bg-orange-600/20 text-orange-500 border border-orange-500/20"
              >
                {buttonText}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-2 h-fit min-h-64 sm:min-h-[35rem] w-full justify-center items-start relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5 }}
          className="sticky flex justify-center items-center"
          style={{ top: topPosition }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6 max-w-xl p-8"
          >
            <motion.h2
              variants={childVariants}
              className="text-4xl font-bold text-white"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-gray-400 text-lg"
            >
              {description}
            </motion.p>
            <motion.div variants={childVariants}>
              <a href={learnMore} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-orange-600/10 hover:bg-orange-600/20 text-orange-500 border border-orange-500/20 w-fit"
                >
                  {buttonText}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-center h-fit ${
            isLTR ? "" : "row-start-1"
          }`}
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full max-w-[400px] transition-transform duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};
export function FeatureScroll() {
  const features: FeatureScrollProps[] = [
    {
      title: "High-performance Solana RPCs",
      description:
        "Enhance your apps with speedy Solana RPC nodes, optimized for reliability and backed by 24/7 support. Solana's most battle-tested RPCs, trusted by thousands.",
      imageSrc: "/fastest-solana-rpc-nodes.webp",
      direction: "rtl" as const,
      learnMore: "https://www.helius.dev/solana-rpc-nodes",
    },
    {
      title: "Solana Webhooks",
      description:
        "Stream Solana transactions and account changes with low latencies and robust fault-tolerance. Built-in event parsing.",
      imageSrc: "/best-solana-webhooks.webp",
      direction: "ltr" as const,
      learnMore: "https://www.helius.dev/solana-webhooks-websockets",
    },
    {
      title: "DAS API & Compression",
      description:
        "Leverage the most cost efficient way of minting mass amounts of digital assets. Query all tokens and NFTs through a single interface, indexed for performance.",
      imageSrc: "/solana-das-nft-and-token-api.webp",
      direction: "rtl" as const,
      learnMore: "https://www.helius.dev/solana-apis",
    },
    {
      title: "Stream Data with Geyser Plugins",
      description: "Ultra low-latency data streaming at the speed of Solana.",
      imageSrc: "/best-solana-geyser-grpc-streams.webp",
      direction: "ltr" as const,
      learnMore: "https://www.helius.dev/solana-webhooks-websockets",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 m-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          delayChildren: 1.2,
          staggerChildren: 0.2,
        }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Full Suite of Solana Development Tools
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-16 max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Fine-tuned for high performance and reliability.
        </motion.p>
      </motion.div>
      <div className="flex flex-col gap-10 md:gap-20 container px-4 py-12 sm:py-16 md:py-20">
        {features.map((feature, index) => (
          <FeatureScrollContainer
            key={index}
            topPosition="10%"
            direction={feature.direction}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
            learnMore={feature.learnMore}
          />
        ))}
      </div>
    </section>
  );
}
