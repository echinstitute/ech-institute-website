'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, PlayCircle, ChevronRight, Zap, Layers, GitBranch, Cpu, Globe, BookOpen, Tag, Users, Award } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const peep = PODCAST_SERIES_PLAYLISTS.peepaneip;

// First known video ID from each topic playlist — used as thumbnail
const resourcePlaylists = [
  { label: 'Rollup Proposals (RIPs)',   href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqzFC6fGsHi79lyXJlPCtUl', icon: Layers,  firstVideoId: 'CswFnsZTXmI' },
  { label: 'Non-EIP Content',           href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpby7LszzOnyuAyQl8WLLvh', icon: Globe,   firstVideoId: 'Vl9su1ZOi-Q' },
  { label: 'Beacon Chain Improvements', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxoEw29YmqJtNoFaENUUAREn', icon: Cpu,    firstVideoId: 'rnAWvLQ4uag' },
  { label: 'ERCs',                      href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqXee9EMQDIEz2CslTnsW0K', icon: Tag,    firstVideoId: 'pCu4WuMaAPo' },
  { label: 'NFTs',                      href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpUmj2UjD4BtfgC1nAAyv3p', icon: Award,  firstVideoId: 'o0K10L6u0l0' },
];

const upgradePlaylists = [
  { label: 'Pectra',        year: '2025', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqOHV_F40AJbzcl8b6tG8xw', firstVideoId: 'ome47qtvuU0', icon: Zap },
  { label: 'Dencun',        year: '2024', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpnKFDl1KzGOKqwux5JaLlv', firstVideoId: 'CswFnsZTXmI', icon: Layers },
  { label: 'Shapella',      year: '2023', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxpok0smGmq-dFGVHQzW84a2', firstVideoId: 'pCu4WuMaAPo', icon: GitBranch },
  { label: 'The Merge',     year: '2022', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxqoLxXqZqT4hcYhoHoP6w12', firstVideoId: 'rnAWvLQ4uag', icon: Cpu },
  { label: 'Arrow Glacier', year: '2021', href: 'https://www.youtube.com/watch?v=qy81t7bZ-4Q', firstVideoId: 'qy81t7bZ-4Q', icon: Globe },
  { label: 'Altair',        year: '2021', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxoliK_lEjyks7ogHsjp2uEE', firstVideoId: 'Vl9su1ZOi-Q', icon: BookOpen },
  { label: 'London',        year: '2021', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxppsQYazgJ3EWWWjY2vNxVp', firstVideoId: 'E5oZqplTsKM', icon: Tag },
  { label: 'Berlin',        year: '2021', href: 'https://youtube.com/playlist?list=PL4cwHXAawZxrR3Z0I0eubH2fx_4Rej794', firstVideoId: 'MuBxmqDyw_c', icon: Users },
];

// inline gradient overlay — immune to any CSS class-name selector overrides
const DARK_OVERLAY = { backgroundImage: 'linear-gradient(to top, rgba(21,20,25,0.95) 0%, rgba(21,20,25,0.3) 60%, transparent 100%)' } as const;

function PlaylistCard({ label, href, firstVideoId }: { label: string; href: string; firstVideoId: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#262626] bg-[#1B1B1E] hover:border-[#F5A51D]/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.12)] transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${firstVideoId}/hqdefault.jpg`}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />
        {/* Inline gradient — NOT affected by any Tailwind class override */}
        <div className="absolute inset-0" style={DARK_OVERLAY} />
        {/* Play button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div style={{ background: '#F5A51D' }} className="rounded-full p-3 shadow-xl">
            <PlayCircle className="h-6 w-6" style={{ color: '#151419' }} />
          </div>
        </div>
        {/* Label inside card over the thumbnail */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="font-bold text-[13px] leading-snug" style={{ color: '#FBFBFB' }}>{label}</span>
        </div>
      </div>
      {/* Footer row */}
      <div className="flex items-center justify-between gap-2 px-3.5 py-2.5" style={{ background: '#1B1B1E' }}>
        <span className="text-xs font-semibold" style={{ color: '#878787' }}>YouTube Playlist</span>
        <ChevronRight className="h-4 w-4 transition-colors duration-200 group-hover:text-[#F5A51D]" style={{ color: '#878787' }} />
      </div>
    </a>
  );
}

function UpgradeCard({ label, year, href, firstVideoId }: { label: string; year: string; href: string; firstVideoId: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#262626] bg-[#1B1B1E] hover:border-[#F5A51D]/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.12)] transition-all duration-300">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${firstVideoId}/hqdefault.jpg`}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0" style={DARK_OVERLAY} />
        {/* Year badge */}
        <div className="absolute top-2.5 right-2.5 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
          style={{ background: '#F5A51D', color: '#151419' }}>
          {year}
        </div>
        {/* Hover play */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div style={{ background: '#F5A51D' }} className="rounded-full p-2.5 shadow-xl">
            <PlayCircle className="h-5 w-5" style={{ color: '#151419' }} />
          </div>
        </div>
        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5">
          <span className="font-bold text-[13px]" style={{ color: '#FBFBFB' }}>{label}</span>
        </div>
        {/* Accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          style={{ background: '#F5A51D' }} />
      </div>
      <div className="flex items-center justify-between gap-2 px-3 py-2" style={{ background: '#1B1B1E' }}>
        <span className="text-xs font-semibold" style={{ color: '#878787' }}>Watch playlist</span>
        <ExternalLink className="h-3.5 w-3.5 group-hover:text-[#F5A51D] transition-colors" style={{ color: '#878787' }} />
      </div>
    </a>
  );
}

export default function PEEPanEIPPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-24" style={{ background: '#151419', color: '#FBFBFB' }}>

      {/* ── Hero ── */}
      <div style={{ background: '#F5A51D', borderBottom: '1px solid #262626' }}>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-8">
          <Link href="/podcast"
            className="mb-6 inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: '#151419' }}>
            <ArrowLeft className="h-4 w-4" /> Back to Media Hub
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
            <div className="flex-1">
              <div className="mb-3 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.25em]"
                style={{ color: 'rgba(21,20,25,0.55)' }}>
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: 'rgba(21,20,25,0.55)' }} />
                Educational Video Series · 150+ Episodes
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tighter mb-4"
                style={{ color: '#151419' }}>
                PEEPanEIP
              </h1>
              <p className="text-base sm:text-lg font-medium max-w-2xl leading-relaxed"
                style={{ color: 'rgba(21,20,25,0.70)' }}>
                An educational video series on Ethereum Improvement Proposals and key features of upcoming network upgrades — built for client teams, researchers, and the broader ecosystem.
              </p>
            </div>
            <a href={peep.playlistUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-80 shrink-0"
              style={{ background: '#151419', color: '#FBFBFB' }}>
              <PlayCircle className="h-4 w-4" /> Watch Full Playlist
            </a>
          </div>
        </div>
      </div>

      {/* ── Why PEEPanEIP ── */}
      <PodcastOriginSection
        title="Why PEEPanEIP started"
        intro="Built for client teams and contributors who need signal before the next All Core Devs call — not a slide deck, but plain-language protocol context from the authors themselves."
        purpose={<>The series was created to give client teams a <strong className="font-semibold text-[#FBFBFB]">dedicated overview of new EIPs</strong> ahead of All Core Dev (ACD) meetings so proposals aren&apos;t first heard only on the call. By engaging directly with EIP authors — including Vitalik Buterin on EIP-7706 (multidimensional gas) — PEEPanEIP ensures the broader community understands the &ldquo;why&rdquo; behind foundational protocol changes.</>}
        goal={<>Raise visibility for <strong className="font-semibold text-[#FBFBFB]">&quot;Last Call&quot; and &quot;Draft&quot;</strong> work by translating it into ELI5-style explanations — making it easier to align on upgrades and build consensus across the ecosystem. From EIP-1559 and The Merge to EIP-7702 (account abstraction), PEEPanEIP has been present at every major inflection point in Ethereum&apos;s history.</>}
        closing={<>Every episode pairs a concrete EIP or ERC with <span className="not-italic font-medium text-[#FBFBFB]">guest experts</span> — core devs, researchers, and implementers — so you can trace how ideas travel from draft to mainnet. The series is distinguished by its direct engagement with EIP authors, providing the first public discussion of many foundational protocol changes.</>}
      />

      {/* ── Latest Videos — identical to other podcast sub-pages ── */}
      <PodcastSeriesYoutubeSection
        playlistId={peep.playlistId}
        browseUrl={peep.playlistUrl}
        title="Latest PEEPanEIP videos"
        description={<>Newest entries from the official <a href={peep.playlistUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#F5A51D] hover:underline">PEEPanEIP YouTube playlist</a> (feed order: most recent first).</>}
        limit={4}
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

      {/* ── Resources + Embedded Playlist ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full" style={{ background: '#F5A51D' }} />
          <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: '#F5A51D' }}>Browse by Topic</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2" style={{ color: '#FBFBFB' }}>
          Playlist <em className="not-italic" style={{ color: '#F5A51D' }}>Resources</em>
        </h2>
        <p className="text-sm mb-8 max-w-xl" style={{ color: 'rgba(251,251,251,0.50)' }}>
          Browse the full library by topic — each card shows the first video&apos;s thumbnail and links directly to the YouTube playlist.
        </p>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left — topic cards 2-col grid */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 mb-2 border-b border-dashed border-[#262626]">
              {resourcePlaylists.map((pl) => (
                <PlaylistCard key={pl.label} label={pl.label} href={pl.href} firstVideoId={pl.firstVideoId} />
              ))}
            </div>
          </div>

          {/* Right — embedded playlist */}
          <div className="xl:w-[480px] shrink-0 flex flex-col gap-4">
            <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: '#FBFBFB' }}>
              <PlayCircle className="h-4 w-4" style={{ color: '#F5A51D' }} /> Full Playlist
            </h3>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#262626', background: '#1B1B1E' }}>
              <div className="h-[2px]" style={{ backgroundImage: 'linear-gradient(to right, transparent, #F5A51D, transparent)' }} />
              <div style={{ aspectRatio: '16/9' }}>
                <iframe width="100%" height="100%"
                  src="https://www.youtube.com/embed/videoseries?si=i7c_6KUkemo4CmL0&list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F"
                  title="PEEPanEIP Full Playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen className="w-full h-full border-0" />
              </div>
            </div>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
          Connecting EIP changes to enterprise execution, resilience, and credible neutrality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Layers, title: 'Scaling & Enterprise Ethereum', body: 'EIP deep-dives explaining how scaling and infrastructure choices show up for clients, builders, and enterprise users.' },
            { icon: Cpu,    title: 'Resilience & Protocol Health',  body: 'Signal for safer execution: how proposals affect stability, validation, and the health of the protocol under real load.' },
            { icon: Globe,  title: 'Credible Neutrality',           body: 'Plain language explanations so you can evaluate tradeoffs without hype, aligned with what authors actually propose.' },
            { icon: Zap,    title: 'Road to 2026',                  body: 'Track draft-to-mainnet work in context, so teams can plan upgrades with confidence as the cadence accelerates.' },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 rounded-2xl border p-5 transition-all duration-300 hover:border-[#F5A51D]/50"
              style={{ borderColor: '#262626', background: '#1B1B1E' }}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                style={{ background: 'rgba(245,165,29,0.10)', borderColor: 'rgba(245,165,29,0.30)' }}>
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
