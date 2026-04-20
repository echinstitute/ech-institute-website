'use client';

import Link from 'next/link';
import { ArrowLeft, Code } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const epd = PODCAST_SERIES_PLAYLISTS.epd;

export default function EPDPage() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-24">
      <div className="border-b border-black bg-[#F5A51D]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 md:px-8">
          <Link
            href="/podcast"
            className="mb-4 inline-flex items-center gap-2 text-black transition-colors hover:text-[#F5A51D] global-body"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" /> Back to Podcast
          </Link>
          <div className="max-w-4xl">
            <h1 className="global-hero-title mb-3">Ecosystem Project Demo (EPD)</h1>
            <p className="global-hero-subtitle text-black">
              Live demos of open-source tools and public goods that strengthen Ethereum, from
              ZK and governance to observability and funding, hosted by the people who ship
              them.
            </p>
          </div>
        </div>
      </div>

      <PodcastOriginSection
        title="Why EPD started"
        intro="Built for developers, funders, and teams who want to see real software in motion—not a landing page, but how a project is structured, onboarded, and used."
        purpose={
          <>
            EPD was created to{' '}
            <strong className="font-semibold text-zinc-900">
              showcase decentralized tools with public utility
            </strong>
            , with a steady focus on developer experience (DevEx) whether a project is early,
            maturing, or already widely depended on.
          </>
        }
        goal={
          <>
            Help builders{' '}
            <strong className="font-semibold text-zinc-900">
              discover what exists across the Web3 stack
            </strong>
            ZK, governance, grants, metrics, and more by hearing maintainers walk through
            architecture, workflows, and adoption in their own words.
          </>
        }
        closing={
          <>
            Each session is a{' '}
            <span className="not-italic font-medium text-zinc-800">
              numbered, project-centered demo
            </span>{' '}
            (e.g. EPD #26, #22): one team, one story, so you can compare approaches to
            shipping public goods in a single sitting.
          </>
        }
      />

      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mx-auto mb-6 max-w-4xl">
          <section className="rounded-xl border border-black bg-[#F5A51D]/80 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5A51D]">
                <Code className="global-icon-yellow h-6 w-6" />
              </span>
              <h2 className="global-section-title mb-0">Format</h2>
            </div>
            <p className="global-body text-black">
              Expect screen shares, architecture sketches, and Q&amp;A-style pacing—designed
              so you can decide what to try, fork, or fund next.
            </p>
          </section>
        </div>
      </div> */}

      <PodcastSeriesYoutubeSection
        playlistId={epd.playlistId}
        browseUrl={epd.playlistUrl}
        title="Latest EPD demos"
        description={
          <>
            From the official{' '}
            <a
              href={epd.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-800 underline-offset-2 hover:underline"
            >
              Ecosystem Project Demo YouTube playlist
            </a>
            .
          </>
        }
        limit={4}
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <section>
            <h2 className="global-section-title mb-3 sm:mb-4">Themes we explore</h2>
            <p className="global-body text-black mb-4">
              EPD shows how real public goods connect to protocol direction—connecting scaling,
              resilience, credible neutrality, and the Road to 2026 through hands-on demos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Scaling &amp; enterprise Ethereum</h3>
                <p className="global-body text-sm text-black">
                  Demos of tools that make complex systems usable in production—so enterprises can
                  adopt Ethereum with less friction.
                </p>
              </div>

              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Resilience &amp; protocol health</h3>
                <p className="global-body text-sm text-black">
                  Public goods that improve reliability: observability, safe operations, and
                  workflows that help ecosystems recover faster.
                </p>
              </div>

              <div className="global-card p-6">
                <h3 className="global-card-title mb-2">Credible neutrality</h3>
                <p className="global-body text-sm text-black">
                  Maintainer-led demos focus on what ships, what tradeoffs exist, and how teams
                  validate value—without marketing noise.
                </p>
              </div>

              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Road to 2026: what comes next</h3>
                <p className="global-body text-sm text-black">
                  Hear project roadmaps in context, so builders and funders can plan what to try,
                  fork, and support on the path to 2026.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

