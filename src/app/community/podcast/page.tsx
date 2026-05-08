'use client';

import Link from 'next/link';
import {
  BookOpen, Radio, Code, ArrowRight, Play, Mic, FileText,
  GraduationCap, Layers, Tag, Zap, Globe, Users, Video
} from 'lucide-react';
import { PodcastRecentHighlights } from '@/components/features/PodcastRecentHighlights';

const PODCAST_LINKS = [
  { name: 'Spotify',        href: 'https://open.spotify.com/show/7dgxKMkSyy3HWtQW7OfqXA' },
  { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/ech-institute-podcast/id1620565121' },
  { name: 'Pocket Casts',   href: 'https://pocketcasts.com/podcast/ech-institute-podcast/07681030-5a48-013a-d70a-0acc26574db2' },
  { name: 'Castbox',        href: 'https://castbox.fm/channel/7004180?country=gb' },
];

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#1DB954" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
function ApplePodcastsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#A83BF2" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 2.4c5.28 0 9.6 4.32 9.6 9.6s-4.32 9.6-9.6 9.6S2.4 17.28 2.4 12 6.72 2.4 12 2.4zm0 3.6a6 6 0 0 0-6 6c0 2.76 1.92 5.16 4.56 5.88.6.12 1.2-.24 1.32-.84.12-.6-.24-1.2-.84-1.32a3.6 3.6 0 0 1 2.52-3.36.96.96 0 0 0 .72-.96V7.2a.96.96 0 0 0-1.08-.96 6 6 0 0 0-.48 0zm0 3.12a2.88 2.88 0 0 0-2.88 2.88v.24c0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2v-.24a.48.48 0 0 1 .96 0v.24c0 .12-.12.24-.24.24a.48.48 0 0 1-.48-.48v-.24a1.92 1.92 0 0 1 3.84 0v2.64a1.92 1.92 0 0 1-3.84 0 .96.96 0 1 1 1.92 0 .48.48 0 1 0 .96 0v-2.64a2.88 2.88 0 0 0-2.88-2.88z" />
    </svg>
  );
}
function PocketCastsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F43E37" aria-hidden>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2c-3.96 0-7.2-3.24-7.2-7.2S8.04 4.8 12 4.8s7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2zm0-12.48a5.28 5.28 0 0 0-5.28 5.28c0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2a2.88 2.88 0 0 1 5.76 0c0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2a5.28 5.28 0 0 0-5.28-5.28z" />
    </svg>
  );
}
function CastboxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F5A51D" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  );
}

const PODCAST_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'Spotify': SpotifyIcon,
  'Apple Podcasts': ApplePodcastsIcon,
  'Pocket Casts': PocketCastsIcon,
  'Castbox': CastboxIcon,
};

const mediaPillars = [
  {
    title: 'PEEPanEIP',
    blurb: '160+ episodes of technical deep-dives into Ethereum Improvement Proposals — including foundational shifts like EIP-1559, The Merge, EIP-7706, and EIP-7702. Direct engagement with EIP authors.',
    badge: '160+ Episodes',
    href: '/podcast/peepaneip',
    icon: BookOpen,
    accent: '#F5A51D',
  },
  {
    title: 'The Fusaka Files',
    blurb: "A high-production limited series on Ethereum's shift toward predictable biannual engineering delivery. Covers PeerDAS, secp256r1 support, and enterprise readiness for the Fusaka upgrade.",
    badge: 'Limited Series',
    href: '/podcast/fusaka-files',
    icon: Radio,
    accent: '#F5A51D',
  },
  {
    title: 'Ecosystem Project Demo (EPD)',
    blurb: 'Live demos of open-source tools and public goods — from Dappnode (home staking) to Sourcify (contract verification). 30+ episodes showcasing the infrastructure strengthening Ethereum.',
    badge: '30+ Episodes',
    href: '/podcast/epd',
    icon: Code,
    accent: '#F5A51D',
  },
  {
    title: 'Women in Ethereum Protocol (WiEP)',
    blurb: 'Study groups, mentorship, and peer support for women contributing to core protocol work. Structured learning aligned with the Ethereum Protocol Fellowship (EPF) Study Group.',
    badge: 'Study Groups',
    href: '/wiep',
    icon: GraduationCap,
    accent: '#F5A51D',
  },
  {
    title: 'ERC Series',
    blurb: 'Specialized technical series focused exclusively on Ethereum Request for Comments (ERC) standards — tracing how token standards and interfaces evolve from draft to adoption.',
    badge: 'Standards',
    href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqXee9EMQDIEz2CslTnsW0K',
    icon: Tag,
    accent: '#F5A51D',
    external: true,
  },
  {
    title: 'NFT & Privacy Series',
    blurb: 'Deep-dives into non-fungible tokens, privacy pools, and zero-knowledge application architectures — connecting specialized application layers to core protocol evolution.',
    badge: 'Specialized',
    href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpUmj2UjD4BtfgC1nAAyv3p',
    icon: Layers,
    accent: '#F5A51D',
    external: true,
  },
];

