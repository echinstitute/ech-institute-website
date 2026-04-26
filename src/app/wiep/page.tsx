'use client';

import Link from 'next/link';
import { ArrowLeft, Users, BookOpen, Heart, Star, GraduationCap, Globe, Shield, Cpu } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const wiepPl = PODCAST_SERIES_PLAYLISTS.wiep;
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

const themes = [
  {
    icon: Cpu,
    title: 'Scaling & Enterprise Ethereum',
    desc: 'Build the contributor capacity that helps ship improvements enterprises can rely on as Ethereum scales toward a rollup-centric future.',
  },
  {
    icon: Shield,
    title: 'Resilience & Protocol Health',
    desc: 'Mentorship and safer on-ramps improve review quality — supporting healthier protocol upgrades and operations through diverse perspectives.',
  },
  {
    icon: Star,
    title: 'Credible Neutrality',
    desc: 'Focused learning without hype so participants can evaluate tradeoffs and contribute with aligned incentives — not as a side channel, but as core contributors.',
  },
  {
    icon: Globe,
    title: 'Road to 2026: What Comes Next',
    desc: 'Use study group structure to follow roadmap-heavy work in context, preparing the next wave of builders for Verkle Trees, Statelessness, and beyond.',
  },
];

const leaders = [
  {
    name: 'La Donna Higgins',
    role: 'WiEP Co-Lead',
    quote: 'Quiet work, consistency, and supportive networks are the foundations of sustainable protocol contribution.',
  },
  {
    name: 'Simona Serban',
    role: 'WiEP Co-Lead',
    quote: 'Building the sociological infrastructure around the technical code is as critical as the code itself.',
  },
];

