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

const cardClassName =
  "group flex min-h-0 w-full min-w-0 max-w-full flex-col rounded-[12px] border-2 bg-white p-4 transition-all duration-200 sm:p-4 md:p-5 [border-color:var(--card-border)] hover:[border-color:var(--card-border-hover)] hover:shadow-[var(--shadow-hover)]";

function ImpactCard({ item }: { item: ImpactMetric }) {
  return (
    <article className={cardClassName}>
      <div className="mb-3 flex min-w-0 items-start gap-3 sm:items-center">
        <div className="proplay-icon-container h-10 w-10 shrink-0">
          {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
            className: "h-5 w-5",
          })}
        </div>
        <h3 className="global-body min-w-0 flex-1 text-left text-base font-semibold leading-snug text-zinc-900 sm:text-lg">
          {item.category}
        </h3>
      </div>

      <p className="mb-2 break-words text-xl font-bold tabular-nums tracking-tight text-zinc-900 sm:text-2xl md:text-3xl">
        {item.metric}
      </p>

      <p className="global-body mt-auto text-left text-gray-600 break-words">
        {item.context}
      </p>
    </article>
  );
}

export function EcosystemImpact() {
  const [slide, setSlide] = useState(0);

  return (
    <section
      className="min-w-0 w-full max-w-full overflow-x-hidden rounded-[12px] border-2 bg-white shadow-[var(--shadow-card)] [border-color:var(--card-border)]"
      aria-labelledby="ecosystem-impact-heading"
    >
        <div className="mx-auto w-full max-w-3xl text-center px-2">
          <p className="mb-2 flex flex-wrap items-center justify-center gap-2 global-body text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-600">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
              <BarChart3 className="global-icon-yellow h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" aria-hidden />
            </span>
            <span className="text-balance">By the numbers</span>
          </p>
          <h2
            id="ecosystem-impact-heading"
            className="global-section-title text-balance break-words"
          >
            Ecosystem impact
          </h2>
          <p className="global-section-subtitle mx-auto max-w-2xl text-balance break-words text-xs sm:text-sm md:text-base">
            Snapshot of what ECH Institute delivers through coordination, education, and media,
            updated <span className="font-medium text-zinc-800">February 2026</span>.
          </p>
        </div>

      <div className="bg-gradient-to-b from-gray-50/80 to-white px-3 py-4 sm:px-4 sm:py-4 md:px-6">
        {/* Mobile: one card + carousel controls */}
        <div className="mx-auto w-full max-w-md md:hidden">
          <div className="min-h-[220px] w-full sm:min-h-[200px]">
            <ImpactCard item={impactData[slide]} />
          </div>
          <div className="mt-4 flex items-center justify-center gap-3 px-1">
            <button
              type="button"
              onClick={() =>
                setSlide((i) => (i === 0 ? impactData.length - 1 : i - 1))
              }
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-700 transition-colors hover:border-amber-400 hover:bg-amber-50 active:scale-95"
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
                      ? "scale-125 bg-amber-500"
                      : "bg-gray-300 hover:bg-gray-400"
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
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-700 transition-colors hover:border-amber-400 hover:bg-amber-50 active:scale-95"
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
