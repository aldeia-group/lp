"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

export function Contact() {
  const { getToken } = useAuth();
  const [email, setEmail] = useState("");
  const [focusedField, setFocusedField] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const token = await getToken();

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          email_address: email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 border-t border-border/50 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-t from-accent/3 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-6 w-fit">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </div>
              <span className="text-xs font-medium tracking-wide text-accent uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-8 leading-[1.05]">
              Let&apos;s build the{" "}
              <span className="bg-linear-to-br from-accent to-accent/60 bg-clip-text text-transparent">
                future together
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 text-balance">
              We partner with founders solving fundamental problems. If
              you&apos;re building something transformative, we want to hear
              from you.
            </p>

            <div className="space-y-6">
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </p>
                <a
                  href="mailto:scale@aldeia.group"
                  className="text-lg hover:text-accent transition-colors"
                >
                  scale@aldeia.group
                </a>
              </div>
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Location
                </p>
                <p className="text-lg text-foreground/90">🌍</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent rounded-3xl blur-3xl" />
            <form
              onSubmit={handleSubmit}
              className="relative space-y-8 bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-8 md:p-10 shadow-2xl shadow-accent/5"
            >
              <div className="relative group">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField(true)}
                  onBlur={() => setFocusedField(false)}
                  className="peer w-full bg-transparent border-b-2 border-border/50 py-4 px-0 text-lg focus:outline-none focus:border-accent transition-colors placeholder-transparent"
                  placeholder="Email"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 text-sm uppercase tracking-widest transition-all pointer-events-none
                     ${
                       email || focusedField
                         ? "-top-5 text-xs text-accent"
                         : "top-4 text-muted-foreground"
                     }`}
                >
                  Email Address
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group text-base font-medium tracking-wide uppercase"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Joining..."
                ) : submitStatus === "success" ? (
                  <>
                    We&apos;ll be in touch soon
                    <Check className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Get in contact
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {submitStatus === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
