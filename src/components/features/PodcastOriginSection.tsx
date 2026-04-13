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
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(251,191,36,0.14),transparent_55%),radial-gradient(ellipse_60%_50%_at_90%_80%,rgba(120,113,108,0.06),transparent_50%)]"
          aria-hidden
        />
        <div className="relative border-y border-amber-200/40 bg-gradient-to-b from-amber-50/35 via-white/90 to-stone-50/40 px-5 py-6 sm:border-x sm:border-amber-200/30 sm:px-8 md:px-10 md:py-10">
          <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
            <header className="lg:col-span-4 xl:col-span-3">
              <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl md:text-[2.35rem]">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">{intro}</p>
            </header>

            <div className="relative lg:col-span-8 xl:col-span-9">
              <div
                className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-amber-300/80 via-amber-200/50 to-transparent sm:left-[13px]"
                aria-hidden
              />
              <ul className="space-y-6 sm:space-y-8">
                <li className="relative pl-9 sm:pl-11">
                  <span
                    className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-amber-400 bg-white shadow-sm sm:left-0.5 sm:h-7 sm:w-7"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-600" aria-hidden />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
                      Purpose
                    </span>
                  </div>
                  <div className="mt-3 text-base leading-relaxed text-zinc-800 sm:text-lg">
                    {purpose}
                  </div>
                </li>
                <li className="relative pl-9 sm:pl-11">
                  <span
                    className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-amber-300/90 bg-amber-50/80 shadow-sm sm:left-0.5 sm:h-7 sm:w-7"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-600/90" />
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
                      Goal
                    </span>
                  </div>
                  <div className="mt-3 text-base leading-relaxed text-zinc-700 sm:text-lg">
                    {goal}
                  </div>
                </li>
                <li className="relative border-t border-dashed border-amber-200/60 pt-6 pl-9 sm:pl-11 sm:pt-8">
                  <div className="text-base italic leading-relaxed text-zinc-600 sm:text-lg">
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
