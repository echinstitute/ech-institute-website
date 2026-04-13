'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const fusaka = PODCAST_SERIES_PLAYLISTS.fusakaFiles;

export default function FusakaFilesPage() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-24">
      <div className="border-b border-black bg-[#f5a51d]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8">
          <Link
            href="/podcast"
            className="mb-6 inline-flex items-center gap-2 text-black transition-all hover:translate-x-[-4px] font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" /> Back to Media Hub
          </Link>
          <div className="max-w-4xl">
            <h1 className="global-hero-title mb-4 lg:text-5xl">The Fusaka Files</h1>
            <p className="global-hero-subtitle text-black max-w-3xl">
              Exploring Ethereum&apos;s move toward predictable, biannual engineering delivery. 
              Understanding what the Fusaka milestone means for protocol roadmaps and global scaling.
            </p>
          </div>
        </div>
      </div>

      <PodcastOriginSection
        title="Why The Fusaka Files started"
        intro="Made for anyone who needs the upgrade story in context—not only changelog bullets, but how predictable shipping and the Fusaka era connect strategy, infra, and real world use."
        purpose={
          <>
            The series was created to explain{' '}
            <strong className="font-bold text-black">
              Ethereum&apos;s shift toward a predictable biannual engineering model
            </strong>{' '}
            and to situate the Fusaka upgrade inside that narrative why cadence matters for
            clients, researchers, and coordination across the network.
          </>
        }
        goal={
          <>
            Bridge{' '}
            <strong className="font-bold text-black">
              protocol milestones and roadmap choices
            </strong>{' '}
            to ecosystem readiness: scaling, resilience, credible neutrality, and how those
            themes land for builders, enterprises, and long horizon planning not only for spec
            readers.
          </>
        }
        closing={
          <>
            Episodes bring in{' '}
            <span className="not-italic font-bold text-black">
              core contributors and ecosystem voices
            </span>{' '}
            so you can follow how Fusaka era work ties to PeerDAS, BPO, MEV related
            resilience, and the road beyond still in plain language you can share outside the
            implementers&apos; chat.
          </>
        }
      />

      <PodcastSeriesYoutubeSection
        playlistId={fusaka.playlistId}
        browseUrl={fusaka.playlistUrl}
        title="Latest Fusaka Files videos"
        description={
          <>
            From the official{' '}
            <a
              href={fusaka.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#f5a51d] underline decoration-2 underline-offset-4 hover:text-black"
            >
              The Fusaka Files YouTube playlist
            </a>
          </>
        }
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
              The Fusaka Files connect the upgrade story to the Road to 2026 so builders, operators, and
              enterprises can track what changes next, and why it matters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Scaling & enterprise Ethereum</h3>
                <p className="global-body text-sm text-black">
                  PeerDAS, BPO, and the roadmap cadence that makes engineering delivery more predictable.
                </p>
              </div>
              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Resilience & protocol health</h3>
                <p className="global-body text-sm text-black">
                  MEV related proposals, safer execution patterns, and signals that the network is holding up under
                  pressure.
                </p>
              </div>
              <div className="global-card p-6">
                <h3 className="global-card-title mb-2">Credible neutrality</h3>
                <p className="global-body text-sm text-black">
                  How upgrades are coordinated for users and builders—so the incentives stay aligned as the chain
                  evolves.
                </p>
              </div>
              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Road to 2026: what comes next</h3>
                <p className="global-body text-sm text-black">
                  Fusaka is a milestone that helps the ecosystem move forward with confidence—linking today’s work
                  to what enterprises and operators should plan for in 2026.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