const acdCards = [
  {
    icon: Play,
    title: 'Multimedia Integration',
    desc: 'Embedded YouTube recording with timestamped chapters for easy navigation through All Core Devs meetings.',
  },
  {
    icon: FileText,
    title: 'Technical Summaries',
    desc: 'AI-generated highlights and action items for client teams — translating complex decisions into accessible recaps.',
  },
  {
    icon: Mic,
    title: 'Meeting Coordination',
    desc: 'Organizing and documenting ACDE, ACDC, and breakout rooms — providing a transparent record of the consensus-building process.',
  },
];

const stats = [
  { label: 'Videos archived', value: '837+' },
  { label: 'PEEPanEIP episodes', value: '160+' },
  { label: 'EPD demos', value: '30+' },
  { label: 'Years of coverage', value: '6+' },
];

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-[#151419] pt-16 lg:pt-24">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner items-center">
          {/* Left — text */}
          <div>
            <div className="page-hero-tag">
              <span className="page-hero-dot" />
              ECH Institute Media Hub
            </div>
            <h1 className="page-hero-title">
              ECH <br /><em className="text-[#F5A51D]">Podcast Hub</em>
            </h1>
            <p className="page-hero-desc mb-8">
              The public archive for Ethereum&apos;s protocol evolution. Organizing and publishing All Core Devs (ACD) calls, EIP deep-dives, and technical coordination summaries in one central hub.
            </p>

            {/* Listen On */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-soft)] mb-3">Also available on</p>
              <div className="flex flex-wrap gap-3">
                {PODCAST_LINKS.map(({ name, href }) => {
                  const Icon = PODCAST_ICONS[name];
                  return (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-card-theme)] px-4 py-2.5 text-sm font-bold text-[var(--text-base)] transition hover:border-[var(--accent-brand)] group"
                    >
                      {Icon && <Icon className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />}
                      {name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — Stats Mosaic Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 w-full max-w-lg mx-auto pl-8">
            {stats.map(({ label, value }, i) => (
              <div 
                key={label} 
                className={`rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-card-theme)] p-8 hover:border-[var(--accent-brand)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(245,165,29,0.15)] flex flex-col justify-center items-center text-center relative overflow-hidden group ${i % 2 !== 0 ? 'translate-y-8' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-brand)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                <p className="relative text-4xl xl:text-5xl font-extrabold text-[var(--text-base)] font-syne mb-3 group-hover:text-[var(--accent-brand)] transition-colors duration-500">{value}</p>
                <p className="relative text-[11px] font-black uppercase tracking-widest text-[var(--text-soft)] group-hover:text-[var(--text-base)] transition-colors duration-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Recent Highlights ── */}
      <PodcastRecentHighlights />

      
      {/* ── Media Pillars ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-[#F5A51D]" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Content Taxonomy</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#FBFBFB]">
            The Media <em className="not-italic text-[#F5A51D]">Pillars</em>
          </h2>
          <p className="text-sm text-[#FBFBFB]/40 max-w-sm sm:text-right">
            Six distinct series, each mapped to a specific stakeholder need.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mediaPillars.map(({ title, blurb, badge, href, icon: Icon, external }, i) => {
            const baseClass = `group relative flex flex-col rounded-3xl border border-[#262626] bg-[#1B1B1E] overflow-hidden no-underline transition-all duration-500 hover:-translate-y-1.5 hover:border-[#F5A51D]/60 hover:shadow-[0_8px_48px_rgba(245,165,29,0.14)]`;
            const inner = (
              <>
                {/* Top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5A51D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5A51D]/20 to-[#F5A51D]/5 border border-[#F5A51D]/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,165,29,0.3)]">
                      <Icon className="h-7 w-7 text-[#F5A51D]" />
                    </div>
                    <span className="inline-block px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest bg-[#F5A51D]/10 text-[#F5A51D] border border-[#F5A51D]/20 shrink-0 mt-1">
                      {badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#FBFBFB] mb-3 leading-snug group-hover:text-[#F5A51D] transition-colors duration-300">{title}</h3>
                  <p className="text-sm text-[#FBFBFB]/45 leading-relaxed flex-1">{blurb}</p>
                  <div className="mt-6 pt-5 border-t border-[#262626] flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FBFBFB]/25">
                      {external ? 'YouTube Playlist' : 'Explore Series'}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3a3a3a] text-[#878787] group-hover:text-[#F5A51D] group-hover:border-[#F5A51D]/50 group-hover:bg-[#F5A51D]/10 transition-all duration-300">
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </>
            );
            return external
              ? <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>{inner}</a>
              : <Link key={title} href={href} className={baseClass}>{inner}</Link>;
          })}
        </div>
      </section>



      {/* ── ACD Archive ── */}
      <section id="acd-archive" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16 scroll-mt-24">
        <div className="rounded-3xl border border-[#262626] bg-[#1B1B1E] overflow-hidden">

          {/* Header band */}
          <div
            className="relative px-8 py-10 md:px-12 border-b border-[#262626]"
            style={{ background: 'linear-gradient(135deg, #1B1B1E 0%, #1a1500 60%, #1B1B1E 100%)' }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[80px] opacity-[0.06] pointer-events-none" style={{ background: '#F5A51D' }} />
            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-6 rounded-full bg-[#F5A51D]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Technical Coordination</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#FBFBFB]">
                  All Core Devs <em className="not-italic text-[#F5A51D]">Archive</em>
                </h2>
                <p className="text-sm text-[#FBFBFB]/50 max-w-lg mt-2 leading-relaxed">
                  The ECH Institute organizes ACDE, ACDC, and breakout sessions — providing a transparent, permanent record of Ethereum&apos;s consensus-building process.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@echinstitute/streams"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#F5A51D] px-6 py-3 text-sm font-bold text-[#151419] transition hover:opacity-90 hover:shadow-[0_0_24px_rgba(245,165,29,0.3)] self-start sm:self-auto"
              >
                <Video className="h-4 w-4" /> Watch Archive
              </a>
            </div>
          </div>

          {/* Feature cards — divide columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
            {acdCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-8 md:p-10 flex flex-col gap-5 transition-colors duration-300 hover:bg-[#F5A51D]/[0.03]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5A51D]/20 to-[#F5A51D]/5 border border-[#F5A51D]/25 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(245,165,29,0.2)]">
                  <Icon className="h-7 w-7 text-[#F5A51D]" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-[#FBFBFB] mb-2 group-hover:text-[#F5A51D] transition-colors">{title}</p>
                  <p className="text-sm text-[#FBFBFB]/45 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stat strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#262626] border-t border-[#262626]">
            {[
              { v: '837+', l: 'Videos archived' },
              { v: '200+', l: 'ACD calls recorded' },
              { v: '6+',   l: 'Years of coverage' },
              { v: '100%', l: 'Public & open' },
            ].map(({ v, l }) => (
              <div key={l} className="flex flex-col items-center justify-center py-6 px-4 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#F5A51D] font-syne">{v}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#FBFBFB]/30 mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Banner ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
        <div
          className="rounded-2xl border border-[#262626] p-8 md:p-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1B1B1E 0%, #1a1500 100%)' }}
        >
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: '#F5A51D' }} />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 rounded-full bg-[#F5A51D]" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Our Mission</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#FBFBFB] leading-tight mb-4 max-w-2xl">
              Homesteading Ethereum through{' '}
              <em className="not-italic text-[#F5A51D]">technical transparency</em> and educational accessibility.
            </p>
            <p className="text-sm text-[#FBFBFB]/50 max-w-2xl leading-relaxed mb-6">
              The ECH Institute — a US-based 501(c)(3) non-profit — serves as the institutional home for community-led protocol support. Originally emerging as the Ethereum Cat Herders in 2019, we provide the connective tissue that allows the decentralized Ethereum protocol to thrive as a global public good.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F5A51D] px-5 py-2.5 text-sm font-bold text-[#151419] transition hover:bg-[#F5A51D]/90"
              >
                About ECH Institute <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-xl border border-[#262626] bg-transparent px-5 py-2.5 text-sm font-bold text-[#FBFBFB] transition hover:border-[#F5A51D]/50"
              >
                Support our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
