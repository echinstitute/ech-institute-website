'use client';

import Link from 'next/link';
import {
  ArrowLeft, ExternalLink, PlayCircle, ChevronRight,
  Zap, Layers, GitBranch, Cpu, Globe, BookOpen,
  Tag, Users, Shield, Code, Activity, Boxes, Network as NetworkIcon,
} from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { HeroRadar } from '@/components/features/HeroRadar';
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
      className="flex flex-col rounded-3xl overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-card-theme)]"
    >
      <div className="relative w-full overflow-hidden bg-[var(--background)]" style={{ aspectRatio: '16/9' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${firstVideoId}/hqdefault.jpg`}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-5 py-4 bg-[var(--surface-card-muted)]/50 border-t border-[var(--border-soft)]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent flex-shrink-0">
            <Icon className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm tracking-tight text-[var(--text-base)] truncate">{label}</span>
        </div>
        <ExternalLink className="h-3.5 w-3.5 text-[var(--text-soft)]" />
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
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-card-theme)] hover:border-accent/50 hover:shadow-[0_0_40px_rgba(var(--accent-brand-rgb),0.1)] transition-all duration-500"
    >
      <div className="relative w-full overflow-hidden bg-[var(--background)]" style={{ aspectRatio: '16/9' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${firstVideoId}/hqdefault.jpg`}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        
        {/* Year badge */}
        <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-accent text-black shadow-lg">
          {year}
        </div>

        {/* Hover bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-accent" />
      </div>

      <div className="flex items-center justify-between gap-2 px-6 py-4 bg-[var(--surface-card-muted)]/50 backdrop-blur-sm border-t border-[var(--border-soft)]">
        <div className="flex flex-col">
          <span className="text-lg font-black font-syne tracking-tight text-[var(--text-base)] group-hover:text-accent transition-colors leading-tight">{label}</span>
          <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[var(--text-soft)]">EXPLORE SERIES</span>
        </div>
        <ExternalLink className="h-4 w-4 text-[var(--text-soft)] group-hover:text-accent transition-all duration-500 group-hover:translate-x-1" />
      </div>
    </a>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────

const PEEP_SPHERES = [
  { icon: Boxes,    title: 'Core EIPs',     desc: 'Deep-dives into consensus rules and protocol behavior changes.' },
  { icon: GitBranch, title: 'Upgrade Path',   desc: 'Tracing the technical journey toward upcoming network upgrades.' },
  { icon: Zap,      title: 'Abstraction',    desc: 'Exploring Account Abstraction and user experience standards.' },
  { icon: NetworkIcon,  title: 'PeerDAS',        desc: 'Scaling data availability to support Ethereum\'s rollup-centric future.' },
];

export default function PEEPanEIPPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-16 lg:pt-24 text-[var(--text-base)]">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="py-8 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — text */}
            <div className="flex flex-col gap-5">
              <div className="mb-1">
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70 text-[var(--text-soft)]"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Media Hub
                </Link>
              </div>
              <div className="proplay-icon-container px-3 py-1 self-start gap-2">
                <BookOpen className="w-4" />
                Educational Video Series · 150+ Episodes
              </div>
              <h1 className="global-hero-title">PEEPanEIP</h1>
              <p className="global-body-lg max-w-xl">
                An educational video series on Ethereum Improvement Proposals and key features of upcoming
                network upgrades — built for client teams, researchers, and the broader ecosystem.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={peep.playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary gap-3"
                >
                  <PlayCircle className="h-4 w-4" /> Watch Full Playlist
                </a>
              </div>
            </div>

            {/* Right — Interactive Radar */}
            <HeroRadar spheres={PEEP_SPHERES} />

          </div>
        </div>
      </section>


      {/* ── Why PEEPanEIP ── */}
      <PodcastOriginSection
        title="Why PEEPanEIP started"
        intro="Built for client teams and contributors who need signal before the next All Core Devs call — not a slide deck, but plain-language protocol context from the authors themselves."
        purpose={<>The series was created to give client teams a <strong className="font-semibold text-[var(--text-base)]">dedicated overview of new EIPs</strong> ahead of All Core Dev (ACD) meetings so proposals aren&apos;t first heard only on the call. By engaging directly with EIP authors — including Vitalik Buterin on EIP-7706 (multidimensional gas) — PEEPanEIP ensures the broader community understands the &ldquo;why&rdquo; behind foundational protocol changes.</>}
        goal={<>Raise visibility for <strong className="font-semibold text-[var(--text-base)]">&quot;Last Call&quot; and &quot;Draft&quot;</strong> work by translating it into ELI5-style explanations — making it easier to align on upgrades and build consensus across the ecosystem. From EIP-1559 and The Merge to EIP-7702 (account abstraction), PEEPanEIP has been present at every major inflection point in Ethereum&apos;s history.</>}
        closing={<>Every episode pairs a concrete EIP or ERC with <span className="not-italic font-medium text-[var(--text-base)]">guest experts</span> — core devs, researchers, and implementers — so you can trace how ideas travel from draft to mainnet. The series is distinguished by its direct engagement with EIP authors, providing the first public discussion of many foundational protocol changes.</>}
      />

      {/* ── Latest Videos ── */}
      <PodcastSeriesYoutubeSection
        playlistId={peep.playlistId}
        browseUrl={peep.playlistUrl}
        title="Latest PEEPanEIP videos"
        description={<>Newest entries from the official <a href={peep.playlistUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:underline">PEEPanEIP YouTube playlist</a> (feed order: most recent first).</>}
        limit={5}
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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">By Network Upgrade</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter leading-[1.1] text-[var(--text-base)] font-syne mb-4">
              Upgrade <em className="not-italic text-accent">Series</em>
            </h2>
            <p className="text-base text-[var(--text-soft)] font-medium max-w-xl">
              Deep-dives by Ethereum upgrade — each card shows the first episode thumbnail. Select a fork to watch the full cycle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upgradePlaylists.map((pl) => (
            <UpgradeCard key={pl.label} label={pl.label} year={pl.year} href={pl.href} firstVideoId={pl.firstVideoId} />
          ))}
        </div>
      </section>

      {/* ── Focus Areas (Matching Image) ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">FOCUS AREAS</span>
        </div>

        <div className="flex flex-col mb-12">
          <h2 className="text-5xl sm:text-7xl font-black lowercase text-accent font-syne tracking-tighter">
            explore
          </h2>
          <p className="text-sm mt-4 text-[rgba(251,251,251,0.5)] font-medium max-w-xl">
            Every episode maps to one of four core protocol dimensions — from low-level EVM mechanics to market design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {themes.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-6 rounded-[32px] border border-[var(--border-soft)] p-8 md:p-10 transition-all duration-500 hover:border-accent/40 group hover:bg-[var(--surface-card-muted)] bg-[var(--surface-card-theme)] shadow-sm hover:shadow-xl"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10"
              >
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl md:text-4xl font-black text-[var(--text-base)] font-syne tracking-tighter group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-[var(--text-soft)] font-medium">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
