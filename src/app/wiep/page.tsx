'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Users } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const wiepPl = PODCAST_SERIES_PLAYLISTS.wiep;
const WIEP_YOUTUBE_VIDEOS = 'https://www.youtube.com/@wiepteam/videos';

export default function WiEPPage() {
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
            <h1 className="global-hero-title mb-3">Women in Ethereum Protocol (WiEP)</h1>
            <p className="global-hero-subtitle text-black">
              Community, study groups, and mentorship aligned support for women contributing to
              Ethereum&apos;s core protocol alongside the broader core dev and EPF ecosystem.
            </p>
          </div>
        </div>
      </div>

      <PodcastOriginSection
        title="Why WiEP started"
        intro="Created so women interested in core protocol work don&apos;t have to navigate consensus specs and client codebases alone. Peer support, structured learning, and safer on-ramps matter as much as raw documentation."
        purpose={
          <>
            <strong className="font-semibold text-zinc-900">
              Women in Ethereum Protocol (WiEP)
            </strong>{' '}
            exists to support women who want to contribute to Ethereum&apos;s core protocol
            with community backing, security minded guidance, and pathways to grow as
            contributors, not as a side channel, but as part of how the protocol recruits and
            retains talent.
          </>
        }
        goal={
          <>
            <strong className="font-semibold text-zinc-900">
              Widen who participates in protocol research and implementation
            </strong>
            , reduce isolation for underrepresented contributors, and make roadmap heavy
            topics approachable through study groups aligned with programs like the Ethereum
            Protocol Fellowship (EPF) Study Group, with ECH Institute helping facilitate WiEP
            sessions as part of its technical onboarding mission.
          </>
        }
        closing={
          <>
            Session recordings and highlights are published in the{' '}
            <span className="not-italic font-medium text-zinc-800">
              Women Powering Web3
            </span>{' '}
            playlist on the ECH Institute channel, with additional updates on{' '}
            <span className="not-italic font-medium text-zinc-800">@wiepteam</span>. Use the
            playlist section above to jump straight into recent talks and study-group
            content.
          </>
        }
      />

      <PodcastSeriesYoutubeSection
        playlistId={wiepPl.playlistId}
        browseUrl={wiepPl.playlistUrl}
        title="Women Powering Web3 latest videos"
        description={
          <>
            Newest videos from the{' '}
            <a
              href={wiepPl.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-800 underline-offset-2 hover:underline"
            >
              Women Powering Web3 YouTube playlist
            </a>{' '}
            (WiEP / ECH Institute). For more WiEP updates, follow{' '}
            <a
              href={WIEP_YOUTUBE_VIDEOS}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-800 underline-offset-2 hover:underline"
            >
              @wiepteam
            </a>
            .
          </>
        }
        limit={4}
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

 
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 md:px-8">
        <div className="mx-auto max-w-4xl">
          <section className="mb-6 sm:mb-8">
            <h2 className="global-section-title mb-3 sm:mb-4">Study groups</h2>
            <p className="global-body-lg mb-4 text-black">
              WiEP study groups partner with the Ethereum Protocol Fellowship (EPF) Study
              Group model structured, part-time, and designed to lower the barrier to entry
              for developers aiming at core protocol roles.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: BookOpen,
                  title: 'Curriculum',
                  desc: 'Covers Ethereum\'s stack and roadmap: proof of stake, MEV, scaling, Verkle trees, and related core topics.',
                },
                {
                  icon: Users,
                  title: 'Sessions',
                  desc: 'Led by current core developers and researchers. Free and part-time; eligibility and scheduling are communicated by the WiEP team.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="global-card p-4 sm:p-5">
                  <Icon className="global-icon-yellow mb-3 h-10 w-10" />
                  <h3 className="global-card-title mb-2">{title}</h3>
                  <p className="global-body text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="global-section-title mb-3 sm:mb-4">Themes we explore</h2>
            <p className="global-body text-black mb-4">
              WiEP connects people, learning, and core protocol work—connecting scaling,
              resilience, credible neutrality, and the Road to 2026 through structured community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Scaling &amp; enterprise Ethereum</h3>
                <p className="global-body text-sm text-black">
                  Build the contributor capacity that helps ship improvements enterprises can rely on
                  as Ethereum scales.
                </p>
              </div>

              <div className="global-card p-6">
                <h3 className="global-card-title mb-2">Resilience &amp; protocol health</h3>
                <p className="global-body text-sm text-black">
                  Mentorship and safer on-ramps improve review quality supporting healthier protocol
                  upgrades and operations.
                </p>
              </div>

              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Credible neutrality</h3>
                <p className="global-body text-sm text-black">
                  Focused learning without hype so participants can evaluate tradeoffs and contribute
                  with aligned incentives.
                </p>
              </div>

              <div className="global-card p-4 sm:p-5">
                <h3 className="global-card-title mb-2">Road to 2026: what comes next</h3>
                <p className="global-body text-sm text-black">
                  Use study group structure to follow roadmap heavy work in context, preparing the
                  next wave of builders for 2026.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <section>
            <h2 className="global-section-title mb-3 sm:mb-4">Community &amp; contact</h2>
            <div className="global-card p-4 sm:p-5 md:p-6">
              <p className="global-body mb-4">
                WiEP is active on Discord, X (Twitter), and email. For study group schedules
                and how to join, reach out to the WiEP team.
              </p>
              <ul className="global-body space-y-2 text-black">
                <li>Email: wiepteam@gmail.com</li>
                <li>
                  Playlist:{' '}
                  <a
                    href={wiepPl.playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#F5A51D] hover:underline"
                  >
                    Women Powering Web3 (YouTube)
                  </a>
                </li>
                <li>
                  WiEP channel:{' '}
                  <a
                    href={WIEP_YOUTUBE_VIDEOS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#F5A51D] hover:underline"
                  >
                    youtube.com/@wiepteam
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div> */}
    </main>
  );
}

