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
        <div className="relative border-y border-[var(--border-soft)] bg-[var(--surface-card-theme)] px-5 py-6 sm:border-x sm:px-8 md:px-10 md:py-10">
          <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
            <header className="lg:col-span-4 xl:col-span-3">
              <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-[var(--text-base)] sm:text-4xl md:text-[2.35rem]">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-soft)]">{intro}</p>
            </header>

            <div className="relative lg:col-span-8 xl:col-span-9">
              <div className="absolute bottom-2 left-[11px] top-2 w-px bg-[var(--accent-brand)] sm:left-[13px]" aria-hidden />
              <ul className="space-y-6 sm:space-y-8">
                <li className="relative pl-9 sm:pl-11">
                  <span
                    className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--accent-brand)] bg-[var(--surface-page)] sm:left-0.5 sm:h-7 sm:w-7"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-brand)]" />
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[var(--accent-brand)]" aria-hidden />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-brand)]">
                      Purpose
                    </span>
                  </div>
                  <div className="mt-3 text-base leading-relaxed text-[var(--text-base)] sm:text-lg">
                    {purpose}
                  </div>
                </li>
                <li className="relative pl-9 sm:pl-11">
                  <span
                    className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--accent-brand)] bg-[var(--surface-card-muted)] sm:left-0.5 sm:h-7 sm:w-7"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-brand)]" />
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-brand)]">
                      Goal
                    </span>
                  </div>
                  <div className="mt-3 text-base leading-relaxed text-[var(--text-base)] sm:text-lg">
                    {goal}
                  </div>
                </li>
                <li className="relative border-t border-dashed border-[var(--border-soft)] pt-6 pl-9 sm:pl-11 sm:pt-8">
                  <div className="text-base italic leading-relaxed text-[var(--text-soft)] sm:text-lg">
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
