"use client";

import { useEffect, useState } from "react";
import { GridBackground } from "./grid-background";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <GridBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </div>
          <span className="text-xs font-medium tracking-wide text-accent">
            Strategic Investment Partners
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          <span
            className={`block text-balance bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Capital that builds
          </span>
          <span
            className={`block text-balance bg-linear-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            the future.
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed mb-12 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Strategic venture capital investments in transformative technologies
          and high-growth opportunities
        </p>

        {/* Stats */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
              $50M+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Deployed
            </div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
              15+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Portfolio
            </div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
              3x
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Avg Return
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
      
      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-border/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
