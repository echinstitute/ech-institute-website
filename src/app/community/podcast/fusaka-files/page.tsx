'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Cpu, Network, Key, Zap, Globe, Radio } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const fusaka = PODCAST_SERIES_PLAYLISTS.fusakaFiles;

const eipHighlights = [
  {
    id: 'EIP-7594',
    name: 'PeerDAS',
    icon: Network,
    summary: 'Peer Data Availability Sampling scales the data capacity of the Ethereum network to support more blobs without exponentially increasing hardware requirements for nodes — a cornerstone for cheaper L2 transactions.',
  },
  {
    id: 'EIP-7825',
    name: 'Gas Limit Cap',
    icon: Shield,
    summary: 'Introduces an upper bound on gas per transaction to mitigate worst-case execution scenarios and ensure continued stability and predictability of the execution layer under load.',
  },
  {
    id: 'EIP-7917',
    name: 'Deterministic Proposer Lookahead',
    icon: Cpu,
    summary: 'Improves how lookahead logic affects validator operations, increasing the predictability of the consensus layer for block proposers and enabling more stable MEV-related workflows.',
  },
  {
    id: 'EIP-7951',
    name: 'secp256r1 Support',
    icon: Key,
    summary: 'Integrates the "R flavor" cryptographic curve enabling native support for secure enclaves and passkeys in mobile devices and browsers — a fundamental building block for mass-market account abstraction.',
  },
];

const themes = [
  {
    icon: Zap,
    title: 'Scaling & Enterprise Ethereum',
    desc: 'PeerDAS, BPO, and a biannual roadmap cadence that makes engineering delivery more predictable for enterprises and institutions relying on Ethereum.',
  },
  {
    icon: Shield,
    title: 'Resilience & Protocol Health',
    desc: 'MEV-related proposals, safer execution patterns, and gas cap design that ensures the network holds up under pressure at scale.',
  },
  {
    icon: Globe,
    title: 'Credible Neutrality',
    desc: 'How Fusaka upgrades are coordinated across diverse stakeholders — so incentives stay aligned as the chain evolves toward a rollup-centric future.',
  },
  {
    icon: Cpu,
    title: 'Road to 2026: What Comes Next',
    desc: 'Fusaka is a milestone in a longer narrative. Episodes trace the path to Verkle Trees and Statelessness — helping builders and operators plan ahead.',
  },
];

export default function FusakaFilesPage() {
  return (
    <main className="min-h-screen bg-[#151419] pt-16 lg:pt-24">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner items-center">
          {/* Left — text */}
          <div>
            <div className="mb-6">
              <Link href="/podcast"
                className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70 text-[var(--text-soft)]">
                <ArrowLeft className="h-4 w-4" /> Back to Media Hub
              </Link>
            </div>
            <div className="page-hero-tag">
              <span className="page-hero-dot" />
              Limited Series
            </div>
            <h1 className="page-hero-title">
              The <em className="not-italic text-[var(--accent-brand)]">Fusaka</em> Files
            </h1>
            <p className="page-hero-desc mb-8">
              A high-production limited series exploring Ethereum's strategic shift toward predictable, biannual engineering delivery — produced in collaboration with the Enterprise Ethereum Alliance.
            </p>
          </div>

          {/* Right — Iconography */}
          <div className="hidden lg:flex justify-center items-center w-full max-w-lg mx-auto pl-8">
             <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[var(--border-soft)] opacity-20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute inset-4 rounded-full border border-[var(--border-soft)] opacity-40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
                <div className="absolute inset-8 rounded-full border border-[var(--border-soft)] opacity-60 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
                <div className="relative z-10 w-32 h-32 rounded-full bg-[var(--surface-card-theme)] border border-[var(--border-soft)] flex items-center justify-center shadow-[0_0_40px_rgba(245,165,29,0.15)] group transition-all duration-500 hover:border-[var(--accent-brand)] hover:scale-105">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-brand)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Radio className="w-12 h-12 text-[var(--accent-brand)] relative z-10" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <PodcastOriginSection
        title="Why The Fusaka Files started"
        intro="Made for anyone who needs the upgrade story in context — not only changelog bullets, but how predictable shipping and the Fusaka era connect strategy, infrastructure, and real-world enterprise use."
        purpose={
          <>
            The series was created to explain{' '}
            <strong className="font-semibold text-[#FBFBFB]">
              Ethereum's shift toward a predictable biannual engineering model
            </strong>{' '}
            and to situate the Fusaka upgrade inside that narrative — why cadence matters for clients, researchers, and coordination across the network.
          </>
        }
        goal={
          <>
            Bridge{' '}
            <strong className="font-semibold text-[#FBFBFB]">
              protocol milestones and roadmap choices
            </strong>{' '}
            to ecosystem readiness: scaling, resilience, credible neutrality, and how those themes land for builders and enterprises — not only for spec readers.
          </>
        }
        closing={
          <>
            Episodes bring in{' '}
            <span className="not-italic font-medium text-[#FBFBFB]">
              core contributors and ecosystem voices
            </span>{' '}
            so you can follow how Fusaka-era work ties to PeerDAS, BPO, MEV resilience, and the road beyond — still in plain language you can share outside the implementers' chat.
          </>
        }
      />

      {/* ── Latest Videos ── */}
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
              className="font-bold text-[#F5A51D] hover:underline"
            >
              The Fusaka Files YouTube playlist
            </a>
            .
          </>
        }
        limit={4}
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

      {/* ── Key Technical Topics ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-[#F5A51D]" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">EIP Deep Dives</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[#FBFBFB]">
          Key Technical <em className="not-italic text-[#F5A51D]">Topics</em>
        </h2>
        <p className="text-sm mb-10 max-w-2xl text-[#FBFBFB]/50">
          Each episode of The Fusaka Files ties directly to a foundational EIP shaping the next era of Ethereum. Here's what's covered in depth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {eipHighlights.map(({ id, name, icon: Icon, summary }) => (
            <div
              key={id}
              className="rounded-2xl border border-[#262626] bg-[#1B1B1E] p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#F5A51D]/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.10)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5A51D]/10 border border-[#F5A51D]/20">
                  <Icon className="h-6 w-6 text-[#F5A51D]" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F5A51D]">{id}</span>
                  <p className="text-lg font-bold text-[#FBFBFB] leading-tight">{name}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#FBFBFB]/50">{summary}</p>
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
          Connecting Fusaka changes to enterprise execution, resilience, and credible neutrality on the road to 2026.
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
    </main>
  );
}
