'use client';

import {
  Users, Globe, Handshake, Network as NetworkIcon, MessageSquare,
  ArrowRight, GitBranch, CheckCircle2, Heart, Calendar,
  Building2, Radio, Layers
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';
import { HeroRadar } from '@/components/features/HeroRadar';

// ─── Hero Radar Data ─────────────────────────────────────────────────────────
const radarNodes = [
  { icon: Users,      title: 'DAO Alliances',        desc: 'Building formal relationships with developer DAOs and community-run collectives across the ecosystem.' },
  { icon: Globe,      title: 'Regional Hubs',         desc: 'Connecting with Ethereum community groups worldwide to amplify local voices in global governance.' },
  { icon: Handshake,  title: 'Protocol Partners',     desc: 'Coordinating with client teams and protocol contributors to align on shared upgrade timelines.' },
  { icon: NetworkIcon,    title: 'Cross-Org Bridges',     desc: 'Establishing communication channels between previously siloed organizations for unified advocacy.' },
];

// ─── What ECH Does Section ────────────────────────────────────────────────────
const programs = [
  {
    icon: MessageSquare,
    title: 'Community Dialogue Facilitation',
    desc: 'ECH Institute hosts structured dialogue sessions between developer communities, protocol contributors, and ecosystem stakeholders. These sessions surface consensus, prevent governance drift, and build mutual understanding across diverse groups.',
    points: [
      'Monthly cross-community calls with live documentation',
      'Structured agenda formats proven to reduce conflict',
      'Neutral facilitation by trained ECH coordinators',
    ],
  },
  {
    icon: Building2,
    title: 'Formal Partnership Onboarding',
    desc: 'We provide a structured onboarding program for communities that want to actively participate in Ethereum governance. Partner organizations receive orientation materials, direct access to ECH staff, and a seat at key coordination tables.',
    points: [
      'Governance orientation workshops for new partners',
      'Designated ECH liaison for each partner organization',
      'Access to shared working groups and governance calls',
    ],
  },
  {
    icon: Radio,
    title: 'Broadcast & Amplification',
    desc: 'ECH Institute maintains a wide publishing and media infrastructure. Partner communities benefit from amplification of their initiatives, proposal feedback rounds, and research outputs through ECH\'s blog, podcast, and social channels.',
    points: [
      'Publication on the ECH Blog and partner spotlights',
      'Podcast features on Peep an EIP and ECH Podcast',
      'Social amplification via X, Farcaster, and Discord',
    ],
    action: {
      label: 'Podcast Page',
      href: '/podcast'
    }
  },
];

// ─── Impact Stats ─────────────────────────────────────────────────────────────
const stats = [
  { value: '20+', label: 'Active Partner Organizations' },
  { value: '50+', label: 'Ecosystem Communities Reached' },
  { value: '100+', label: 'Coordination Calls Facilitated' },
  { value: '5+', label: 'Regional Hubs Connected' },
];

// ─── Partner Types ─────────────────────────────────────────────────────────────
const partnerTypes = [
  { icon: Layers,     title: 'Developer DAOs',          desc: 'Developer collectives and DAOs contributing to protocol tooling, testing, and governance research.' },
  { icon: Globe,      title: 'Regional Communities',    desc: 'Local Ethereum meetup groups and regional hubs in Asia, Africa, Europe, and the Americas.' },
  { icon: Building2,  title: 'Academic Institutions',   desc: 'Universities and research labs exploring Ethereum governance, economics, and protocol design.' },
  { icon: NetworkIcon,    title: 'Client Teams',            desc: 'Consensus and execution client developers who shape the technical direction of Ethereum.' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function CommunityPartnershipsPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-24 bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — copy */}
            <div className="flex flex-col gap-5">
              <div className="proplay-icon-container px-3 py-1 self-start gap-2">
                <Users className="h-3 w-3" />
                Community Focus
              </div>
              <h1 className="global-hero-title">
                Community <em style={{ fontStyle: 'normal', color: 'var(--color-yellow)' }}>Partnerships</em>
              </h1>
              <p className="global-body-lg max-w-xl">
                ECH Institute builds bridges between diverse ecosystem communities, developer DAOs, and Ethereum governance structures — ensuring broad representation and coordinated participation.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href={ROUTES.getInvolved} className="btn btn-primary">
                  <Handshake className="h-4 w-4" />
                  Partner With Us
                </Link>
                <Link
                  href="https://dsc.gg/ech"
                  target="_blank"
                  className="btn btn-outline"
                >
                  <MessageSquare className="h-4 w-4" />
                  Join Discord
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
            <h2 className="global-section-title">What ECH Does for <em>Community Partnerships</em></h2>
            <p className="global-body-lg mt-3 max-w-2xl">
              ECH Institute is the neutral connective tissue between Ethereum&apos;s many communities, providing structure, access, and amplification for groups that want to participate in governance.
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

      {/* ── Partner Types ─────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
            {/* Left — heading */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)]">Who We Work With</p>
              <h2 className="global-section-title">Types of <em>Partner Organizations</em></h2>
              <p className="global-body-lg">
                ECH Institute works with a diverse spectrum of organizations — from grassroots developer collectives to academic institutions — all united by their commitment to Ethereum&apos;s public-good future.
              </p>
              <Link
                href={ROUTES.getInvolved}
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-brand)] hover:gap-3 transition-all mt-2"
              >
                Become a Partner <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right — cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partnerTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <div key={i} className="global-card group hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="proplay-icon-container h-10 w-10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="global-card-title mb-0">{type.title}</h3>
                    </div>
                    <p className="global-body text-sm">{type.desc}</p>
                  </div>
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
                  <h3 className="global-card-title text-xl md:text-2xl">Ready to <em>Partner</em> with ECH?</h3>
                  <p className="global-body text-sm mt-2 max-w-md text-[var(--text-soft)]">
                    Whether you represent a developer DAO, a regional hub, or an academic institution — ECH Institute is here to connect you with the Ethereum governance ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link href={ROUTES.getInvolved} className="btn btn-primary">
                  <Handshake className="h-4 w-4" />
                  Partner With Us
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

            <div className="mt-8 pt-6 border-t border-[var(--border-soft)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Get Involved',     href: ROUTES.getInvolved },
                { label: 'EIP Support',      href: ROUTES.eipSupport },
                { label: 'Discord Community', href: 'https://dsc.gg/ech' },
                { label: 'GitHub Organization', href: 'https://github.com/echinstitute' },
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
