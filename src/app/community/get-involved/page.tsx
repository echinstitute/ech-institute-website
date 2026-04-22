'use client';

import { useState } from "react";
import {
  MessageSquare, Users, Code, Shield,
  Heart, Github, ArrowRight, Zap, BookOpen, Globe,
  Calendar, GitBranch, CheckCircle2
} from "lucide-react";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { key: "all", label: "All" },
  { key: "Community", label: "Community" },
  { key: "Consensus Client", label: "Consensus" },
  { key: "Execution Client", label: "Execution" },
];

const communityLinks = [
  {
    title: "Ethereum Foundation",
    category: "Community",
    description: "The core organization behind Ethereum's development and ecosystem grants. Join to help shape the future of open-source web3 infrastructure.",
    cta: "Get Involved",
    href: "https://ethereum.org/en/community/get-involved/#ethereum-jobs/",
    icon: Users,
    tone: "info",
  },
  {
    title: "Ethereum Magicians",
    category: "Community",
    description: "The primary forum for technical EIP discussions. Any community member can participate in governance proposals and technical conversations.",
    cta: "Join Forum",
    href: "https://ethereum-magicians.org/faq",
    icon: BookOpen,
    tone: "violet",
  },
  {
    title: "EthSearch",
    category: "Community",
    description: "A comprehensive community search engine focused on indexing Ethereum technical research, EIPs, and historical meeting notes.",
    cta: "Start Searching",
    href: "https://ethsearch.org/",
    icon: Globe,
    tone: "success",
  },
  {
    title: "Ethereum Testing Suite",
    category: "Community",
    description: "Open-source tools critical to validating Ethereum client behavior. Contribute to testing infrastructure that keeps the network secure.",
    cta: "View Issues",
    href: "https://github.com/ethereum/eth-tester/issues",
    icon: Code,
    tone: "success",
  },
  {
    title: "Lighthouse",
    category: "Consensus Client",
    description: "A high-performance Rust-based consensus layer client by Sigma Prime. One of the most widely deployed clients on the Ethereum network.",
    cta: "Contribute",
    href: "https://lighthouse.sigmaprime.io/",
    icon: Shield,
    tone: "info",
  },
  {
    title: "Lodestar",
    category: "Consensus Client",
    description: "A TypeScript consensus client by ChainSafe. Excellent for JavaScript developers entering Ethereum protocol development.",
    cta: "Contribute",
    href: "https://lodestar.chainsafe.io/",
    icon: Shield,
    tone: "violet",
  },
  {
    title: "Nimbus",
    category: "Consensus Client",
    description: "A lightweight Nim-based client by Status. Designed to run on resource-constrained devices, including mobile and embedded systems.",
    cta: "Contribute",
    href: "https://nimbus.team/",
    icon: Shield,
    tone: "success",
  },
  {
    title: "Prysm",
    category: "Consensus Client",
    description: "A Go-based consensus client by Prysmatic Labs. One of the most utilized clients on the Ethereum beacon chain since the Merge.",
    cta: "Contribute",
    href: "https://docs.prylabs.network/docs/getting-started",
    icon: Shield,
    tone: "info",
  },
  {
    title: "Teku",
    category: "Consensus Client",
    description: "A Java-based enterprise-grade consensus client by ConsenSys. Built for reliability, security, and institutional-grade deployments.",
    cta: "Contribute",
    href: "https://consensys.io/teku",
    icon: Shield,
    tone: "violet",
  },
  {
    title: "Besu",
    category: "Execution Client",
    description: "An enterprise-focused Java execution client under the Hyperledger umbrella. Supports both public and private Ethereum networks.",
    cta: "Contribute",
    href: "https://www.hyperledger.org/projects/besu",
    icon: Code,
    tone: "success",
  },
  {
    title: "Erigon",
    category: "Execution Client",
    description: "A Go-based execution client optimized for sync speed and disk efficiency. Designed for archival nodes and infrastructure-heavy use cases.",
    cta: "Contribute",
    href: "https://erigon.tech/",
    icon: Code,
    tone: "info",
  },
  {
    title: "Go Ethereum (Geth)",
    category: "Execution Client",
    description: "The most widely used Ethereum execution client, written in Go. The reference implementation powering the majority of Ethereum nodes.",
    cta: "Contribute",
    href: "https://geth.ethereum.org/docs/developers/geth-developer/contributing",
    icon: Code,
    tone: "violet",
  },
  {
    title: "Nethermind",
    category: "Execution Client",
    description: "A high-performance .NET execution client focused on speed and developer tooling. Popular among enterprises and staking operators.",
    cta: "Contribute",
    href: "https://www.nethermind.io/",
    icon: Code,
    tone: "success",
  },
  {
    title: "Reth",
    category: "Execution Client",
    description: "A high-performance, modular Ethereum execution client written in Rust, focused on performance and developer modularity.",
    cta: "Contribute",
    href: "https://reth.rs/",
    icon: Code,
    tone: "info",
  },
  {
    title: "Nimbus",
    category: "Execution Client",
    description: "A lightweight, secure execution client designed for resource-constrained devices, part of the Nimbus client suite.",
    cta: "Contribute",
    href: "https://nimbus.team/",
    icon: Code,
    tone: "success",
  },
];

