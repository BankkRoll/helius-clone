import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="z-10 relative container mx-auto px-4 py-36 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-8 mt-2 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.h1
              className="font-bold tracking-tighter text-5xl md:text-6xl lg:text-8xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The Best
              <motion.span
                className="block text-orange-500 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Solana RPCs.
              </motion.span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Solana&apos;s most loved RPC Nodes, APIs, Webhooks, and Developer
              Tooling.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center max-md:w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="https://dashboard.helius.dev/signup"
              rel="noopener noreferrer"
              target="_blank"
              className=" max-md:w-full"
            >
              <Button
                size="xxl"
                variant="shine"
                className="bg-gradient-to-r from-orange-600/10 via-orange-600/20 to-orange-600/10 hover:bg-orange-600/20 max-md:w-full  border border-orange-500/20"
              >
                Start for Free
              </Button>
            </a>
            <a
              href="https://docs.helius.dev/"
              rel="noopener noreferrer"
              target="_blank"
              className=" max-md:w-full"
            >
              <Button
                variant="secondary"
                size="xxl"
                className=" max-md:w-full bg-black/40 hover:bg-black/60 text-white border border-white/10 "
              >
                Documentation
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
