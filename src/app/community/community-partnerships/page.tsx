'use client';

import {
  Users, Globe, Handshake, Network as NetworkIcon, MessageSquare,
  ArrowRight, GitBranch, CheckCircle2, Heart, Calendar,
  Building2, Radio, Layers, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';
import { HeroRadar } from '@/components/features/HeroRadar';
import { useTheme } from '@/providers/ThemeProvider';

// ─── Hero Radar Data ─────────────────────────────────────────────────────────
const radarNodes = [
  { icon: Users, title: 'DAO Alliances', desc: 'Building formal relationships with developer DAOs and community-run collectives across the ecosystem.' },
  { icon: Globe, title: 'Regional Hubs', desc: 'Connecting with Ethereum community groups worldwide to amplify local voices in global governance.' },
  { icon: Handshake, title: 'Protocol Partners', desc: 'Coordinating with client teams and protocol contributors to align on shared upgrade timelines.' },
  { icon: NetworkIcon, title: 'Cross-Org Bridges', desc: 'Establishing communication channels between previously siloed organizations for unified advocacy.' },
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


// ─── Partner Types ─────────────────────────────────────────────────────────────
const partnerTypes = [
  { icon: Layers, title: 'Developer DAOs', desc: 'Developer collectives and DAOs contributing to protocol tooling, testing, and governance research.' },
  { icon: Globe, title: 'Regional Communities', desc: 'Local Ethereum meetup groups and regional hubs in Asia, Africa, Europe, and the Americas.' },
  { icon: Building2, title: 'Academic Institutions', desc: 'Universities and research labs exploring Ethereum governance, economics, and protocol design.' },
  { icon: NetworkIcon, title: 'Client Teams', desc: 'Consensus and execution client developers who shape the technical direction of Ethereum.' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function CommunityPartnershipsPage() {
  const { isDark } = useTheme();
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
              <p className="global-body-lg">
                ECH Institute builds bridges between diverse ecosystem communities, developer DAOs, and Ethereum governance structures — ensuring broad representation and coordinated participation.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/#contact" className="btn btn-primary">
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

      {/* ── Partners / Supported By ── */}
      <section className="py-14 md:py-20 border-b border-[var(--border-soft)] relative overflow-hidden bg-[var(--background)]">

        {/* subtle decorative radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-brand, #f59e0b)14, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* ── Section Header ── */}
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)] mb-3">Backed By The Best</p>
            <h2 className="global-section-title mb-4">
              Our <em>Trusted Partners</em> &amp; Supporters
            </h2>
            <p className="global-body-lg max-w-2xl mx-auto">
              ECH Institute is proud to be supported by leading organisations across the Ethereum ecosystem — from protocol research bodies to regional developer communities.
            </p>
          </div>

          {/* ── Partner Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'ef',
                name: 'Ethereum Foundation',
                src: '/assets/Supported by logo//ethereum-foundation-logo.svg',
                desc: 'The non-profit organisation at the heart of Ethereum — funding protocol research, client development, and ecosystem public goods to keep Ethereum open, secure, and decentralised.',
                relation: 'Protocol Research & R&D Support',
                href: 'https://ethereum.org',
                logoH: '200px',
              },
              {
                id: 'gitcoin',
                name: 'Gitcoin',
                src: '/assets/Supported by logo//gitcoin.svg',
                desc: 'Gitcoin enables communities to fund their shared needs through Quadratic Funding grants, empowering open-source developers and public goods builders across the web3 ecosystem.',
                relation: 'Public Goods Funding & Grants',
                href: 'https://gitcoin.co',
              },
              {
                id: 'eipsinsight',
                name: 'EIPs Insight',
                src: '/assets/Supported by logo//EIPsInsights.gif',
                desc: 'EIPs Insight is a data-driven analytics platform tracking the lifecycle of Ethereum Improvement Proposals — offering transparency and visibility into governance activity across all EIP categories.',
                relation: 'EIP Analytics & Data Tracking',
                href: 'https://eipsinsight.com/',
                invertLight: true,
                logoH: '76px',
              },
              {
                id: 'optimism',
                name: 'Optimism',
                src: '/assets/Supported by logo//Optimism-logo.png',
                desc: 'Optimism is an EVM-equivalent L2 scaling solution committed to funding public goods through its Retroactive Public Goods Funding (RetroPGF) programme, rewarding impactful contributors.',
                relation: 'Retroactive Public Goods Funding',
                href: 'https://optimism.io',
              },
              {
                id: 'ethpune',
                name: 'ETH Pune',
                src: '/assets/Supported by logo//ETH Pune.png',
                desc: 'ETH Pune is a thriving regional Ethereum community in India, organising developer workshops, hackathons, and grassroots onboarding events to grow the local web3 ecosystem.',
                relation: 'Regional Developer Onboarding & Community',
                href: 'https://www.ethpune.com/',
                invertLight: true,
                logoH: '200px',
              },
              {
                id: 'octant',
                name: 'Octant',
                src: '/assets/Supported by logo//octant-logo.svg',
                desc: 'Octant, built by Golem Foundation, allocates staking rewards from locked ETH to public goods projects chosen by the community — creating a sustainable, participatory funding model.',
                relation: 'Public Goods Staking Rewards',
                href: 'https://octant.app',
              },
              {
                id: 'magicians',
                name: 'Ethereum Magicians',
                src: '/assets/Supported by logo//ethereum magicians logo.png',
                desc: 'Ethereum Magicians is the long-standing community forum where EIP authors, client developers, and researchers debate, iterate, and build consensus around protocol-level changes.',
                relation: 'Governance Forum & Community Discussion',
                href: 'https://ethereum-magicians.org',
                logoH: '200px',
              },
              {
                id: 'ethcluj',
                name: 'EthCluj',
                src: '/assets/Supported by logo//EthCluj-logo.png',
                desc: 'EthCluj is Romania\'s leading Ethereum community, hosting developer education events, meetups, and conferences to foster local blockchain talent and regional ecosystem growth.',
                relation: 'Regional Developer Education & Events',
                href: 'https://ethcluj.ro',
                logoH: '75px',
              },
              {
                id: 'edcon',
                name: 'EDCON',
                src: '/assets/Supported by logo//EDCON-logo.png',
                desc: 'EDCON (Community Ethereum Development Conference) is a global developer conference series bringing together builders, researchers, and enthusiasts to share knowledge and onboard the next wave of Ethereum contributors.',
                relation: 'Global Developer Conference & Onboarding',
                href: 'https://edcon.io',
              },
              {
                id: 'eea',
                name: 'Enterprise Ethereum Alliance',
                src: '/assets/Supported by logo//enterpriseethereumalliance_logo.png',
                desc: 'The EEA is the world\'s largest open-source blockchain initiative, connecting enterprises with Ethereum experts to drive interoperability standards and accelerate business adoption.',
                relation: 'Enterprise Standards & Integration',
                href: 'https://entethalliance.org',
                invertLight: true,
                logoH: '75px',
              },

            ].map((p) => (
              <div
                key={p.id}
                className="group flex flex-col gap-0 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-card-theme)] hover:border-[var(--accent-brand)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Logo banner — per-logo sizing, always contain */}
                <div className="flex items-center justify-center h-28 border-b border-[var(--border-soft)] bg-[var(--surface-card-muted,var(--surface-card-theme))] px-4 py-3">
                  <img
                    src={p.src}
                    alt={p.name}
                    className="transition-transform duration-300 group-hover:scale-105"
                    style={{
                      height: (p as any).logoH ?? '35px',
                      width: (p as any).logoW ?? 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: (p as any).invertLight && !isDark ? 'invert(1)' : 'none',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  {/* Name + relation badge */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-syne font-bold text-base text-[var(--text-primary)] leading-tight">
                      {p.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--accent-brand)]/40 text-[var(--accent-brand)] bg-[var(--accent-brand)]/8">
                      {p.relation}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[var(--text-soft)] leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  {/* Visit link */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent-brand)] mt-1 hover:gap-2.5 transition-all duration-200 group/link"
                  >
                    Visit Website
                    <ExternalLink size={11} className="shrink-0 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
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
            <p className="global-body-lg mt-3">
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



      {/* ── CTA Banner ────────────────────────────────────────────────────────── */}
      {/* <section className="border-t border-[var(--border-soft)] py-12 px-4 md:px-8 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="global-card border-[var(--border-yellow)] bg-gradient-to-br from-[var(--surface-card-theme)] to-[var(--surface-card-muted)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex items-start gap-5 flex-1">
                <span className="proplay-icon-container h-12 w-12 flex-shrink-0 shadow-lg shadow-[var(--accent-brand)]/20">
                  <Heart className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="global-card-title text-xl md:text-2xl">Ready to <em>Partner</em> with ECH?</h3>
                  <p className="global-body text-sm mt-2 text-[var(--text-soft)]">
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
      </section> */}

    </main>
  );
}
