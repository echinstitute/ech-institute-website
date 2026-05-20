'use client';

import { useState } from "react";
import {
  MessageSquare, Users, Code, Shield,
  Github, ArrowRight, Zap, BookOpen, Globe,
  Calendar, GitBranch
} from "lucide-react";
import Link from "next/link";
import { HeroRadar } from "@/components/features/HeroRadar";

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
    title: "EthResearch",
    category: "Community",
    description: "The primary forum for technical Ethereum research, protocol discussions, and technical EIP conversations.",
    cta: "Explore Research",
    href: "http://ethresear.ch/",
    icon: MessageSquare,
    tone: "violet",
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
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — copy */}
            <div className="flex flex-col gap-5">
              <div className="proplay-icon-container px-3 py-1 self-start gap-2">
                <Zap className="h-3 w-3" />
                Open to Everyone
              </div>
              <h1 className="global-hero-title">
                Get Involved
              </h1>
              <p className="global-body-lg">
                ECH Institute exists because of people who care about Ethereum’s long-term health, accessibility, and sustainability. Whether you are a developer, researcher, educator, student, enterprise contributor, community member, or supporter of public goods there are many ways to participate.
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
            <HeroRadar spheres={ways} />
          </div>
        </div>
      </section>

      {/* ── Participation Actions + Quote — side by side ──────────────── */}
      <section className="py-10 px-4 md:py-14 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">

            {/* Left — Quote Banner */}
            <div className="flex flex-col justify-between">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-black mb-1">Direct Participation</p>
                <h2 className="global-section-title">How To Get <em>Involved</em></h2>
              </div>
              <div className="global-card border-[var(--border-yellow)] bg-gradient-to-br from-[var(--surface-card-theme)] to-[var(--surface-card-muted)] flex flex-col gap-4 flex-1">
                <div className="text-5xl font-black leading-none text-[var(--accent-brand)] opacity-40">&ldquo;</div>
                <blockquote className="text-lg sm:text-xl font-extrabold text-[var(--text-base)] leading-snug -mt-4">
                  “Ethereum becomes stronger when more people understand it, participate in it, and help steward it as a public good.”
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-brand)] mt-1">ECH Institute Mission</p>
                <div className="mt-auto pt-4 border-t border-[var(--accent-brand)]">
                  <p className="global-body text-sm text-[var(--text-soft)]">Start participating in Ethereum ecosystem today with these direct entry points curated by ECH Institute.</p>
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
                    <div className="flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="proplay-icon-container h-10 w-10 flex-shrink-0 relative overflow-hidden group-hover:border-[var(--accent-brand)] transition-all duration-500">
                          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="global-card-title mb-0 leading-tight">{action.title}</h3>
                      </div>
                      <p className="global-body text-sm flex-1">{action.desc}</p>
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                      <span className="tone-icon relative overflow-hidden flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:border-[var(--accent-brand)]">
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
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



    </main>
  );
}
