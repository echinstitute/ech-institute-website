'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const peep = PODCAST_SERIES_PLAYLISTS.peepaneip;

export default function PEEPanEIPPage() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-24">
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8">
          <Link
            href="/podcast"
            className="mb-6 inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-amber-600 font-medium text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" /> Back to Media Hub
          </Link>
          <div className="max-w-4xl">
            <h1 className="global-hero-title mb-4 lg:text-5xl">PEEPanEIP</h1>
            <p className="global-hero-subtitle text-gray-600 max-w-3xl">
              Protocol deep-dives and technical coordination. A series built for client teams 
              and researchers to align on Ethereum Improvement Proposals (EIPs).
            </p>
          </div>
        </div>
      </div>

      <PodcastOriginSection
        title="Why PEEPanEIP started"
        intro="Built for client teams and contributors who need signal before the next All Core Devs call—not a slide deck, but plain-language protocol context."
        purpose={
          <>
            The series was created to give client teams a{' '}
            <strong className="font-semibold text-zinc-900">
              dedicated overview of new EIPs
            </strong>{' '}
            ahead of All Core Dev (ACD) meetings so proposals aren&apos;t first heard only on
            the call.
          </>
        }
        goal={
          <>
            Raise visibility for{' '}
            <strong className="font-semibold text-zinc-900">
              &quot;Last Call&quot; and &quot;Draft&quot;
            </strong>{' '}
            work by translating it into ELI5 style explanations making it easier to align on
            upgrades and build consensus across the ecosystem.
          </>
        }
        closing={
          <>
            Every episode pairs a concrete EIP or ERC with{' '}
            <span className="not-italic font-medium text-zinc-800">guest experts</span>
            core devs, researchers, and implementers so you can trace how ideas travel from
            draft to mainnet.
          </>
        }
      />

      <PodcastSeriesYoutubeSection
        playlistId={peep.playlistId}
        browseUrl={peep.playlistUrl}
        title="Latest PEEPanEIP videos"
        description={
          <>
            Newest entries from the official{' '}
            <a
              href={peep.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-800 underline-offset-2 hover:underline"
            >
              PEEPanEIP YouTube playlist
            </a>{' '}
            (feed order: most recent first).
          </>
        }
        limit={4}
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <section>
            <h2 className="global-section-title mb-3 sm:mb-4">Themes we explore</h2>
            <p className="global-body text-gray-600 mb-4">
              PEEPanEIP turns EIP work into upgrade context—so you can connect what&apos;s changing to
              enterprise execution, resilience, credible neutrality, and the Road to 2026.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Scaling &amp; enterprise Ethereum</h3>
                <p className="global-body text-sm text-gray-600">
                  EIP deep-dives that explain how scaling and infrastructure choices show up for clients,
                  builders, and enterprise users.
                </p>
              </div>

              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Resilience &amp; protocol health</h3>
                <p className="global-body text-sm text-gray-600">
                  Signal for safer execution: how proposals affect stability, validation, and the health of
                  the protocol under real load.
                </p>
              </div>

              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Credible neutrality</h3>
                <p className="global-body text-sm text-gray-600">
                  Plain language explanations so you can evaluate tradeoffs without hype, and align with
                  what authors and implementers are actually proposing.
                </p>
              </div>

              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Road to 2026: what comes next</h3>
                <p className="global-body text-sm text-gray-600">
                  Track draft to mainnet work in context, so teams can plan upgrades with confidence as the
                  cadence moves toward 2026.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
