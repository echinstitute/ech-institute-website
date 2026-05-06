'use client';

import Link from 'next/link';
import {
  ArrowLeft, ExternalLink, PlayCircle, ChevronRight,
  Zap, Layers, GitBranch, Cpu, Globe, BookOpen,
  Tag, Users, Shield, Code, Activity, Boxes,
} from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const peep = PODCAST_SERIES_PLAYLISTS.peepaneip;

// ── Inline gradient (avoids DARK_OVERLAY const dependency) ──────────────
const overlayStyle = {
  backgroundImage: 'linear-gradient(to top, rgba(21,20,25,0.92) 0%, rgba(21,20,25,0.35) 55%, transparent 100%)',
} as const;

// ── Topic playlists — all ECH Institute PEEPanEIP YouTube playlists ─────
const resourcePlaylists = [
  // ── NEW: Core EIP / Interface EIP / EVM / MEV ──
  { label: 'Core EIPs',             href: 'https://www.youtube.com/playlist?list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F', icon: Boxes,    firstVideoId: 'ome47qtvuU0' },
  { label: 'Interface EIPs',        href: 'https://www.youtube.com/playlist?list=PL4cwHXAawZxqXee9EMQDIEz2CslTnsW0K', icon: Code,     firstVideoId: 'pCu4WuMaAPo' },
  { label: 'EVM (Ethereum VM)',      href: 'https://www.youtube.com/playlist?list=PL4cwHXAawZxpnKFDl1KzGOKqwux5JaLlv', icon: Cpu,      firstVideoId: 'CswFnsZTXmI' },
  { label: 'MEV & Fee Markets',      href: 'https://www.youtube.com/playlist?list=PL4cwHXAawZxqzFC6fGsHi79lyXJlPCtUl', icon: Activity, firstVideoId: 'CswFnsZTXmI' },
  // ── Existing topic playlists ──
  { label: 'Rollup Proposals (RIPs)',   href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqzFC6fGsHi79lyXJlPCtUl', icon: Layers,    firstVideoId: 'CswFnsZTXmI' },
  { label: 'Account Abstraction',       href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpUmj2UjD4BtfgC1nAAyv3p', icon: Zap,       firstVideoId: 'o0K10L6u0l0' },
  { label: 'Verge & Statelessness',     href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpby7LszzOnyuAyQl8WLLvh', icon: Globe,     firstVideoId: 'Vl9su1ZOi-Q' },
  { label: 'Beacon Chain Improvements', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxoEw29YmqJtNoFaENUUAREn', icon: Cpu,       firstVideoId: 'rnAWvLQ4uag' },
  { label: 'ERCs & Standards',          href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqXee9EMQDIEz2CslTnsW0K', icon: Tag,       firstVideoId: 'pCu4WuMaAPo' },
  { label: 'Privacy & ZK-EIPs',         href: 'https://youtube.com/playlist?list=PL4cwHXAawZxoliK_lEjyks7ogHsjp2uEE', icon: Shield,    firstVideoId: 'MuBxmqDyw_c' },
  { label: 'Governance & EIP-1',        href: 'https://youtube.com/playlist?list=PL4cwHXAawZxrR3Z0I0eubH2fx_4Rej794', icon: Users,     firstVideoId: 'E5oZqplTsKM' },
  { label: 'Ecosystem Demos',           href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpUmj2UjD4BtfgC1nAAyv3p', icon: PlayCircle, firstVideoId: 'o0K10L6u0l0' },
  { label: 'Non-EIP Technicals',        href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpby7LszzOnyuAyQl8WLLvh', icon: Globe,     firstVideoId: 'Vl9su1ZOi-Q' },
];

const upgradePlaylists = [
  { label: 'Pectra',        year: '2025', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqOHV_F40AJbzcl8b6tG8xw', firstVideoId: 'ome47qtvuU0', icon: Zap },
  { label: 'Dencun',        year: '2024', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpnKFDl1KzGOKqwux5JaLlv', firstVideoId: 'CswFnsZTXmI', icon: Layers },
  { label: 'Shapella',      year: '2023', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpok0smGmq-dFGVHQzW84a2', firstVideoId: 'pCu4WuMaAPo', icon: GitBranch },
  { label: 'The Merge',     year: '2022', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqoLxXqZqT4hcYhoHoP6w12', firstVideoId: 'rnAWvLQ4uag', icon: Cpu },
  { label: 'Arrow Glacier', year: '2021', href: 'https://www.youtube.com/watch?v=qy81t7bZ-4Q',                            firstVideoId: 'qy81t7bZ-4Q', icon: Globe },
  { label: 'Altair',        year: '2021', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxoliK_lEjyks7ogHsjp2uEE', firstVideoId: 'Vl9su1ZOi-Q', icon: BookOpen },
  { label: 'London',        year: '2021', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxppsQYazgJ3EWWWjY2vNxVp', firstVideoId: 'E5oZqplTsKM', icon: Tag },
  { label: 'Berlin',        year: '2021', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxrR3Z0I0eubH2fx_4Rej794', firstVideoId: 'MuBxmqDyw_c', icon: Users },
];

// ── Updated themes: Core EIP / Interface EIP / EVM / MEV ────────────────
const themes = [
  {
    icon: Boxes,
    title: 'Core EIPs',
    body: 'In-depth walkthroughs of Core Ethereum Improvement Proposals — the changes that affect consensus rules, block structure, and protocol behavior across all client implementations.',
  },
  {
    icon: Code,
    title: 'Interface EIPs',
    body: 'Exploring Interface EIPs (ERCs) that standardize how wallets, dApps, and contracts communicate — from ERC-20 and ERC-721 to the latest token and ABI standards.',
  },
  {
    icon: Cpu,
    title: 'EVM (Ethereum VM)',
    body: 'Deep-dives into EVM changes: new opcodes, gas repricing, EOF (Ethereum Object Format), and low-level execution semantics that shape how every smart contract runs.',
  },
  {
    icon: Activity,
    title: 'MEV & Fee Markets',
    body: 'Unpacking Maximal Extractable Value, PBS (Proposer-Builder Separation), blob fee markets (EIP-4844), and how economic incentives shape block production and protocol design.',
  },
];

// ── Card components ───────────────────────────────────────────────────────

function PlaylistCard({
  label, href, firstVideoId, icon: Icon,
}: { label: string; href: string; firstVideoId: string; icon: React.ElementType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-card-theme)] hover:border-[var(--accent-brand)]/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.12)] transition-all duration-300"
    >
      {/* Thumbnail — full visible */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${firstVideoId}/hqdefault.jpg`}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />
        {/* Subtle bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{ backgroundImage: 'linear-gradient(to top, rgba(21,20,25,0.55) 0%, transparent 100%)' }}
        />
      </div>

      {/* Footer row — icon + label left, browse right */}
      <div className="flex items-center justify-between gap-2 px-4 py-3 bg-[var(--surface-card-muted)]/80 border-t border-[var(--border-soft)]">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-1.5 rounded-lg bg-[var(--accent-brand)]/10 border border-[var(--accent-brand)]/20 text-[var(--accent-brand)] group-hover:bg-[var(--accent-brand)] group-hover:text-[#151419] transition-all duration-300 flex-shrink-0">
            <Icon className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-[13px] leading-tight text-[var(--text-base)] truncate">{label}</span>
        </div>
        <div className="flex items-center gap-1 text-[var(--accent-brand)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          <span className="text-[10px] font-bold">BROWSE</span>
          <ChevronRight className="h-3 w-3" />
        </div>
      </div>
    </a>
  );
}

function UpgradeCard({
  label, year, href, firstVideoId,
}: { label: string; year: string; href: string; firstVideoId: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-card-theme)] hover:border-[var(--accent-brand)]/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.12)] transition-all duration-300"
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${firstVideoId}/hqdefault.jpg`}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />
        {/* Inline gradient — no const dependency */}
        <div className="absolute inset-0" style={overlayStyle} />
        {/* Year badge */}
        <div className="absolute top-2.5 right-2.5 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-[var(--accent-brand)] text-[#151419]">
          {year}
        </div>
        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5">
          <span className="font-bold text-[13px] text-[var(--text-base)]">{label}</span>
        </div>
        {/* Accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-[var(--accent-brand)]" />
      </div>
      <div className="flex items-center justify-between gap-2 px-3 py-2 bg-[var(--surface-card-muted)]">
        <span className="text-xs font-semibold text-[var(--text-soft)]">Watch playlist</span>
        <ExternalLink className="h-3.5 w-3.5 group-hover:text-[var(--accent-brand)] transition-colors text-[var(--text-soft)]" />
      </div>
    </a>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────

export default function PEEPanEIPPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-24" style={{ background: '#151419', color: '#FBFBFB' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner items-center">
          {/* Left — text */}
          <div>
            <div className="mb-6">
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70 text-[var(--text-soft)]"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Media Hub
              </Link>
            </div>
            <div className="page-hero-tag">
              <span className="page-hero-dot" />
              Educational Video Series · 150+ Episodes
            </div>
            <h1 className="page-hero-title">PEEPanEIP</h1>
            <p className="page-hero-desc mb-8">
              An educational video series on Ethereum Improvement Proposals and key features of upcoming
              network upgrades — built for client teams, researchers, and the broader ecosystem.
            </p>
            <a
              href={peep.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-brand)] px-5 py-3 text-sm font-bold text-[#151419] transition hover:bg-[var(--accent-brand)]/90 shrink-0"
            >
              <PlayCircle className="h-4 w-4" /> Watch Full Playlist
            </a>
          </div>

          {/* Right — animated rings */}
          <div className="hidden lg:flex justify-center items-center w-full max-w-lg mx-auto pl-8">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[var(--border-soft)] opacity-20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[var(--border-soft)] opacity-40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
              <div className="absolute inset-8 rounded-full border border-[var(--border-soft)] opacity-60 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
              <div className="relative z-10 w-32 h-32 rounded-full bg-[var(--surface-card-theme)] border border-[var(--border-soft)] flex items-center justify-center shadow-[0_0_40px_rgba(245,165,29,0.15)] group transition-all duration-500 hover:border-[var(--accent-brand)] hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-brand)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BookOpen className="w-12 h-12 text-[var(--accent-brand)] relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why PEEPanEIP ── */}
      <PodcastOriginSection
        title="Why PEEPanEIP started"
        intro="Built for client teams and contributors who need signal before the next All Core Devs call — not a slide deck, but plain-language protocol context from the authors themselves."
        purpose={<>The series was created to give client teams a <strong className="font-semibold text-[#FBFBFB]">dedicated overview of new EIPs</strong> ahead of All Core Dev (ACD) meetings so proposals aren&apos;t first heard only on the call. By engaging directly with EIP authors — including Vitalik Buterin on EIP-7706 (multidimensional gas) — PEEPanEIP ensures the broader community understands the &ldquo;why&rdquo; behind foundational protocol changes.</>}
        goal={<>Raise visibility for <strong className="font-semibold text-[#FBFBFB]">&quot;Last Call&quot; and &quot;Draft&quot;</strong> work by translating it into ELI5-style explanations — making it easier to align on upgrades and build consensus across the ecosystem. From EIP-1559 and The Merge to EIP-7702 (account abstraction), PEEPanEIP has been present at every major inflection point in Ethereum&apos;s history.</>}
        closing={<>Every episode pairs a concrete EIP or ERC with <span className="not-italic font-medium text-[#FBFBFB]">guest experts</span> — core devs, researchers, and implementers — so you can trace how ideas travel from draft to mainnet. The series is distinguished by its direct engagement with EIP authors, providing the first public discussion of many foundational protocol changes.</>}
      />

      {/* ── Latest Videos ── */}
      <PodcastSeriesYoutubeSection
        playlistId={peep.playlistId}
        browseUrl={peep.playlistUrl}
        title="Latest PEEPanEIP videos"
        description={<>Newest entries from the official <a href={peep.playlistUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#F5A51D] hover:underline">PEEPanEIP YouTube playlist</a> (feed order: most recent first).</>}
        limit={4}
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

      {/* ── Playlist Resources ── */}
      <section className="proplay-section-dense">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 rounded-full bg-[var(--accent-brand)]" />
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[var(--accent-brand)]">Browse by Topic</span>
          </div>
          <h2 className="brand-section-title mb-2">
            Playlist <em>Resources</em>
          </h2>
          <p className="global-body mb-10 max-w-2xl">
            All ECH Institute PEEPanEIP playlists — browse by topic. Each card links directly to the YouTube playlist.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {resourcePlaylists.map((pl) => (
              <PlaylistCard
                key={pl.label}
                label={pl.label}
                href={pl.href}
                firstVideoId={pl.firstVideoId}
                icon={pl.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Network Upgrade Playlists ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full" style={{ background: '#F5A51D' }} />
          <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: '#F5A51D' }}>By Network Upgrade</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2" style={{ color: '#FBFBFB' }}>
          Upgrade <em className="not-italic" style={{ color: '#F5A51D' }}>Series</em>
        </h2>
        <p className="text-sm mb-8 max-w-xl" style={{ color: 'rgba(251,251,251,0.50)' }}>
          Deep-dives by Ethereum upgrade — each card shows the first episode thumbnail. Select a fork to watch the full cycle.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {upgradePlaylists.map((pl) => (
            <UpgradeCard key={pl.label} label={pl.label} year={pl.year} href={pl.href} firstVideoId={pl.firstVideoId} />
          ))}
        </div>
      </section>

      {/* ── Themes ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full" style={{ background: '#F5A51D' }} />
          <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: '#F5A51D' }}>Focus Areas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2" style={{ color: '#FBFBFB' }}>
          Themes we <em className="not-italic" style={{ color: '#F5A51D' }}>explore</em>
        </h2>
        <p className="text-sm mb-8 max-w-xl" style={{ color: 'rgba(251,251,251,0.50)' }}>
          Every episode maps to one of four core protocol dimensions — from low-level EVM mechanics to market design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {themes.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border p-5 transition-all duration-300 hover:border-[#F5A51D]/50 hover:shadow-[0_0_24px_rgba(245,165,29,0.06)]"
              style={{ borderColor: '#262626', background: '#1B1B1E' }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border mt-0.5"
                style={{ background: 'rgba(245,165,29,0.10)', borderColor: 'rgba(245,165,29,0.30)' }}
              >
                <Icon className="h-5 w-5" style={{ color: '#F5A51D' }} />
              </div>
              <div>
                <h3 className="font-bold text-[15px] mb-1.5" style={{ color: '#FBFBFB' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,251,251,0.55)' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