const ways = [
  { icon: GitBranch, title: "Consensus Tracking", desc: "Monitor and document technical consensus across All Core Devs workstreams." },
  { icon: Zap, title: "Governance Triage", desc: "Help triage EIPs and facilitate the path from Draft to Final state." },
  { icon: Shield, title: "Institutional Support", desc: "Assist in organizational bridging between legacy systems and Ethereum." },
  { icon: BookOpen, title: "Technical Scribing", desc: "Provide high-fidelity documentation for critical meeting decisions." },
];

// Direct participation actions with the correct links
const participationActions = [
  {
    icon: Calendar,
    title: "Join Office Hours",
    desc: "Attend open ECH Institute office hours — connect directly with EIP editors and core devs in a live coordination call. Open to everyone.",
    href: "https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20office%20hour",
    cta: "View Schedule",
    highlight: true,
  },
  {
    icon: GitBranch,
    title: "Participate in Governance",
    desc: "Engage with active EIPIP governance discussions on GitHub. Follow EIP process calls, raise concerns, or support proposals you believe in.",
    href: "https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20eipip",
    cta: "View Discussions",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "Join our Discord",
    desc: "Real-time community conversations about Ethereum governance, ECH Institute programs, and ecosystem news.",
    href: "https://dsc.gg/ech",
    cta: "Open Discord",
    highlight: false,
  },
  {
    icon: Github,
    title: "Contribute on GitHub",
    desc: "Explore open issues, contribute to documentation, or help triage and shepherd EIPs in the ethereum/EIPs repository.",
    href: "https://github.com/echinstitute",
    cta: "ECH on GitHub",
    highlight: false,
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function GetInvolvedPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? communityLinks
    : communityLinks.filter((l) => l.category === activeCategory);

  return (
    <main className="min-h-screen pt-16 lg:pt-24 bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — copy */}
            <div className="flex flex-col gap-5">
              <div className="proplay-icon-container px-3 py-1 self-start">
                <Zap className="h-3 w-3" />
                Open to Everyone
              </div>
              <h1 className="global-hero-title">
                Get Involved
              </h1>
              <p className="global-body-lg max-w-xl">
                ECH Institute is trusted across the Ethereum ecosystem because we are neutral and nonprofit, deeply embedded in protocol processes, and focused on long-term public-good outcomes.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="https://dsc.gg/ech"
                  target="_blank"
                  className="btn btn-primary"
                >
                  <MessageSquare className="h-4 w-4" />
                  Join Discord
                </Link>
                <Link
                  href="https://github.com/echinstitute"
                  target="_blank"
                  className="btn btn-outline"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </div>
            </div>

            {/* Right — ways to contribute mini-grid */}
            {/* Right — Interactive Role Proximity (Radar Style) */}
            <div className="relative h-[400px] w-full flex items-center justify-center group/radar">
              {/* Radar Background Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[180px] h-[180px] border border-[var(--border-soft)] rounded-full opacity-20 animate-[ping_4s_linear_infinite]" />
                <div className="absolute w-[300px] h-[300px] border border-[var(--border-soft)] rounded-full opacity-10 animate-[ping_6s_linear_infinite]" />
                {/* Crosshairs */}
                <div className="absolute w-full h-[1px] bg-[var(--border-soft)] opacity-10" />
                <div className="absolute h-full w-[1px] bg-[var(--border-soft)] opacity-10" />
              </div>

              {/* Central Radar Core (No Glow) */}
              <div className="absolute z-10 h-3 w-3 rounded-full bg-[var(--border-soft)] opacity-20" />

              {/* The 4 Role Spheres */}
              <div className="absolute inset-0">
                {ways.map(({ icon: Icon, title, desc }, index) => {
                  // Position roles in a diamond / circular pattern
                  const positions = [
                    "top-[10%] left-1/2 -translate-x-1/2", // 01 - Top
                    "right-[10%] top-1/2 -translate-y-1/2", // 02 - Right
                    "bottom-[10%] left-1/2 -translate-x-1/2", // 03 - Bottom
                    "left-[10%] top-1/2 -translate-y-1/2", // 04 - Left
                  ];

                  // Tooltips point INWARD towards the center of the radar to avoid clipping
                  const tooltipPos = [
                    "top-full mt-4 left-1/2 -translate-x-1/2 group-hover/sphere:translate-y-0 -translate-y-4", // Top sphere points down
                    "right-full mr-4 top-1/2 -translate-y-1/2 group-hover/sphere:translate-x-0 translate-x-4", // Right sphere points left
                    "bottom-full mb-4 left-1/2 -translate-x-1/2 group-hover/sphere:translate-y-0 translate-y-4", // Bottom sphere points up
                    "left-full ml-4 top-1/2 -translate-y-1/2 group-hover/sphere:translate-x-0 -translate-x-4", // Left sphere points right
                  ];

                  const arrowPos = [
                    "absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--surface-card-theme)] border-t border-l border-[var(--accent-brand)] rotate-45", // Top sphere arrow points up
                    "absolute top-1/2 -right-2 w-4 h-4 bg-[var(--surface-card-theme)] border-t border-r border-[var(--accent-brand)] rotate-45 -translate-y-1/2", // Right sphere arrow points right
                    "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--surface-card-theme)] border-b border-r border-[var(--accent-brand)] rotate-45", // Bottom sphere arrow points down
                    "absolute top-1/2 -left-2 w-4 h-4 bg-[var(--surface-card-theme)] border-l border-b border-[var(--accent-brand)] rotate-45 -translate-y-1/2", // Left sphere arrow points left
                  ];

                  return (
                    <div
                      key={title}
                      className={`absolute ${positions[index]} group/sphere z-20`}
                    >
                      {/* Floating Sphere */}
                      <div className="relative flex flex-col items-center">
                        <div className="proplay-icon-container h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-[var(--border-soft)] bg-[var(--surface-card-theme)] shadow-2xl group-hover/sphere:border-[var(--accent-brand)] group-hover/sphere:scale-110 transition-all duration-500 cursor-pointer relative z-10">
                          <Icon className="h-8 w-8 md:h-10 md:w-10 group-hover/sphere:text-[var(--accent-brand)] transition-colors" />
                          
                          {/* Radial Scanning Effect */}
                          <div className="absolute inset-0 rounded-full border border-[var(--accent-brand)] opacity-0 group-hover/sphere:opacity-100 group-hover/sphere:animate-ping pointer-events-none" />
                        </div>

                        {/* Title - Floating Badge */}
                        <div className="mt-3 px-3 py-1 rounded-full border border-[var(--border-soft)] bg-[var(--surface-card-theme)] opacity-80 group-hover/sphere:opacity-100 transition-opacity">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-brand)]">0{index + 1} {title}</span>
                        </div>

                        {/* Description - Revealed on Hover */}
                        <div className={`absolute ${tooltipPos[index]} w-48 pointer-events-none opacity-0 group-hover/sphere:opacity-100 bg-[var(--surface-card-theme)] border border-[var(--accent-brand)] p-4 rounded-xl shadow-2xl transition-all duration-300 z-50`}>
                          <div className={arrowPos[index]} />
                          <p className="text-[11px] font-black uppercase tracking-widest text-[var(--accent-brand)] mb-1">Impact Layer</p>
                          <p className="text-[12px] text-[var(--text-base)] font-medium leading-[1.4] relative z-10">{desc}</p>
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

      {/* ── Participation Actions + Quote — side by side ──────────────── */}
      <section className="py-10 px-4 md:py-14 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">

            {/* Left — Quote Banner */}
            <div className="flex flex-col justify-between h-full">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-black mb-1">Direct Participation</p>
                <h2 className="global-section-title">How To Get <em>Involved</em></h2>
              </div>
              <div className="global-card border-[var(--border-yellow)] bg-gradient-to-br from-[var(--surface-card-theme)] to-[var(--surface-card-muted)] flex flex-col gap-4 flex-1">
                <div className="text-5xl font-black leading-none text-[var(--accent-brand)] opacity-40">&ldquo;</div>
                <blockquote className="text-lg sm:text-xl font-extrabold text-[var(--text-base)] leading-snug -mt-4">
                  ECH is not just an organization.
                  <br />
                  It is the home, school, and gathering place for Ethereum governance.
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)] mt-1">ECH Institute Mission</p>
                <div className="mt-auto pt-4 border-t border-[var(--accent-brand)]">
                  <p className="global-body text-sm text-[var(--text-soft)]">Start participating in Ethereum governance today with these direct entry points curated by ECH Institute.</p>
                </div>
              </div>
            </div>

            {/* Right — 2×2 uniform card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {participationActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={i}
                    href={action.href}
                    target="_blank"
                    className="global-card flex flex-col gap-4 no-underline text-inherit bg-[var(--surface-card-theme)] border-[var(--border-soft)] hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <div className="proplay-icon-container h-11 w-11 flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="global-card-title mb-1">{action.title}</h3>
                      <p className="global-body text-sm">{action.desc}</p>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-sm font-bold pt-3 border-t border-black group-hover:gap-2 transition-all text-brand-yellow"
                    >
                      {action.cta} <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Community Grid ────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-14 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-brand)] mb-2">Ecosystem</p>
              <h2 className="global-section-title">The Ethereum <em>Community</em></h2>
              <p className="global-body-lg mt-1">Opportunities for every background and skill-set.</p>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={[
                    "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 transition-all duration-200",
                    activeCategory === key
                      ? "border-[var(--accent-brand)] bg-[var(--accent-brand)] text-[var(--theme-on-accent)] shadow-lg shadow-[var(--accent-brand)]/20"
                      : "border-[var(--border-soft)] bg-[var(--surface-card-theme)] text-[var(--text-soft)] hover:border-[var(--accent-brand)] hover:text-[var(--accent-brand)]",
                  ].join(" ")}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={i}
                    href={link.href}
                    target="_blank"
                    data-tone={link.tone}
                    className="group relative flex flex-col rounded-xl border border-[var(--border-soft)] bg-[var(--surface-card-theme)] overflow-hidden no-underline text-inherit hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Colored top accent bar */}
                  <div className="tone-accent-bar h-1 w-full transition-all duration-300 group-hover:h-1.5" />

                  <div className="flex flex-col flex-1 gap-4 p-6">
                    {/* Icon row */}
                    <div className="flex items-center justify-between">
                      <span className="tone-icon flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="tone-badge text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-[var(--border-soft)] bg-[var(--surface-card-muted)]">
                        {link.category.replace(" Client", "")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-lg text-[var(--text-base)] leading-snug group-hover:text-[var(--accent-brand)] transition-colors">
                      {link.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-soft)] leading-relaxed flex-1">
                      {link.description}
                    </p>

                    {/* CTA row */}
                    <div className="tone-link flex items-center gap-2 pt-4 border-t border-[var(--border-soft)] text-xs font-black uppercase tracking-widest transition-all duration-200 group-hover:gap-3 group-hover:text-[var(--accent-brand)]">
                      {link.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-black py-16">No projects in this category.</p>
          )}
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] py-12 px-4 md:px-8 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="global-card border-[var(--border-yellow)] bg-gradient-to-br from-[var(--surface-card-theme)] to-[var(--surface-card-muted)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex items-start gap-5">
                <span className="proplay-icon-container h-12 w-12 flex-shrink-0 shadow-lg shadow-[var(--accent-brand)]/20">
                  <Heart className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="global-card-title text-xl md:text-2xl">Ready to shape the <em>future?</em></h3>
                  <p className="global-body text-sm mt-2 max-w-md text-[var(--text-soft)]">
                    Every contribution, no matter how small, helps strengthen the Ethereum ecosystem. Join the ECH Institute community today.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20office%20hour"
                  target="_blank"
                  className="btn btn-primary-white"
                >
                  <Calendar className="h-4 w-4" />
                  Join Office Hours
                </Link>
                <Link
                  href="https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20eipip"
                  target="_blank"
                  className="btn btn-outline"
                >
                  <GitBranch className="h-4 w-4" />
                  Participate in Governance
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-soft)] grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Office Hours', href: 'https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20office%20hour' },
                { label: 'EIPIP Governance', href: 'https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20eipip' },
                { label: 'Discord Community', href: 'https://dsc.gg/ech' },
                { label: 'GitHub Organization', href: 'https://github.com/echinstitute' },
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
