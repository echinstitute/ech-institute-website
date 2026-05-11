'use client';

import {
  FileText, Search, Mic, ArrowRight, CheckCircle2, Heart,
  Calendar, GitBranch, Zap, BookOpen, GitMerge, Layers
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';
import { HeroRadar } from '@/components/features/HeroRadar';

// ─── Hero Radar Data ─────────────────────────────────────────────────────────
const radarNodes = [
  { icon: FileText, title: 'EIP Documentation',   desc: 'Maintaining clear, accessible guidelines for EIP authors navigating the proposal process from Draft to Final.' },
  { icon: Search,   title: 'Technical Review',    desc: 'Connecting proposals with qualified reviewers to accelerate feedback and reduce bottlenecks in EIP progression.' },
  { icon: Mic,      title: 'Peep an EIP',          desc: 'Hosting deep-dive video interviews with EIP authors to explain complex proposals to the broader community.' },
  { icon: GitMerge, title: 'Governance Triage',   desc: 'Triaging EIPs across lifecycle stages and facilitating the path from Draft through Stagnant, Review, and Final.' },
];

// ─── What ECH Does Section ────────────────────────────────────────────────────
const programs = [
  {
    icon: FileText,
    title: 'EIP Process Documentation',
    desc: 'ECH Institute maintains the primary documentation infrastructure for the EIP lifecycle. We publish clear authoring guides, status definitions, and procedural references that help any community member understand and participate in Ethereum\'s technical governance.',
    points: [
      'EIP authoring guides and templates',
      'Status lifecycle documentation (Draft → Review → Final)',
      'EIPIP governance call notes and summaries',
    ],
  },
  {
    icon: Search,
    title: 'Technical Review Coordination',
    desc: 'Many EIPs stall in review due to lack of qualified feedback. ECH Institute connects proposal authors with core developers, security researchers, and domain experts — actively reducing friction and accelerating the proposal pipeline.',
    points: [
      'EIP-author matching with relevant technical reviewers',
      'Coordination with EIP Editors and Core Devs',
      'Structured feedback sessions through office hours',
    ],
  },
  {
    icon: Mic,
    title: 'Peep an EIP Podcast',
    desc: 'Our flagship "Peep an EIP" interview series brings EIP authors directly to the community. Authors explain their proposals in plain language, discuss motivation and trade-offs, and answer community questions — making governance transparent and accessible.',
    points: [
      'Video and audio interviews with EIP authors',
      'Available on YouTube, Spotify, and all podcast platforms',
      'Deep-dive episodes covering both core and ERCs',
    ],
    action: {
      label: 'Go to Peep an EIP',
      href: '/community/podcast/peepaneip'
    }
  },
];


// ─── Impact Stats ─────────────────────────────────────────────────────────────
const stats = [
  { value: '300+', label: 'EIPs Reviewed & Tracked' },
  { value: '150+', label: 'Peep an EIP Episodes' },
  { value: '50+',  label: 'Authors Supported' },
  { value: '5yrs', label: 'Of Governance Support' },
];

// ─── Key Resources ─────────────────────────────────────────────────────────────
const resources = [
  { icon: Layers,    title: 'EIPIP Governance Calls',  desc: 'Bi-weekly calls coordinating EIP process improvements.', href: 'https://github.com/ethereum/pm/issues?q=is%3Aissue+state%3Aopen+eipip' },
  { icon: BookOpen,  title: 'Ethereum Magicians',       desc: 'Primary forum for EIP discussion and community debate.', href: 'https://ethereum-magicians.org' },
  { icon: GitBranch, title: 'ethereum/EIPs Repository', desc: 'Official GitHub repository for all Ethereum Improvement Proposals.', href: 'https://github.com/ethereum/EIPs' },
  { icon: Mic,       title: 'Peep an EIP Archive',      desc: 'Full archive of ECH Institute author interview episodes.', href: 'https://www.youtube.com/@echinstitute' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function EipSupportPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-24 bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — copy */}
            <div className="flex flex-col gap-5">
              <div className="proplay-icon-container px-3 py-1 self-start gap-2">
                <Zap className="h-3 w-3" />
                Governance Program
              </div>
              <h1 className="global-hero-title">
                EIP <em style={{ fontStyle: 'normal', color: 'var(--color-yellow)' }}>Support</em>
              </h1>
              <p className="global-body-lg max-w-xl">
                ECH Institute strengthens the Ethereum Improvement Proposal process through structured coordination, technical reviews, and ecosystem-wide communication — ensuring proposals move from Draft to Final.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="https://github.com/ethereum/EIPs"
                  target="_blank"
                  className="btn btn-primary"
                >
                  <GitBranch className="h-4 w-4" />
                  View EIPs on GitHub
                </Link>
                <Link href={ROUTES.getInvolved} className="btn btn-outline">
                  <CheckCircle2 className="h-4 w-4" />
                  Contribute
                </Link>
              </div>
            </div>

            {/* Right — Radar Hero */}
            <HeroRadar spheres={radarNodes} />
          </div>
        </div>
      </section>

      {/* ── Impact Stats ──────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-14 md:px-8 border-b border-[var(--border-soft)] bg-[var(--surface-card-theme)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-1 py-4">
                <span className="text-4xl sm:text-5xl font-black" style={{ color: 'var(--color-yellow)', fontFamily: 'var(--font-family-page-heading)' }}>
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-soft)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What ECH Does ─────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)] mb-2">ECH Institute Programs</p>
            <h2 className="global-section-title">What ECH Does for <em>EIP Support</em></h2>
            <p className="global-body-lg mt-3 max-w-2xl">
              From documentation to podcast interviews, ECH Institute covers the full spectrum of EIP support — making Ethereum&apos;s governance process more accessible, efficient, and transparent for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <div key={i} className="global-card flex flex-col gap-5 group hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="proplay-icon-container h-12 w-12 flex-shrink-0 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="global-card-title text-lg mt-1">{program.title}</h3>
                  </div>
                  <p className="global-body text-sm leading-relaxed">{program.desc}</p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-[var(--border-soft)]">
                    {program.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[var(--text-soft)]">
                        <CheckCircle2 size={13} className="text-[var(--accent-brand)] mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {program.action && (
                    <Link href={program.action.href} className="btn btn-outline mt-auto w-full justify-center">
                      {program.action.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Resources ─────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)]">Resources & Links</p>
              <h2 className="global-section-title">Key <em>EIP Resources</em></h2>
              <p className="global-body-lg">
                Everything you need to participate in, track, or contribute to the EIP process — curated and maintained by ECH Institute.
              </p>
              <Link href={ROUTES.getInvolved} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-brand)] hover:gap-3 transition-all mt-2">
                Get Involved <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resources.map((res, i) => {
                const Icon = res.icon;
                return (
                  <Link key={i} href={res.href} target="_blank"
                    className="global-card group hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1 no-underline text-inherit">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="proplay-icon-container h-10 w-10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="global-card-title mb-0">{res.title}</h3>
                    </div>
                    <p className="global-body text-sm">{res.desc}</p>
                    <div className="flex items-center gap-1.5 text-xs font-bold mt-3 pt-3 border-t border-[var(--border-soft)] text-[var(--accent-brand)] group-hover:gap-2 transition-all">
                      Open Resource <ArrowRight size={12} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border-soft)] py-12 px-4 md:px-8 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="global-card border-[var(--border-yellow)] bg-gradient-to-br from-[var(--surface-card-theme)] to-[var(--surface-card-muted)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex items-start gap-5 flex-1">
                <span className="proplay-icon-container h-12 w-12 flex-shrink-0 shadow-lg shadow-[var(--accent-brand)]/20">
                  <Heart className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="global-card-title text-xl md:text-2xl">Have an EIP you&apos;re <em>working on?</em></h3>
                  <p className="global-body text-sm mt-2 max-w-md text-[var(--text-soft)]">
                    ECH Institute can help connect you with reviewers, document your process, and amplify your proposal to the broader Ethereum community.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="https://github.com/ethereum/pm/issues?q=is%3Aissue+state%3Aopen+office+hour"
                  target="_blank"
                  className="btn btn-primary"
                >
                  <Calendar className="h-4 w-4" />
                  Join Office Hours
                </Link>
                <Link
                  href="https://github.com/ethereum/pm/issues?q=is%3Aissue+state%3Aopen+eipip"
                  target="_blank"
                  className="btn btn-outline"
                >
                  <GitBranch className="h-4 w-4" />
                  EIPIP Governance
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-soft)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Office Hours',       href: 'https://github.com/ethereum/pm/issues?q=is%3Aissue+state%3Aopen+office+hour' },
                { label: 'EIPIP Governance',   href: 'https://github.com/ethereum/pm/issues?q=is%3Aissue+state%3Aopen+eipip' },
                { label: 'Discord Community',  href: 'https://dsc.gg/ech' },
                { label: 'Peep an EIP',        href: 'https://www.youtube.com/@echinstitute' },
              ].map((item, i) => (
                <Link key={i} href={item.href} target="_blank"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest no-underline transition-all group text-[var(--accent-brand)] hover:scale-105 origin-left">
                  <CheckCircle2 size={14} className="text-[var(--accent-brand)]" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
