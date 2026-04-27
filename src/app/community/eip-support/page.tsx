'use client';

import {
  FileText, Search, Mic, ArrowRight, CheckCircle2, Heart,
  Calendar, GitBranch, Zap, BookOpen, GitMerge, Layers
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';

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

// ─── EIP Process Stages ───────────────────────────────────────────────────────
const stages = [
  { num: '01', label: 'Idea',      desc: 'Authors discuss proposals in Ethereum Magicians before submitting a formal EIP.' },
  { num: '02', label: 'Draft',     desc: 'A formal EIP PR is opened in the ethereum/EIPs repository and enters draft state.' },
  { num: '03', label: 'Review',    desc: 'ECH facilitates technical review by connecting authors with qualified domain experts.' },
  { num: '04', label: 'Last Call', desc: 'Final community review period before a proposal is considered for Final status.' },
  { num: '05', label: 'Final',     desc: 'The EIP is accepted and normative — implementations are expected.' },
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
            <div className="relative h-[400px] w-full flex items-center justify-center group/radar">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute w-[180px] h-[180px] border border-[var(--border-soft)] rounded-full opacity-20 animate-[ping_4s_linear_infinite]" />
                <div className="absolute w-[300px] h-[300px] border border-[var(--border-soft)] rounded-full opacity-10 animate-[ping_6s_linear_infinite]" />
                <div className="absolute w-full h-[1px] bg-[var(--border-soft)] opacity-10" />
                <div className="absolute h-full w-[1px] bg-[var(--border-soft)] opacity-10" />
              </div>
              <div className="absolute z-10 h-3 w-3 rounded-full bg-[var(--border-soft)] opacity-20" />
              <div className="absolute inset-0">
                {radarNodes.map(({ icon: Icon, title, desc }, index) => {
                  const positions = [
                    'top-[10%] left-1/2 -translate-x-1/2',
                    'right-[10%] top-1/2 -translate-y-1/2',
                    'bottom-[10%] left-1/2 -translate-x-1/2',
                    'left-[10%] top-1/2 -translate-y-1/2',
                  ];
                  const isRightSide = index === 1;
                  return (
                    <div key={title} className={`absolute ${positions[index]} group/sphere z-20 hover:z-50`}>
                      <div className="relative flex flex-col items-center">
                        <div className="proplay-icon-container h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-[var(--border-soft)] bg-[var(--surface-card-theme)] shadow-2xl group-hover/sphere:border-[var(--accent-brand)] group-hover/sphere:scale-110 transition-all duration-500 cursor-pointer">
                          <Icon className="h-8 w-8 md:h-10 md:w-10 text-white group-hover/sphere:text-[var(--accent-brand)] transition-colors" />
                          <div className="absolute inset-0 rounded-full border border-[var(--accent-brand)] opacity-0 group-hover/sphere:opacity-100 group-hover/sphere:animate-ping pointer-events-none" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full border border-[var(--border-soft)] bg-[var(--surface-card-theme)] opacity-80 group-hover/sphere:opacity-100 transition-opacity">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">0{index + 1} {title}</span>
                        </div>
                        <div className={`absolute top-1/2 ${isRightSide ? 'right-full mr-4 sm:mr-6 translate-x-4' : 'left-full ml-4 sm:ml-6 -translate-x-4'} w-48 sm:w-56 pointer-events-none opacity-0 group-hover/sphere:opacity-100 bg-[var(--surface-card-theme)] border border-[var(--accent-brand)] p-4 rounded-xl shadow-2xl transition-all duration-300 group-hover/sphere:translate-x-0 z-[100] -translate-y-1/2`}>
                          <div className={`absolute top-1/2 ${isRightSide ? '-right-2 border-r border-t' : '-left-2 border-l border-b'} w-4 h-4 bg-[var(--surface-card-theme)] border-[var(--accent-brand)] rotate-45 -translate-y-1/2`} />
                          <p className="text-[11px] font-black uppercase tracking-widest text-[var(--accent-brand)] mb-1">Program Area</p>
                          <p className="text-[12px] text-[var(--text-base)] font-medium leading-[1.4]">{desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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

      {/* ── EIP Process Lifecycle ─────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)] mb-2">Process Overview</p>
            <h2 className="global-section-title">The EIP <em>Lifecycle</em></h2>
            <p className="global-body-lg mt-3 max-w-2xl">
              ECH Institute supports proposals at every stage of the EIP process — from early ideation to final acceptance and implementation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-4 lg:gap-0 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-[var(--border-soft)] z-0" style={{ top: '2.5rem', left: '4rem', right: '4rem' }} />
            {stages.map((stage, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center gap-3 relative z-10 p-4">
                <div className="proplay-icon-container h-16 w-16 rounded-full border-2 border-[var(--border-soft)] bg-[var(--background)] shadow-sm flex-shrink-0">
                  <span className="text-lg font-black text-white">{stage.num}</span>
                </div>
                <h4 className="font-black text-sm uppercase tracking-widest text-[var(--text-base)]">{stage.label}</h4>
                <p className="global-body text-xs leading-relaxed">{stage.desc}</p>
              </div>
            ))}
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
