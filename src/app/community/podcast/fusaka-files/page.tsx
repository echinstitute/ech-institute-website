'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Cpu, Network as NetworkIcon, Key, Zap, Globe, Radio, ExternalLink } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const fusaka = PODCAST_SERIES_PLAYLISTS.fusakaFiles;

const eipHighlights = [
  {
    id: 'EIP-7594',
    name: 'PeerDAS',
    icon: NetworkIcon,
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

import { HeroRadar } from '@/components/features/HeroRadar';

const FUSAKA_SPHERES = [
  { icon: NetworkIcon,  title: 'Cadence',        desc: 'Exploring the shift toward a predictable biannual engineering delivery model.' },
  { icon: Shield,   title: 'Resilience',     desc: 'Proposals that ensure the network remains stable and secure at scale.' },
  { icon: Globe,    title: 'Neutrality',     desc: 'Aligning diverse stakeholders through credible neutral coordination.' },
  { icon: Cpu,      title: 'Strategy',       desc: 'The technical roadmap toward Verkle Trees and beyond.' },
];

export default function FusakaFilesPage() {
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
              <div className="proplay-icon-container px-3 py-1 self-start gap-2">
                <Radio className="w-4" />
                Limited Series
              </div>
              <h1 className="global-hero-title">
                The <em className="not-italic text-[var(--accent-brand)]">Fusaka</em> Files
              </h1>
              <p className="global-body-lg">
                A high-production limited series exploring Ethereum's strategic shift toward predictable, biannual engineering delivery — produced in collaboration with the Enterprise Ethereum Alliance.
              </p>
            </div>

            {/* Right — Interactive Radar */}
            <HeroRadar spheres={FUSAKA_SPHERES} />

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
            <strong className="font-semibold text-[var(--text-base)]">
              Ethereum's shift toward a predictable biannual engineering model
            </strong>{' '}
            and to situate the Fusaka upgrade inside that narrative — why cadence matters for clients, researchers, and coordination across the network.
          </>
        }
        goal={
          <>
            Bridge{' '}
            <strong className="font-semibold text-[var(--text-base)]">
              protocol milestones and roadmap choices
            </strong>{' '}
            to ecosystem readiness: scaling, resilience, credible neutrality, and how those themes land for builders and enterprises — not only for spec readers.
          </>
        }
        closing={
          <>
            Episodes bring in{' '}
            <span className="not-italic font-medium text-[var(--text-base)]">
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
        limit={5}
        description={
          <>
            From the official{' '}
            <a
              href={fusaka.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F5A51D' }}
              className="font-bold hover:underline inline-flex items-center gap-1"
            >
              The Fusaka Files YouTube playlist
              <ExternalLink className="h-3.5 w-3.5 text-[#F5A51D]" />
            </a>
            .
          </>
        }
        sideRailLabel="More from the playlist"
        featuredBadge="Latest"
      />

      {/* ── Key Technical Topics ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-accent" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent">EIP Deep Dives</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[var(--text-base)]">
          Key Technical <em className="not-italic text-accent">Topics</em>
        </h2>
        <p className="text-sm mb-10 max-w-none text-[var(--text-base)]/50">
          Each episode of The Fusaka Files ties directly to a foundational EIP shaping the next era of Ethereum. Here's what's covered in depth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {eipHighlights.map(({ id, name, icon: Icon, summary }) => (
            <div
              key={id}
              className="rounded-2xl border border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:border-accent/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.10)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-accent">{id}</span>
                  <p className="text-lg font-bold text-[var(--text-base)] leading-tight">{name}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-base)]/50">{summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Themes ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-accent" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent">Focus Areas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[var(--text-base)]">
          Themes we <em className="not-italic text-accent">explore</em>
        </h2>
        <p className="text-sm mb-8 max-w-none text-[var(--text-base)]/50">
          Connecting Fusaka changes to enterprise execution, resilience, and credible neutrality on the road to 2026.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {themes.map(({ icon: Icon, title, desc }) => (
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
    </main>
  );
}
