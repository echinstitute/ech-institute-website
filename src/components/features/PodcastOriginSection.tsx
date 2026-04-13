'use client';

import type { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

export type PodcastOriginSectionProps = {
  title: string;
  intro: string;
  purpose: ReactNode;
  goal: ReactNode;
  closing: ReactNode;
};

/**
 * Shared “why this series started” editorial band (timeline layout, no card box).
 * Used across PEEPanEIP, Fusaka Files, EPD, and WiEP sub-pages.
 */
export function PodcastOriginSection({
  title,
  intro,
  purpose,
  goal,
  closing,
}: PodcastOriginSectionProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8">
      <section className="relative mb-8 overflow-hidden sm:mb-10 sm:rounded-3xl">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(245,165,29,0.08),transparent_55%),radial-gradient(ellipse_60%_50%_at_90%_80%,rgba(0,0,0,0.02),transparent_50%)]"
          aria-hidden
        />
        <div className="relative border-y border-black/10 bg-white px-5 py-6 sm:border-x sm:px-8 md:px-10 md:py-10">
          <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
            <header className="lg:col-span-4 xl:col-span-3">
              <h2 className="text-balance text-3xl sm:text-4xl md:text-[2.35rem] font-black leading-tight text-black">
                {title}
              </h2>
              <p className="mt-4 global-body">{intro}</p>
            </header>

            <div className="relative lg:col-span-8 xl:col-span-9">
              <div
                className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-[#f5a51d] via-[#f5a51d]/20 to-transparent sm:left-[13px]"
                aria-hidden
              />
              <ul className="space-y-6 sm:space-y-8">
                <li className="relative pl-9 sm:pl-11">
                  <span
                    className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#f5a51d] bg-white shadow-sm sm:left-0.5 sm:h-7 sm:w-7"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-black" />
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#f5a51d]" aria-hidden />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5a51d]">
                      Purpose
                    </span>
                  </div>
                  <div className="mt-3 global-body-lg text-black">
                    {purpose}
                  </div>
                </li>
                <li className="relative pl-9 sm:pl-11">
                  <span
                    className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-white shadow-sm sm:left-0.5 sm:h-7 sm:w-7"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-[#f5a51d]" />
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
                      Goal
                    </span>
                  </div>
                  <div className="mt-3 global-body-lg text-black">
                    {goal}
                  </div>
                </li>
                <li className="relative border-t border-dashed border-black/10 pt-6 pl-9 sm:pl-11 sm:pt-8 text-black/60">
                  <div className="global-body italic">
                    {closing}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
