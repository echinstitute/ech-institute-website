'use client';

import Link from 'next/link';
import { ArrowLeft, Users, BookOpen, Heart, GraduationCap, ExternalLink } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const wiepPl = PODCAST_SERIES_PLAYLISTS.wiep;
const WIEP_PLAYLIST_2_ID = 'PL4cwHXAawZxpbEZhQYgOW8mbQDbLoyQDT';
const WIEP_PLAYLIST_2_URL = 'https://www.youtube.com/playlist?list=PL4cwHXAawZxpbEZhQYgOW8mbQDbLoyQDT';
const WIEP_YOUTUBE_VIDEOS = 'https://www.youtube.com/@wiepteam/videos';
const WIEP_GITHUB = 'https://github.com/wiepteam';
const WIEP_EMAIL = 'mailto:wiepteam@gmail.com';

const studyGroupCards = [
  {
    icon: BookOpen,
    title: 'Curriculum',
    desc: "Covers Ethereum's full stack and roadmap: proof of stake, MEV, scaling, Verkle trees, and related core topics — structured for part-time contributors.",
  },
  {
    icon: Users,
    title: 'Sessions',
    desc: 'Led by current core developers and researchers. Free and part-time; eligibility and scheduling are communicated by the WiEP team via Discord and email.',
  },
  {
    icon: GraduationCap,
    title: 'EPF Alignment',
    desc: 'Study groups partner with the Ethereum Protocol Fellowship (EPF) Study Group model — designed to lower the barrier to entry for developers aiming at core protocol roles.',
  },
  {
    icon: Heart,
    title: 'Mentorship',
    desc: 'Peer support from existing contributors. WiEP ensures no one has to navigate consensus specs or client codebases alone.',
  },
];

import { HeroRadar } from '@/components/features/HeroRadar';

const WIEP_SPHERES = [
  { icon: BookOpen, title: 'Curriculum', desc: 'Structuring protocol learning from consensus rules to client implementation.' },
  { icon: Heart, title: 'Mentorship', desc: 'Peer support and guidance from established core protocol contributors.' },
  { icon: GraduationCap, title: 'EPF Alignment', desc: 'Partnering with the Ethereum Protocol Fellowship for core role readiness.' },
  { icon: Users, title: 'Community', desc: 'Building a supportive network for women protocol developers worldwide.' },
];

