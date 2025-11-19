"use client";

import { useEffect, useRef, useState } from 'react';

export function Approach() {
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

  const principles = [
    {
      number: '01',
      title: 'Strategic Partnership',
      description: 'We work closely with founders to provide strategic guidance, operational support, and access to our extensive network.',
    },
    {
      number: '02',
      title: 'Long-Term Vision',
      description: 'We invest in companies with sustainable competitive advantages and the potential for significant long-term value creation.',
    },
    {
      number: '03',
      title: 'Global Perspective',
      description: 'Our international network enables portfolio companies to scale globally and access new markets efficiently.',
    },
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-linear-to-b from-accent/2 via-transparent to-accent/2 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-xs font-medium tracking-wide text-accent uppercase">
              Our Approach
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Building lasting partnerships with{' '}
            <span className="bg-linear-to-br from-accent to-accent/60 bg-clip-text text-transparent">
              exceptional entrepreneurs
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className={`group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-xl font-bold text-accent">{principle.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
