"use client";

import { useEffect, useRef, useState } from "react";

// Portfolio companies coming soon
// const portfolioCompanies = [
//   { name: 'Company 1', logo: '/logo1.png' },
//   { name: 'Company 2', logo: '/logo2.png' },
// ]

export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-32 px-6 border-t border-border/50 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/2 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-xs font-medium tracking-wide text-accent uppercase">
              Portfolio
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-3xl transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Backing visionary founders{" "}
            <span className="bg-linear-to-br from-accent to-accent/60 bg-clip-text text-transparent">
              building the future
            </span>
          </h2>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-20 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
            <div className="relative px-8 py-12 border border-border/50 rounded-3xl bg-card/30 backdrop-blur-sm max-w-2xl">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </div>
                  <span className="text-xs font-medium tracking-wide text-accent">
                    Actively Investing
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Building Our Portfolio
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                    We're currently partnering with exceptional founders.
                    Portfolio announcements coming soon.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    <span>AI/ML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    <span>Web3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    <span>SaaS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    <span>Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    <span>Developer Tools</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
