"use client";

import React, { useState } from "react";
import {
  Users,
  Video,
  Calendar,
  BookOpen,
  Heart,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ImpactMetric {
  category: string;
  metric: string;
  context: string;
  icon: React.ReactNode;
}

const impactData: ImpactMetric[] = [
  {
    category: "Protocol coordination",
    metric: "120+ EIPIP meetings",
    context:
      "Facilitated for Ethereum governance and All Core Devs implementer sessions.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    category: "Education & media",
    metric: "150+ PEEPanEIP videos",
    context: "Technical deep-dives explaining critical network upgrades to the community.",
    icon: <Video className="w-8 h-8" />,
  },
  {
    category: "Annual media surge",
    metric: "99+ videos (2024)",
    context: "A focused output year covering the Dencun and Pectra transitions.",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    category: "Onboarding",
    metric: "90+ EIP office hours",
    context: "Direct guidance and technical review for EIP authors.",
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    category: "Diversity",
    metric: "4+ WiEP cohorts",
    context:
      "Advancing gender diversity in protocol engineering via WiEP study groups.",
    icon: <Heart className="w-8 h-8" />,
  },
];

function ImpactCard({ item }: { item: ImpactMetric }) {
  return (
    <article className="group flex min-h-0 w-full min-w-0 max-w-full flex-col rounded-[12px] border bg-[#1B1B1E] p-4 transition-all duration-200 border-border hover:border-accent/50">
      <div className="mb-3 flex min-w-0 items-start gap-3 sm:items-center">
        <div className="proplay-icon-container h-10 w-10 shrink-0">
          {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
            className: "h-5 w-5",
          })}
        </div>
        <h3 className="text-sm font-bold text-white min-w-0 flex-1 text-left leading-snug">
          {item.category}
        </h3>
      </div>

      <p className="mb-2 break-words text-lg font-bold tabular-nums tracking-tight text-accent sm:text-xl">
        {item.metric}
      </p>

      <p className="global-body mt-auto text-left text-white/60 break-words text-sm">
        {item.context}
      </p>
    </article>
  );
}

export function EcosystemImpact() {
  const [slide, setSlide] = useState(0);

  return (
    <section
      className="min-w-0 w-full max-w-full overflow-x-hidden rounded-[12px] border bg-[#1B1B1E] border-border"
      aria-labelledby="ecosystem-impact-heading"
    >
      <div className="px-4 py-5 border-b border-border">
        <div className="mx-auto w-full max-w-3xl text-center px-2">
          <p className="mb-2 flex flex-wrap items-center justify-center gap-2 global-body text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/50">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-darkGray">
              <BarChart3 className="global-icon-yellow h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" aria-hidden />
            </span>
            <span className="text-balance">By the numbers</span>
          </p>
          <h2
            id="ecosystem-impact-heading"
            className="text-xl font-bold text-white text-balance break-words sm:text-2xl"
          >
            Ecosystem impact
          </h2>
          <p className="text-white/60 mx-auto max-w-2xl text-balance break-words text-xs sm:text-sm mt-2">
            Snapshot of what ECH Institute delivers through coordination, education, and media,
            updated <span className="font-medium text-white">February 2026</span>.
          </p>
        </div>
      </div>

      <div className="px-3 py-4 sm:px-4 sm:py-4 md:px-6">
        {/* Mobile: one card + carousel controls */}
        <div className="mx-auto w-full max-w-md md:hidden">
          <div className="min-h-[200px] w-full">
            <ImpactCard item={impactData[slide]} />
          </div>
          <div className="mt-4 flex items-center justify-center gap-3 px-1">
            <button
              type="button"
              onClick={() =>
                setSlide((i) => (i === 0 ? impactData.length - 1 : i - 1))
              }
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-black text-white transition-colors hover:border-accent hover:bg-darkGray active:scale-95"
              aria-label="Previous metric"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex max-w-[180px] flex-wrap items-center justify-center gap-2">
              {impactData.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === slide
                      ? "scale-125 bg-accent"
                      : "bg-darkGray hover:bg-[#3a3a3a]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === slide}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setSlide((i) => (i === impactData.length - 1 ? 0 : i + 1))
              }
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-black text-white transition-colors hover:border-accent hover:bg-darkGray active:scale-95"
              aria-label="Next metric"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tablet & desktop: grid */}
        <div className="mx-auto hidden min-w-0 w-full max-w-6xl grid-cols-2 gap-4 md:grid lg:grid-cols-3">
          {impactData.map((item, index) => (
            <ImpactCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
