"use client";

import * as React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  id: number;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: {
      name: "Anatoly Yakovenko",
      role: "CO-FOUNDER & CEO",
      company: "SOLANA",
      image: "/testimonials/solana-logo.webp",
    },
    quote:
      "The Helius team makes building on Solana smoother and easier. They’ve done an amazing job at streamlining and removing complexity from app development on the network.",
  },
  {
    id: 2,
    author: {
      name: "Armani Ferrante",
      role: "FOUNDER & CEO",
      company: "Coral/Backpack",
      image: "/testimonials/xnft-backpack-logo.webp",
    },
    quote:
      "Helius is super fast, reliable, and I'd recommend them to anyone looking for the best developer experience on Solana. They power a great portion of our infrastructure at Backpack.",
  },
  {
    id: 3,
    author: {
      name: "Alfonso Gomez Manas",
      role: "CO-FOUNDER",
      company: "CROSSMINT",
      image: "/testimonials/crossmint-logo.svg",
    },
    quote:
      "The Helius team is the GOAT. They ship fast, intake product feedback overnight, and power a great deal of Crossmint infrastructure. A big percentage of Crossmint products couldn't exist without Helius.",
  },
  {
    id: 4,
    author: {
      name: "Noah Prince",
      role: "HEAD OF PROTOCOL ENGINEERING",
      company: "HELIUM",
      image: "/testimonials/helium-logo.webp",
    },
    quote:
      "RPC side, Helius has been incredibly responsive. Working with bleeding edge tech like NFT compression, this has been invaluable. Quick turnaround and less time spent debugging indexing issues means we can spend more time on building out great user experiences.",
  },
  {
    id: 5,
    author: {
      name: "Stepan Simkin",
      role: "CO-FOUNDER & CEO",
      company: "SQUADS PROTOCOL",
      image: "/testimonials/squads-logo.webp",
    },
    quote:
      "Helius is an absolutely essential piece of infrastructure, their service is robust and reliable, the team is responsive and brilliant, their attitude and dedication shows how much they care. They are passionately aligned with the success of their customers.",
  },
  {
    id: 6,
    author: {
      name: "Luke Truitt",
      role: "CO-FOUNDER & CEO",
      company: "BRIDGESPLIT",
      image: "/testimonials/elixir-logo.webp",
    },
    quote:
      "Helius has been a game-changer for us with extremely reliable RPCs alongside Webhooks that have enabled a whole new set of use cases at a great price. Not to mention providing high-touch customer service for new features or any issues that we have.",
  },
  {
    id: 7,
    author: {
      name: "Jon Wong",
      role: "HEAD OF ECOSYSTEM ENGINEERING",
      company: "Solana Foundation",
      image: "/testimonials/solana-foundation-logo.webp",
    },
    quote:
      "The engineers at Helius are top-notch go-getters that know that when your business is on the line, their business is on the line. They relish the opportunity for new problems to solve and aren’t afraid to be at the cutting edge of Solana at all times.",
  },
  {
    id: 8,
    author: {
      name: "Tristan Frizza",
      role: "FOUNDER & CEO",
      company: "ZETA MARKETS",
      image: "/testimonials/zeta-markets-logo.webp",
    },
    quote:
      "Helius is building the crucial infrastructure required for apps to support mainstream adoption on next generation blockchains like Solana. Having personally built our own in-house indexing and data pipelines at Zeta, I know how much of a headache it is for new teams. Being able to save countless hours of data engineering work and costly AWS bills is a big advantage for us.",
  },
  {
    id: 9,
    author: {
      name: "Richard Wu",
      role: "CO-FOUNDER",
      company: "TENSOR",
      image: "/testimonials/tensor-logo.webp",
    },
    quote:
      "The Helius team is GOATed. Besides providing best-in-class Solana RPCs, they’ve basically given us white-glove service for general Solana infrastructure advice & support. You can count on them to have your back.",
  },
];

export function TestimonialCarousel() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const autoplayOptions = {
    delay: 4000,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
      loop: true,
    },
    [Autoplay(autoplayOptions)],
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      className="relative w-full px-4 pb-16 md:pb-24 overflow-hidden"
      id="companies"
      ref={containerRef}
    >
      <div className="max-w-[1300px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Trusted by Solana's best.
        </motion.h2>

        <div className="relative overflow-hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <motion.div
              className="flex"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex items-center justify-center h-full flex-[0_0_100%] md:flex-[0_0_66.666%] min-w-0 relative px-4 transition-all duration-500 ease-in-out
          ${
            selectedIndex === index
              ? "opacity-100 scale-100"
              : "opacity-50 scale-90"
          }`}
                >
                  <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center text-center md:text-left">
                      <div className="sm:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="w-20 h-20 relative z-10 mb-4">
                          <img
                            src={testimonial.author.image}
                            alt={testimonial.author.name}
                            className="w-full h-full rounded-full object-cover bg-zinc-900"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {testimonial.author.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {testimonial.author.role} -{" "}
                          {testimonial.author.company}
                        </p>
                      </div>
                      <div className="sm:w-2/3 flex-1">
                        <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="rounded-full border-zinc-800 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-700"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="rounded-full border-zinc-800 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-700"
          >
            <ChevronRight className="h-4 w-4 text-white" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
