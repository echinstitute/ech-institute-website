'use client';

import Link from 'next/link';
import { ArrowLeft, Server, ShieldCheck, Search, Code, Zap, Globe, Terminal } from 'lucide-react';
import { PodcastOriginSection } from '@/components/features/PodcastOriginSection';
import { PodcastSeriesYoutubeSection } from '@/components/features/PodcastSeriesYoutubeSection';
import { PODCAST_SERIES_PLAYLISTS } from '@/lib/podcast-youtube';

const epd = PODCAST_SERIES_PLAYLISTS.epd;

const featuredProjects = [
  {
    name: 'Dappnode',
    icon: Server,
    focus: 'Home Staking & Node Accessibility',
    summary: 'Dappnode makes it possible for everyday users to run full Ethereum nodes at home. By lowering the technical barrier, it strengthens decentralization and reduces reliance on centralized infrastructure providers.',
    tag: 'Infrastructure',
  },
  {
    name: 'Sourcify',
    icon: ShieldCheck,
    focus: 'Open-Source Contract Verification',
    summary: 'Sourcify provides a transparent, decentralized method for verifying smart contract source code. By enabling open verification, it prevents scams and dramatically improves the security posture of the entire Ethereum ecosystem.',
    tag: 'Security',
  },
];

const themes = [
  {
    icon: Globe,
    title: 'Scaling & Enterprise Ethereum',
    desc: 'Demos of tools that make complex systems usable in production — so enterprises can adopt Ethereum with less friction.',
  },
  {
    icon: ShieldCheck,
    title: 'Resilience & Protocol Health',
    desc: 'Public goods that improve reliability: observability, safe operations, and workflows that help ecosystems recover faster.',
  },
  {
    icon: Search,
    title: 'Credible Neutrality',
    desc: 'Maintainer-led demos focus on what ships, what tradeoffs exist, and how teams validate value — without marketing noise.',
  },
  {
    icon: Zap,
    title: 'Road to 2026: What Comes Next',
    desc: 'Hear project roadmaps in context, so builders and funders can plan what to try, fork, and support on the path to 2026.',
  },
];

import { HeroRadar } from '@/components/features/HeroRadar';

const EPD_SPHERES = [
  { icon: Code,      title: 'Tooling',        desc: 'Discovering open-source developer tools that simplify the Web3 stack.' },
  { icon: Server,    title: 'Infrastructure', desc: 'Home staking, nodes, and low-level protocol health solutions.' },
  { icon: ShieldCheck, title: 'Security',     desc: 'Contract verification and security frameworks for resilient protocols.' },
  { icon: Search,    title: 'Governance',     desc: 'Tools for decentralized coordination and transparent proposal tracking.' },
];

export default function EPDPage() {
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
                <Code className="w-4" />
                Ongoing Series
              </div>
              <h1 className="global-hero-title">
                Ecosystem <em className="not-italic text-[var(--accent-brand)]">Project</em> Demo
              </h1>
              <p className="global-body-lg max-w-xl">
                Live demos of open-source tools and public goods strengthening Ethereum — from ZK and governance to observability and funding, hosted by the builders who ship them.
              </p>
            </div>

            {/* Right — Interactive Radar */}
            <HeroRadar spheres={EPD_SPHERES} />

          </div>
        </div>
      </section>


      {/* ── Origin Story ── */}
      <PodcastOriginSection
        title="Why EPD started"
        intro="Built for developers, funders, and teams who want to see real software in motion — not a landing page, but how a project is structured, onboarded, and used."
        purpose={
          <>
            EPD was created to{' '}
            <strong className="font-semibold text-[var(--text-base)]">
              showcase decentralized tools with public utility
            </strong>
            , with a steady focus on developer experience (DevEx) — whether a project is early, maturing, or already widely depended on.
          </>
        }
        goal={
          <>
            Help builders{' '}
            <strong className="font-semibold text-[var(--text-base)]">
              discover what exists across the Web3 stack
            </strong>{' '}
            — ZK, governance, grants, metrics, and more — by hearing maintainers walk through architecture, workflows, and adoption in their own words.
          </>
        }
        closing={
          <>
            Each session is a{' '}
            <span className="not-italic font-medium text-[var(--text-base)]">
              numbered, project-centered demo
            </span>{' '}
            (e.g. EPD #26, #22): one team, one story, so you can compare approaches to shipping public goods in a single sitting.
          </>
        }
      />

      {/* ── Latest Videos ── */}
      <PodcastSeriesYoutubeSection
        playlistId={epd.playlistId}
        browseUrl={epd.playlistUrl}
        title="Latest EPD demos"
        limit={5}
        description={
          <>
            From the official{' '}
            <a
              href={epd.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent hover:underline"
            >
              Ecosystem Project Demo YouTube playlist
            </a>
            .
          </>
        }
        sideRailLabel="More demos"
        featuredBadge="Latest"
      />

      {/* ── Featured Projects ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-accent" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent">Discovery Layer</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[var(--text-base)]">
          Featured <em className="not-italic text-accent">Projects</em>
        </h2>
        <p className="text-sm mb-10 max-w-2xl text-[var(--text-base)]/50">
          EPD creates a discovery layer for the Ethereum ecosystem. Here are two projects the series has helped surface — tools that strengthen decentralization and security at a foundational level.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map(({ name, icon: Icon, focus, summary, tag }) => (
            <div
              key={name}
              className="rounded-2xl border border-border bg-surface-card-theme p-6 md:p-8 flex flex-col gap-5 transition-all duration-300 hover:border-accent/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.10)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-accent/10 text-accent border border-accent/20 mb-1">{tag}</span>
                  <p className="text-xl font-extrabold text-[var(--text-base)]">{name}</p>
                  <p className="text-xs font-bold text-[var(--text-base)]/40 uppercase tracking-wider mt-0.5">{focus}</p>
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
        <p className="text-sm mb-8 max-w-xl text-[var(--text-base)]/50">
          EPD shows how real public goods connect to protocol direction — through hands-on demos, not slides.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {themes.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface-card-theme p-6 flex gap-4 transition-all duration-300 hover:border-accent/40"
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
