"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import LottieWithFallback from "../lottie";
import { motion } from "framer-motion";

export function CallToAction() {
  const [dots, setDots] = useState<{ x: number; y: number; size: number }[]>(
    [],
  );

  useEffect(() => {
    const generateDots = () => {
      const newDots = Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
      }));
      setDots(newDots);
    };

    generateDots();
    window.addEventListener("resize", generateDots);

    return () => {
      window.removeEventListener("resize", generateDots);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-orange-500"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container max-sm:justify-center max-sm:text-center mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Web3 Development Journey Starts Now.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get started in less than 10 seconds. No credit cards or email
              required.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row gap-4 max-sm:w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="https://dashboard.helius.dev/signup"
                rel="noopener noreferrer"
                target="_blank"
                className="max-sm:w-full"
              >
                <Button
                  size="lg"
                  className="max-sm:w-full bg-orange-600/10 hover:bg-orange-600/20 text-orange-500 border border-orange-500/20"
                >
                  Start for Free
                </Button>
              </a>
              <a
                href="https://docs.helius.dev/"
                rel="noopener noreferrer"
                target="_blank"
                className="max-sm:w-full"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="max-sm:w-full bg-black/40 hover:bg-black/60 text-white border border-white/10"
                >
                  Documentation
                </Button>
              </a>
            </motion.div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <div className="relative w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute inset-0"
              >
                <LottieWithFallback />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