export default function WiEPPage() {
  return (
    <main className="min-h-screen bg-[#151419] pt-16 lg:pt-24">
      {/* ── Hero ── */}
      <div className="border-b border-[#262626]" style={{ background: 'linear-gradient(135deg, #1B1B1E 0%, #151419 60%, #150015 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-8">
          <Link
            href="/podcast"
            className="mb-8 inline-flex items-center gap-2 text-[#FBFBFB]/50 transition-colors hover:text-[#F5A51D] text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" /> Back to Media Hub
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 rounded-full bg-[#F5A51D]" />
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Community Program</span>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-[#FBFBFB]">
              Women in Ethereum <em className="not-italic text-[#F5A51D]">Protocol</em>
            </h1>
            <p className="text-lg sm:text-xl text-[#FBFBFB]/60 max-w-3xl leading-relaxed">
              Community, study groups, and mentorship-aligned support for women contributing to Ethereum's core protocol — alongside the broader core dev and EPF ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WIEP_EMAIL}
                className="inline-flex items-center gap-2 rounded-xl bg-[#F5A51D] px-5 py-2.5 text-sm font-bold text-[#151419] transition hover:bg-[#F5A51D]/90"
              >
                Get in Touch
              </a>
              <a
                href={WIEP_YOUTUBE_VIDEOS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#262626] bg-[#1B1B1E] px-5 py-2.5 text-sm font-bold text-[#FBFBFB] transition hover:border-[#F5A51D]/50"
              >
                @wiepteam on YouTube
              </a>
              <a
                href={WIEP_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#262626] bg-[#1B1B1E] px-5 py-2.5 text-sm font-bold text-[#FBFBFB] transition hover:border-[#F5A51D]/50"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Origin Story ── */}
      <PodcastOriginSection
        title="Why WiEP started"
        intro="Created so women interested in core protocol work don't have to navigate consensus specs and client codebases alone. Peer support, structured learning, and safer on-ramps matter as much as raw documentation."
        purpose={
          <>
            <strong className="font-semibold text-[#FBFBFB]">
              Women in Ethereum Protocol (WiEP)
            </strong>{' '}
            exists to support women who want to contribute to Ethereum's core protocol with community backing, security-minded guidance, and pathways to grow as contributors — not as a side channel, but as part of how the protocol recruits and retains talent.
          </>
        }
        goal={
          <>
            <strong className="font-semibold text-[#FBFBFB]">
              Widen who participates in protocol research and implementation
            </strong>
            , reduce isolation for underrepresented contributors, and make roadmap-heavy topics approachable through study groups aligned with programs like the Ethereum Protocol Fellowship (EPF) Study Group.
          </>
        }
        closing={
          <>
            Session recordings and highlights are published in the{' '}
            <span className="not-italic font-medium text-[#FBFBFB]">
              Women Powering Web3
            </span>{' '}
            playlist on the ECH Institute channel, with additional updates on{' '}
            <span className="not-italic font-medium text-[#FBFBFB]">@wiepteam</span>. Use the playlist section below to jump straight into recent talks and study-group content.
          </>
        }
      />

      {/* ── Latest Videos ── */}
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
              className="font-bold text-[#F5A51D] hover:underline"
            >
              Women Powering Web3 YouTube playlist
            </a>{' '}
            (WiEP / ECH Institute). For more WiEP updates, follow{' '}
            <a
              href={WIEP_YOUTUBE_VIDEOS}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#F5A51D] hover:underline"
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

      {/* ── Sociological Infrastructure ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-[#F5A51D]" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Voices of WiEP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[#FBFBFB]">
          Sociological <em className="not-italic text-[#F5A51D]">Infrastructure</em>
        </h2>
        <p className="text-sm mb-10 max-w-2xl text-[#FBFBFB]/50">
          The sociological infrastructure around the technical code is as critical as the code itself — ensuring a sustainable pipeline of contributors and preventing the centralization of protocol knowledge within a small, homogeneous group.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leaders.map(({ name, role, quote }) => (
            <div
              key={name}
              className="rounded-2xl border border-[#262626] bg-[#1B1B1E] p-6 md:p-8 transition-all duration-300 hover:border-[#F5A51D]/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.08)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5A51D]/10 border border-[#F5A51D]/20">
                  <Star className="h-5 w-5 text-[#F5A51D]" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#FBFBFB]">{name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#F5A51D]">{role}</p>
                </div>
              </div>
              <blockquote className="text-sm italic leading-relaxed text-[#FBFBFB]/60 border-l-2 border-[#F5A51D]/40 pl-4">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* ── Study Groups ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-4 pb-12 md:pb-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-[#F5A51D]" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Structured Learning</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[#FBFBFB]">
          Study <em className="not-italic text-[#F5A51D]">Groups</em>
        </h2>
        <p className="text-sm mb-8 max-w-2xl text-[#FBFBFB]/50">
          WiEP study groups partner with the Ethereum Protocol Fellowship (EPF) Study Group model — structured, part-time, and designed to lower the barrier to entry for developers aiming at core protocol roles.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {studyGroupCards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#262626] bg-[#1B1B1E] p-6 flex gap-4 transition-all duration-300 hover:border-[#F5A51D]/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5A51D]/10 mt-0.5">
                <Icon className="h-5 w-5 text-[#F5A51D]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#FBFBFB] mb-1">{title}</p>
                <p className="text-sm text-[#FBFBFB]/50 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Themes ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-[#F5A51D]" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Focus Areas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[#FBFBFB]">
          Themes we <em className="not-italic text-[#F5A51D]">explore</em>
        </h2>
        <p className="text-sm mb-8 max-w-xl text-[#FBFBFB]/50">
          WiEP connects people, learning, and core protocol work — linking scaling, resilience, and credible neutrality through structured community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {themes.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#262626] bg-[#1B1B1E] p-6 flex gap-4 transition-all duration-300 hover:border-[#F5A51D]/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5A51D]/10 mt-0.5">
                <Icon className="h-5 w-5 text-[#F5A51D]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#FBFBFB] mb-1">{title}</p>
                <p className="text-sm text-[#FBFBFB]/50 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
        <div className="rounded-2xl border border-[#262626] bg-[#1B1B1E] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-5 rounded-full bg-[#F5A51D]" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Join WiEP</span>
            </div>
            <p className="text-xl font-extrabold text-[#FBFBFB] mb-1">Ready to contribute?</p>
            <p className="text-sm text-[#FBFBFB]/50 max-w-md">
              WiEP is active on Discord, X (Twitter), and email. For study group schedules and how to join, reach out to the WiEP team directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={WIEP_EMAIL}
              className="inline-flex items-center gap-2 rounded-xl bg-[#F5A51D] px-5 py-2.5 text-sm font-bold text-[#151419] transition hover:bg-[#F5A51D]/90"
            >
              Email WiEP Team
            </a>
            <a
              href={wiepPl.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#262626] bg-transparent px-5 py-2.5 text-sm font-bold text-[#FBFBFB] transition hover:border-[#F5A51D]/50"
            >
              Women Powering Web3
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