export default function WiEPPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-16 lg:pt-24 text-[var(--text-base)]">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-8 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div className="flex flex-col gap-5">
              <div className="mb-1">
                <Link href="/podcast"
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70 text-[var(--text-soft)]">
                  <ArrowLeft className="h-4 w-4" /> Back to Media Hub
                </Link>
              </div>
              <div className="proplay-icon-container px-3 py-1 self-start !text-[#FBFBFB]">
                <GraduationCap className="w-4 mx-2 !text-[#FBFBFB]" />
                Community Program
              </div>
              <h1 className="global-hero-title">
                Women in Ethereum <em className="not-italic text-[var(--accent-brand)]">Protocol</em>
              </h1>
              <p className="global-body-lg">
                Community, study groups, and mentorship-driven support for women contributing to Ethereum’s core protocol and broader core development ecosystem, in association with the Ethereum Foundation.              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={WIEP_EMAIL}
                  className="btn btn-primary"
                >
                  Get in Touch
                </a>
                <a
                  href={WIEP_YOUTUBE_VIDEOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  @wiepteam on YouTube
                </a>
              </div>
            </div>

            {/* Right — Interactive Radar */}
            <HeroRadar spheres={WIEP_SPHERES} />

          </div>
        </div>
      </section>


      {/* ── Origin Story ── */}
      <PodcastOriginSection
        title="Why WiEP started"
        intro="WiEP was created to make Ethereum core protocol contribution more accessible and less intimidating for women entering the ecosystem. Beyond documentation, the program offers structured learning, mentorship, peer support, and approachable on-ramps that help contributors confidently navigate Ethereum’s protocol and governance ecosystem together."
        purpose={
          <>
            WiEP was created to make Ethereum core protocol contribution more accessible, approachable, and less intimidating for women entering the ecosystem. Learning consensus specs, client implementations, and Ethereum governance can feel overwhelming alone - especially for newcomers without direct guidance or community support.
          </>
        }
        goal={
          <>
            WiEP provides structured learning, peer support, mentorship, and approachable entry points so contributors can confidently explore Ethereum’s protocol layer step by step. Beyond documentation, the program focuses on human connection, collaborative learning, and creating a supportive environment where participants can ask questions, grow together, and meaningfully participate in Ethereum’s open-source ecosystem.
          </>
        }
        closing={
          <>
            In addition, our Women Powering Web3 spotlight series is published on the ECH Institute YouTube channel, highlighting stories, experiences, and insights from women across the Ethereum ecosystem, with additional updates on{' '}
            <a
              href={WIEP_YOUTUBE_VIDEOS}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent-brand)] hover:underline inline-flex items-center gap-0.5"
            >
              @wiepteam
              <ExternalLink className="h-3 w-3" />
            </a>
            . Explore the playlist section below to watch recent episodes, interviews, and study-group content.
          </>
        }
      />

      {/* ── Latest Videos ── */}
      <PodcastSeriesYoutubeSection
        playlistId={wiepPl.playlistId}
        browseUrl={wiepPl.playlistUrl}
        title="Women Powering Web3 latest videos"
        limit={5}
        description={
          <>
            Newest videos from the{' '}
            <a
              href={wiepPl.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F5A51D' }}
              className="font-bold hover:underline inline-flex items-center gap-1"
            >
              Women Powering Web3 YouTube playlist
              <ExternalLink className="h-3.5 w-3.5 text-[#F5A51D]" />
            </a>{' '}
            (WiEP / ECH Institute). For more WiEP updates, follow{' '}
            <a
              href={WIEP_YOUTUBE_VIDEOS}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F5A51D' }}
              className="font-bold hover:underline inline-flex items-center gap-1"
            >
              @wiepteam
              <ExternalLink className="h-3.5 w-3.5 text-[#F5A51D]" />
            </a>
            .
          </>
        }
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

      {/* ── WiEP Playlist 2 Videos ── */}
      <PodcastSeriesYoutubeSection
        playlistId={WIEP_PLAYLIST_2_ID}
        browseUrl={WIEP_PLAYLIST_2_URL}
        title="Women in Ethereum Protocol latest videos"
        limit={5}
        description={
          <>
            Newest videos from the second{' '}
            <a
              href={WIEP_PLAYLIST_2_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F5A51D' }}
              className="font-bold hover:underline inline-flex items-center gap-1"
            >
              Women in Ethereum Protocol YouTube playlist
              <ExternalLink className="h-3.5 w-3.5 text-[#F5A51D]" />
            </a>{' '}
            (WiEP / ECH Institute).
          </>
        }
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

      {/* ── Study Groups ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-4 pb-12 md:pb-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-accent" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent">Structured Learning</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[var(--text-base)]">
          Study <em className="not-italic text-accent">Groups</em>
        </h2>
        <p className="text-sm mb-8 max-w-none text-[var(--text-base)]/50">
          WiEP study groups partner with the Ethereum Protocol Fellowship (EPF) Study Group model — structured, part-time, and designed to lower the barrier to entry for developers aiming at core protocol roles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studyGroupCards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border p-6 flex gap-4 transition-all duration-300 hover:border-accent/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 mt-0.5">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--text-base)] mb-1">{title}</p>
                <p className="text-sm text-[var(--text-base)]/50 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
        <div className="rounded-2xl border border-border p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-5 rounded-full bg-accent" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent">Join WiEP</span>
            </div>
            <p className="text-xl font-extrabold text-[var(--text-base)] mb-1">Ready to contribute?</p>
            <p className="text-sm text-[var(--text-base)]/50">
              WiEP is active on Discord, X (Twitter), and email. For study group schedules and how to join, reach out to the WiEP team directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://discord.gg/Fn8qhnJ8re"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-black transition hover:bg-accent/90"
            >
              Join Discord
            </a>
            <a
              href={WIEP_EMAIL}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-transparent px-5 py-2.5 text-sm font-bold text-[var(--text-base)] transition hover:bg-[var(--border-soft)]/20"
            >
              Email WiEP Team
            </a>
            <a
              href={wiepPl.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F5A51D' }}
              className="inline-flex items-center gap-2 rounded-xl border border-[#F5A51D]/30 bg-transparent px-5 py-2.5 text-sm font-bold transition hover:border-[#F5A51D] hover:bg-[#F5A51D]/5"
            >
              Women Powering Web3
              <ExternalLink className="h-3.5 w-3.5 text-[#F5A51D]" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
