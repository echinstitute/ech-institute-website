'use client';

import {
  Building2, BarChart3, Briefcase, Handshake, ArrowRight,
  CheckCircle2, Heart, Calendar, GitBranch, Shield,
  BookOpen, Globe
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES, EXTERNAL_LINKS } from '@/config/routes';
import { HeroRadar } from '@/components/features/HeroRadar';

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
              <p className="global-body-lg">
                ECH Institute equips enterprise stakeholders with the knowledge and context needed to understand Ethereum governance — translating complex protocol changes into clear, actionable intelligence.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a href={EXTERNAL_LINKS.email} className="btn btn-primary">
                  <Handshake className="h-4 w-4" />
                  Connect With Us
                </a>
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
            <h2 className="global-section-title">What ECH Does for <em>Institutional Bridging</em></h2>
            <p className="global-body-lg mt-3">
              Ethereum governance can appear opaque to organizations accustomed to centralized planning. ECH Institute acts as a reliable informational bridge — providing clear translation of technical roadmaps and creating direct channels for institutional dialogue.
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
              <a href={EXTERNAL_LINKS.email} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-brand)] hover:gap-3 transition-all mt-2">
                Connect With Us <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

    </main>
  );
}
