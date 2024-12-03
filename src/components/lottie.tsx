"use client";

import React, { useEffect, useRef, useState } from "react";

export default function LottieWithFallback() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("lottie-web").then((lottie) => {
        if (containerRef.current) {
          const animation = lottie.default.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/lottie.json",
          });

          animation.addEventListener("DOMLoaded", () => setLottieLoaded(true));

          return () => {
            animation.destroy();
          };
        }
      });
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={isLottieLoaded ? "w-full h-full block" : "hidden"}
      ></div>
      {!isLottieLoaded && (
        <img
          src="/lottie.svg"
          alt="Fallback Animation"
          className="w-full h-full"
        />
      )}
    </>
  );
}
