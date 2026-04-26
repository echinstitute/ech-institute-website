'use client';

import {
  Building2, BarChart3, Briefcase, Handshake, ArrowRight,
  CheckCircle2, Heart, Calendar, GitBranch, Shield,
  BookOpen, Globe
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';

// ─── Hero Radar Data ─────────────────────────────────────────────────────────
const radarNodes = [
  { icon: Building2,  title: 'Enterprise Briefings', desc: 'Clear translation of Ethereum technical roadmaps and governance decisions for corporate stakeholders and legal teams.' },
  { icon: BarChart3,  title: 'Impact Reports',       desc: 'Professional analyses detailing the implications of upcoming hard forks and EIPs on enterprise operations.' },
  { icon: Handshake,  title: 'Direct Dialogue',      desc: 'Facilitating constructive communication between Ethereum core developers and major institutional users.' },
  { icon: Briefcase,  title: 'Corporate Readiness',  desc: 'Briefings and materials establishing clear timelines for protocol upgrades so enterprises can plan ahead with confidence.' },
];

// ─── What ECH Does Section ────────────────────────────────────────────────────
const programs = [
  {
    icon: BarChart3,
    title: 'Institutional Impact Reports',
    desc: 'ECH Institute produces professionally written impact reports that translate complex Ethereum protocol changes into plain business language. These reports help institutions, legal teams, and enterprise operators understand what upcoming upgrades mean for their operations, timelines, and compliance postures.',
    points: [
      'Hard fork readiness reports for enterprise operators',
      'EIP impact summaries for legal and compliance teams',
      'Network upgrade briefings distributed to institutional stakeholders',
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Readiness Briefings',
    desc: 'As Ethereum\'s upgrade cadence accelerates, ECH Institute provides structured readiness briefings to help organizations stay prepared. These include timeline projections, technical summaries, and direct access to core developers who can answer enterprise-specific questions.',
    points: [
      'Upgrade timeline forecasts published well in advance',
      'One-on-one briefing sessions for enterprise teams',
      'FAQs and explainers tailored to non-technical stakeholders',
    ],
  },
  {
    icon: Handshake,
    title: 'Developer ↔ Enterprise Dialogue',
    desc: 'ECH Institute acts as a trusted, neutral intermediary between Ethereum\'s core developer community and large institutional users. We facilitate structured meetings, publish feedback summaries, and ensure enterprise concerns are heard — and addressed — in technical decision-making.',
    points: [
      'Quarterly dialogue sessions between institutions and core devs',
      'Published summaries of enterprise feedback on active EIPs',
      'Representation of institutional perspectives in EIPIP calls',
    ],
  },
];

// ─── Why Bridging Matters ─────────────────────────────────────────────────────
const pillars = [
  {
    icon: Shield,
    title: 'Neutral Ground',
    desc: 'As a nonprofit, ECH Institute has no commercial agenda. Enterprises can engage openly, knowing we represent the network\'s public-good interests rather than any single vendor or stakeholder.',
  },
  {
    icon: BookOpen,
    title: 'Protocol Expertise',
    desc: 'Our team is deeply embedded in Ethereum\'s core developer calls, EIP processes, and governance forums — giving us firsthand knowledge that we translate for institutional audiences.',
  },
  {
    icon: Globe,
    title: 'Ecosystem Access',
    desc: 'ECH Institute has trusted relationships across the ecosystem — from client teams to the Ethereum Foundation — enabling us to connect institutions with the right experts and decision-makers.',
  },
];

// ─── Impact Stats ─────────────────────────────────────────────────────────────
const stats = [
  { value: '10+', label: 'Institutional Reports Published' },
  { value: '30+', label: 'Enterprise Teams Briefed' },
  { value: '5+',  label: 'Years of Governance Presence' },
  { value: '100+', label: 'Core Dev Calls Documented' },
];

// ─── Use Cases ────────────────────────────────────────────────────────────────
const useCases = [
  { label: 'Compliance teams preparing for hard fork changes', icon: CheckCircle2 },
  { label: 'Legal departments reviewing EIP implications',     icon: CheckCircle2 },
  { label: 'Enterprises planning infrastructure upgrades',     icon: CheckCircle2 },
  { label: 'Institutions seeking direct developer dialogue',   icon: CheckCircle2 },
  { label: 'Custodians evaluating staking policy changes',     icon: CheckCircle2 },
  { label: 'Foundations understanding governance participation', icon: CheckCircle2 },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function InstitutionalBridgingPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-24 bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — copy */}
            <div className="flex flex-col gap-5">
              <div className="proplay-icon-container px-3 py-1 self-start gap-2">
                <Building2 className="h-3 w-3" />
                Institutional Focus
              </div>
              <h1 className="global-hero-title">
                Institutional <em style={{ fontStyle: 'normal', color: 'var(--color-yellow)' }}>Bridging</em>
              </h1>
              <p className="global-body-lg max-w-xl">
                ECH Institute equips enterprise stakeholders with the knowledge and context needed to understand Ethereum governance — translating complex protocol changes into clear, actionable intelligence.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href={ROUTES.getInvolved} className="btn btn-primary">
                  <Handshake className="h-4 w-4" />
                  Connect With Us
                </Link>
                <Link
                  href="https://github.com/ethereum/pm/issues?q=is%3Aissue+state%3Aopen+office+hour"
                  target="_blank"
                  className="btn btn-outline"
                >
                  <Calendar className="h-4 w-4" />
                  Join Office Hours
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
                          <p className="text-[11px] font-black uppercase tracking-widest text-[var(--accent-brand)] mb-1">Key Offering</p>
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
            <h2 className="global-section-title">What ECH Does for <em>Institutional Bridging</em></h2>
            <p className="global-body-lg mt-3 max-w-2xl">
              Ethereum governance can appear opaque to organizations accustomed to centralized planning. ECH Institute acts as a reliable informational bridge — providing clear translation of technical roadmaps and creating direct channels for institutional dialogue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why ECH is the Right Bridge ───────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)]">Why ECH Institute</p>
              <h2 className="global-section-title">Why ECH is the <em>Right Bridge</em></h2>
              <p className="global-body-lg">
                As a neutral nonprofit deeply embedded in Ethereum&apos;s governance ecosystem, ECH Institute is uniquely positioned to translate between the worlds of protocol development and institutional enterprise.
              </p>
              <Link href={ROUTES.getInvolved} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-brand)] hover:gap-3 transition-all mt-2">
                Connect With Us <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="global-card group hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col gap-3">
                      <div className="proplay-icon-container h-10 w-10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="global-card-title">{pillar.title}</h3>
                      <p className="global-body text-sm">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Benefits ──────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — use cases list */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)]">Who Benefits</p>
              <h2 className="global-section-title">Common <em>Use Cases</em></h2>
              <ul className="flex flex-col gap-3 mt-2">
                {useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-soft)]">
                    <CheckCircle2 size={15} className="text-[var(--accent-brand)] mt-0.5 flex-shrink-0" />
                    {uc.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — quote card */}
            <div className="global-card border-[var(--border-yellow)] bg-gradient-to-br from-[var(--surface-card-theme)] to-[var(--surface-card-muted)] flex flex-col gap-4">
              <div className="text-5xl font-black leading-none text-[var(--accent-brand)] opacity-40">&ldquo;</div>
              <blockquote className="text-lg sm:text-xl font-extrabold text-[var(--text-base)] leading-snug -mt-4">
                The decentralized nature of Ethereum governance can appear opaque to organizations accustomed to centralized planning.
                <br /><br />
                ECH Institute provides the translation layer that makes confident participation possible.
              </blockquote>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)] mt-1">ECH Institute Mission</p>
              <div className="mt-auto pt-4 border-t border-[var(--accent-brand)]">
                <p className="global-body text-sm text-[var(--text-soft)]">
                  Enterprise teams have successfully engaged with Ethereum governance through ECH Institute briefings, office hours, and developer dialogue programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border-soft)] py-12 px-4 md:px-8 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="global-card border-[var(--border-yellow)] bg-gradient-to-br from-[var(--surface-card-theme)] to-[var(--surface-card-muted)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex items-start gap-5">
                <span className="proplay-icon-container h-12 w-12 flex-shrink-0 shadow-lg shadow-[var(--accent-brand)]/20">
                  <Heart className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="global-card-title text-xl md:text-2xl">Is your organization <em>ready for Ethereum?</em></h3>
                  <p className="global-body text-sm mt-2 max-w-md text-[var(--text-soft)]">
                    Connect with ECH Institute today. We provide the briefings, dialogue, and readiness support your enterprise needs to confidently engage with Ethereum governance.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link href={ROUTES.getInvolved} className="btn btn-primary">
                  <Handshake className="h-4 w-4" />
                  Connect With Us
                </Link>
                <Link
                  href="https://github.com/ethereum/pm/issues?q=is%3Aissue+state%3Aopen+office+hour"
                  target="_blank"
                  className="btn btn-outline"
                >
                  <Calendar className="h-4 w-4" />
                  Join Office Hours
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-soft)] grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Get Involved',         href: ROUTES.getInvolved },
                { label: 'Community Partnerships', href: ROUTES.communityPartnerships },
                { label: 'EIP Support',           href: ROUTES.eipSupport },
                { label: 'Discord Community',     href: 'https://dsc.gg/ech' },
              ].map((item, i) => (
                <Link key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
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
