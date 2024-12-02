"use client";

import { Button } from "@/components/ui/button";
import LottieWithFallback from "./lottie";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container max-sm:justify-center max-sm:text-center mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Web3 Development Journey Starts Now.
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Get started in less than 10 seconds. No credit cards or email
              required.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-sm:w-full">
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
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <div className="relative w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
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
