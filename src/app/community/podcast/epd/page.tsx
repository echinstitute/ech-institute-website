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

export default function EPDPage() {
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
              Ongoing Series
            </div>
            <h1 className="page-hero-title">
              Ecosystem <em className="not-italic text-[var(--accent-brand)]">Project</em> Demo
            </h1>
            <p className="page-hero-desc mb-8">
              Live demos of open-source tools and public goods strengthening Ethereum — from ZK and governance to observability and funding, hosted by the builders who ship them.
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
                  <Code className="w-12 h-12 text-[var(--accent-brand)] relative z-10" />
                </div>
             </div>
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
            <strong className="font-semibold text-[#FBFBFB]">
              showcase decentralized tools with public utility
            </strong>
            , with a steady focus on developer experience (DevEx) — whether a project is early, maturing, or already widely depended on.
          </>
        }
        goal={
          <>
            Help builders{' '}
            <strong className="font-semibold text-[#FBFBFB]">
              discover what exists across the Web3 stack
            </strong>{' '}
            — ZK, governance, grants, metrics, and more — by hearing maintainers walk through architecture, workflows, and adoption in their own words.
          </>
        }
        closing={
          <>
            Each session is a{' '}
            <span className="not-italic font-medium text-[#FBFBFB]">
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
        description={
          <>
            From the official{' '}
            <a
              href={epd.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#F5A51D] hover:underline"
            >
              Ecosystem Project Demo YouTube playlist
            </a>
            .
          </>
        }
        limit={4}
        sideRailLabel="More demos"
        featuredBadge="Latest"
      />

      {/* ── Featured Projects ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-[#F5A51D]" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">Discovery Layer</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[#FBFBFB]">
          Featured <em className="not-italic text-[#F5A51D]">Projects</em>
        </h2>
        <p className="text-sm mb-10 max-w-2xl text-[#FBFBFB]/50">
          EPD creates a discovery layer for the Ethereum ecosystem. Here are two projects the series has helped surface — tools that strengthen decentralization and security at a foundational level.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map(({ name, icon: Icon, focus, summary, tag }) => (
            <div
              key={name}
              className="rounded-2xl border border-[#262626] bg-[#1B1B1E] p-6 md:p-8 flex flex-col gap-5 transition-all duration-300 hover:border-[#F5A51D]/70 hover:shadow-[0_0_32px_rgba(245,165,29,0.10)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5A51D]/10 border border-[#F5A51D]/20">
                  <Icon className="h-7 w-7 text-[#F5A51D]" />
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-[#F5A51D]/10 text-[#F5A51D] border border-[#F5A51D]/20 mb-1">{tag}</span>
                  <p className="text-xl font-extrabold text-[#FBFBFB]">{name}</p>
                  <p className="text-xs font-bold text-[#FBFBFB]/40 uppercase tracking-wider mt-0.5">{focus}</p>
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
          EPD shows how real public goods connect to protocol direction — through hands-on demos, not slides.
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
